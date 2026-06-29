/**
 * Autenticação simples.
 * Em modo mock, "login" só guarda uma flag local.
 * Quando o backend existir, troque enterApp() por uma chamada real que
 * recebe o token e salva em localStorage('mavis_token').
 */
const KEY = 'mavis_logged'

export const auth = {
  isLogged: () => localStorage.getItem(KEY) === '1',
  login: () => localStorage.setItem(KEY, '1'),
  logout: () => {
    localStorage.removeItem(KEY)
    localStorage.removeItem('mavis_token')
  },
}
