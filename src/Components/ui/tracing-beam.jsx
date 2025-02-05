"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export const TracingBeam = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        style={{
          position: 'fixed',
          left: '40px',
          top: '0',
          width: '3px',
          height: '100vh',
          background: 'linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.4) 10%, rgba(147, 51, 234, 0.7) 50%, rgba(126, 34, 206, 0.4) 90%, transparent)',
          transformOrigin: 'top',
          scaleY,
          zIndex: 50,
          pointerEvents: 'none',
          filter: 'blur(1px)',
          boxShadow: '0 0 20px rgba(147, 51, 234, 0.5), 0 0 30px rgba(147, 51, 234, 0.3), 0 0 40px rgba(147, 51, 234, 0.1)'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: 'fixed',
          left: '41.5px',
          top: `${scrollYProgress * 100}vh`,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'rgb(168, 85, 247)',
          zIndex: 50,
          pointerEvents: 'none',
          filter: 'blur(0.5px)',
          boxShadow: '0 0 20px 4px rgba(168, 85, 247, 0.8), 0 0 30px 6px rgba(168, 85, 247, 0.6), 0 0 40px 8px rgba(168, 85, 247, 0.4)'
        }}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 0.3 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: 'fixed',
          left: '38px',
          top: `${scrollYProgress * 100}vh`,
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.2) 0%, transparent 70%)',
          zIndex: 49,
          pointerEvents: 'none',
          filter: 'blur(1px)'
        }}
      />
      <div className="ml-[60px] pt-4">
        {children}
      </div>
    </div>
  );
};
