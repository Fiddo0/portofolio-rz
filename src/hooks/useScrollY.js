// ==========================================
// CUSTOM HOOK - useScrollY.js
// Hook untuk tracking posisi scroll
// ==========================================
import { useState, useEffect } from 'react';

const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollY;
};

export default useScrollY;
