import { motion } from 'framer-motion'
import { Code2, GraduationCap, Rocket } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

const highlights = [
  { icon: GraduationCap, title: 'ADS', desc: 'Estudante de Análise e Desenvolvimento de Sistemas' },
  { icon: Code2,         title: 'Front-End', desc: 'React, TypeScript, Tailwind CSS, Framer Motion' },
  { icon: Rocket,        title: 'Projetos Reais', desc: 'Sites e apps publicados para clientes reais' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-900/5 to-transparent" />
      <div className="section-container relative">
        <motion.p
          className="section-subtitle text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          variants={fadeUp}
        >
          Quem sou eu
        </motion.p>
        <motion.h2
          className="section-title text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={fadeUp}
        >
          Sobre mim
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={fadeUp}
            className="space-y-5 text-slate-300 leading-relaxed"
          >
            <p>
              Sou <strong className="text-white">Silas Victor</strong>, desenvolvedor Front-End
              apaixonado por criar experiências digitais que combinam design bonito com código limpo.
            </p>
            <p>
              Estudo Análise e Desenvolvimento de Sistemas e já entreguei projetos reais para
              clientes — de sites institucionais a assistentes de IA com integração OpenAI.
            </p>
            <p>
              Meu foco atual é dominar o ecossistema React/TypeScript e construir um portfólio
              sólido enquanto busco minha primeira oportunidade profissional.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'Supabase', 'Vite', 'Git'].map(t => (
                <span
                  key={t}
                  className="px-3 py-1 text-xs font-mono bg-brand-500/10 text-brand-300 border border-brand-500/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-4">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 3}
                variants={fadeUp}
                whileHover={{ x: 6 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="p-2 bg-brand-500/10 rounded-lg shrink-0">
                  <Icon className="text-brand-400" size={22} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
