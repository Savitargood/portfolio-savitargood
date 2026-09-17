import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'
import { projects } from '@/lib/projects'

const ALL_TAGS = ['Todos', ...Array.from(new Set(projects.flatMap(p => p.tags)))]

export default function Projects() {
  const [filter, setFilter] = useState('Todos')
  const visible = filter === 'Todos' ? projects : projects.filter(p => p.tags.includes(filter))

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent" />
      <div className="section-container relative">
        <motion.p
          className="section-subtitle text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          O que eu construí
        </motion.p>
        <motion.h2
          className="section-title text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Projetos
        </motion.h2>

        {/* Filter chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 overflow-x-auto pb-2">
          {ALL_TAGS.map(tag => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                filter === tag
                  ? 'bg-brand-600 text-white'
                  : 'glass-card text-slate-400 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="glass-card overflow-hidden group cursor-pointer"
              >
                {/* Image placeholder */}
                <div className="h-44 bg-gradient-to-br from-brand-900/40 to-slate-800/60 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-4xl font-black text-brand-500/30 select-none">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                  {project.featured && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-brand-600/90 text-white text-xs px-2 py-1 rounded-full">
                      <Star size={10} fill="currentColor" />
                      Destaque
                    </div>
                  )}
                  <motion.div
                    className="absolute inset-0 bg-brand-600/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-white mb-2 group-hover:text-brand-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 bg-brand-500/10 text-brand-300 rounded-full border border-brand-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                    >
                      <GithubIcon size={14} />
                      Código
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs text-brand-400 hover:text-brand-300 transition-colors"
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
