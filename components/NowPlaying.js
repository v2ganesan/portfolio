'use client'
import { useEffect, useState } from 'react'

function SpotifyIcon() {
  return (
    <svg viewBox="0 0 24 24" width="13" height="13" fill="#1DB954" aria-label="Spotify">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

export default function NowPlaying() {
  const [data, setData] = useState(null)

  useEffect(() => {
    async function fetch_() {
      try {
        const res = await fetch('/api/spotify')
        const json = await res.json()
        setData(json?.title ? json : null)
      } catch {
        setData(null)
      }
    }
    fetch_()
    const id = setInterval(fetch_, 30_000)
    return () => clearInterval(id)
  }, [])

  if (!data) return null

  return (
    <a
      href={data.songUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="w-[500px] mx-auto mt-3 flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-[#333] bg-white dark:bg-[#171717] shadow-md hover:border-[#865312]/40 transition-colors no-underline"
    >
      {data.albumArt && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={data.albumArt}
          alt={data.album}
          width={40}
          height={40}
          className="rounded-md flex-shrink-0 object-cover"
        />
      )}
      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 truncate">
          {data.title}
        </p>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 truncate">{data.artist}</p>
      </div>
      <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
        {data.isPlaying ? (
          <span className="text-[10px] text-[#1DB954] font-medium flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1DB954] animate-pulse" />
            now playing
          </span>
        ) : (
          <span className="text-[10px] text-gray-400 dark:text-gray-500">last played</span>
        )}
        <SpotifyIcon />
      </div>
    </a>
  )
}
