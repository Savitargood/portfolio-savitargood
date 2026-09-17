import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

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

import Contact from '@/components/Contact'

describe('Contact form', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('renders all required fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Mensagem/i)).toBeInTheDocument()
  })

  it('shows success message when GitHub dispatch returns 204', async () => {
    vi.stubEnv('VITE_CONTACT_REPO', 'test/repo')
    vi.stubEnv('VITE_GITHUB_CONTACT_TOKEN', 'test-token')
    global.fetch = vi.fn().mockResolvedValue({ status: 204, ok: true })

    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Silas' } })
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'silas@test.com' } })
    fireEvent.change(screen.getByLabelText(/Mensagem/i), { target: { value: 'Olá!' } })
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    await waitFor(() => {
      expect(screen.getByText(/enviada com sucesso/i)).toBeInTheDocument()
    })
  })

  it('falls back to mailto when dispatch fails', async () => {
    vi.stubEnv('VITE_CONTACT_REPO', 'test/repo')
    vi.stubEnv('VITE_GITHUB_CONTACT_TOKEN', 'test-token')
    global.fetch = vi.fn().mockRejectedValue(new Error('network error'))

    render(<Contact />)
    fireEvent.change(screen.getByLabelText(/Nome/i), { target: { value: 'Silas' } })
    fireEvent.change(screen.getByLabelText(/E-mail/i), { target: { value: 'silas@test.com' } })
    fireEvent.change(screen.getByLabelText(/Mensagem/i), { target: { value: 'Olá!' } })
    fireEvent.click(screen.getByRole('button', { name: /Enviar/i }))

    await waitFor(() => {
      expect(screen.getByText(/Abrindo seu e-mail/i)).toBeInTheDocument()
    })
  })
})
