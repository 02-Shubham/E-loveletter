"use client"

import { useState, useEffect } from "react"
import Loader from "@/components/Loader"
import ParallaxHero from "@/components/ParallaxHero"
import ValentineWeek from "@/components/ValentineWeek"
import LoveLetter from "@/components/LoveLetter"
import Layout from "@/components/Layout"
import ValentineParallax from "@/components/Valentinequiz"
import About from "@/components/About"
import FlamesGame from "@/components/FlamesGame"
import { motion } from "framer-motion"
import MemoryGallery from "@/components/MemoryGallery"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 6000) // Adjust the time as needed

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loader />
  }

  return (
    <Layout>
      <ParallaxHero />
      <About/>
      <ValentineWeek />
      <LoveLetter />
      <ValentineParallax/>
      <FlamesGame/>
      <MemoryGallery />
    </Layout>
  )
}

