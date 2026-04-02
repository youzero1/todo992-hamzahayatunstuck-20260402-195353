'use client';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiDownload } from 'react-icons/fi';
import { useState, useEffect } from 'react';

const roles = ['Full Stack Developer', 'UI/UX Designer', 'React Specialist', 'Node.js Expert'];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(role.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block text-primary font-semibold mb-4 text-lg"
          >
            👋 Hello, I'm
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
          >
            Alex{' '}
            <span className="gradient-text">Morgan</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 mb-6 h-10"
          >
            <span className="text-secondary font-semibold">{displayText}</span>
            <span className="animate-pulse text-primary">|</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-lg mb-8 leading-relaxed max-w-lg"
          >
            I craft beautiful, performant web experiences with modern technologies.
            Passionate about clean code, intuitive design, and solving complex problems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-4 mb-10"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg px-8 py-3 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-primary/50 px-8 py-3 rounded-full font-semibold text-white hover:bg-primary/10 transition-colors"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-6"
          >
            {[
              { icon: FiGithub, href: '#', label: 'GitHub' },
              { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
              { icon: FiTwitter, href: '#', label: 'Twitter' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                whileHover={{ scale: 1.2, color: '#6C63FF' }}
                className="text-gray-400 hover:text-primary transition-colors"
                aria-label={label}
              >
                <Icon size={24} />
              </motion.a>
            ))}
            <div className="w-px h-6 bg-gray-700" />
            <motion.a
              href="/resume.pdf"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors text-sm"
            >
              <FiDownload size={16} />
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center items-center"
        >
          <div className="relative">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
              style={{ margin: '-20px' }}
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/20"
              style={{ margin: '-40px' }}
            />
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-2xl shadow-purple-500/30 animate-float">
              <div className="w-full h-full bg-gradient-to-br from-primary/40 to-secondary/40 flex items-center justify-center">
                <span className="text-8xl">👨‍💻</span>
              </div>
            </div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass-card rounded-xl px-3 py-2 text-sm font-semibold"
            >
              <span className="text-green-400">●</span> Available for work
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 glass-card rounded-xl px-3 py-2 text-sm"
            >
              🚀 5+ Years Exp.
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}