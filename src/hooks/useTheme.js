// ==========================================
// CUSTOM HOOK - useTheme.js
// Hook untuk manajemen dark/light mode
// ==========================================
import { useState, useEffect } from 'react';

const useTheme = () => {
  // Ambil tema dari localStorage atau gunakan 'dark' sebagai default
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    // Apply tema ke element <html> dan <body>
    const root = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      body.classList.add('dark');
    } else {
      root.classList.remove('dark');
      body.classList.remove('dark');
    }
    
    // Simpan preferensi ke localStorage
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Fungsi toggle tema
  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return { theme, toggleTheme };
};

export default useTheme;
