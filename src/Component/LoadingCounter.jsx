import React, { useEffect, useRef, useState } from "react";


export default function LoadingCounter({ children, duration = 1000 }) {
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(1, elapsed / duration);
      
      const p = Math.max(1, Math.round(progress * 100));
      setPercent(p);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setPercent(100);
        
        setTimeout(() => setVisible(false), 250);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [duration]);

  return (
    <div className="min-h-screen relative">
     
      <div className={`${visible ? "pointer-events-none opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        {children}
      </div>

      
      <div
        aria-hidden
        className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-700 ease-out ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="text-center transform transition-transform duration-700 ease-out" style={{ transform: visible ? "scale(1)" : "scale(0.98)" }}>
          
          <div className="text-6xl sm:text-xl font-extrabold tracking-tight mb-2">
            {percent}%
          </div>

          
          <div className="text-sm sm:text-base text-gray-600">
            {visible ? "Processing — Please Wait..." : "Opened 🔓"}
          </div>
        </div>
      </div>
    </div>
  );
}
