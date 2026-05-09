// ==========================================
// COMPONENT - Skills.jsx
// Section skill dengan progress bar animasi
// ==========================================
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact,
  FaPython, FaGitAlt, FaFileExcel
} from 'react-icons/fa';
import { SiTailwindcss} from 'react-icons/si';
import { skills } from '../data/portfolioData';

// Map nama icon ke komponen React Icons
const iconMap = {
  FaHtml5: FaHtml5,
  FaCss3Alt: FaCss3Alt,
  FaJs: FaJs,
  FaReact: FaReact,
  FaPython: FaPython,
  FaGitAlt: FaGitAlt,  
  FaFileExcel: FaFileExcel,
  SiTailwindcss: SiTailwindcss,
};

// Komponen individual skill card
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const IconComponent = iconMap[skill.icon] || FaReact;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ 
        y: -6, 
        boxShadow: `0 20px 40px rgba(0,0,0,0.2), 0 0 30px ${skill.color}15`
      }}
      className="glass rounded-2xl p-6 border border-silver-300/10 group transition-all duration-300"
    >
      {/* Icon + Name */}
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          whileHover={{ rotate: 10, scale: 1.1 }}
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: `${skill.color}15` }}
        >
          <IconComponent style={{ color: skill.color }} />
        </motion.div>
        <div>
          <div className="font-semibold text-dark-200 dark:text-silver-100 text-sm">{skill.name}</div>
          <div className="text-xs text-silver-400">{skill.category}</div>
        </div>
        <div className="ml-auto text-lg font-bold text-dark-100/40 dark:text-silver-400/60">
          {skill.percentage}%
        </div>
      </div>

      {/* Progress Bar */}
      <div className="h-1.5 bg-dark-100/10 dark:bg-silver-100/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : {}}
          transition={{ duration: 1.2, delay: index * 0.08 + 0.3, ease: 'easeOut' }}
          className="h-full rounded-full relative overflow-hidden"
          style={{
            background: `linear-gradient(90deg, ${skill.color}80, ${skill.color})`
          }}
        >
          {/* Shimmer on progress bar */}
          <motion.div
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            className="absolute inset-0 w-1/2"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)' }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="section-padding bg-silver-100/50 dark:bg-dark-200/50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-silver-300/10 dark:bg-silver-300/3 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          {/* <p className="section-subtitle mb-4">What I Work With</p> */}
          <h2 className="section-title text-dark-200 dark:text-silver-100">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="mt-4 text-dark-100/50 dark:text-silver-400 max-w-lg mx-auto">
            Teknologi dan tools yang saya kuasai untuk membangun produk digital berkualitas tinggi
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <SkillCard key={skill.id} skill={skill} index={index} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-silver-400">
            Dan terus belajar teknologi baru setiap hari 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
