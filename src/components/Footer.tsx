import { motion } from 'framer-motion'
import { Mail, Heart } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const socials = [
  { href: 'https://github.com/Savitargood', icon: GithubIcon, label: 'GitHub' },
  { href: 'https://linkedin.com/in/silas-victor', icon: LinkedinIcon, label: 'LinkedIn' },
  { href: 'mailto:contato@silasvictor.dev', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-slate-500 text-sm flex items-center gap-1"
        >
          Feito com <Heart size={14} className="text-red-500 fill-red-500" /> por{' '}
          <span className="text-brand-400 font-medium">Silas Victor</span> &copy; {new Date().getFullYear()}
        </motion.p>

        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="text-slate-500 hover:text-brand-400 transition-colors"
            >
              <Icon size={18} />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  )
}
