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
  useScroll: () => ({ scrollY: { on: vi.fn(() => vi.fn()), get: vi.fn(() => 0) } }),
  useTransform: () => 0,
  useMotionValue: (v: number) => ({ set: vi.fn(), get: vi.fn(() => v), on: vi.fn(() => vi.fn()) }),
  useSpring: (v: unknown) => v,
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
    expect(screen.getByRole('link', { name: /Ver Projetos/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contato/i })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Hero />)
    expect(screen.getByLabelText('GitHub')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
