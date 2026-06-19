// ==========================================
// COMPONENT - Projects.jsx
// Grid project cards dengan hover effects
// ==========================================
import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/portfolioData';

// Komponen individual project card
const ProjectCard = ({ project, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      whileHover={{ y: -8 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group glass rounded-3xl overflow-hidden border border-silver-300/10 transition-all duration-500 hover:border-silver-300/30 hover:shadow-2xl"
    >
      {/* Project Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.08 : 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
        {/* Image overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-200/80 via-dark-200/20 to-transparent" />
        
        {/* Hover action buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-4 right-4 flex gap-2"
            >
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/30"
              >
                <FiExternalLink size={14} />
              </motion.a>
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/20 hover:bg-white/30"
              >
                <FiGithub size={14} />
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured badge */}
        {project.featured && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-silver-300/20 backdrop-blur-md text-silver-100 border border-silver-300/30">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-6">
        <h3 className="text-lg font-bold text-dark-200 dark:text-silver-100 mb-2 group-hover:text-silver-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-dark-100/60 dark:text-silver-400 leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-lg text-xs font-medium bg-dark-100/5 dark:bg-silver-100/5 text-dark-100/60 dark:text-silver-400 border border-dark-100/10 dark:border-silver-300/10"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bottom action row */}
        <div className="flex items-center justify-between pt-4 border-t border-silver-300/10">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-dark-100/60 dark:text-silver-400 hover:text-silver-300 transition-colors group/link"
          >
            Live Demo
            <FiExternalLink size={12} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-dark-100/60 dark:text-silver-400 hover:text-silver-300 transition-colors group/gh"
          >
            <FiGithub size={12} />
            Source Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-silver-300/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <p className="section-subtitle mb-4">What I've Built</p>
          <h2 className="section-title text-dark-200 dark:text-silver-100">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-4 text-dark-100/50 dark:text-silver-400 max-w-lg mx-auto">
            Beberapa project terbaik yang pernah saya kerjakan
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/Fiddo0"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 btn-outline text-sm"
          >
            <FiGithub size={16} />
            Lihat Semua di GitHub
            <FiArrowRight size={14} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
