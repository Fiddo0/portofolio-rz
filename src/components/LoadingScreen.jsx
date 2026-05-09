// ==========================================
// COMPONENT - LoadingScreen.jsx
// Animasi loading saat pertama buka website
// ==========================================
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Logo animasi */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'backOut' }}
            className="relative"
          >
            <div className="text-5xl font-bold gradient-text font-display">RZ</div>
            {/* Ring animasi */}
            <motion.div
              className="absolute inset-[-16px] rounded-full border border-silver-300/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />
            <motion.div
              className="absolute inset-[-30px] rounded-full border border-silver-300/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="w-48 h-[2px] bg-dark-100 rounded-full overflow-hidden mt-8"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-silver-300 to-silver-400"
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-silver-400 text-sm mt-4 tracking-widest uppercase"
          >
            Loading...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
