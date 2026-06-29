import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

/**
 * Modais estáticos do protótipo (cadastro de imóvel, termo Mav Imob e modal genérico).
 * Renderizados via portal direto no <body> para que o posicionamento `position:fixed`
 * seja sempre relativo à janela — e não a um ancestral com `transform` (o que jogava
 * o modal para o meio da página rolável em telas menores).
 * O engine os abre/fecha via openModal/closeModal/showInfo (funções globais).
 */
const MODAIS_HTML = `<!-- modal cadastro imóvel -->
<div class="modal-bg" id="modal-imovel">
  <div class="modal">
    <div class="modal-h"><div><h3>Adicionar imóvel ao meu site</h3><div class="muted" style="font-size:13px">Aparece no seu site público automaticamente</div></div><button class="x" onclick="closeModal('modal-imovel')">×</button></div>
    <div class="pad">
      <div class="field"><label>Nome do imóvel *</label><input class="inp" placeholder="Ex: Casa de Férias"></div>
      <div class="grid g2"><div class="field"><label>Tipo</label><input class="inp" placeholder="Casa / Apto / Terreno"></div><div class="field"><label>Preço (R$) *</label><input class="inp" placeholder="450.000"></div></div>
      <div class="field"><label>Localização *</label><input class="inp" placeholder="Rua, bairro, cidade"></div>
      <div class="grid g3"><div class="field"><label>Quartos</label><input class="inp" placeholder="3"></div><div class="field"><label>Banheiros</label><input class="inp" placeholder="2"></div><div class="field"><label>Vagas</label><input class="inp" placeholder="2"></div></div>
      <div class="perm" id="auto-share-row" style="background:var(--blue-50);border-color:var(--blue-100)">
        <div><div class="pt">Enviar automático pra Mav Imob</div><div class="pd" id="auto-share-desc">Termo aceito — este imóvel vai pra imobiliária virtual ao salvar.</div></div>
        <div class="tog on"></div>
      </div>
      <div class="row" style="justify-content:flex-end;margin-top:6px"><button class="btn-sm" onclick="closeModal('modal-imovel')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-imovel');toast('Imóvel publicado no seu site')">Publicar no meu site</button></div>
    </div>
  </div>
</div>

<!-- modal termo -->
<div class="modal-bg" id="modal-termo">
  <div class="modal" style="max-width:600px">
    <div class="modal-h"><div><h3>Aceitar termo da Mav Imob</h3><div class="muted" style="font-size:13px">Vale para todos os imóveis do seu site</div></div><button class="x" onclick="closeModal('modal-termo')">×</button></div>
    <div class="pad">
      <div class="commission" style="margin-bottom:16px"><div class="pct">70%</div><div><div style="font-weight:700">Sua comissão na venda</div><div class="muted" style="font-size:12.5px">A Mav Imob fica com 30% e assume tráfego, anúncio e negociação.</div></div></div>
      <p class="muted" style="font-size:13px;line-height:1.65;background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:14px">Ao aceitar, todo imóvel que você publicar no seu site passa <b style="color:var(--ink)">automaticamente</b> para a <b style="color:var(--ink)">Mav Imob</b>, que anuncia, gera tráfego pago e conduz a negociação. Você mantém o relacionamento e mostra o imóvel ao cliente, mas a venda é fechada pela imobiliária virtual. Concluída a venda, sua comissão é repassada automaticamente.</p>
      <label class="row" style="font-size:13px;font-weight:600;margin:14px 0;cursor:pointer;align-items:flex-start;gap:9px"><input type="checkbox" id="aceite" style="margin-top:2px;width:17px;height:17px;accent-color:var(--blue)"> Li e aceito os termos de compartilhamento da Mav Imob.</label>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-termo')">Cancelar</button><button class="btn-sm btn-blue" onclick="confirmTermo()">Aceitar termo</button></div>
    </div>
  </div>
</div>

<div class="modal-bg" id="modal-generic">
  <div class="modal" id="gm-modal">
    <div class="modal-h"><h3 id="gm-title"></h3><button class="x" onclick="closeModal('modal-generic')">×</button></div>
    <div class="pad" id="gm-body"></div>
  </div>
</div>

<!-- container dos modais de formulário do sistema (cadastro/perfil) -->
<div class="modal-bg" id="modal-form">
  <div class="modal modal-form" id="mf-modal"></div>
</div>

`

export function Modals() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (ref.current) ref.current.innerHTML = MODAIS_HTML
  }, [])
  return createPortal(<div ref={ref} />, document.body)
}
