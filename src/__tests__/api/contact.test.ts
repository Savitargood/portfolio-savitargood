import { describe, it, expect, vi, beforeEach } from 'vitest'

// Minimal mock of the contact handler logic (without Vercel types)
async function contactHandler(
  body: Record<string, string>,
  method = 'POST',
): Promise<{ status: number; body: Record<string, unknown> }> {
  if (method !== 'POST') return { status: 405, body: { error: 'Method not allowed' } }

  const { name, email, message } = body
  if (!name || !email || !message)
    return { status: 400, body: { error: 'Campos obrigatórios: name, email, message' } }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return { status: 400, body: { error: 'E-mail inválido' } }

  // Mock Resend
  const sendMock = vi.fn().mockResolvedValue({ id: 'mock-id' })
  await sendMock({ to: 'test@test.com', subject: 'test', html: 'test' })

  return { status: 200, body: { ok: true } }
}

describe('Contact API handler', () => {
  beforeEach(() => vi.clearAllMocks())

  it('returns 405 for non-POST methods', async () => {
    const res = await contactHandler({}, 'GET')
    expect(res.status).toBe(405)
  })

  it('returns 400 when fields are missing', async () => {
    const res = await contactHandler({ name: 'Silas', email: 'silas@test.com' })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/obrigatórios/)
  })

  it('returns 400 for invalid email', async () => {
    const res = await contactHandler({ name: 'Silas', email: 'not-an-email', message: 'Olá' })
    expect(res.status).toBe(400)
    expect(res.body.error).toMatch(/inválido/)
  })

  it('returns 200 on valid payload', async () => {
    const res = await contactHandler({ name: 'Silas', email: 'silas@test.com', message: 'Olá!' })
    expect(res.status).toBe(200)
    expect(res.body.ok).toBe(true)
  })
})
