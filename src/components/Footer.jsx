// ==========================================
// COMPONENT - Footer.jsx
// Footer dengan navigasi dan sosial media
// ==========================================
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaInstagram, FaTiktok } from 'react-icons/fa';
import { personalInfo, navLinks } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const socials = [
    { icon: FaGithub, href: personalInfo.social.github },
    { icon: FaLinkedinIn, href: personalInfo.social.linkedin },
    { icon: FaInstagram, href: personalInfo.social.instagram },
    { icon: FaTiktok, href: personalInfo.social.tiktok },
  ];

  return (
    <footer className="bg-dark-300 relative overflow-hidden">
      {/* Top border glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-silver-300/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="text-3xl font-bold gradient-text font-display mb-3">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
            <p className="text-silver-400/60 text-sm leading-relaxed max-w-xs">
              {personalInfo.subtitle}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-silver-400 mb-5">Navigation</p>
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-silver-400/60 hover:text-silver-300 transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-silver-400 mb-5">Social</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-silver-400/60 hover:text-silver-300 border border-silver-300/10 hover:border-silver-300/30 transition-all"
                >
                  <Icon size={14} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-silver-300/10 mb-8" />

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-silver-400/40">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-silver-400/40">
            dibuat oleh <span className="font-bold" style={{ color: '#616161ff' }}>raza</span> menggunakan React + Vite + Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
