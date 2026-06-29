import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { auth } from '@/lib/auth'
import '@/lib/engine.js'
import { Modals } from '@/components/Modals'
import { initEnhancements } from '@/lib/enhance'
import { t, setLang as i18nSetLang, getLang } from '@/lib/i18n'

/** Ícone do sprite (definido em index.html). */
function Icon({ id, className = 'ic' }: { id: string; className?: string }) {
  return (
    <svg className={className} aria-hidden="true">
      <use href={`#${id}`} />
    </svg>
  )
}

/** Itens do menu — agora com ícones SVG (sem emoji). */
const NAV = [
  { s: 'dashboard', i: 'i-grid', l: 'Dashboard' },
  { s: 'agenda', i: 'i-calendar', l: 'Agenda' },
  { s: 'imoveis', i: 'i-home', l: 'Imóveis' },
  { s: 'locacoes', i: 'i-key', l: 'Locações' },
  { s: 'site', i: 'i-globe', l: 'Meu site' },
  { s: 'leads', i: 'i-funnel', l: 'Leads & Funil' },
  { s: 'metas', i: 'i-target', l: 'Metas' },
  { s: 'integracoes', i: 'i-swap', l: 'Integrações' },
  { s: 'campanhas', i: 'i-megaphone', l: 'Campanhas & Tráfego' },
  { s: 'secretarias', i: 'i-headset', l: 'Secretarias' },
  { s: 'agente', i: 'i-bolt', l: 'Agente & WhatsApp' },
  { s: 'colaboradores', i: 'i-users', l: 'Colaboradores' },
  { s: 'contratos', i: 'i-doc', l: 'Contratos' },
  { s: 'relatorios', i: 'i-chart', l: 'Relatórios' },
] as const

const NAV_CONTA = [
  { s: 'financeiro', i: 'i-money', l: 'Financeiro' },
  { s: 'portal', i: 'i-window', l: 'Portal do cliente' },
  { s: 'chamados', i: 'i-lifebuoy', l: 'Suporte / SAC' },
  { s: 'notificacoes', i: 'i-bell', l: 'Notificações' },
  { s: 'treinamento', i: 'i-play', l: 'Treinamento' },
  { s: 'config', i: 'i-settings', l: 'Configurações' },
] as const

type LangOpt = { code: string; label: string; name: string; abbr: string }
const LANGS: LangOpt[] = [
  { code: 'pt', label: 'PT-BR', name: 'Português (Brasil)', abbr: 'BR' },
  { code: 'en', label: 'EN', name: 'English (US)', abbr: 'US' },
  { code: 'es', label: 'ES', name: 'Español', abbr: 'ES' },
]

type NotifItem = { icon: string; color: string; title: string; desc: string; time: string; unread: boolean }
const NOTIF_GERAIS: NotifItem[] = [
  { icon: 'i-users', color: '#2F6BFF', title: 'Novo lead recebido', desc: 'Casa de Férias · via OLX', time: 'há 2 h', unread: true },
  { icon: 'i-calendar', color: '#F59E0B', title: 'Visita confirmada', desc: 'Casa de Férias · hoje às 15h', time: 'há 3 h', unread: true },
  { icon: 'i-doc', color: '#8B5CF6', title: 'Proposta recebida', desc: 'Casa de Férias · aguardando análise', time: 'ontem', unread: true },
  { icon: 'i-chat', color: '#16A34A', title: 'Nova mensagem no WhatsApp', desc: 'Cliente pediu mais fotos do imóvel', time: 'ontem', unread: false },
]
const NOTIF_SISTEMA: NotifItem[] = [
  { icon: 'i-bolt', color: '#5B8BFF', title: 'Atualização disponível', desc: 'Nova versão do Mavis OS com melhorias no funil', time: 'há 1 d', unread: true },
  { icon: 'i-money', color: '#F7B23B', title: 'Fatura do Mavis OS', desc: 'R$ 799 · vence em 12/07', time: 'há 2 d', unread: true },
  { icon: 'i-shield', color: '#34D399', title: 'Backup concluído', desc: 'Seus dados foram salvos com segurança', time: 'há 3 d', unread: false },
]

declare global {
  interface Window {
    __mavisBridge?: any
    __mavisEngine?: any
    showScreen?: (name: string) => void
  }
}

