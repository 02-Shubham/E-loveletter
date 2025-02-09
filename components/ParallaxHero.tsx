// "use client"

// import { useRef } from "react"
// import { motion, useScroll, useTransform } from "framer-motion"

// const ParallaxSection = ({ text, bgImage }) => {
//   const ref = useRef(null)
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   })

//   const y = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

//   return (
//     <div ref={ref} className="h-screen relative overflow-hidden">
//       <motion.div
//         style={{
//           y,
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//         className="absolute inset-0"
//       />
//       <div className="absolute inset-0 flex items-center justify-center">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="text-4xl text-white text-center p-8 bg-black bg-opacity-50 rounded-lg"
//         >
//           {text}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default function ParallaxHero() {
//   return (
//     <div>
//       <ParallaxSection text="It all started when I met you…" bgImage="/rose day.jpg?height=1080&width=1920" />
//       <ParallaxSection text="Every moment with you is special." bgImage="/placeholder.svg?height=1080&width=1920" />
//       <ParallaxSection text="You are the best part of my life." bgImage="/placeholder.svg?height=1080&width=1920" />
//     </div>
//   )
// }



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

  // return (
  //   <Sphere ref={heartRef} args={[1, 64, 64]} scale={scale}>
  //     <MeshDistortMaterial color="red" distort={0.3} speed={2} emissive="red" emissiveIntensity={0.6} />
  //   </Sphere>
  // );
}

export default function HeroSection() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-black text-white relative">
      {/* <Canvas>
        <BeatingHeart />
      </Canvas> */}
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-20 text-3xl font-semibold text-red-400"
      >
        "That's my heart, beats for you ❤"
      </motion.div>
    </div>
  );
}
