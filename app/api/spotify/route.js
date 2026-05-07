const basic = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString('base64')

async function getAccessToken() {
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN,
    }),
  })
  return res.json()
}

function formatTrack(track) {
  return {
    title: track.name,
    artist: track.artists.map((a) => a.name).join(', '),
    album: track.album.name,
    albumArt: track.album.images[0]?.url ?? null,
    songUrl: track.external_urls.spotify,
  }
}

export async function GET() {
  const { access_token } = await getAccessToken()

  const nowRes = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: { Authorization: `Bearer ${access_token}` },
  })

  if (nowRes.status === 200) {
    const data = await nowRes.json()
    if (data?.is_playing && data.item) {
      return Response.json({ isPlaying: true, ...formatTrack(data.item) })
    }
  }

  const recentRes = await fetch(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    { headers: { Authorization: `Bearer ${access_token}` } }
  )
  const recentData = await recentRes.json()
  const track = recentData.items?.[0]?.track

  if (!track) return Response.json({ isPlaying: false, title: null })

  return Response.json({ isPlaying: false, ...formatTrack(track) })
}
