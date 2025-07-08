// "use client";

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

interface ComputersProps {
  isMobile: boolean;
}

const Computers: React.FC<ComputersProps> = ({ isMobile }) => {
  const computer = useGLTF("./abstractGlobe/scene.gltf");

  return (
    <mesh>
      <pointLight position={[10, 10, -5]} intensity={1000} color="white" />
      <pointLight position={[0, -10, 5]} intensity={1000} color="blue" />
      <pointLight position={[0, 10, 5]} intensity={1000} color="white" />
      <pointLight position={[0, 10, 5]} intensity={1000} color="blue" />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.2}
        position={isMobile ? [0, -2, -0.5] : [0, 0, -0.5]}
      
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const Threemodel: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    const mediaQuery = window.matchMedia("(max-width: 1000px)");
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: isMobile ? [25, 0, 25] : [20, 3, 5], fov: 20 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} autoRotate autoRotateSpeed={1.5} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default Threemodel;
