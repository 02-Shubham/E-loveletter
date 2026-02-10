"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const loveLetter = `My Dearest,

From the moment our paths crossed, my life has been filled with an indescribable joy. Your smile brightens my darkest days, and your laughter is the sweetest melody to my ears.

Every day with you is an adventure, a beautiful journey that I never want to end. You are my confidant, my best friend, and my soulmate. Your love gives me strength, and your presence gives me peace.

I promise to stand by your side through thick and thin, to love you unconditionally,but i really don't why i am making this website i hope i would win and to cherish every moment we share. You are the missing piece of my heart, and I am grateful for your love every single day.

I love you more than words can express, and I look forward to creating a lifetime of beautiful memories with you.

Forever yours,
Shubham `

export default function LoveLetter() {
  const [visibleText, setVisibleText] = useState("")
  const [showHeart, setShowHeart] = useState(false)

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      setVisibleText(loveLetter.slice(0, i))
      i++
      if (i > loveLetter.length) {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-red-50 min-h-screen flex flex-col items-center justify-center p-8">
      <h2 className="text-3xl font-bold mb-8">A Message From My Heart 💌</h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full"
      >
        <pre className="whitespace-pre-wrap text-lg">{visibleText}</pre>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 bg-red-500 text-white px-6 py-3 rounded-full text-lg font-bold"
        onClick={() => setShowHeart(true)}
      >
        Click to Reveal a Surprise
      </motion.button>
      {showHeart && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          onClick={() => setShowHeart(false)}
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="text-6xl text-center"
          >
            ❤️<br></br>
            vishal Chutyia hai 
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

