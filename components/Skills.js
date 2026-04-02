'use client';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import {
  FiCode, FiServer, FiDatabase, FiTool
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend',
    icon: FiCode,
    color: '#6C63FF',
    skills: [
      { name: 'React / Next.js', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    icon: FiServer,
    color: '#FF6584',
    skills: [
      { name: 'Node.js / Express', level: 90 },
      { name: 'Python / Django', level: 80 },
      { name: 'GraphQL', level: 78 },
      { name: 'REST APIs', level: 95 },
    ],
  },
  {
    title: 'Database',
    icon: FiDatabase,
    color: '#43E97B',
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 88 },
      { name: 'Redis', level: 72 },
      { name: 'MySQL', level: 80 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: FiTool,
    color: '#F7971E',
    skills: [
      { name: 'Docker / K8s', level: 78 },
      { name: 'AWS / GCP', level: 75 },
      { name: 'CI/CD', level: 82 },
      { name: 'Git / GitHub', level: 95 },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'GraphQL',
  'Tailwind', 'Git', 'Redis', 'Kubernetes', 'Figma',
];

export default function Skills() {
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" className="section-padding bg-card/30" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-widest">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <category.icon style={{ color: category.color }} size={20} />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: catIdx * 0.1 + skillIdx * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: `linear-gradient(90deg, ${category.color}, ${category.color}88)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center text-xl font-semibold mb-8 text-gray-300">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="glass-card px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-primary hover:border-primary/50 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}