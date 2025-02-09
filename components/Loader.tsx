"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const loadingMessages = [
  "Initializing Love...",
  "Setting up Hugs and Kisses...",
  "Wrapping Surprises...",
  "Almost There... 💖",
]

export default function Loader() {
  const [messageIndex, setMessageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setMessageIndex((prevIndex) => (prevIndex + 1) % loadingMessages.length)
    }, 1500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-pink-500 mb-8"
        >
          Love is Loading... ❤️
        </motion.div>
        <motion.div
          key={messageIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="text-2xl text-white"
        >
          {loadingMessages[messageIndex]}
        </motion.div>
        {/* <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="text-6xl mt-8"
        >
          ❤️
        </motion.div> */}
      </div>
    </div>
  )
}

