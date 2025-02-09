"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { FaMusic, FaVolumeMute } from "react-icons/fa"
import Chatbot from "./Chatbot"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (!audioRef.current) return
    if (isMusicPlaying) {
      audioRef.current.play().catch((err) => console.error("Music play error:", err))
    } else {
      audioRef.current.pause()
    }
  }, [isMusicPlaying])

  return (
    <div className="relative">
      {children}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/background-music.mp3" loop />

      {/* Music Toggle Button */}
      <button 
        onClick={() => setIsMusicPlaying(!isMusicPlaying)} 
        className="fixed bottom-4 left-4 bg-white p-3 rounded-full shadow-lg"
      >
        {isMusicPlaying ? <FaVolumeMute size={24} /> : <FaMusic size={24} />}
      </button>

      <Chatbot />
    </div>
  )
}

