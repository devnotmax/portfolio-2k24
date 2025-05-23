"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

function AvatarModel() {
  const { scene } = useGLTF("/Avatar.glb");

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={1}>
      <primitive object={scene} />
    </group>
  );
}

export default function Avatar3D() {
  return (
    <div
      style={{
        width: "1080px",
        height: "440px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden", // necesario para que border-radius funcione y recorte el canvas
      }}
    >
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        style={{ width: "100%", height: "100%", borderRadius: "20px" }} // Aplicamos border-radius también al canvas
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel />
          <Environment files="/studio.exr" background />
        </Suspense>
        <OrbitControls enableZoom={true} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
