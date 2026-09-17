import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const TITLES = [
  'Desenvolvedor Front-End',
  'React & TypeScript Dev',
  'UI/UX Enthusiast',
  'Full-Stack em evolução',
]

function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [index, setIndex] = useState(0)
  const [subIndex, setSubIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [text, setText] = useState('')

  useEffect(() => {
    if (!deleting && subIndex === words[index].length) {
      const t = setTimeout(() => setDeleting(true), pause)
      return () => clearTimeout(t)
    }
    if (deleting && subIndex === 0) {
      setDeleting(false)
      setIndex(i => (i + 1) % words.length)
      return
    }
    const t = setTimeout(() => {
      setSubIndex(s => s + (deleting ? -1 : 1))
      setText(words[index].substring(0, subIndex + (deleting ? -1 : 1)))
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(t)
  }, [subIndex, deleting, index, words, speed, pause])

  return text
}

const Particle = ({ x, y, size, delay }: { x: number; y: number; size: number; delay: number }) => (
  <motion.div
    className="absolute rounded-full bg-brand-500/20"
    style={{ left: `${x}%`, top: `${y}%`, width: size, height: size }}
    animate={{ y: [0, -30, 0], opacity: [0.2, 0.6, 0.2] }}
    transition={{ duration: 4 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
)

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: 4 + Math.random() * 10,
  delay: Math.random() * 3,
  id: i,
}))

export default function Hero() {
  const title = useTypewriter(TITLES)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-brand-900/20 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-800/20 via-transparent to-transparent" />

      {/* Particles */}
      {PARTICLES.map(p => (
        <Particle key={p.id} {...p} />
      ))}

      <div className="relative section-container text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          Olá, mundo! 👋
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight"
        >
          Silas{' '}
          <span className="bg-gradient-to-r from-brand-400 to-accent bg-clip-text text-transparent">
            Victor
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="h-10 mb-6"
        >
          <span className="text-xl sm:text-2xl text-slate-300 font-mono">
            {title}
            <span className="animate-pulse text-brand-400">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-slate-400 max-w-xl mx-auto mb-10 text-lg leading-relaxed"
        >
          Estudante de ADS apaixonado por criar interfaces bonitas e funcionais.
          Transformo ideias em produtos digitais com React, TypeScript e muito café.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary">
            Ver Projetos
          </a>
          <a href="#contact" className="btn-outline">
            <Mail size={18} />
            Contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { href: 'https://github.com/Savitargood', icon: GithubIcon, label: 'GitHub' },
            { href: 'https://linkedin.com/in/silas-victor', icon: LinkedinIcon, label: 'LinkedIn' },
            { href: 'mailto:contato@silasvictor.dev', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 glass-card text-slate-400 hover:text-brand-400 transition-colors"
            >
              <Icon size={20} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
