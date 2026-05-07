/**
 * Run once to get a Spotify refresh token.
 * Usage: node scripts/get-spotify-token.mjs
 * Reads SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET from .env
 */
import http from 'http'
import { readFileSync, writeFileSync } from 'fs'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { exec } from 'child_process'

const __dirname = dirname(fileURLToPath(import.meta.url))
const envPath = resolve(__dirname, '../.env')

const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l.includes('='))
    .map(l => l.split('=').map(s => s.trim()))
)

const CLIENT_ID = env.SPOTIFY_CLIENT_ID
const CLIENT_SECRET = env.SPOTIFY_CLIENT_SECRET
const PORT = 8888
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`
const SCOPES = 'user-read-currently-playing user-read-recently-played'
const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')

const authUrl =
  `https://accounts.spotify.com/authorize?` +
  new URLSearchParams({
    response_type: 'code',
    client_id: CLIENT_ID,
    scope: SCOPES,
    redirect_uri: REDIRECT_URI,
  })

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`)
  if (url.pathname !== '/callback') return

  const code = url.searchParams.get('code')
  if (!code) {
    res.end('No code found.')
    server.close()
    return
  }

  const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basic}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: REDIRECT_URI,
    }),
  })

  const data = await tokenRes.json()

  if (data.refresh_token) {
    const current = readFileSync(envPath, 'utf8')
    const updated = current.replace(/SPOTIFY_REFRESH_TOKEN=.*/, `SPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)
    writeFileSync(envPath, updated, 'utf8')
    res.end(`Refresh token: ${data.refresh_token}`)
    console.log(`\nSPOTIFY_REFRESH_TOKEN=${data.refresh_token}`)
  } else {
    res.end('Something went wrong: ' + JSON.stringify(data))
    console.error(data)
  }

  server.close()
})

server.listen(PORT, () => {
  console.log(`\nOpening Spotify authorization in your browser...`)
  exec(`open "${authUrl}"`)
})
