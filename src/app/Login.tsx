import { useNavigate } from 'react-router-dom'
import { auth } from '@/lib/auth'
import { config } from '@/lib/config'
import { useEffect, useRef, useState } from 'react'

/**
 * Tela de login — versão premium (fundo animado, card glass, mostrar/ocultar
 * senha, lembrar-me, recuperação de senha e login social).
 *
 * Modo mock: qualquer e-mail/senha entra (só marca a flag local).
 * Backend real: troque o corpo de entrar() pela chamada à API de auth,
 *               salvando o token em localStorage('mavis_token').
 */

const Mail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m3.5 7.5 8.5 6 8.5-6" /></svg>
)
const Lock = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10.5" width="16" height="10" rx="2.5" /><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" /></svg>
)
const Eye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
)
const EyeOff = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M10.7 6.2A9.8 9.8 0 0 1 12 6c6.5 0 10 6 10 6a17 17 0 0 1-3 3.6M6.4 7.4A17 17 0 0 0 2 12s3.5 6 10 6a9.7 9.7 0 0 0 4-.8" /><path d="m4 4 16 16" /><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" /></svg>
)
const ArrowR = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
)
const ArrowL = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
)
const Check = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m4 12.5 5 5 11-11" /></svg>
)
const Shield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z" /><path d="m9 12 2 2 4-4" /></svg>
)
const Bot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 8V4M8.5 13h.01M15.5 13h.01M9 17h6" /></svg>
)
const Chat = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a8 8 0 0 1-11.5 7.2L4 20.5l1.3-5A8 8 0 1 1 21 12Z" /></svg>
)
const Target = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" fill="currentColor" /></svg>
)
const Star = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3.5 2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9L12 3.5Z" /></svg>
)
const Google = () => (
  <svg viewBox="0 0 24 24"><path fill="#FFC107" d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5a4.7 4.7 0 0 1-2 3.1v2.6h3.3c1.9-1.8 3-4.4 3-7.5Z" /><path fill="#FF3D00" d="M12 22c2.7 0 5-.9 6.7-2.4l-3.3-2.6c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H2.9v2.6A10 10 0 0 0 12 22Z" transform="translate(0 0)" /><path fill="#4CAF50" d="M6.4 13.9a6 6 0 0 1 0-3.8V7.5H2.9a10 10 0 0 0 0 9l3.5-2.6Z" /><path fill="#1976D2" d="M12 6.1c1.5 0 2.8.5 3.8 1.5l2.9-2.9A10 10 0 0 0 2.9 7.5l3.5 2.6C7.2 7.9 9.4 6.1 12 6.1Z" /></svg>
)

