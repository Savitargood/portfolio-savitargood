import { motion } from 'framer-motion'
import { Code2, Layers, Wrench, Globe } from 'lucide-react'
import { skillGroups, languages } from '@/lib/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' as const },
  }),
}

const groupIcons: Record<string, typeof Code2> = {
  code: Code2,
  layers: Layers,
  wrench: Wrench,
}

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-ink-border/40">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left — text */}
          <div>
            <motion.span
              className="badge-pill-accent"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeUp}
            >
              <span className="badge-dot" />
              Sobre mim
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="mt-5 font-serif text-4xl font-extrabold leading-[1.15] text-white"
            >
              Código que <span className="italic text-accent">resolve,</span>
              <br />
              design que
              <br />
              <span className="italic text-slate-500 font-semibold">comunica.</span>
            </motion.h2>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-6 space-y-4 text-sm leading-relaxed text-slate-400"
            >
              <p>
                Sou estudante de Análise e Desenvolvimento de Sistemas na
                Universidade Católica, com experiência prática não em
                desenvolvimento full stack e suporte técnico de infraestrutura.
              </p>
              <p>
                Já atuei diretamente na criação de plataformas web do zero —
                desde a arquitetura até a publicação, produção — e na resolução
                de incidentes complexos em ambientes corporativos.
              </p>
              <p>
                Meu diferencial é a combinação entre raciocínio técnico de
                infraestrutura e habilidade de construir interfaces modernas com
                React e JavaScript.
              </p>
            </motion.div>
          </div>

          {/* Right — skill groups */}
          <div className="space-y-7 lg:pt-2">
            {skillGroups.map((group, i) => {
              const Icon = groupIcons[group.icon] ?? Code2
              return (
                <motion.div
                  key={group.label}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i + 1}
                  variants={fadeUp}
                >
                  <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">
                    <Icon size={13} className="text-accent" />
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span key={skill} className="tag-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )
            })}

            {/* Languages */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeUp}
            >
              <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-3">
                <Globe size={13} className="text-accent" />
                Idiomas
              </p>
              <div className="grid grid-cols-2 gap-3">
                {languages.map(lang => (
                  <div
                    key={lang.name}
                    className="px-4 py-3 rounded-xl border border-ink-border bg-white/[0.02]"
                  >
                    <p className="text-[13px] font-bold text-slate-200">
                      <span className="mr-1.5">{lang.flag}</span>
                      {lang.name}
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5">{lang.level}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
