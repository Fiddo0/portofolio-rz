// ==========================================
// COMPONENT - About.jsx
// Section tentang diri + statistik
// ==========================================
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { personalInfo, stats } from '../data/portfolioData';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

// Animasi saat masuk viewport
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-silver-200/20 dark:bg-silver-300/3 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">Get to know me</p>
          <h2 className="section-title text-dark-200 dark:text-silver-100">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with decorations */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="/workspace.jpg"
                alt="About workspace"
                className="w-full h-96 object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-200/60 to-transparent" />``
            </div>

            {/* Floating card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -right-6 glass rounded-2xl p-5 shadow-xl border border-silver-300/15 max-w-[200px]"
            >
              <div className="text-3xl font-bold gradient-text mb-1">100%</div>
              <div className="text-xs text-silver-400">Client Satisfaction</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } } }}
          >
            <motion.p variants={fadeInUp} className="text-dark-100/70 dark:text-silver-400 leading-relaxed mb-6 text-lg">
              {personalInfo.description}
            </motion.p>
            <motion.p variants={fadeInUp} className="text-dark-100/60 dark:text-silver-400/80 leading-relaxed mb-8">
              Saya percaya bahwa kode yang baik bukan hanya tentang fungsionalitas, tetapi juga tentang estetika, performa, dan pengalaman pengguna yang luar biasa.
            </motion.p>

            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-3 mb-8">
              {[
                { icon: FiMapPin, text: personalInfo.location },
                { icon: FiMail, text: personalInfo.email },
                { icon: FiPhone, text: personalInfo.phone },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-sm text-dark-100/60 dark:text-silver-400">
                  <div className="w-8 h-8 rounded-lg glass flex items-center justify-center border border-silver-300/15">
                    <Icon size={14} className="text-silver-400" />
                  </div>
                  {text}
                </div>
              ))}
            </motion.div>

            {/* Stats Grid */}
            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className="glass rounded-2xl p-5 border border-silver-300/10 card-hover text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-1">{stat.number}</div>
                  <div className="text-xs text-silver-400 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