export function AppShell() {
  const nav = useNavigate()
  const { '*': splat } = useParams()
  const screen = (splat || 'dashboard').replace(/\/.*/, '') || 'dashboard'
  const [active, setActive] = useState(screen)
  const [navOpen, setNavOpen] = useState(false)
  const [hideTop, setHideTop] = useState(false)
  const [openMenu, setOpenMenu] = useState<null | 'lang' | 'notif'>(null)
  const [lang, setLang] = useState(() => {
    const c = getLang()
    return c === 'en' ? 'EN' : c === 'es' ? 'ES' : 'PT-BR'
  })
  const [notifTab, setNotifTab] = useState<'gerais' | 'sistema'>('gerais')
  const [notifRead, setNotifRead] = useState(false)
  const lastY = useRef(0)
  const [theme, setTheme] = useState<string>(
    () => document.documentElement.getAttribute('data-theme') || 'dark',
  )
  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', next)
    try {
      localStorage.setItem('mavis-theme', next)
    } catch {
      /* ignore */
    }
    setTheme(next)
  }
  const mounted = useRef(false)

  // Conecta a ponte do engine ao React Router.
  useEffect(() => {
    window.__mavisBridge = {
      onScreen: (name: string) => setActive(name),
      onGo: (where: string) => {
        if (where === 'mav') nav('/mav')
        if (where === 'login') {
          auth.logout()
          nav('/login')
        }
      },
      onLogout: () => {
        auth.logout()
        nav('/login')
      },
      onOpenMav: () => nav('/mav'),
    }
    mounted.current = true
    initEnhancements()
  }, [nav])

  // Sempre que a tela mudar (URL ou clique), pede ao engine para renderizar.
  useEffect(() => {
    if (window.showScreen) window.showScreen(active)
    nav(`/app/${active}`, { replace: true })
    setNavOpen(false)
  }, [active]) // eslint-disable-line

  // Cabeçalho some ao descer a página e reaparece ao subir (mesmo lá embaixo).
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop || 0
      const last = lastY.current
      if (y < 8) setHideTop(false)
      else if (y > last + 4 && y > 72) {
        setHideTop(true)
        setOpenMenu(null)
      } else if (y < last - 4) setHideTop(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fecha os menus da topbar ao clicar fora ou apertar Esc.
  useEffect(() => {
    if (!openMenu) return
    const onDoc = (e: Event) => {
      if (!(e.target as HTMLElement).closest('.tb-pop-wrap')) setOpenMenu(null)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [openMenu])


  return (
    <div className={`app${navOpen ? ' nav-open' : ''}`}>
      <div className="side-backdrop" onClick={() => setNavOpen(false)} />
      <aside className="side">
        <div className="brand brand-side">
          <img className="logo-side" src="/brand/mavis-os-full.png" alt="Mavis OS" />
          <img className="logo-side-icon" src="/brand/mavis-os-icon.png" alt="Mavis OS" />
        </div>
        <nav className="nav" id="nav">
          {NAV.map((n) => (
            <a
              key={n.s}
              data-screen={n.s}
              title={t(n.l)}
              className={active === n.s ? 'active' : ''}
              onClick={() => setActive(n.s)}
            >
              <Icon id={n.i} /> <span className="nav-l">{t(n.l)}</span>
            </a>
          ))}
          <div className="grp">{t('Conta & gestão')}</div>
          {NAV_CONTA.map((n) => (
            <a
              key={n.s}
              data-screen={n.s}
              title={t(n.l)}
              className={active === n.s ? 'active' : ''}
              onClick={() => setActive(n.s)}
            >
              <Icon id={n.i} /> <span className="nav-l">{t(n.l)}</span>
            </a>
          ))}
          <div className="grp">{t('Imobiliária virtual')}</div>
          <a
            onClick={() => nav('/mav')}
            title={t('Abrir Mav Imob')}
            style={{ background: 'var(--blue-50)', color: 'var(--blue-bright)' }}
          >
            <Icon id="i-star" /> <span className="nav-l">{t('Abrir Mav Imob')}</span>
          </a>
        </nav>
        <div
          className="side-foot"
          role="button"
          tabIndex={0}
          title="Configurações do perfil"
          onClick={() => (window as unknown as { abrirPerfil?: () => void }).abrirPerfil?.()}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              ;(window as unknown as { abrirPerfil?: () => void }).abrirPerfil?.()
            }
          }}
        >
          <div className="avatar">
            PC
            <img
              src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=96&h=96&fit=crop&crop=faces&q=80"
              alt="Paulo Cesar"
              onError={(e) => e.currentTarget.remove()}
            />
          </div>
          <div>
            <div style={{ fontWeight: 700 }}>Paulo Cesar</div>
            <div className="muted" style={{ fontSize: 11 }}>
              Alpha Imóveis · Admin
            </div>
          </div>
        </div>
      </aside>

      <div className="main">
        <div className={`topbar${hideTop ? ' topbar-hidden' : ''}`}>
          <button className="menu-toggle" onClick={() => setNavOpen(true)} aria-label="Menu">
            <Icon id="i-menu" />
          </button>
          <div className="topbar-ctx" id="topbar-ctx">Dashboard</div>
          <div className="top-right">
            <span className="pill">{t('Logado como Admin')}</span>
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
              title={theme === 'light' ? 'Modo escuro' : 'Modo claro'}
            >
              <Icon id={theme === 'light' ? 'i-moon' : 'i-sun'} />
            </button>
            <div className="tb-pop-wrap">
              <button
                type="button"
                className={`tb-icbtn tb-bell${openMenu === 'notif' ? ' on' : ''}`}
                aria-label="Notificações"
                onClick={() => {
                  setOpenMenu(openMenu === 'notif' ? null : 'notif')
                  setNotifTab('gerais')
                }}
              >
                <Icon id="i-bell" />
                {!notifRead &&
                  NOTIF_GERAIS.filter((n) => n.unread).length +
                    NOTIF_SISTEMA.filter((n) => n.unread).length >
                    0 && (
                    <span className="tb-badge">
                      {NOTIF_GERAIS.filter((n) => n.unread).length +
                        NOTIF_SISTEMA.filter((n) => n.unread).length}
                    </span>
                  )}
              </button>
              {openMenu === 'notif' && (
                <div className="tb-pop tb-pop-notif" role="menu">
                  <div className="tb-notif-head">
                    <span className="tb-notif-title">{t('Notificações')}</span>
                    <button type="button" className="tb-notif-mark" onClick={() => setNotifRead(true)}>
                      {t('Marcar como lidas')}
                    </button>
                  </div>
                  <div className="tb-tabs" role="tablist">
                    <button
                      type="button"
                      role="tab"
                      className={`tb-tab${notifTab === 'gerais' ? ' on' : ''}`}
                      onClick={() => setNotifTab('gerais')}
                    >
                      {t('Notificações gerais')}
                      {!notifRead && NOTIF_GERAIS.some((n) => n.unread) && (
                        <span className="tb-tab-ct">{NOTIF_GERAIS.filter((n) => n.unread).length}</span>
                      )}
                    </button>
                    <button
                      type="button"
                      role="tab"
                      className={`tb-tab${notifTab === 'sistema' ? ' on' : ''}`}
                      onClick={() => setNotifTab('sistema')}
                    >
                      {t('Do sistema')}
                      {!notifRead && NOTIF_SISTEMA.some((n) => n.unread) && (
                        <span className="tb-tab-ct">{NOTIF_SISTEMA.filter((n) => n.unread).length}</span>
                      )}
                    </button>
                  </div>
                  <div className="tb-notif-list">
                    {(notifTab === 'gerais' ? NOTIF_GERAIS : NOTIF_SISTEMA).map((n, i) => {
                      const unread = n.unread && !notifRead
                      return (
                        <div key={i} className={`tb-notif-item${unread ? ' unread' : ''}`}>
                          <span className="tb-notif-ic" style={{ background: n.color + '22', color: n.color }}>
                            <Icon id={n.icon} />
                          </span>
                          <div className="tb-notif-tx">
                            <div className="tb-notif-t">{t(n.title)}</div>
                            <div className="tb-notif-d">{t(n.desc)}</div>
                            <div className="tb-notif-time">{n.time}</div>
                          </div>
                          {unread && <span className="tb-notif-dot" />}
                        </div>
                      )
                    })}
                  </div>
                  <button
                    type="button"
                    className="tb-notif-foot"
                    onClick={() => {
                      setOpenMenu(null)
                      setActive('notificacoes')
                    }}
                  >
                    {t('Ver todas as notificações')}
                  </button>
                </div>
              )}
            </div>
            <div className="tb-pop-wrap">
              <button
                type="button"
                className={`tb-langbtn${openMenu === 'lang' ? ' on' : ''}`}
                aria-label={t('Idioma')}
                onClick={() => setOpenMenu(openMenu === 'lang' ? null : 'lang')}
              >
                <Icon id="i-globe" />
                <span className="tb-lang-l">{lang}</span>
                <svg className="ic tb-chev" aria-hidden="true">
                  <use href="#i-forward" />
                </svg>
              </button>
              {openMenu === 'lang' && (
                <div className="tb-pop tb-pop-lang" role="menu">
                  <div className="tb-pop-head">{t('Idioma')}</div>
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      type="button"
                      role="menuitemradio"
                      aria-checked={lang === l.label}
                      className={`tb-lang-opt${lang === l.label ? ' sel' : ''}`}
                      onClick={() => {
                        i18nSetLang(l.code)
                        setLang(l.label)
                        setOpenMenu(null)
                      }}
                    >
                      <span className="tb-lang-flag">{l.abbr}</span>
                      <span className="tb-lang-nm">
                        {l.name}
                        <small>{l.label}</small>
                      </span>
                      <svg className="ic tb-lang-chk" aria-hidden="true">
                        <use href="#i-check" />
                      </svg>
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              className="btn-sair"
              onClick={() => {
                auth.logout()
                nav('/login')
              }}
            >
              <Icon id="i-power" /> {t('Sair')}
            </button>
          </div>
        </div>
        {/* O engine do protótipo monta cada tela aqui dentro */}
        <div className="content" id="content" />
        <Modals />
      </div>
    </div>
  )
}
