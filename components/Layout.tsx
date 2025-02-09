"use client"

import { useState, useEffect, useRef, ReactNode } from "react"
import { FaMusic, FaVolumeMute } from "react-icons/fa"
import Chatbot from "./Chatbot"
import { motion } from "framer-motion"

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
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-red-500 text-3xl"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
        >
          ❤️
        </motion.div>
      ))}
      {children}

      {/* Hidden Audio Element */}
      <audio ref={audioRef} src="/background.mp3" loop />

      {/* Music Toggle Button */}
      <button 
        onClick={() => setIsMusicPlaying(!isMusicPlaying)} 
        className="fixed bottom-4 left-4 bg-white p-3 rounded-full shadow-lg"
      >
        {/* {isMusicPlaying ? <FaVolumeMute size={24} /> : <FaMusic size={24} />} */}
        {isMusicPlaying ? <h1><FaVolumeMute size={16}/>OFF</h1> : <h1><FaMusic size={16}/> ON</h1>}
      </button>

      <Chatbot />
    </div>
  )
}

