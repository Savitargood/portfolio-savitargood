export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  github: string
  live?: string
  image: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'jarvis',
    title: 'J.A.R.V.I.S. AI Assistant',
    description:
      'Assistente de IA com voz, integração OpenAI via Supabase Edge Functions, autenticação Google/email e interface futurista.',
    tags: ['React', 'TypeScript', 'Supabase', 'OpenAI', 'Framer Motion'],
    github: 'https://github.com/Savitargood/jarvis-ai-assistant',
    image: '/projects/jarvis.png',
    featured: true,
  },
  {
    id: 'bellamassa',
    title: 'BellaMassa Pizzaria',
    description:
      'Site institucional para pizzaria artesanal com cardápio interativo, publicado no GitHub Pages via GitHub Actions.',
    tags: ['React', 'TypeScript', 'TanStack Start', 'GitHub Actions'],
    github: 'https://github.com/Savitargood/bellamassa',
    live: 'https://savitargood.github.io/bellamassa',
    image: '/projects/bellamassa.png',
    featured: true,
  },
  {
    id: 'agropet',
    title: 'Agropet Recanto',
    description:
      'Plataforma web para pet shop com catálogo de produtos, serviços de banho e tosa e farmácia veterinária.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Savitargood/Agropet.Recanto',
    image: '/projects/agropet.png',
  },
  {
    id: 'financas',
    title: 'Finanças Contábeis',
    description:
      'App mobile de análise financeira pessoal com dashboards e relatórios de gastos.',
    tags: ['React', 'TypeScript', 'TanStack Start', 'Lovable Cloud'],
    github: 'https://github.com/Savitargood/Financias_Contabeis',
    image: '/projects/financas.png',
  },
  {
    id: 'uninex',
    title: 'UniNex Net',
    description:
      'Plataforma de networking universitário para conectar estudantes e projetos acadêmicos.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Savitargood/UniNex-net',
    image: '/projects/uninex.png',
  },
]
