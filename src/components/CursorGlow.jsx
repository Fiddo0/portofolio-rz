// ==========================================
// COMPONENT - CursorGlow.jsx
// Custom cursor dengan efek glow
// ==========================================
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [outerPos, setOuterPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Hanya tampilkan cursor custom di desktop
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      // Outer cursor dengan delay menggunakan requestAnimationFrame
      setTimeout(() => {
        setOuterPos({ x: e.clientX, y: e.clientY });
      }, 80);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="cursor-glow"
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      {/* Outer ring */}
      <motion.div
        className="cursor-glow-outer"
        animate={{ x: outerPos.x - 20, y: outerPos.y - 20 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.8 }}
        style={{ opacity: isVisible ? 0.5 : 0 }}
      />
    </>
  );
};

export default CursorGlow;
