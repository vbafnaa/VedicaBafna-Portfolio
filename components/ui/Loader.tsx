"use client";

import { Html, useProgress } from "@react-three/drei";

const CanvasLoader = () => {
  const { progress } = useProgress();
  return (
    <Html
      as='div'
      center
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <span className='canvas-loader'></span>
      <p
        style={{
          fontSize: 14,
          color: "white",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
      <div className="white">
      {progress.toFixed(2)}%
      </div>
        
      </p>
    </Html>
  );
};

export default CanvasLoader;
