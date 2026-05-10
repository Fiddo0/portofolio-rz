// ==========================================
// COMPONENT - Hero.jsx
// Section pertama dengan foto dan animasi
// ==========================================
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';

// Teks yang akan diketik secara animasi
const typingTexts = [
  'Grapic Designer',
  'Front-end Developer',
  'Data Analyst Enthusiast',
  'Problem Solver',
];

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // ---- Animasi Typing Effect ----
  useEffect(() => {
    const targetText = typingTexts[textIndex];
    let timer;

    if (!isDeleting && currentText === targetText) {
      // Tunggu sebelum menghapus
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      // Pindah ke teks berikutnya
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % typingTexts.length);
    } else {
      // Ketik atau hapus karakter
      const speed = isDeleting ? 50 : 100;
      timer = setTimeout(() => {
        setCurrentText(prev =>
          isDeleting
            ? targetText.slice(0, prev.length - 1)
            : targetText.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex]);

  // Smooth scroll ke about section
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Variants untuk animasi masuk (Framer Motion)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden"
    >
      {/* ---- Background ---- */}
      <div className="absolute inset-0">
        {/* Gradient mesh background */}
        <div className="absolute inset-0 bg-gradient-to-br from-silver-100 via-white to-silver-200 dark:from-dark-300 dark:via-dark-200 dark:to-dark-100" />
        
        {/* Animated gradient orbs */}
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-96 h-96 bg-silver-300/10 rounded-full blur-3xl dark:bg-silver-300/5"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-dark-100/5 rounded-full blur-3xl dark:bg-silver-400/5"
        />

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#1f1f1f 1px, transparent 1px), linear-gradient(90deg, #1f1f1f 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* ---- Content ---- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Tag/Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-silver-400 tracking-widest uppercase">
                Available for Work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 text-dark-200 dark:text-silver-100"
            >
              Hi, I'm{' '}
              <span className="gradient-text font-display">{personalInfo.name}</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div variants={itemVariants} className="mb-6 h-12 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-2xl font-medium text-dark-100/60 dark:text-silver-400">
                {currentText}
                <span className="typing-cursor" />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-dark-100/60 dark:text-silver-400 max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
            >
              {personalInfo.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              {/* Download CV */}
              <motion.a
                href={personalInfo.cv}
                download
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary flex items-center justify-center gap-2 text-sm"
              >
                <FiDownload size={16} />
                Download CV
              </motion.a>

              {/* Contact */}
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-outline flex items-center justify-center gap-2 text-sm"
              >
                <FiMail size={16} />
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right: Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="relative flex-shrink-0"
          >
            {/* Floating rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-24px] rounded-full border border-dashed border-silver-300/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-[-48px] rounded-full border border-dashed border-silver-300/15"
            />

            {/* Photo container */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              {/* Glow effect behind photo */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-silver-300/30 to-silver-400/10 blur-2xl scale-110" />
              
              {/* Photo circle */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-silver-300/30 shadow-2xl glow-pulse">
                <img
                  src="/profile.png" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200/30 to-transparent" />
              </div>

              {/* Floating badge - Experience */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, type: 'spring' }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 shadow-lg border border-silver-300/20"
              >
                <div className="text-2xl font-bold text-dark-200 dark:text-silver-100">1+</div>
                <div className="text-xs text-silver-400">Years Exp.</div>
              </motion.div>

              {/* Floating badge - Projects */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: 'spring' }}
                className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 shadow-lg border border-silver-300/20"
              >
                <div className="text-2xl font-bold text-dark-200 dark:text-silver-100">5+</div>
                <div className="text-xs text-silver-400">Projects</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ---- Scroll Indicator ---- */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver-400 hover:text-silver-300 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <FiArrowDown size={16} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
