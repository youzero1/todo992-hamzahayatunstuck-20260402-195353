'use client';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiAward, FiUsers, FiCode, FiCoffee } from 'react-icons/fi';

const stats = [
  { icon: FiAward, value: '50+', label: 'Projects Completed' },
  { icon: FiUsers, value: '30+', label: 'Happy Clients' },
  { icon: FiCode, value: '100K+', label: 'Lines of Code' },
  { icon: FiCoffee, value: '∞', label: 'Cups of Coffee' },
];

export default function About() {
  const [ref, inView] = useInView(0.2);

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-primary/20 shadow-2xl shadow-purple-900/30">
                <div className="w-full h-full bg-gradient-to-br from-primary/20 via-card to-secondary/20 flex items-center justify-center">
                  <span className="text-9xl">🧑‍🎨</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-gray-400 text-sm">Years of Experience</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              A passionate developer building{' '}
              <span className="gradient-text">digital experiences</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Hi! I'm Alex Morgan, a Full Stack Developer with over 5 years of experience
              crafting web applications that combine elegant design with robust functionality.
              I specialize in React, Next.js, Node.js, and modern cloud technologies.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              When I'm not coding, you'll find me exploring new technologies, contributing
              to open-source projects, or mentoring junior developers. I believe in writing
              clean, maintainable code that scales.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: 'Name', value: 'Alex Morgan' },
                { label: 'Location', value: 'San Francisco, CA' },
                { label: 'Email', value: 'alex@example.com' },
                { label: 'Availability', value: 'Open to offers' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <span className="text-gray-500 text-sm">{label}:</span>
                  <p className="text-white font-medium">{value}</p>
                </div>
              ))}
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="gradient-bg px-8 py-3 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 inline-block"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map(({ icon: Icon, value, label }, i) => (
            <motion.div
              key={label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <Icon className="text-primary mx-auto mb-3" size={28} />
              <div className="text-3xl font-bold gradient-text mb-1">{value}</div>
              <div className="text-gray-400 text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}