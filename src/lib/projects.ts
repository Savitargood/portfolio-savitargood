export interface Project {
  id: string
  title: string
  category: string
  description: string
  tags: string[]
  github?: string
  live?: string
  image: string
  status?: 'Ativo' | 'Online' | 'Em desenvolvimento' | 'Interno'
  accentTitle?: boolean
}

export const projects: Project[] = [
  {
    id: 'finance-buddy',
    title: 'Finance Buddy Check-in',
    category: 'Web App · Finanças Pessoais',
    description:
      'Aplicação de controles e acompanhamento financeiro pessoal com sistema de check-in de metas. Permite ao usuário registrar gastos, refleções e acompanhar o progresso financeiro de forma visual e intuitiva.',
    tags: ['JavaScript', 'React'],
    image: '/projects/finance-buddy.jpg',
    status: 'Ativo',
    accentTitle: true,
  },
  {
    id: 'uninex',
    title: 'UniNex Net',
    category: 'Web App · Networking Acadêmico',
    description:
      'Plataforma de networking universitário que conecta estudantes, professores e projetos acadêmicos. Facilita a formação de grupos de estudo, colaboração em projetos e troca de conhecimento entre a comunidade.',
    tags: ['JavaScript', 'React', 'Node.js'],
    github: 'https://github.com/Savitargood/UniNex-net',
    live: 'https://unirnex-netfacudade.lovable.app',
    image: '/projects/uninex.jpg',
    status: 'Online',
  },
  {
    id: 'locomocao',
    title: 'Plataforma de Locomoção',
    category: 'Web App · Logística & Infraestrutura',
    description:
      'Sistema web para otimização, gestão e controle de serviços de infraestrutura e logística de transportes. Primeiro Webview do projeto — interfaces responsivas com foco na eficiência dos fluxos de locomoção.',
    tags: ['JavaScript', 'React', 'Python'],
    github: 'https://github.com/Savitargood/-RENOVA-SVA-PLATAFORMA-DE-INFRAESTRUTURA-E-SERVI-OS-DE-LOCOMO-O',
    image: '/projects/locomocao.jpg',
    status: 'Em desenvolvimento',
  },
  {
    id: 'financas-contabeis',
    title: 'Finanças Contábeis',
    category: 'Web App · Contabilidade',
    description:
      'Sistema de gestão contábil financeira para controle de receitas, despesas e relatórios. Desenvolvido com foco na organização de fluxo de caixa e visualização clara de dados financeiros.',
    tags: ['JavaScript', 'React'],
    github: 'https://github.com/Savitargood/Financias_Contabeis',
    live: 'https://financias-contabeis.lovable.app',
    image: '/projects/financas-contabeis.jpg',
    status: 'Ativo',
  },
  {
    id: 'topocart',
    title: 'Topocart Ghostly Tech',
    category: 'Ferramentas · Infraestrutura de TI',
    description:
      'Projeto desenvolvido durante atuação como Técnico N2 na Topocart. Automação de rotinas de suporte, diagnóstico de sistemas e ferramentas internas para otimização do fluxo operacional de TI.',
    tags: ['Python', 'Git', 'Terminal'],
    github: 'https://github.com/Savitargood/topocart-ghostly-tech',
    live: 'https://topocart-ghostly-tech.lovable.app',
    image: '/projects/topocart.jpg',
    status: 'Online',
  },
  {
    id: 'bellamassa',
    title: 'BellaMassa',
    category: 'Website · Pizzaria Artesanal',
    description:
      'Site completo para pizzaria artesanal com menu interativo por categoria, integração com WhatsApp para pedidos e reservas, galeria e SEO otimizado. Deploy automatizado via GitHub Actions.',
    tags: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
    github: 'https://github.com/Savitargood/bellamassa',
    live: 'https://savitargood.github.io/bellamassa/',
    image: '/projects/bellamassa.jpg',
    accentTitle: true,
  },
  {
    id: 'casprinutri',
    title: 'Casprinutri',
    category: 'Website · Nutrição Esportiva',
    description:
      'Plataforma web completa para nutricionista Clássia Prado com agendamento de consultas, prescrições online, portal de biblioteca de programas nutricionais personalizados e integração direta com WhatsApp e Instagram. 100% otimizada para mobile.',
    tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    image: '/projects/casprinutri.jpg',
    status: 'Ativo',
  },
  {
    id: 'gestao-condominial',
    title: 'Sistema de Gestão Condominial',
    category: 'Full Stack · Enterprise',
    description:
      'Plataforma web completa de gestão condominial com controle de portaria, registro de correspondências e sistema de avisos e moradores. Arquitetura do zero e publicação em produção para uma empresa de setor imobiliário.',
    tags: ['React', 'Node.js', 'PHP', 'Git'],
    image: '/projects/gestao-condominial.jpg',
    status: 'Interno',
    accentTitle: true,
  },
]

export const experiences = [
  {
    company: 'ASCON',
    role: 'Desenvolvedor de Software / Suporte Técnico',
    area: 'Full Stack',
    bullets: [
      'Desenvolvimento de plataformas web completas com React e Node.js',
      'Suporte técnico e manutenção de infraestrutura de TI',
    ],
  },
  {
    company: 'TOPOCART',
    role: 'Técnico de Suporte N2',
    area: 'Infraestrutura de TI',
    bullets: [
      'Diagnóstico e resolução de incidentes complexos em ambiente corporativo',
      'Automação de fluxos de suporte e ferramentas internas de TI',
    ],
  },
  {
    company: 'CASPRINUTRI',
    role: 'Administrativo',
    area: 'Administrativo',
    bullets: [
      'Gestão administrativa e organização de processos internos',
      'Apoio na operação de agendas e atendimentos',
    ],
  },
  {
    company: 'C&A',
    role: 'Operador de Vendas',
    area: 'Varejo',
    bullets: [
      'Atendimento consultivo direto ao público com foco em metas',
      'Desenvolvimento de inteligência emocional sob alto fluxo de demandas',
    ],
  },
] as const
