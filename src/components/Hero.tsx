import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { MapPin, Globe, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/ui/BrandIcons'

function CountUp({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf: number
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setValue(Math.round(eased * target))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target])

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const stats = [
  { value: 5,  suffix: '',  label: 'Repositórios no GitHub' },
  { value: 57, suffix: '+', label: 'Contribuições em 2026' },
  { value: 2,  suffix: '',  label: 'Projetos em produção' },
]

function AnimatedText({ text, className = '', delay = 0 }: { text: string; className?: string; delay?: number }) {
  return (
    <span className={`inline-block ${className}`} aria-label={text}>
      {text.split('').map((ch, i) => (
        <motion.span
          key={i}
          aria-hidden
          className="inline-block will-change-transform"
          initial={{ opacity: 0, y: 34, rotateX: -70 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: delay + i * 0.045, type: 'spring', stiffness: 320, damping: 20 }}
          whileHover={{ y: -6, scale: 1.12, transition: { type: 'spring', stiffness: 500, damping: 12 } }}
        >
          {ch === ' ' ? '\u00A0' : ch}
        </motion.span>
      ))}
    </span>
  )
}

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
              className="mt-6 font-serif text-5xl sm:text-6xl leading-[1.05] font-extrabold text-white [perspective:600px]"
            >
              <AnimatedText text="Silas " delay={0.35} />
              <AnimatedText
                text="Victor"
                delay={0.35 + 'Silas '.length * 0.045}
                className="text-accent drop-shadow-[0_0_18px_rgba(76,195,247,0.45)]"
              />
              <br />
              <AnimatedText
                text="Oliveira Campos"
                delay={0.85}
                className="italic font-medium text-slate-500"
              />
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
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-accent text-ink text-[13px] font-bold
                           hover:bg-accent-dim hover:shadow-[0_0_24px_-4px_rgba(76,195,247,0.6)] active:scale-95
                           transition-all duration-200"
              >
                Ver projetos
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg border border-ink-border bg-white/[0.03] text-slate-200 text-[13px] font-semibold
                           hover:border-accent/40 hover:text-white active:scale-95 transition-all duration-200"
              >
                Entrar em contato
              </a>
              <a
                href="https://github.com/Savitargood"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-ink-border bg-white/[0.03] text-slate-400
                           hover:text-accent hover:border-accent/40 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
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
            className="relative mx-auto w-full max-w-[320px] animate-tilt"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              className="relative rounded-2xl border border-accent/25 overflow-hidden shadow-[0_0_60px_-15px_rgba(76,195,247,0.35)] hover:shadow-[0_0_80px_-10px_rgba(76,195,247,0.55)] transition-shadow duration-500"
            >
              <img
                src="/profile.jpg"
                alt="Silas Victor Oliveira Campos"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
            </motion.div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0, x: -30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 260, damping: 14 }}
              whileHover={{ scale: 1.12, rotate: -2 }}
              className="absolute -left-8 top-6"
            >
              <motion.div
                animate={{ y: [0, -8, 0], rotate: [0, -1.5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="px-3 py-2 rounded-xl bg-ink-panel/95 border border-accent/30 shadow-[0_0_20px_-6px_rgba(76,195,247,0.4)] cursor-default"
              >
                <p className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Contribuições</p>
                <p className="font-serif text-lg font-bold text-accent leading-tight">57+</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 14 }}
              whileHover={{ scale: 1.12, rotate: 2 }}
              className="absolute -right-5 top-1/3"
            >
              <motion.div
                animate={{ y: [0, 8, 0], rotate: [0, 1.5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="px-3 py-2 rounded-xl bg-ink-panel/95 border border-accent/30 shadow-[0_0_20px_-6px_rgba(76,195,247,0.4)] text-center cursor-default"
              >
                <p className="text-[9px] uppercase tracking-wider text-slate-500 font-semibold">Projetos</p>
                <p className="font-serif text-lg font-bold text-accent leading-tight">5</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 14 }}
              whileHover={{ scale: 1.12 }}
              className="absolute -left-4 bottom-8"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="px-3 py-2 rounded-xl bg-ink-panel/95 border border-emerald-400/30 shadow-[0_0_20px_-6px_rgba(52,211,153,0.35)] cursor-default"
              >
                <p className="flex items-center gap-1.5 text-[10px] font-bold text-emerald-300">
                  <span className="relative flex w-1.5 h-1.5">
                    <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Disponível
                </p>
                <p className="text-[9px] text-slate-500 mt-0.5">5+ anos comprometido</p>
              </motion.div>
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
            <motion.div
              key={s.label}
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              className="cursor-default"
            >
              <p className="font-serif text-3xl sm:text-4xl font-extrabold text-accent">
                <CountUp target={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-xs text-slate-500">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
