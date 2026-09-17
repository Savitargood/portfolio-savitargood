import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'

// Simple framer-motion mock — avoids IntersectionObserver / animation issues
vi.mock('framer-motion', () => ({
  motion: new Proxy(
    {},
    {
      get: (_t, tag: string) =>
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ({ children, ...rest }: any) => {
          const { animate: _a, initial: _i, transition: _t2, whileHover: _wh, whileTap: _wt,
                  whileInView: _wiv, viewport: _vp, variants: _v, layout: _l, style: _s, ...domProps } = rest
          const Tag = tag as keyof JSX.IntrinsicElements
          return <Tag {...domProps}>{children}</Tag>
        },
    },
  ),
  AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
}))

import Hero from '@/components/Hero'

describe('Hero', () => {
  it('renders the developer name', () => {
    render(<Hero />)
    expect(screen.getByText(/Silas/i)).toBeInTheDocument()
    expect(screen.getByText(/Victor/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Ver projetos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Entrar em contato/i })).toBeInTheDocument()
  })

  it('renders stats', () => {
    render(<Hero />)
    expect(screen.getAllByText('57+').length).toBeGreaterThan(0)
    expect(screen.getByText(/Repositórios no GitHub/i)).toBeInTheDocument()
  })

  it('renders GitHub link', () => {
    render(<Hero />)
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
  })
})
