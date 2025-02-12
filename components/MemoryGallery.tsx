"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Modal from "./Modal"

const memories = [
  { id: 1, src: "/Moviedate.webp?height=350&width=350", alt: "Movie Date", caption: "Movie Date"},
  { id: 2, src: "/Ourfirstdate.jpeg?height=400&width=300", alt: "Our first date", caption: "Our first date" },
  { id: 3, src: "/Beachvacation.webp?height=350&width=350", alt: "Beach vacation", caption: "Beach vacation" },
  { id: 4, src: "/Cookingtogether.jpeg?height=400&width=300", alt: "Cooking together", caption: "Cooking together" },
  { id: 5, src: "/Stargazingnight.jpg?height=300&width=400", alt: "Stargazing night", caption: "Stargazing night" },
  { id: 6, src: "/First concert.jpg?height=350&width=350", alt: "First concert", caption: "First concert" },
 
]

const MemoryGallery: React.FC = () => {
  const [selectedMemory, setSelectedMemory] = useState<(typeof memories)[0] | null>(null)

  return (
    <section className="py-16 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-pink-600 mb-8">Our Sweet Memories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {memories.map((memory) => (
            <motion.div
              key={memory.id}
              className="bg-white p-4 rounded-lg shadow-lg transform rotate-1 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedMemory(memory)}
            >
              <div className="relative h-64 mb-4">
                <Image
                  src={memory.src || "/placeholder.svg"}
                  alt={memory.alt}
                  fill
                  className="rounded-md object-cover"
                />
              </div>
              <p className="text-center text-gray-700 font-handwriting text-lg">{memory.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        src={selectedMemory?.src || ""}
        alt={selectedMemory?.alt || ""}
        caption={selectedMemory?.caption || ""}
      />
    </section>
  )
}

export default MemoryGallery

