"use client";

import { useEffect, useRef, useState } from "react";
import WalkingBo from "../../public/images/WalkingBo2.gif";

const GIF_WIDTH = 150;

export default function WalkingGif() {
  const [direction, setDirection] = useState<1 | -1>(1);
  const [position, setPosition] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    setPosition(-1);
    const animate = () => {
      setPosition(prev => {
        const max = 350;
        let next = prev + direction * 0.5;
        if (next > max) { setDirection(-1); next = max; }
        else if (next < 0) { setDirection(1); next = 0; }
        return next;
      });
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [direction]);

  return (
    <div style={{ width: 350, height: 80, position: "absolute", top: 110, left: "27%", transform: "translateX(-110%)" }}>
      <img
        src={WalkingBo.src}
        alt="Walking Bo"
        style={{
          position: "absolute",
          left: position,
          bottom: 0,
          width: GIF_WIDTH,
          height: "auto",
          zIndex: 2,
          transition: "transform 0.2s",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}