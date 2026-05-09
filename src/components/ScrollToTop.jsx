// ==========================================
// COMPONENT - ScrollToTop.jsx
// Tombol scroll ke atas yang muncul saat scroll
// ==========================================
import { motion, AnimatePresence } from 'framer-motion';
import { FiArrowUp } from 'react-icons/fi';
import useScrollY from '../hooks/useScrollY';

const ScrollToTop = () => {
  const scrollY = useScrollY();

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {scrollY > 400 && (
        <motion.button
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="scroll-top-btn"
          aria-label="Scroll to top"
        >
          <FiArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
