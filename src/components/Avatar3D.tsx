"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";
import { Suspense, useState, useEffect } from "react";

function AvatarModel() {
  const { scene } = useGLTF("/Avatar.glb");

  return (
    <group rotation={[0, 0, 0]} position={[0, 0, 0]} scale={1}>
      <primitive object={scene} />
    </group>
  );
}

function useIsMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

export default function Avatar3D() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return (
      <div
        style={{
          width: "1080px",
          height: "440px",
          margin: "0 auto",
          borderRadius: "20px",
          backgroundColor: "#1a1a1a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-white">Cargando modelo 3D...</div>
      </div>
    );
  }

  return (
    <div
      style={{
        width: "1080px",
        height: "440px",
        margin: "0 auto",
        borderRadius: "20px",
        overflow: "hidden",
      }}
    >
      <Canvas
        camera={{ position: [5, 5, 5], fov: 45 }}
        style={{ width: "100%", height: "100%", borderRadius: "20px" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AvatarModel />
          <Environment files="/studio.hdr" background />
        </Suspense>
        <OrbitControls enableZoom={true} target={[0, 0, 0]} />
      </Canvas>
    </div>
  );
}
