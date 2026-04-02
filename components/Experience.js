'use client';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiBriefcase, FiBook } from 'react-icons/fi';

const experiences = [
  {
    type: 'work',
    title: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 - Present',
    description: 'Leading development of scalable microservices architecture serving 2M+ users. Mentoring a team of 5 junior developers and driving technical roadmap decisions.',
    tags: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    type: 'work',
    title: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 - 2022',
    description: 'Built and maintained multiple client-facing web applications. Reduced page load time by 60% through performance optimizations and code splitting.',
    tags: ['Next.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 - 2020',
    description: 'Developed responsive web interfaces for 20+ client projects. Collaborated closely with designers to implement pixel-perfect UI components.',
    tags: ['React', 'Vue.js', 'CSS', 'Figma'],
  },
  {
    type: 'education',
    title: 'B.S. Computer Science',
    company: 'University of California',
    period: '2015 - 2019',
    description: 'Graduated with honors. Focused on software engineering, algorithms, and distributed systems. Active member of the coding club.',
    tags: ['Algorithms', 'Data Structures', 'Systems'],
  },
];

export default function Experience() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="experience" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">My Journey</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Experience & <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                className={`flex items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${
                  i % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 inline-block w-full"
                  >
                    <div className={`flex items-center gap-2 mb-1 ${
                      i % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {exp.period}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                    <p className="text-secondary font-medium mb-3">{exp.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className={`flex flex-wrap gap-2 ${
                      i % 2 === 0 ? 'md:justify-end' : ''
                    }`}>
                      {exp.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-xs text-gray-400 bg-gray-800/80 px-2 py-1 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="hidden md:flex w-12 h-12 rounded-full items-center justify-center shrink-0 z-10"
                  style={{ background: exp.type === 'work' ? '#6C63FF' : '#FF6584' }}
                >
                  {exp.type === 'work'
                    ? <FiBriefcase size={20} className="text-white" />
                    : <FiBook size={20} className="text-white" />
                  }
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}