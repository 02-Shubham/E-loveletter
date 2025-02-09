"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FaHeart, FaPaperPlane } from "react-icons/fa"

const flirtyResponses = [
  "You must be a magician, because every time I look at you, everyone else disappears!",
  "Are you a camera? Because every time I look at you, I smile!",
  "Do you have a map? I keep getting lost in your eyes.",
  "Is your name Google? Because you've got everything I've been searching for.",
  "Are you a time traveler? Because I see you in my future!",
  "If being sexy was a crime, you'd be guilty as charged!",
  "I'm not a photographer, but I can picture us together.",
  "Are you a bank loan? Because you've got my interest!",
  "Do you believe in love at first sight, or should I walk by again?",
  "I'm no mathematician, but I'm pretty good with numbers. Give me yours and watch what I can do with it.",
]

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputValue.trim()) {
      setMessages([...messages, { text: inputValue, isUser: true }])
      setInputValue("")
      setTimeout(() => {
        const botReply = flirtyResponses[Math.floor(Math.random() * flirtyResponses.length)]
        setMessages((prev) => [...prev, { text: botReply, isUser: false }])
      }, 1000)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-red-500 text-white p-4 rounded-full shadow-lg hover:bg-red-600 transition-colors"
      >
        <FaHeart size={24} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden"
          >
            <div className="bg-red-500 text-white p-4">
              <h3 className="text-lg font-bold">Flirty Chatbot</h3>
            </div>
            <div className="h-96 overflow-y-auto p-4">
              {messages.map((message, index) => (
                <div key={index} className={`mb-4 ${message.isUser ? "text-right" : "text-left"}`}>
                  <span
                    className={`inline-block p-2 rounded-lg ${
                      message.isUser ? "bg-red-500 text-white" : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    {message.text}
                  </span>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-4 border-t">
              <div className="flex">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-grow p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                <button
                  type="submit"
                  className="bg-red-500 text-white p-2 rounded-r-lg hover:bg-red-600 transition-colors"
                >
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

