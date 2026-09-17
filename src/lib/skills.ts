export interface Skill {
  name: string
  level: number
  category: 'frontend' | 'backend' | 'tools'
  color: string
}

export const skills: Skill[] = [
  // Frontend
  { name: 'React',        level: 90, category: 'frontend', color: '#61dafb' },
  { name: 'TypeScript',   level: 85, category: 'frontend', color: '#3178c6' },
  { name: 'Tailwind CSS', level: 88, category: 'frontend', color: '#06b6d4' },
  { name: 'Framer Motion',level: 75, category: 'frontend', color: '#ff0055' },
  { name: 'JavaScript',   level: 92, category: 'frontend', color: '#f7df1e' },
  // Backend
  { name: 'Node.js',      level: 70, category: 'backend',  color: '#68a063' },
  { name: 'Supabase',     level: 72, category: 'backend',  color: '#3ecf8e' },
  { name: 'REST APIs',    level: 78, category: 'backend',  color: '#6366f1' },
  // Tools
  { name: 'Git / GitHub', level: 85, category: 'tools',    color: '#f05032' },
  { name: 'Vite',         level: 80, category: 'tools',    color: '#646cff' },
  { name: 'GitHub Actions',level: 68,category: 'tools',    color: '#2088ff' },
  { name: 'Vercel',       level: 75, category: 'tools',    color: '#ffffff' },
]
