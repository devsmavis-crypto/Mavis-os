import { config } from './config'

/** Cliente HTTP mínimo. Usado pela camada de dados quando USE_MOCK = false. */
async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const token = localStorage.getItem('mavis_token')
  const res = await fetch(`${config.API_URL}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.headers ?? {}),
    },
  })
  if (!res.ok) throw new Error(`API ${res.status}: ${path}`)
  return res.status === 204 ? (undefined as T) : res.json()
}

export const api = {
  get: <T>(p: string) => request<T>(p),
  post: <T>(p: string, body?: unknown) =>
    request<T>(p, { method: 'POST', body: body ? JSON.stringify(body) : undefined }),
  put: <T>(p: string, body?: unknown) =>
    request<T>(p, { method: 'PUT', body: body ? JSON.stringify(body) : undefined }),
  del: <T>(p: string) => request<T>(p, { method: 'DELETE' }),
}
