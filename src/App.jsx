// ==========================================
// APP.jsx - Root Component
// Komponen utama yang mengatur routing
// dan state global (tema)
// ==========================================
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout dan Pages
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoadingScreen from './components/LoadingScreen';
import useTheme from './hooks/useTheme';

const App = () => {
  // State loading screen
  const [isLoading, setIsLoading] = useState(true);
  
  // Custom hook untuk dark/light mode
  const { theme, toggleTheme } = useTheme();

  // Simulasi loading awal (2 detik)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {/* Loading Screen */}
      <LoadingScreen isLoading={isLoading} />

      {/* Main App (hanya muncul setelah loading selesai) */}
      {!isLoading && (
        <MainLayout theme={theme} toggleTheme={toggleTheme}>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* Tambahkan route lain di sini jika diperlukan */}
            </Routes>
          </AnimatePresence>
        </MainLayout>
      )}
    </BrowserRouter>
  );
};

export default App;
