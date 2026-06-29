import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '@/lib/engine.js'
import { Modals } from '@/components/Modals'
import { initEnhancements } from '@/lib/enhance'

declare global {
  interface Window {
    renderMav?: () => void
    mavTab?: (t: string) => void
    mavView?: string
  }
}

/**
 * Ambiente Mav Imob (imobiliária virtual) — fiel ao protótipo v3.
 * O conteúdo (vitrine / gestão) é montado pelo engine via renderMav().
 */
export function MavImob() {
  const nav = useNavigate()
  const [tab, setTab] = useState<'vit' | 'ges'>('vit')

  useEffect(() => {
    // sincroniza a aba com a variável global do engine e re-renderiza
    window.mavView = tab
    if (window.renderMav) window.renderMav()
    initEnhancements()
  }, [tab])

  return (
    <div id="mav" className="view active" style={{ display: 'block' }}>
      <div className="mav-top">
        <div className="brand">
          <img
            className="logo-img"
            src="/brand/mav-imob-icon.png"
            alt="Mav Imob"
            style={{ width: 40, height: 40, objectFit: 'contain' }}
          />{' '}
          Mav Imob{' '}
          <span style={{ color: '#7E92BB', fontWeight: 600, fontSize: 12, marginLeft: 4 }}>
            imobiliária virtual
          </span>
        </div>
        <div className="mav-tabs">
          <button className={tab === 'vit' ? 'on' : ''} onClick={() => setTab('vit')}>
            Vitrine
          </button>
          <button className={tab === 'ges' ? 'on' : ''} onClick={() => setTab('ges')}>
            Gestão
          </button>
        </div>
        <button className="mav-back" onClick={() => nav('/app/dashboard')}>
          ← Voltar ao Mavis OS
        </button>
      </div>
      <div className="mav-wrap" id="mav-content" />
      <Modals />
    </div>
  )
}
