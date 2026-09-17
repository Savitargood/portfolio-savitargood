import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' },
  }),
}

const contactRows = [
  { icon: Mail,     label: 'silasvictor90oliveira@gmail.com', href: 'mailto:silasvictor90oliveira@gmail.com' },
  { icon: Phone,    label: '(61) 98354-6385',                 href: 'https://wa.me/5561983546385' },
  { icon: LinkedinIcon, label: 'linkedin.com/in/silas-victor-1578531ab', href: 'https://www.linkedin.com/in/silas-victor-1578531ab/' },
  { icon: GithubIcon,   label: 'github.com/Savitargood',       href: 'https://github.com/Savitargood' },
]

type Status = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error ?? 'Erro ao enviar mensagem')
      }
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Erro desconhecido')
    }
  }

  const inputClass =
    'w-full bg-white/[0.03] border border-ink-border rounded-lg px-4 py-2.5 text-sm text-white ' +
    'placeholder-slate-600 focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/40 ' +
    'transition-all duration-200'

  return (
    <section id="contact" className="py-24 border-t border-ink-border/40">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-14">
          {/* Left */}
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
              Contato
            </motion.span>

            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeUp}
              className="mt-5 font-serif text-4xl font-extrabold leading-[1.15] text-white"
            >
              Pronto para seu
              <br />
              <span className="italic text-accent">próximo projeto?</span>
            </motion.h2>

            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeUp}
              className="mt-5 text-sm leading-relaxed text-slate-400 max-w-sm"
            >
              Estou disponível para estágios, posições júnior, freelances e
              consultoria técnica. Se tem um desafio, quero ouvir.
            </motion.p>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeUp}
              className="mt-8 space-y-3"
            >
              {contactRows.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 text-[13px] text-slate-400 hover:text-accent transition-colors group"
                >
                  <span className="flex items-center justify-center w-9 h-9 rounded-lg border border-ink-border bg-white/[0.02] text-slate-500 group-hover:text-accent group-hover:border-accent/40 transition-colors">
                    <Icon size={14} />
                  </span>
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.form
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="space-y-5"
            aria-label="Formulário de contato"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={inputClass}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 mb-2">
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={handleChange}
                placeholder="Descreva a oportunidade ou projeto..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-emerald-400 text-xs"
              >
                <CheckCircle size={14} />
                Mensagem enviada com sucesso! Responderei em breve.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 text-red-400 text-xs"
              >
                <AlertCircle size={14} />
                {errorMsg}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-accent text-ink text-sm font-bold hover:bg-accent-dim transition-colors duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={15} className="animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mensagem
                  <Send size={14} />
                </>
              )}
            </button>

            <p className="text-center text-[11px] text-slate-600">
              Também pode me chamar diretamente pelo{' '}
              <a href="https://www.linkedin.com/in/silas-victor-1578531ab/" target="_blank" rel="noopener noreferrer" className="text-accent/80 hover:text-accent underline underline-offset-2">
                LinkedIn
              </a>{' '}
              ou{' '}
              <a href="https://wa.me/5561983546385" target="_blank" rel="noopener noreferrer" className="text-accent/80 hover:text-accent underline underline-offset-2">
                WhatsApp
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
