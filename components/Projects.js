'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const categories = ['All', 'Web App', 'Mobile', 'UI/UX', 'Open Source'];

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory, payment integration, and admin dashboard.',
    category: 'Web App',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe'],
    color: 'from-purple-600/30 to-blue-600/30',
    emoji: '🛒',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app powered by OpenAI with multi-room support, file sharing, and smart replies.',
    category: 'Web App',
    tags: ['React', 'Socket.io', 'OpenAI', 'MongoDB'],
    color: 'from-pink-600/30 to-rose-600/30',
    emoji: '🤖',
    github: '#',
    live: '#',
    featured: true,
  },
  {
    id: 3,
    title: 'Task Management App',
    description: 'Collaborative project management tool with drag-and-drop, real-time updates, and team analytics.',
    category: 'Mobile',
    tags: ['React Native', 'GraphQL', 'Redis'],
    color: 'from-green-600/30 to-teal-600/30',
    emoji: '✅',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 4,
    title: 'Design System',
    description: 'A comprehensive UI component library with 50+ components, dark mode, and accessibility support.',
    category: 'UI/UX',
    tags: ['React', 'Storybook', 'Figma', 'TypeScript'],
    color: 'from-yellow-600/30 to-orange-600/30',
    emoji: '🎨',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 5,
    title: 'DevTools CLI',
    description: 'An open-source CLI toolkit for developers with code generation, scaffolding, and deployment utilities.',
    category: 'Open Source',
    tags: ['Node.js', 'TypeScript', 'CLI'],
    color: 'from-cyan-600/30 to-blue-600/30',
    emoji: '🔧',
    github: '#',
    live: '#',
    featured: false,
  },
  {
    id: 6,
    title: 'Analytics Dashboard',
    description: 'Real-time analytics platform with customizable widgets, data visualization, and export features.',
    category: 'Web App',
    tags: ['Vue.js', 'D3.js', 'Python', 'AWS'],
    color: 'from-indigo-600/30 to-purple-600/30',
    emoji: '📊',
    github: '#',
    live: '#',
    featured: true,
  },
];

export default function Projects() {
  const [ref, inView] = useInView(0.1);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of projects I've built, from concept to deployment.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'gradient-bg text-white shadow-lg shadow-purple-500/30'
                  : 'glass-card text-gray-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
              >
                <div className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                  <span className="text-6xl">{project.emoji}</span>
                  {project.featured && (
                    <span className="absolute top-3 right-3 bg-primary/80 text-white text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <div className="project-overlay absolute inset-0 bg-black/60 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    >
                      <FiGithub size={18} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-primary/80 transition-colors"
                    >
                      <FiExternalLink size={18} />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                    <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full ml-2 shrink-0">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs text-gray-400 bg-gray-800/80 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary/50 px-8 py-3 rounded-full font-semibold text-white hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            <FiGithub size={18} />
            View All on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}