export function Login() {
  const nav = useNavigate()
  const [view, setView] = useState<'login' | 'forgot' | 'sent'>('login')
  const [email, setEmail] = useState('paulo.cesar@mavimob.com.br')
  const [senha, setSenha] = useState('demo123456')
  const [show, setShow] = useState(false)
  const [remember, setRemember] = useState(true)
  const [recEmail, setRecEmail] = useState('')
  const cardRef = useRef<HTMLDivElement>(null)

  /* ----------------------------------------------------------------------
   * Efeito "border glow": a borda/halo do card reage ao ponteiro.
   *  - --cursor-angle: ângulo do centro do card até o cursor (0deg = topo).
   *  - --edge-proximity (0–100): quão perto da borda o cursor está
   *    (100 = junto da borda, 0 = no centro). Define a intensidade.
   * Ao montar, executa uma "varredura" única de luz ao redor da borda.
   * Respeita prefers-reduced-motion (sem varredura automática).
   * -------------------------------------------------------------------- */
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const FALLOFF = 110 // px: alcance a partir da borda em que o brilho some

    let raf = 0
    let pending: { x: number; y: number } | null = null

    const apply = () => {
      raf = 0
      if (!pending) return
      const r = card.getBoundingClientRect()
      if (r.width === 0 || r.height === 0) return
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = pending.x - cx
      const dy = pending.y - cy
      // ângulo para o conic-gradient: 0deg no topo, crescendo em sentido horário
      const angle = (Math.atan2(dy, dx) * 180) / Math.PI + 90
      // distância do cursor até a borda do retângulo (por dentro do card)
      const scale =
        1 / Math.max(Math.abs(dx) / (r.width / 2), Math.abs(dy) / (r.height / 2), 1e-4)
      const edgeDist = Math.hypot(dx * scale, dy * scale)
      const distToEdge = Math.abs(Math.hypot(dx, dy) - edgeDist)
      const proximity = Math.max(0, Math.min(100, 100 - (distToEdge / FALLOFF) * 100))
      card.style.setProperty('--cursor-angle', angle.toFixed(2) + 'deg')
      card.style.setProperty('--edge-proximity', proximity.toFixed(2))
    }
    const onMove = (e: PointerEvent) => {
      pending = { x: e.clientX, y: e.clientY }
      if (!raf) raf = requestAnimationFrame(apply)
    }
    card.addEventListener('pointermove', onMove, { passive: true })

    // varredura de entrada (uma volta de luz ao redor da borda)
    let sweepRaf = 0
    if (!reduce) {
      card.classList.add('sweep-active')
      const start = performance.now()
      const DUR = 1500
      const sweep = (now: number) => {
        const t = Math.min(1, (now - start) / DUR)
        const e = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2 // easeInOut
        card.style.setProperty('--cursor-angle', (e * 360 - 90).toFixed(2) + 'deg')
        card.style.setProperty('--edge-proximity', (Math.sin(t * Math.PI) * 90).toFixed(2))
        if (t < 1) sweepRaf = requestAnimationFrame(sweep)
        else {
          card.classList.remove('sweep-active')
          card.style.setProperty('--edge-proximity', '0')
        }
      }
      sweepRaf = requestAnimationFrame(sweep)
    }

    return () => {
      card.removeEventListener('pointermove', onMove)
      if (raf) cancelAnimationFrame(raf)
      if (sweepRaf) cancelAnimationFrame(sweepRaf)
      card.classList.remove('sweep-active')
    }
  }, [])

  async function entrar() {
    if (!config.USE_MOCK) {
      // Exemplo p/ quando o backend existir:
      // const r = await api.post<{ token: string }>('/auth/login', { email, senha })
      // localStorage.setItem('mavis_token', r.token)
    }
    auth.login()
    nav('/app/dashboard')
  }
  function enviarRecuperacao() {
    setView('sent')
  }

  return (
    <section id="login" className="view active lg-root">
      <div className="lg-bg" aria-hidden="true">
        <span className="lg-orb lg-orb-1" />
        <span className="lg-orb lg-orb-2" />
        <span className="lg-orb lg-orb-3" />
        <div className="lg-grid" />
      </div>

      <div className="lg-shell">
        {/* ---------- HERO ---------- */}
        <aside className="lg-art">
          <div className="lg-brand">
            <img className="lg-logo" src="/brand/mavis-os-white.png" alt="Mavis OS" />
          </div>
          <div className="lg-hero">
            <span className="lg-eyebrow">Sistema para imobiliárias</span>
            <h1>
              O sistema operacional<br />
              da <span className="grad">sua imobiliária.</span>
            </h1>
            <p>
              Atende, qualifica, agenda e vende — por conversa. E com a Mav Imob, seus
              imóveis em destaque ganham tráfego e venda assistida, com comissão de volta
              pra você.
            </p>
            <div className="lg-feats">
              <div className="lg-feat"><span className="lg-fic"><Chat /></span> Atendimento por IA 24/7, em todos os canais</div>
              <div className="lg-feat"><span className="lg-fic"><Bot /></span> Secretária-agente conectada ao WhatsApp</div>
              <div className="lg-feat"><span className="lg-fic"><Target /></span> Funil, visitas e contratos num só lugar</div>
              <div className="lg-feat"><span className="lg-fic"><Star /></span> Mav Imob — imobiliária virtual com venda assistida</div>
            </div>
            <div className="lg-trust">
              <div><b>24/7</b><span>atendimento automático</span></div>
              <div><b>1 clique</b><span>relatórios por período</span></div>
              <div><b>Mav Imob</b><span>tráfego + comissão</span></div>
            </div>
          </div>
        </aside>

        {/* ---------- FORM ---------- */}
        <div className="lg-panel">
          <div className="lg-card border-glow-card" ref={cardRef}>
            <div className="border-glow-inner">
            {view === 'login' && (
              <div className="lg-view" key="login">
                <div className="lg-head">
                  <h2>Bem-vindo de volta</h2>
                  <p>Acesse o painel da sua imobiliária.</p>
                </div>
                <div className="lg-field">
                  <span className="lg-ic"><Mail /></span>
                  <input className="lg-inp" type="email" autoComplete="email" placeholder="seu@email.com"
                    value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="lg-field has-eye">
                  <span className="lg-ic"><Lock /></span>
                  <input className="lg-inp" type={show ? 'text' : 'password'} autoComplete="current-password" placeholder="Sua senha"
                    value={senha} onChange={(e) => setSenha(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') entrar() }} />
                  <button type="button" className="lg-eye" onClick={() => setShow(!show)}
                    aria-label={show ? 'Ocultar senha' : 'Mostrar senha'}>
                    {show ? <EyeOff /> : <Eye />}
                  </button>
                </div>
                <div className="lg-row">
                  <label className="lg-check">
                    <input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} />
                    <span><Check /></span>
                    Lembrar de mim
                  </label>
                  <a className="lg-link" onClick={() => setView('forgot')}>Esqueci minha senha</a>
                </div>
                <button className="lg-btn" onClick={entrar}>Entrar no Mavis OS <ArrowR /></button>
                <div className="lg-or"><span>ou</span></div>
                <button className="lg-ghost" onClick={entrar}><Google /> Entrar com Google</button>
                <div className="lg-foot">Ainda não usa o Mavis OS? <a onClick={entrar}>Falar com vendas</a></div>
              </div>
            )}

            {view === 'forgot' && (
              <div className="lg-view" key="forgot">
                <button type="button" className="lg-back" onClick={() => setView('login')}><ArrowL /> Voltar</button>
                <div className="lg-head">
                  <h2>Recuperar senha</h2>
                  <p>Informe o e-mail da conta e enviaremos um link para redefinir sua senha.</p>
                </div>
                <div className="lg-field">
                  <span className="lg-ic"><Mail /></span>
                  <input className="lg-inp" type="email" autoComplete="email" placeholder="seu@email.com"
                    value={recEmail} onChange={(e) => setRecEmail(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter') enviarRecuperacao() }} />
                </div>
                <button className="lg-btn" onClick={enviarRecuperacao}>Enviar link de recuperação <ArrowR /></button>
                <div className="lg-foot">Lembrou a senha? <a onClick={() => setView('login')}>Voltar ao login</a></div>
              </div>
            )}

            {view === 'sent' && (
              <div className="lg-view lg-sent" key="sent">
                <div className="lg-sent-ic"><Check /></div>
                <div className="lg-head" style={{ textAlign: 'center' }}>
                  <h2>Verifique seu e-mail</h2>
                  <p>Enviamos um link de redefinição para <b>{recEmail || email}</b>. O link expira em 30 minutos.</p>
                </div>
                <button className="lg-btn" onClick={() => setView('login')}>Voltar ao login</button>
                <div className="lg-foot">Não recebeu? <a onClick={enviarRecuperacao}>Reenviar e-mail</a></div>
              </div>
            )}
            </div>
            <span className="edge-light" aria-hidden="true" />
          </div>
          <div className="lg-legal"><Shield /> Protegido com criptografia ponta a ponta · Mavis OS</div>
        </div>
      </div>
    </section>
  )
}
