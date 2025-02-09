
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MeshDistortMaterial, Sphere } from "@react-three/drei";

function BeatingHeart() {
  const heartRef = useRef();
  const [scale, setScale] = useState(1);

  useFrame(({ clock }) => {
    const beat = 1 + 0.1 * Math.sin(clock.getElapsedTime() * 3);
    setScale(beat);
  });
}

export default function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative">

{[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-20 text-red-500 text-3xl"
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
      {/* <Canvas>
        <BeatingHeart />
      </Canvas> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-36 text-4xl font-semibold text-red-300"
      >
        "That's my heart, beats for you ❤"
      </motion.div>
      <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.8, 1],
          }}
          transition={{
            duration: 1,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          className="text-8xl mt-2 "
        >
          ❤️
        </motion.div>
      
    </div>
  );
}

