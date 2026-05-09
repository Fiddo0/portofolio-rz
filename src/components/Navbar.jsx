// ==========================================
// COMPONENT - Navbar.jsx
// Navigasi fixed di atas dengan blur effect
// ==========================================
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { navLinks, personalInfo } from '../data/portfolioData';
import useScrollY from '../hooks/useScrollY';

const Navbar = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);  // State menu mobile
  const [activeSection, setActiveSection] = useState('home');
  const scrollY = useScrollY();

  // Deteksi section aktif berdasarkan scroll position
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll ke section
  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Navbar transparan di atas, blur saat scroll
  const navStyle = scrollY > 50
    ? 'backdrop-blur-xl bg-white/80 dark:bg-dark-300/80 shadow-lg border-b border-silver-200/20'
    : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navStyle}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('#home')}
            className="cursor-pointer"
          >
            <span className="text-2xl font-bold gradient-text font-display">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </span>
            <span className="ml-2 text-sm font-medium text-silver-400 hidden sm:inline">
              {personalInfo.title}
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-dark-200 dark:bg-silver-100 text-white dark:text-dark-200 shadow-lg'
                      : 'text-dark-100/70 dark:text-silver-400 hover:text-dark-200 dark:hover:text-silver-100'
                  }`}
                >
                  {link.label}
                </motion.button>
              );
            })}
          </div>

          {/* Right Side: Theme Toggle + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Dark/Light Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-silver-400 hover:text-silver-300 border border-silver-300/20"
              aria-label="Toggle theme"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={theme}
                  initial={{ rotate: -180, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 180, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>

            {/* Hamburger Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center text-dark-100 dark:text-silver-400 border border-silver-300/20"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <FiX size={18} /> : <FiMenu size={18} />}
                </motion.div>
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden backdrop-blur-xl bg-white/95 dark:bg-dark-200/95 border-t border-silver-200/10"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-left px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    activeSection === link.href.replace('#', '')
                      ? 'bg-dark-200 dark:bg-silver-100 text-white dark:text-dark-200'
                      : 'text-dark-100 dark:text-silver-300 hover:bg-dark-100/5 dark:hover:bg-silver-100/5'
                  }`}
                >
                  {link.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
