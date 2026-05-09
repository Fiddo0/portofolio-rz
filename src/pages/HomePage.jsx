// ==========================================
// PAGE - HomePage.jsx
// Halaman utama yang berisi semua section
// ==========================================
import { motion, AnimatePresence } from 'framer-motion';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

// Animasi transisi halaman
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1, 
    transition: { duration: 0.5, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0, 
    transition: { duration: 0.3 }
  }
};

const HomePage = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* Semua section portfolio */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
