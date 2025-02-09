// "use client"

// import { Canvas, useFrame } from "@react-three/fiber";
// import { useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { Sphere, Stars } from "@react-three/drei";

// const messages = [
//   "You light up my life like a star! ✨",
//   "You are my universe. 🌌",
//   "Every moment with you is magical. 💖",
//   "You're the star I wished upon! 🌠",
//   "Forever and always, my love. 💫"
// ];

// function TwinklingStar({ setMessage }) {
//   const starRef = useRef();
//   const [hovered, setHovered] = useState(false);

//   useFrame(() => {
//     if (starRef.current) {
//       starRef.current.rotation.y += 0.005;
//       starRef.current.scale.setScalar(hovered ? 1.2 : 1);
//     }
//   });

//   return (
//     <Sphere
//       ref={starRef}
//       args={[1, 32, 32]}
//       position={[0, 0, -5]}
//       onPointerOver={() => {
//         setHovered(true);
//         setMessage(messages[Math.floor(Math.random() * messages.length)]);
//       }}
//       onPointerOut={() => {
//         setHovered(false);
//         setMessage("");
//       }}
//     >
//       {/* <meshStandardMaterial
//         color="yellow"
//         emissive="yellow"
//         emissiveIntensity={hovered ? 2 : 1}
//       /> */}
//     </Sphere>
//   );
// }

// export default function StarryConfession() {
//   const [message, setMessage] = useState("");

//   return (
//     <div className="h-screen w-full relative bg-black">
//       <Canvas>
//         <Stars radius={100} depth={50} count={500} factor={4} fade speed={2} />
//         <TwinklingStar setMessage={setMessage} />
//       </Canvas>
//       {message && (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//           className="absolute inset-0 flex items-center justify-center text-white text-2xl bg-black bg-opacity-50 p-4 rounded-lg"
//         >
//           {message}
//         </motion.div>
//       )}
//     </div>
//   );
// }
