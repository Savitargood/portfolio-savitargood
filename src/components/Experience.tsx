import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, CheckCircle2 } from 'lucide-react'
import { experiences } from '@/lib/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Experience() {
  const [active, setActive] = useState(experiences.length - 1)
  const current = experiences[active]

  return (
    <section id="experience" className="py-24 border-t border-ink-border/40">
      <div className="section-container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          <span className="badge-pill-accent">
            <span className="badge-dot" />
            Trajetória profissional
          </span>
          <h2 className="mt-5 font-serif text-4xl font-extrabold text-white">
            Experiência <span className="italic text-slate-500 font-semibold">&amp; formação.</span>
          </h2>
        </motion.div>

        <div className="mt-12 grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Left — tabs + formação */}
          <div>
            <div className="space-y-2.5">
              {experiences.map((exp, i) => (
                <motion.button
                  key={exp.company}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                  onClick={() => setActive(i)}
                  className={`w-full text-left px-4 py-3.5 rounded-xl border transition-all duration-200 ${
                    active === i
                      ? 'border-accent/50 bg-accent/[0.06] shadow-[0_0_20px_-8px_rgba(76,195,247,0.4)]'
                      : 'border-ink-border bg-white/[0.02] hover:border-slate-600'
                  }`}
                >
                  <p
                    className={`text-[13px] font-bold ${
                      active === i ? 'text-accent' : 'text-slate-300'
                    }`}
                  >
                    {exp.company}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">{exp.area}</p>
                </motion.button>
              ))}
            </div>

            {/* Formação */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeUp}
              className="mt-8"
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">
                <GraduationCap size={13} className="text-accent" />
                Formação
              </p>
              <div className="px-4 py-4 rounded-xl border border-ink-border bg-white/[0.02]">
                <p className="text-[13px] font-bold text-slate-200">
                  Análise e Des. de Sistemas
                </p>
                <p className="text-[11px] text-slate-500 mt-1">
                  Universidade Católica de Brasília
                </p>
                <p className="text-[10px] text-slate-600 mt-1">Jan 2023 – Dez 2027</p>
                <span className="inline-block mt-2.5 px-2.5 py-0.5 rounded-md bg-accent/10 text-accent text-[10px] font-bold border border-accent/25">
                  Cursando
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right — detail panel */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="rounded-2xl border border-ink-border bg-ink-soft/50 p-8 min-h-[280px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.company}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
                  {current.company}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-white">
                  {current.role}
                </h3>
                <p className="text-xs text-slate-500 mt-1">{current.area}</p>

                <ul className="mt-6 space-y-3.5">
                  {current.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-slate-400">
                      <CheckCircle2 size={15} className="text-accent shrink-0 mt-0.5" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
