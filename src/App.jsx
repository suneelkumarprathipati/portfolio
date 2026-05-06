import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import * as THREE from "three";

{/* 🔥 NAVBAR */}
<div className="fixed top-0 w-full h-16 flex justify-center items-center group z-50">
  <div className="opacity-0 group-hover:opacity-100 transition backdrop-blur-md bg-white/5 px-6 py-2 rounded-full border border-white/10">
    {["Home","About","Projects","Resume","Blogs"].map((sec) => (
      <button
        key={sec}
        onClick={() => setActive(sec)}
        className="mx-4"
      >
        <span className="hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition">
          {sec}
        </span>
      </button>
    ))}
  </div>
</div>

// 🔥 Neon Grid Floor
function GridFloor() {
  return (
    <gridHelper
      args={[50, 50, "#3b82f6", "#3b82f6"]}
      position={[0, -2, 0]}
    />
  );
}

// 🔥 Floating Objects
function Scene() {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#3b82f6" />
      <pointLight position={[-5, -5, -5]} intensity={2} color="#a855f7" />

      {/* Fog for depth */}
      <fog attach="fog" args={["#000000", 5, 20]} />

      {/* Grid */}
      <GridFloor />

      {/* Floating Sphere */}
      <Float speed={2} rotationIntensity={2} floatIntensity={2}>
        <mesh position={[0, 1, 0]}>
          <sphereGeometry args={[1.2, 32, 32]} />
          <meshStandardMaterial
            color="#ff3c00"
            emissive="#5d00ff"
            emissiveIntensity={1}
          />
        </mesh>
      </Float>

      {/* Floating Cube */}
      <Float speed={3} rotationIntensity={3} floatIntensity={3}>
        <mesh position={[3, 0, -2]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial
            color="#430083"
            emissive="#fa06a5"
            emissiveIntensity={1}
          />
        </mesh>
      </Float>

      {/* Controls */}
      <OrbitControls enableZoom={false} />
    </>
  );
}

export default function App() {
  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">

      {/* 🔥 3D Scene */}
      <Canvas camera={{ position: [0, 2, 8], fov: 60 }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>

      {/* 🔥 UI Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center pointer-events-none">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold bg-gradient-to-r from-red-400 to-purple-500 bg-clip-text text-transparent"
        >
          Suneel Kumar Prathipati
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-xl text-gray-300"
        >
          Full Stack Developer • AI Engineer • Problem Solver
        </motion.p>

      </div>
    </div>
  );
}

{active === "Contact" && (
  <div className="flex flex-col items-center">
    <h2 className="text-4xl">Contact</h2>

    <a href="mailto:suneelkumarprathipati006@gmail.com">
      Email Me
    </a>

    <a href="https://github.com/suneelkumarprathipati">
      GitHub
    </a>
  </div>
)}