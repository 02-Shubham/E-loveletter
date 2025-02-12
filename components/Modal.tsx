"use client"

import type React from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { motion, AnimatePresence } from "framer-motion"

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  src: string
  alt: string
  caption: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, src, alt, caption }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="sm:max-w-[700px] bg-white">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-pink-600">{caption}</DialogTitle>
            </DialogHeader>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-[400px] mb-4">
                <Image src={src || "/placeholder.svg"} alt={alt} fill className="rounded-lg object-cover" />
              </div>
              <DialogDescription className="text-center text-gray-700 font-handwriting text-xl">
                {caption}
              </DialogDescription>
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default Modal

