import { motion } from 'framer-motion'
import { MapPin, Globe, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const stats = [
  { value: '5',   label: 'Repositórios no GitHub' },
  { value: '57+', label: 'Contribuições em 2026' },
  { value: '2',   label: 'Projetos em produção' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-16 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative">
        <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 items-center">
          {/* Left */}
          <div>
            <motion.span
              className="badge-pill-green"
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeUp}
            >
              <span className="badge-dot animate-pulse" />
              Disponível para novas oportunidades
            </motion.span>

            <motion.h1
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeUp}
              className="mt-6 font-serif text-5xl sm:text-6xl leading-[1.05] font-extrabold text-white"
            >
              Silas <span className="text-accent">Victor</span>
              <br />
              <span className="italic font-medium text-slate-500">Oliveira Campos</span>
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeUp}
              className="mt-5 text-[15px] font-semibold text-slate-200"
            >
              Desenvolvedor de Software · Frontend / Full Stack
            </motion.p>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={3}
              variants={fadeUp}
              className="mt-3 max-w-md text-sm leading-relaxed text-slate-400"
            >
              Estudante de ADS focado em criar aplicações eficientes e interfaces
              que fazem sentido. Experiência real com React, Node.js, Python e
              infraestrutura de TI.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={4}
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-ink text-[13px] font-bold hover:bg-accent-dim transition-colors duration-200"
              >
                Ver projetos
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-ink-border bg-white/[0.03] text-slate-200 text-[13px] font-semibold hover:border-accent/40 hover:text-white transition-colors duration-200"
              >
                Entrar em contato
              </a>
              <a
                href="https://github.com/Savitargood"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-ink-border bg-white/[0.03] text-slate-400 hover:text-accent hover:border-accent/40 transition-colors duration-200"
              >
                <GithubIcon size={16} />
              </a>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              custom={5}
              variants={fadeUp}
              className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500"
            >
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={13} className="text-accent" />
                Recanto das Emas, Brasília – DF
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Globe size={13} className="text-accent" />
                Espanhol C1 · Inglês B1
              </span>
            </motion.div>
          </div>

          {/* Right — photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-[320px]"
          >
            <div className="relative rounded-2xl border border-accent/25 overflow-hidden shadow-[0_0_60px_-15px_rgba(76,195,247,0.35)]">
              <img
                src="/profile.jpg"
                alt="Silas Victor Oliveira Campos"
                className="w-full aspect-[4/5] object-cover grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -left-8 top-6 px-3 py-2 rounded-xl bg-ink-panel/95 border border-ink-border shadow-xl"
            >
              <p className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Contribuições</p>
              <p className="font-serif text-lg font-bold text-accent leading-tight">57+</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute -right-5 top-1/3 px-3 py-2 rounded-xl bg-ink-panel/95 border border-ink-border shadow-xl text-center"
            >
              <p className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Projetos</p>
              <p className="font-serif text-lg font-bold text-accent leading-tight">5</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-4 bottom-8 px-3 py-2 rounded-xl bg-ink-panel/95 border border-ink-border shadow-xl"
            >
              <p className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Disponível
              </p>
              <p className="text-[9px] text-slate-500 mt-0.5">5+ anos comprometido</p>
            </motion.div>

            {/* Carousel dots */}
            <div className="flex justify-center gap-1.5 mt-4">
              <span className="w-4 h-1 rounded-full bg-accent" />
              <span className="w-1 h-1 rounded-full bg-slate-600" />
              <span className="w-1 h-1 rounded-full bg-slate-600" />
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
          className="mt-20 pt-10 border-t border-ink-border/70 grid grid-cols-3 gap-6"
        >
          {stats.map(s => (
            <div key={s.label}>
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
