import { motion } from 'framer-motion'
import { useState } from 'react'
import { skills } from '@/lib/skills'

type Category = 'all' | 'frontend' | 'backend' | 'tools'

const TABS: { label: string; value: Category }[] = [
  { label: 'Todas', value: 'all' },
  { label: 'Front-End', value: 'frontend' },
  { label: 'Back-End', value: 'backend' },
  { label: 'Ferramentas', value: 'tools' },
]

export default function Skills() {
  const [active, setActive] = useState<Category>('all')
  const filtered = active === 'all' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que eu sei fazer
        </motion.p>
        <motion.h2
          className="section-title text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Habilidades
        </motion.h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {TABS.map(tab => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === tab.value
                  ? 'bg-brand-600 text-white shadow-lg shadow-brand-500/25'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card p-4"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">{skill.name}</span>
                <span className="text-xs font-mono text-slate-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: skill.color }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: i * 0.06 + 0.2, ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
