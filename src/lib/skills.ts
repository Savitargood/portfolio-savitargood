export interface SkillGroup {
  icon: string
  label: string
  skills: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    icon: 'code',
    label: 'Linguagens',
    skills: ['JavaScript', 'TypeScript', 'Python', 'C#'],
  },
  {
    icon: 'layers',
    label: 'Frameworks & Bibliotecas',
    skills: ['React', 'Node.js', 'PHP'],
  },
  {
    icon: 'wrench',
    label: 'Ferramentas & Infraestrutura',
    skills: ['Git', 'GitHub', 'GitHub Actions', 'Linux', 'Windows', 'TCP/IP', 'Acesso Remoto', 'Terminal'],
  },
]

export const languages = [
  { name: 'Espanhol', level: 'C1 · Avançado', flag: '🇪🇸' },
  { name: 'Inglês', level: 'B1 · Pré-intermediário', flag: '🇬🇧' },
]
