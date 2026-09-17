import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const links = [
  { href: '#about',       label: 'Sobre' },
  { href: '#projects',    label: 'Projetos' },
  { href: '#experience',  label: 'Experiência' },
  { href: '#contact',     label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 60], [0, 1])

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 20))
    return unsub
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
    >
      <motion.div
        className="absolute inset-0 bg-ink/85 border-b border-ink-border/60"
        style={{ opacity: bgOpacity }}
      />
      <nav className="relative section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-serif font-bold text-white">
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
          Silas Victor
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-slate-400 hover:text-white text-[13px] font-medium transition-colors duration-200
                           after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent
                           after:transition-all after:duration-300 hover:after:w-full"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="inline-block px-4 py-2 rounded-lg border border-accent/50 text-accent text-[13px] font-semibold hover:bg-accent/10 transition-colors duration-200"
            >
              Contratar
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(o => !o)}
          aria-label="Abrir menu"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-ink-soft/95 backdrop-blur-xl border-b border-ink-border/60"
      >
        <ul className="section-container py-4 flex flex-col gap-4">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium block"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  )
}
