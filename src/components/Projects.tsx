import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, ExternalLink } from 'lucide-react'
import { projects } from '@/lib/projects'
import { GithubIcon } from '@/components/ui/BrandIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
}

const statusStyles: Record<string, string> = {
  'Ativo':              'bg-emerald-400/15 text-emerald-300 border-emerald-400/40',
  'Online':             'bg-accent/15 text-accent border-accent/40',
  'Em desenvolvimento': 'bg-amber-400/15 text-amber-300 border-amber-400/40',
  'Interno':            'bg-sky-400/15 text-sky-300 border-sky-400/40',
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-ink-border/40">
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <span className="badge-pill-accent">
            <span className="badge-dot" />
            Projetos práticos
          </span>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-4xl font-extrabold text-white">
              O que já construí<span className="text-accent">.</span>
            </h2>
            <a
              href="https://github.com/Savitargood"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-accent transition-colors"
            >
              <GithubIcon size={13} />
              Ver no GitHub · @Savitargood
            </a>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              custom={i % 3}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              className="group rounded-2xl border border-ink-border bg-ink-soft/60 overflow-hidden flex flex-col
                         hover:border-accent/40 hover:shadow-[0_12px_40px_-12px_rgba(76,195,247,0.25)]
                         transition-[border-color,box-shadow] duration-300"
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}${project.image}`}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover saturate-[0.85] group-hover:saturate-125
                             group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-soft via-transparent to-transparent" />
                {project.status && (
                  <span
                    className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold border ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 group-hover:text-slate-400 transition-colors">
                  {project.category}
                </p>
                <h3
                  className={`mt-2 font-serif text-xl font-bold transition-colors duration-300 ${
                    project.accentTitle
                      ? 'text-accent'
                      : 'text-white group-hover:text-accent'
                  }`}
                >
                  {project.title}
                </h3>
                <p className="mt-2.5 text-xs leading-relaxed text-slate-500 flex-1 group-hover:text-slate-400 transition-colors duration-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="tag-chip !text-[10px] !px-2 !py-0.5 group-hover:border-slate-600 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold px-2.5 py-1 rounded-md
                                 bg-accent/10 text-accent border border-accent/25
                                 hover:bg-accent hover:text-ink hover:shadow-[0_0_16px_-2px_rgba(76,195,247,0.5)]
                                 active:scale-95 transition-all duration-200"
                    >
                      <ExternalLink size={11} />
                      Ver site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-[11px] text-slate-500
                                 hover:text-accent active:scale-95 transition-all duration-200"
                    >
                      <Code2 size={12} />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
