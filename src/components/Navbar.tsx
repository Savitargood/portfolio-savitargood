import { useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Menu, X, Code2 } from 'lucide-react'

const links = [
  { href: '#about',    label: 'Sobre' },
  { href: '#skills',   label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#contact',  label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1])

  useEffect(() => {
    const unsub = scrollY.on('change', v => setScrolled(v > 40))
    return unsub
  }, [scrollY])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backdropFilter: scrolled ? 'blur(16px)' : 'none' }}
    >
      <motion.div
        className="absolute inset-0 bg-slate-950/80 border-b border-white/5"
        style={{ opacity: bgOpacity }}
      />
      <nav className="relative section-container flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 font-bold text-white text-lg">
          <Code2 className="text-brand-400" size={22} />
          <span>Silas<span className="text-brand-400">Victor</span></span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="btn-primary text-sm py-2 px-4">
              Hire me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-white"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="md:hidden overflow-hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/5"
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
