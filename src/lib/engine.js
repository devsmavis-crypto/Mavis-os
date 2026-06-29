
let termoAceito = true; // corretor já aceitou (demonstração)
let mavView = 'vit';
let dominioTipo = 'sub'; // 'sub' = subdomínio Mavis OS | 'proprio' = domínio próprio
function setDominio(t){ dominioTipo = t; showScreen('site'); }

// ===== Logos reais das integrações (SVG inline, sem dependência externa) =====
function brandLogo(name, color){
  const P = {
    instagram: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077",
    tiktok: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
    googleads: "M3.9998 22.9291C1.7908 22.9291 0 21.1383 0 18.9293s1.7908-3.9998 3.9998-3.9998 3.9998 1.7908 3.9998 3.9998-1.7908 3.9998-3.9998 3.9998zm19.4643-6.0004L15.4632 3.072C14.3586 1.1587 11.9121.5028 9.9988 1.6074S7.4295 5.1585 8.5341 7.0718l8.0009 13.8567c1.1046 1.9133 3.5511 2.5679 5.4644 1.4646 1.9134-1.1046 2.568-3.5511 1.4647-5.4644zM7.5137 4.8438L1.5645 15.1484A4.5 4.5 0 0 1 4 14.4297c2.5597-.0075 4.6248 2.1585 4.4941 4.7148l3.2168-5.5723-3.6094-6.25c-.4499-.7793-.6322-1.6394-.5878-2.4784z",
    whatsapp: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
  };
  const fbF = "M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z";
  const wrap = (bg, inner) => '<svg viewBox="0 0 24 24" width="100%" height="100%" style="display:block" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><rect width="24" height="24" rx="6.4" fill="'+bg+'"/>'+inner+'</svg>';
  const g24 = (d, s, fill) => { s=s||0.64; fill=fill||'#fff'; const o=(24-24*s)/2; return '<g transform="translate('+o+','+o+') scale('+s+')"><path d="'+d+'" fill="'+fill+'"/></g>'; };
  const txt = (s, size, ls) => '<text x="12" y="12" text-anchor="middle" dominant-baseline="central" fill="#fff" font-family="Arial,Helvetica,sans-serif" font-weight="800" font-size="'+size+'" letter-spacing="'+(ls||0)+'">'+s+'</text>';
  switch(name){
    case 'Facebook': return wrap('#1877F2', '<g transform="translate(7.7,4.6) scale(0.029)"><path d="'+fbF+'" fill="#fff"/></g>');
    case 'Facebook Marketplace': return wrap('#1877F2', '<path d="M4 7.6 5.6 5h12.8L20 7.6v1a1.9 1.9 0 0 1-3.8 0 1.9 1.9 0 0 1-3.8 0 1.9 1.9 0 0 1-3.8 0 1.9 1.9 0 0 1-3.8 0z" fill="#fff"/><path d="M5.4 9.9v8.6h5.1v-5h3v5h5.1V9.9" fill="none" stroke="#fff" stroke-width="1.5"/>');
    case 'Instagram': return '<svg viewBox="0 0 24 24" width="100%" height="100%" style="display:block" preserveAspectRatio="xMidYMid meet" aria-hidden="true"><defs><linearGradient id="igb" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#FEDA75"/><stop offset=".25" stop-color="#FA7E1E"/><stop offset=".5" stop-color="#D62976"/><stop offset=".75" stop-color="#962FBF"/><stop offset="1" stop-color="#4F5BD5"/></linearGradient></defs><rect width="24" height="24" rx="6.4" fill="url(#igb)"/>'+g24(P.instagram,0.62)+'</svg>';
    case 'TikTok': { const s=0.62,o=(24-24*s)/2,off=0.55; const L=(dx,f)=>'<g transform="translate('+(o+dx)+','+o+') scale('+s+')"><path d="'+P.tiktok+'" fill="'+f+'"/></g>'; return wrap('#010101', L(off,'#25F4EE')+L(-off,'#FE2C55')+L(0,'#fff')); }
    case 'Google Ads': return wrap(color||'#4285F4', g24(P.googleads,0.6));
    case 'WhatsApp': return wrap('#25D366', g24(P.whatsapp,0.62));
    case 'OLX': return wrap(color||'#6E0AD6', txt('OLX',8.4,-0.2));
    case 'Zap Imóveis': return wrap(color||'#0A66C2', txt('ZAP',8.2,-0.3));
    case 'ImovelWeb': return wrap(color||'#E5292E', txt('iw',10,-0.4));
    case 'Viva Real': return wrap(color||'#FF6B00', '<path d="M12 6 6 11h1.6v6.5h8.8V11H18z" fill="#fff"/>');
    case 'Chaves na Mão': return wrap(color||'#00A859', '<circle cx="14.4" cy="9.6" r="3" fill="none" stroke="#fff" stroke-width="1.7"/><path d="M12.5 11.5 6.8 17.2M9.7 14.6l1.4 1.4M7.9 16.4l1.4 1.4" fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round"/>');
    default: return wrap(color||'#888', txt((name&&name[0])||'?',11,0));
  }
}


// ===== Templates de site (5 estilos com cores próprias) =====
let siteTpl = 'moderno';
const TEMPLATES = {
  moderno:  {nome:'Moderno',  desc:'Clean e minimalista, foco na foto', bar:'linear-gradient(135deg,#1E5BFF,#0B2A7A)', hero:'linear-gradient(135deg,#1E5BFF,#0B2A7A)', bg:'#F4F7FE', text:'#0B1B3A', accent:'#1E5BFF', card:'#FFFFFF', dark:false, radius:'16px'},
  elegante: {nome:'Elegante', desc:'Sofisticado, escuro e dourado',     bar:'linear-gradient(135deg,#1A1A2E,#C9A227)', hero:'linear-gradient(135deg,#15151F,#2A2A40)', bg:'#15151F', text:'#F5EFE0', accent:'#C9A227', card:'#1F1F2E', dark:true, radius:'10px'},
  vibrante: {nome:'Vibrante', desc:'Cores fortes, ideal p/ lançamentos', bar:'linear-gradient(135deg,#E1306C,#F59E0B)', hero:'linear-gradient(135deg,#E1306C,#F59E0B)', bg:'#FFF6F9', text:'#3A0A1E', accent:'#E1306C', card:'#FFFFFF', dark:false, radius:'20px'},
  classico: {nome:'Clássico', desc:'Sóbrio e tradicional, alto padrão',  bar:'linear-gradient(135deg,#0F4C3A,#1B7A5A)', hero:'linear-gradient(135deg,#0F4C3A,#1B7A5A)', bg:'#F5F7F4', text:'#10261C', accent:'#0F4C3A', card:'#FFFFFF', dark:false, radius:'6px'},
  compacto: {nome:'Compacto', desc:'Direto ao ponto, carrega rápido',    bar:'linear-gradient(135deg,#0EA5E9,#1E5BFF)', hero:'linear-gradient(135deg,#0EA5E9,#1E5BFF)', bg:'#FFFFFF', text:'#0B2540', accent:'#0EA5E9', card:'#F4F9FF', dark:false, radius:'12px'},
};
function selectTplId(tid){ siteTpl = tid; showScreen('site'); siteTab(document.querySelectorAll('#content .tabs button')[1],'design'); }

const SITE_IMOVEIS = [
  ['Casa de Férias','São Paulo','2.000.000','3 quartos · 2 vagas · 220m²','https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=70'],
  ['Apartamento Centro','Av. Paulista','680.000','2 quartos · 1 vaga · 75m²','https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=70'],
  ['Cobertura Duplex','Jardins','3.400.000','4 quartos · 3 vagas · 310m²','https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=70'],
  ['Casa Moderna','Alphaville','1.250.000','3 quartos · 2 vagas · 180m²','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=70'],
  ['Loft Industrial','Vila Madalena','890.000','1 suíte · 1 vaga · 90m²','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=70'],
  ['Sobrado Premium','Morumbi','2.700.000','4 quartos · 4 vagas · 280m²','https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=70'],
];
function siteTemplateHTML(tid){
  const t = TEMPLATES[tid];
  const sub = t.dark ? 'rgba(255,255,255,.6)' : 'rgba(0,0,0,.5)';
  const border = t.dark ? 'rgba(255,255,255,.08)' : 'rgba(0,0,0,.06)';
  return `<div style="background:${t.bg};border-radius:14px;overflow:hidden;border:1px solid ${border}">
    <!-- topo do site -->
    <div style="background:${t.hero};padding:22px 24px;color:#fff">
      <div style="display:flex;align-items:center;justify-content:space-between">
        <div style="font-weight:800;font-size:18px;letter-spacing:.3px"><svg class="ic"><use href="#i-building"/></svg> Alpha Imóveis</div>
        <div style="display:flex;gap:18px;font-size:12.5px;opacity:.92">
          <span>Comprar</span><span>Alugar</span><span>Lançamentos</span><span>Contato</span>
        </div>
      </div>
      <div style="margin-top:26px;max-width:430px">
        <div style="font-size:25px;font-weight:800;line-height:1.15">Encontre o imóvel ideal para você</div>
        <div style="opacity:.9;font-size:13px;margin-top:8px">Os melhores imóveis de São Paulo, com atendimento por IA 24h.</div>
        <div style="display:flex;gap:8px;margin-top:16px"><div style="flex:1;background:rgba(255,255,255,.9);border-radius:${t.radius};padding:11px 14px;color:#333;font-size:12.5px"><svg class="ic"><use href="#i-search"/></svg> Bairro, cidade ou tipo de imóvel…</div><div style="background:${t.dark?'#000':'#fff'};color:${t.accent};border-radius:${t.radius};padding:11px 18px;font-weight:700;font-size:12.5px">Buscar</div></div>
      </div>
    </div>
    <!-- listagem -->
    <div style="padding:22px 24px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
        <div style="color:${t.text};font-weight:800;font-size:16px">Imóveis em destaque</div>
        <div style="color:${t.accent};font-size:12px;font-weight:700">Ver todos →</div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:14px">
        ${SITE_IMOVEIS.map(([n,l,p,specs,img])=>`
          <div style="background:${t.card};border:1px solid ${border};border-radius:${t.radius};overflow:hidden">
            <div style="height:120px;background-size:cover;background-position:center;background-image:url('${img}')"></div>
            <div style="padding:13px">
              <div style="color:${t.text};font-weight:700;font-size:14px">${n}</div>
              <div style="color:${sub};font-size:11px;margin-top:2px"><svg class="ic"><use href="#i-pin"/></svg> ${l}</div>
              <div style="color:${sub};font-size:10.5px;margin-top:6px">${specs}</div>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid ${border}">
                <div style="color:${t.accent};font-weight:800;font-size:15px">R$ ${p}</div>
                <div style="background:${t.accent};color:${t.dark&&tid==='elegante'?'#15151F':'#fff'};font-size:10.5px;font-weight:700;padding:5px 11px;border-radius:${t.radius}">Ver mais</div>
              </div>
            </div>
          </div>`).join('')}
      </div>
    </div>
    <!-- rodapé -->
    <div style="background:${t.dark?'#0E0E16':t.hero};padding:18px 24px;color:#fff;display:flex;align-items:center;justify-content:space-between;font-size:11.5px;opacity:.95">
      <div>© 2026 Alpha Imóveis · CRECI-SP 12345-J</div>
      <div style="display:flex;gap:12px"><span>WhatsApp</span><span>Instagram</span><span>Facebook</span></div>
    </div>
  </div>`;
}
function previewTemplate(tid){
  const t = TEMPLATES[tid];
  showInfo('Preview do site · '+t.nome, `
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
      <div class="muted" style="font-size:12.5px">Estilo <b style="color:var(--ink)">${t.nome}</b> · ${t.desc}</div>
      <div class="row" style="gap:6px"><span style="width:16px;height:16px;border-radius:4px;background:${t.accent};display:inline-block"></span><span class="muted" style="font-size:11px">cor da imobiliária</span></div>
    </div>
    ${siteTemplateHTML(tid)}
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic');selectTplId('${tid}')">✓ Usar o template ${t.nome}</button></div>`, 'xl');
}

// ponytail: a navegação pré-React (go/.view toggle, enterApp, logout, openMav) e o
// listener de #nav foram removidos. O React Router + a ponte window.* (mais abaixo)
// já controlam login↔app↔mav e a tela ativa; o listener de #nav nem chegava a ser
// anexado (rodava no import, antes do React montar o nav). showScreen interno delega
// à versão canônica window.showScreen, deixando um único caminho de render.
function showScreen(name){ window.showScreen(name); }

function openModal(id){document.getElementById(id).classList.add('show')}
function closeModal(id){document.getElementById(id).classList.remove('show')}

// notificação rápida de confirmação (toast)
function toast(msg){
  try{
    var t=document.createElement('div');
    t.className='toast';
    t.innerHTML='<svg class="ic"><use href="#i-check"/></svg><span></span>';
    t.querySelector('span').textContent=msg;
    document.body.appendChild(t);
    requestAnimationFrame(function(){ t.classList.add('show'); });
    setTimeout(function(){ t.classList.remove('show'); setTimeout(function(){ t.remove(); },320); },2600);
  }catch(e){}
}

// torna chips segmentados (single-select) e toggles clicáveis em todo o app
// (apenas os que não têm onclick próprio, p/ não conflitar com handlers existentes)
document.addEventListener('click',function(e){
  var el=e.target; if(!el||!el.closest) return;
  var chip=el.closest('.seg .chip');
  if(chip && !chip.getAttribute('onclick')){
    var seg=chip.closest('.seg');
    if(seg){ seg.querySelectorAll('.chip').forEach(function(c){c.classList.remove('on');}); chip.classList.add('on'); }
    return;
  }
  var tog=el.closest('.tog');
  if(tog && !tog.getAttribute('onclick')){ tog.classList.toggle('on'); }
});

// modal genérico: abre com título e html
function showInfo(title, html, size){
  document.getElementById('gm-title').textContent = title;
  document.getElementById('gm-body').innerHTML = html;
  const m = document.getElementById('gm-modal');
  m.className = 'modal' + (size? ' '+size : '');
  document.getElementById('modal-generic').classList.add('show');
}
// abas internas
function tab(btn, group, pane){
  document.querySelectorAll('[data-tabgroup="'+group+'"]').forEach(b=>b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('[data-pane="'+group+'"]').forEach(p=>p.classList.remove('on'));
  document.getElementById(pane).classList.add('on');
}
function confirmTermo(){if(!document.getElementById('aceite').checked){alert('Marque o aceite para continuar.');return}termoAceito=true;closeModal('modal-termo');showScreen('site');}

function mavTab(t){mavView=t;document.getElementById('mt-vit').classList.toggle('on',t==='vit');document.getElementById('mt-ges').classList.toggle('on',t==='ges');renderMav();}

const head=(t,s)=>`<div class="page-head"><h1>${t}</h1><p>${s}</p></div>`;

/* dashChart() reescrito no bloco do Dashboard premium */

const screens={
dashboard:()=>dashScreen(),

agenda:()=>head('Agenda de visitas','Calendário individual por corretor, sincronizado com o time.')+fbar({search:'Buscar compromisso ou cliente…',items:'#content .ev',sels:[['Tipo',['Visita','Reunião','Ligação','Avaliação']]],seg:['Dia','Semana','Mês'],segActive:1})+`
  <div class="card pad"><div class="between" style="margin-bottom:14px"><h3 class="sec-title">Janeiro 2026 · Paulo Cesar</h3><button class="btn-sm btn-blue" onclick="showInfo('Adicionar agenda', modalNovaAgenda(),'lg')"><svg class="ic"><use href="#i-plus"/></svg> Adicionar agenda</button></div>
    <div class="cal">${['Dom','Seg','Ter','Qua','Qui','Sex','Sáb'].map(d=>`<div class="dow">${d}</div>`).join('')}
    ${Array.from({length:31},(_,i)=>{const d=i+1;let ev='';if(d===20)ev=`<div class="ev" style="background:#F59E0B">09:00 Visita</div><div class="ev" style="background:#EF4444">10:30 Proposta</div>`;if(d===24)ev=`<div class="ev" style="background:#1E5BFF">14:00 Visita</div>`;if(d===28)ev=`<div class="ev" style="background:#16A34A">11:00 Fechamento</div>`;return `<div class="cell ${d===19?'today':''}${window.__agendaHL===d?' hl':''}">${d}${ev}</div>`}).join('')}</div>
  </div>
  <div class="grid g3" style="margin-top:16px"><div class="card stat"><div class="k">Total de eventos</div><div class="v">3</div></div><div class="card stat"><div class="k">Agendadas</div><div class="v" style="color:var(--warn)">2</div><div class="d muted">Concluídas 0 · Canceladas 1</div></div><div class="card stat"><div class="k">Disponíveis hoje</div><div class="v">5</div></div></div>`,

imoveis:()=>head('Gestão de imóveis','O gestor cadastra os imóveis da imobiliária e decide para onde distribuir: marketplaces via integração, ou Mav Imob (se habilitado pela equipe Mav Imob).')+fbar({search:'Buscar imóvel, código ou bairro…',items:'#content .prop',sels:[['Tipo',['Casa','Apartamento','Terreno','Sala comercial','Chácara','Sobrado']],['Status',['Disponível','Vendido','Reservado','Alugado']],['Faixa de preço',['Até R$ 500 mil','R$ 500 mil – 1 mi','R$ 1 mi – 2 mi','Acima de R$ 2 mi']]]})+`
  <div class="between" style="margin-bottom:16px"><span class="muted" style="font-size:13px">4 imóveis na carteira · 3 distribuídos · 4 na Mav Imob</span><button class="btn-sm btn-blue" onclick="abrirImovel()"><svg class="ic"><use href="#i-plus"/></svg> Novo imóvel</button></div>
  <div class="grid g3">
    ${[['Casa de Férias','rua São Paulo','2.000.000','https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=70',true]].map(([n,loc,price,img,sh])=>`
      <div class="card prop"><div class="ph" style="background-image:url('${img}')">${sh?`<div class="badge-mav"><svg class="ic"><use href="#i-star"/></svg> Mav Imob</div>`:''}</div>
        <div class="body"><h3>${n}</h3><div class="muted" style="font-size:12.5px"><svg class="ic"><use href="#i-pin"/></svg> ${loc}</div><div class="price">R$ ${price}</div>
        <div class="row" style="gap:7px"><button class="btn-sm" style="flex:1" onclick="showInfo('Distribuir · ${n}', modalDistribuir('${n}'),'lg')"><svg class="ic"><use href="#i-swap"/></svg> Distribuir</button>
        ${sh?`<button class="btn-sm" style="flex:1;border:1px solid #BBE7CC;background:var(--good-bg);color:var(--good)" onclick="openMav()"><svg class="ic"><use href="#i-star"/></svg> Na Mav Imob</button>`:`<button class="btn-sm btn-blue" style="flex:1" onclick="showInfo('Enviar pra Mav Imob', modalEnviarMav('${n}'),'lg')"><svg class="ic"><use href="#i-star"/></svg> Mav Imob</button>`}</div></div>
      </div>`).join('')}
  </div>`,

locacoes:()=>head('Locações','Administração de aluguéis: cada contrato ativo gera caixa recorrente para a imobiliária via taxa de administração. Acompanhe repasses, recebimentos e inadimplência.')+fbar({search:'Buscar por imóvel ou inquilino…',items:'#content tbody tr',sels:[['Status',['Em dia','Atrasado','Repassado','A repassar']],['Vencimento',['Próximos 7 dias','Este mês']]]})+`
  <div class="grid g4" style="margin-bottom:16px">
    <div class="card stat"><div class="k">Contratos ativos</div><div class="v">24</div><div class="d up">↑ 3 no mês</div></div>
    <div class="card stat"><div class="k">Receita de aluguéis</div><div class="v" style="font-size:22px">R$ 86.400</div><div class="d muted">total/mês administrado</div></div>
    <div class="card stat"><div class="k">Taxa de adm. (caixa)</div><div class="v" style="font-size:22px;color:var(--good)">R$ 8.640</div><div class="d muted">10% · receita da imobiliária</div></div>
    <div class="card stat"><div class="k">Inadimplência</div><div class="v" style="color:var(--warn)">2</div><div class="d muted">contratos em atraso</div></div>
  </div>
  <div class="subtabs">
    <button class="on" data-tabgroup="loc" onclick="tab(this,'loc','loc-ativos')">Aluguéis ativos (24)</button>
    <button data-tabgroup="loc" onclick="tab(this,'loc','loc-boletos')">Boletos & cobrança</button>
    <button data-tabgroup="loc" onclick="tab(this,'loc','loc-repasses')">Repasses ao proprietário</button>
    <button data-tabgroup="loc" onclick="tab(this,'loc','loc-inad')">Inadimplência (2)</button>
  </div>

  <div class="tabpane on" data-pane="loc" id="loc-ativos">
    <div class="between" style="margin-bottom:14px"><span class="muted" style="font-size:13px">Cada contrato gera taxa de administração mensal pra imobiliária.</span><button class="btn-sm btn-blue" onclick="showInfo('Novo contrato de locação', modalNovaLocacao(),'lg')">+ Novo contrato</button></div>
    <div class="card"><table><thead><tr><th>Imóvel / Inquilino</th><th>Aluguel</th><th>Taxa adm. (10%)</th><th>Vencimento</th><th>Status</th><th></th></tr></thead><tbody>
      ${[
        ['Casa de Férias','Paulo Cesar','2.500','dia 10','Em dia','t-green'],
      ].map(([im,inq,val,venc,st,tg])=>`<tr><td><b>${im}</b><div class="muted" style="font-size:11px">${inq}</div></td><td>R$ ${val}</td><td style="color:var(--good);font-weight:600">R$ ${(parseInt(val.replace('.',''))*0.1).toLocaleString('pt-BR')}</td><td class="muted">${venc}</td><td><span class="tag ${tg}">${st}</span></td><td><button class="btn-sm" onclick="showInfo('Contrato · ${im}', modalLocacaoDetalhe('${im}','${inq}','${val}'),'lg')">Ver</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="loc" id="loc-boletos">
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Boletos emitidos (mês)</div><div class="v">24</div></div>
      <div class="card stat"><div class="k">Pagos</div><div class="v" style="color:var(--good)">22</div></div>
      <div class="card stat"><div class="k">Em aberto</div><div class="v" style="color:var(--warn)">2</div></div>
      <div class="card stat"><div class="k">Emissão</div><div class="v" style="font-size:18px;color:var(--good)">Automática</div><div class="d muted">todo dia 25</div></div>
    </div>
    <div class="card pad" style="margin-bottom:16px;border:1px solid var(--blue-100);background:linear-gradient(135deg,var(--blue-50),var(--panel))">
      <div class="between" style="flex-wrap:wrap;gap:10px"><div class="row" style="gap:11px"><div style="width:32px;height:32px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center"><svg class="ic"><use href="#i-bolt"/></svg></div><div><div style="font-weight:700;font-size:13.5px">Cobrança automática ligada</div><div class="muted" style="font-size:12px">Boleto gerado e enviado por WhatsApp/e-mail antes do vencimento. Lembrete automático em caso de atraso.</div></div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    </div>
    <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Boletos do mês</h3><button class="btn-sm btn-blue" onclick="showInfo('Emitir boleto avulso', modalBoleto(),'lg')">+ Emitir boleto</button></div>
    <div class="card"><table><thead><tr><th>Inquilino / Imóvel</th><th>Valor</th><th>Vencimento</th><th>Status</th><th></th></tr></thead><tbody>
      ${[
        ['Paulo Cesar · Casa de Férias','2.500','10/07','Pago','t-green','Ver'],
      ].map(([d,v,venc,st,tg,acao])=>`<tr><td><b>${d}</b></td><td>R$ ${v}</td><td class="muted">${venc}</td><td><span class="tag ${tg}">${st}</span></td><td><button class="btn-sm ${acao==='Cobrar'?'btn-blue':''}">${acao}</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="loc" id="loc-repasses">
    <div class="muted" style="font-size:13px;margin-bottom:14px">O que a imobiliária recebeu do inquilino, a taxa retida e o valor repassado ao proprietário.</div>
    <div class="card"><table><thead><tr><th>Imóvel</th><th>Recebido</th><th>Taxa adm.</th><th>Repasse proprietário</th><th>Status</th></tr></thead><tbody>
      ${[['Casa de Férias','2.500','250','2.250','Repassado','t-green']].map(([im,rec,tax,rep,st,tg])=>`<tr><td><b>${im}</b></td><td>R$ ${rec}</td><td style="color:var(--good)">R$ ${tax}</td><td>R$ ${rep}</td><td><span class="tag ${tg}">${st}</span></td></tr>`).join('')}
      <tr class="total" style="background:#0B1B3A;color:#fff;font-weight:800"><td style="color:#fff">TOTAL</td><td>R$ 2.500</td><td>R$ 250</td><td>R$ 2.250</td><td>—</td></tr>
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="loc" id="loc-inad">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Contratos em atraso. A automação envia cobrança amigável por WhatsApp antes de escalar.</div>
    ${[['Casa de Férias','Paulo Cesar','2.100','8 dias','1ª cobrança enviada']].map(([im,inq,val,atraso,acao])=>`
      <div class="card pad" style="margin-bottom:11px"><div class="between"><div><div style="font-weight:700;font-size:14px">${im}</div><div class="muted" style="font-size:12px">${inq} · R$ ${val} · <span style="color:var(--warn)">${atraso} de atraso</span></div></div><div class="row"><span class="tag t-warn">${acao}</span><button class="btn-sm btn-blue">Cobrar via WhatsApp</button></div></div></div>`).join('')}
  </div>`,

site:()=>head('Meu site','Cada imobiliária ganha um site próprio. Configure o domínio, escolha o design e gerencie os imóveis. Com o termo aceito, os imóveis vão pra Mav Imob.')+fbar({search:'Buscar imóvel do site…',items:'#content tbody tr',sels:[['Situação',['Publicado']],['Mav Imob',['Enviado','Não enviado']]]})+`
  <div class="card pad" style="margin-bottom:18px">
    <div class="between" style="margin-bottom:14px"><h3 class="sec-title"><svg class="ic"><use href="#i-globe"/></svg> Domínio do site</h3><span class="tag ${dominioTipo==='sub'?'t-blue':'t-green'}">${dominioTipo==='sub'?'Subdomínio Mavis OS':'Domínio próprio'}</span></div>
    <div class="grid g2" style="gap:14px">
      <div class="card pad" style="border:2px solid ${dominioTipo==='sub'?'var(--blue)':'var(--line)'};cursor:pointer;${dominioTipo==='sub'?'background:var(--blue-50)':''}" onclick="setDominio('sub')">
        <div class="row" style="justify-content:space-between;margin-bottom:6px"><div style="font-weight:700;font-size:14px">Usar subdomínio Mavis OS</div>${dominioTipo==='sub'?'<span class="tag t-blue">Em uso</span>':''}</div>
        <div class="muted" style="font-size:12px;margin-bottom:10px">Pronto na hora, sem configuração técnica.</div>
        <div class="linkbox" style="margin:0"><code>alphaimoveis.mavimob.site</code></div>
      </div>
      <div class="card pad" style="border:2px solid ${dominioTipo==='proprio'?'var(--blue)':'var(--line)'};cursor:pointer;${dominioTipo==='proprio'?'background:var(--blue-50)':''}" onclick="setDominio('proprio')">
        <div class="row" style="justify-content:space-between;margin-bottom:6px"><div style="font-weight:700;font-size:14px">Usar domínio próprio</div>${dominioTipo==='proprio'?'<span class="tag t-blue">Em uso</span>':''}</div>
        <div class="muted" style="font-size:12px;margin-bottom:10px">Seu domínio (ex: www.alphaimoveis.com.br). Requer apontar o DNS.</div>
        <button class="btn-sm btn-blue" style="width:100%" onclick="event.stopPropagation();showInfo('Configurar domínio próprio', modalDominio(),'lg')">Configurar DNS</button>
      </div>
    </div>
  </div>
  <div class="card pad" style="margin-bottom:18px;${termoAceito?'border-color:#BBE7CC;background:var(--good-bg)':''}">
    <div class="between"><div class="row"><span style="font-size:20px;line-height:0">${termoAceito?'<svg class="ic ic-lg" style="color:var(--good)"><use href="#i-check"/></svg>':'<svg class="ic ic-lg" style="color:var(--warn)"><use href="#i-alert"/></svg>'}</span><div><div style="font-weight:700">${termoAceito?'Termo da Mav Imob aceito':'Termo da Mav Imob pendente'}</div><div class="muted" style="font-size:12.5px">${termoAceito?'Imóveis publicados aqui vão automaticamente pra imobiliária virtual.':'Aceite para enviar seus imóveis automaticamente.'}</div></div></div>
    <div class="row">${termoAceito?'<span class="tag t-green">Ativo</span>':''}<button class="btn-sm" onclick="showInfo('Termo de divulgação · Mav Imob', modalTermoCompleto(),'lg')"><svg class="ic"><use href="#i-doc"/></svg> Ver termo</button>${termoAceito?'':`<button class="btn-sm btn-blue" onclick="showInfo('Termo de divulgação · Mav Imob', modalTermoCompleto(),'lg')">Ler e aceitar</button>`}</div></div>
  </div>
  <div class="row" style="margin-bottom:16px;gap:10px"><div class="tabs"><button class="on" onclick="siteTab(this,'gerir')">Gerenciar imóveis</button><button onclick="siteTab(this,'design')">Design do site</button><button onclick="siteTab(this,'preview')">Preview do site</button></div><button class="btn-sm btn-blue" style="margin-left:auto" onclick="openModal('modal-imovel')">+ Adicionar imóvel</button></div>
  <div id="site-gerir">
    <div class="card"><table><thead><tr><th>Imóvel</th><th>Preço</th><th>No site</th><th>Mav Imob</th></tr></thead><tbody>
      ${[['Casa de Férias','2.000.000',true]].map(([n,p,m])=>`<tr><td><b>${n}</b></td><td>R$ ${p}</td><td><span class="tag t-blue">Publicado</span></td><td>${m?'<span class="tag t-green"><svg class="ic"><use href="#i-star"/></svg> Enviado</span>':'<span class="tag t-grey">Não enviado</span>'}</td></tr>`).join('')}
    </tbody></table></div>
  </div>
  <div id="site-design" style="display:none">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Escolha um dos 5 modelos de site. Clique em <b>Visualizar site</b> para ver como fica com as cores de cada estilo. O conteúdo (imóveis, contato, logo) é o mesmo — muda só o visual.</div>
    <div class="grid g3">
      ${['moderno','elegante','vibrante','classico','compacto'].map(tid=>{const t=TEMPLATES[tid];return `
        <div class="tpl ${siteTpl===tid?'sel':''}" onclick="selectTplId('${tid}')">
          <div class="prev"><div class="bar" style="background:${t.bar}"><span class="dots"><span></span><span></span><span></span></span></div><div class="hero" style="background:${t.hero}">${t.nome}</div>${siteTpl===tid?'<div class="badge-sel">✓ Em uso</div>':''}</div>
          <div class="info"><div class="nm">${t.nome}</div><div class="ds">${t.desc}</div>
            <div class="row" style="gap:7px;margin-top:8px"><button class="btn-sm" style="flex:1" onclick="event.stopPropagation();previewTemplate('${tid}')"><svg class="ic"><use href="#i-eye"/></svg> Visualizar</button><button class="btn-sm ${siteTpl===tid?'':'btn-blue'}" style="flex:1" onclick="event.stopPropagation();selectTplId('${tid}')">${siteTpl===tid?'✓ Em uso':'Usar este'}</button></div>
          </div>
        </div>`}).join('')}
    </div>
  </div>
  <div id="site-preview" style="display:none">
    <div class="row" style="margin-bottom:12px;justify-content:space-between"><div class="muted" style="font-size:12.5px">Prévia ao vivo com o template <b style="color:var(--ink)">${TEMPLATES[siteTpl].nome}</b></div><button class="btn-sm" onclick="siteTab(document.querySelectorAll('#content .tabs button')[1],'design')">Trocar template</button></div>
    ${siteTemplateHTML(siteTpl)}
  </div>`,

leads:()=>head('Leads & Funil','Toda a jornada do lead num lugar: o funil de vendas, a regra de distribuição, a fila de encaminhamento e a automação que conversa em todos os canais.')+fbar({search:'Buscar lead por nome ou telefone…',items:'#content .kcard',sels:[['Etapa',['Captado','Qualificando','Visita','Proposta','Negociação','Concluído']],['Origem',['OLX','Viva Real','Zap Imóveis','Instagram','Facebook','TikTok','Site','Indicação']],['Temperatura',['Quente','Morno','Frio']]]})+`
  <div class="subtabs">
    <button class="on" data-tabgroup="ld" onclick="tab(this,'ld','ld-kanban')">Funil (kanban)</button>
    <button data-tabgroup="ld" onclick="tab(this,'ld','ld-visao')">Visão de funil</button>
    <button data-tabgroup="ld" onclick="tab(this,'ld','ld-dist')">Distribuição & fila</button>
    <button data-tabgroup="ld" onclick="tab(this,'ld','ld-canais')">Automação</button>
    <button data-tabgroup="ld" onclick="tab(this,'ld','ld-ativo')">Canal de vendas ativo</button>
  </div>

  <!-- KANBAN -->
  <div class="tabpane on" data-pane="ld" id="ld-kanban">
    <div class="between" style="margin-bottom:14px">
      <div class="row" style="gap:8px"><span class="tag t-blue">7 leads ativos</span><span class="tag t-grey">Distribuição: rodízio + região</span></div>
      <div class="row" style="gap:8px"><button class="btn-sm" onclick="showInfo('Regra de distribuição de leads', modalDistLeads(),'lg')"><svg class="ic"><use href="#i-settings"/></svg> Regra de distribuição</button><button class="btn-sm btn-blue" onclick="showInfo('Novo lead', modalNovoLead(),'lg')">+ Novo lead</button></div>
    </div>
    <div class="kanban">${[['Captado','#1E5BFF',[['Paulo Cesar','Casa de Férias · OLX']]],['Qualificando','#3B82F6',[]],['Visita/Apresentação','#F59E0B',[]]].map(([t,c,cards])=>`<div class="kcol${window.__leadsHL===t?' hl':''}"><h4><span class="dot" style="background:${c}"></span>${t}</h4>${cards.map(([n,d])=>`<div class="kcard" onclick="showInfo('Lead · ${n}', modalLead('${n}','${d}'),'lg')" style="cursor:pointer"><b>${n}</b><span class="muted">${d}</span></div>`).join('')}</div>`).join('')}</div>
    <div class="kanban" style="margin-top:14px">${[['Proposta','#F59E0B',[]],['Negociando','#16A34A',[]],['Concluído','#64748B',[]]].map(([t,c,cards])=>`<div class="kcol${window.__leadsHL===t?' hl':''}"><h4><span class="dot" style="background:${c}"></span>${t}</h4>${cards.map(([n,d])=>`<div class="kcard" onclick="showInfo('Lead · ${n}', modalLead('${n}','${d}'),'lg')" style="cursor:pointer"><b>${n}</b><span class="muted">${d}</span></div>`).join('')}</div>`).join('')}</div>
  </div>

  <!-- VISÃO DE FUNIL -->
  <div class="tabpane" data-pane="ld" id="ld-visao">
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Leads no funil</div><div class="v">1.248</div><div class="d up">↑ 12%</div></div>
      <div class="card stat"><div class="k">Taxa de conversão</div><div class="v">10,4%</div><div class="d up">lead → venda</div></div>
      <div class="card stat"><div class="k">Ticket médio</div><div class="v" style="font-size:24px">R$ 720k</div></div>
      <div class="card stat"><div class="k">Ciclo médio</div><div class="v" style="font-size:24px">28 dias</div><div class="d muted">contato → fechamento</div></div>
    </div>
    <div class="card pad" style="margin-bottom:16px">
      <div class="between" style="margin-bottom:18px"><h3 class="sec-title">Funil de vendas · este mês</h3><span class="tag t-blue">Conversão por etapa</span></div>
      ${[['Captados',1248,100,'#1E5BFF'],['Qualificados',724,58,'#3B82F6'],['Visitas agendadas',312,25,'#60A5FA'],['Propostas',168,13,'#F59E0B'],['Negociação',96,8,'#EF4444'],['Vendas fechadas',130,10,'#16A34A']].map(([et,qt,pct,c],i,arr)=>`
        <div style="margin-bottom:11px"><div class="row" style="justify-content:space-between;font-size:12.5px;margin-bottom:5px"><span style="font-weight:600"><span class="dot" style="background:${c}"></span> ${et}</span><span><b>${qt}</b> <span class="muted">· ${pct}%</span>${i>0?` <span class="muted" style="font-size:11px">(${Math.round(qt/arr[i-1][1]*100)}% da etapa anterior)</span>`:''}</span></div><div style="background:var(--blue-50);border-radius:6px;height:20px"><div style="width:${pct}%;height:20px;border-radius:6px;background:${c}"></div></div></div>`).join('')}
    </div>
    <div class="grid g2">
      <div class="card pad"><h3 class="sec-title" style="margin-bottom:12px">Onde os leads travam</h3>
        ${[['Qualificação → Visita','42% não avançam','#F59E0B'],['Proposta → Negociação','29% desistem no preço','#EF4444'],['Visita → Proposta','18% somem após visitar','#F59E0B']].map(([et,d,c])=>`<div class="perm"><div><div class="pt">${et}</div><div class="pd">${d}</div></div><span class="tag" style="background:${c}22;color:${c}">Atenção</span></div>`).join('')}
      </div>
      <div class="card pad" style="border:1px solid var(--blue-100);background:linear-gradient(135deg,var(--blue-50),var(--panel))"><div class="row" style="gap:10px;margin-bottom:10px"><div style="width:30px;height:30px;border-radius:8px;background:var(--blue);color:#fff;display:grid;place-items:center"><svg class="ic"><use href="#i-sparkle"/></svg></div><div style="font-weight:700;font-size:13.5px">A automação ajuda a destravar</div></div>
        <div class="muted" style="font-size:12.5px;line-height:1.6">A IA reativa leads parados: manda mensagem no WhatsApp, liga, oferece novas opções e reagenda visita — sem o corretor precisar lembrar. <b style="color:var(--ink)">38 leads</b> reativados este mês.</div>
        <button class="btn-sm btn-blue" style="margin-top:12px;width:100%" onclick="tab(document.querySelectorAll('[data-tabgroup=ld]')[4],'ld','ld-ativo')">Ver canal de vendas ativo →</button>
      </div>
    </div>
  </div>

  <!-- DISTRIBUIÇÃO & FILA -->
  <div class="tabpane" data-pane="ld" id="ld-dist">
    <div class="grid g3" style="margin-bottom:16px"><div class="card stat"><div class="k">Na fila</div><div class="v" style="color:var(--warn)">2</div></div><div class="card stat"><div class="k">Reassumidos hoje</div><div class="v" style="color:var(--good)">4</div></div><div class="card stat"><div class="k">Tempo médio na fila</div><div class="v" style="font-size:22px">2h18</div></div></div>
    <div class="card pad" style="margin-bottom:16px">
      <div class="between" style="margin-bottom:10px"><h3 class="sec-title">Como funciona o rodízio</h3><button class="btn-sm" onclick="showInfo('Regra de distribuição de leads', modalDistLeads(),'lg')"><svg class="ic"><use href="#i-settings"/></svg> Editar regra</button></div>
      <div class="stepline"><span class="s on">Lead chega</span><span>→</span><span class="s">Oferecido ao corretor</span><span>→</span><span class="s">Não aceitou em 15 min</span><span>→</span><span class="s">Passa pro próximo</span><span>→</span><span class="s">Reassumido</span></div>
      <div class="muted" style="font-size:12.5px">O lead é oferecido a um corretor por vez. Se ele não aceitar no tempo definido, o sistema repassa automaticamente ao próximo da fila, respeitando especialidade e região.</div>
    </div>
    <div class="card pad"><div class="between" style="margin-bottom:16px"><h3 class="sec-title">Fila de encaminhamento (2)</h3><button class="btn-sm btn-blue">+ Novo encaminhamento</button></div>
    ${[['Paulo Cesar','Casa de Férias · sem retorno há 5 dias','Qualificando','Oferecido a: Paulo Cesar']].map(([n,d,st,of])=>`<div class="perm"><div><div class="pt">${n}</div><div class="pd">${d} · <span style="color:var(--blue)">${of}</span></div></div><div class="row"><span class="tag t-warn">${st}</span><button class="btn-sm" onclick="showInfo('Encaminhar para o próximo', modalEncaminhar('${n}'),'sm')">Próximo corretor</button><button class="btn-sm btn-blue">Reassumir</button></div></div>`).join('')}</div>
  </div>

  <!-- AUTOMAÇÃO / CANAIS -->
  <div class="tabpane" data-pane="ld" id="ld-canais">
    <div class="muted" style="font-size:13px;margin-bottom:14px">A automação se conecta onde houver API e atua sozinha: lê, responde e conversa de forma natural. Onde tiver integração, ela fala.</div>
    <div class="grid g3">
      ${[
        ['WhatsApp','#25D366','Conversa, responde e qualifica','Ativo · 320 conversas/mês','✓'],
        ['Ligação por voz','#0B2A7A','Liga, oferece imóveis e agenda','Ativo · 84 ligações/mês','✓'],
        ['Instagram','#E1306C','Responde DM e comentários','Ativo · 140 DMs/mês','✓'],
        ['Facebook','#1877F2','Messenger e comentários','Ativo · 96 msgs/mês','✓'],
        ['OLX','#6E0AD6','Responde o chat do anúncio','Ativo · 210 chats/mês','✓'],
        ['Telefone receptivo','#16A34A','Atende ligações recebidas','Configurar','+'],
      ].map(([n,c,d,st,ic])=>`
        <div class="card pad"><div class="row" style="gap:11px;margin-bottom:10px"><div style="width:40px;height:40px;border-radius:11px;background:${c};color:#fff;display:grid;place-items:center;font-weight:800;font-size:16px">${n[0]}</div><div><div style="font-weight:700;font-size:14px">${n}</div><div class="muted" style="font-size:11.5px">${d}</div></div></div>
          <div class="between"><span class="tag ${ic==='✓'?'t-green':'t-grey'}">${ic==='✓'?'● '+st:st}</span><button class="btn-sm" onclick="showInfo('Automação · ${n}', modalCanalAuto('${n}','${c}','${ic==='✓'}'),'lg')">${ic==='✓'?'Configurar':'Conectar'}</button></div>
        </div>`).join('')}
    </div>
    <div class="card pad" style="margin-top:16px">
      <h3 class="sec-title" style="margin-bottom:12px">Como a automação conversa</h3>
      <div class="grid g2" style="gap:16px;align-items:start">
        <div class="timeline2">
          <div class="tl"><div class="tt">Tom humano e natural</div><div class="td">Conversa como um corretor real. O lead não percebe que é automação.</div></div>
          <div class="tl"><div class="tt">Entende texto e áudio</div><div class="td">Responde mensagens escritas e áudios em qualquer canal.</div></div>
          <div class="tl"><div class="tt">Conhece o portfólio</div><div class="td">Sugere imóveis reais da imobiliária conforme o interesse.</div></div>
          <div class="tl"><div class="tt">Escala pro humano quando precisa</div><div class="td">Se a negociação aperta, passa pro corretor com todo o contexto.</div></div>
        </div>
        <div class="wa" style="height:380px">
          <div class="wa-head"><div class="av">A</div><div><div class="nm">Atendimento · Alpha Imóveis</div><div class="st">online</div></div></div>
          <div class="wa-body">
            <div class="bub in">Oi! Vi que você se interessou pelo apartamento na Zona Sul Ainda está procurando?<div class="t">14:20</div></div>
            <div class="bub out">Tô sim! Mas queria algo até 600 mil<div class="t">14:22</div></div>
            <div class="bub in">Perfeito! Separei 3 opções nessa faixa pertinho de lá. Quer que eu te mande?<div class="t">14:22</div></div>
            <div class="bub out">Pode mandar<div class="t">14:23</div></div>
            <div class="bub in">Aqui <a class="link">alphaimoveis.com.br/sel-joao</a><br>Posso agendar uma visita pra essa semana?<div class="t">14:23</div></div>
            <div class="bub out">Quinta de tarde pode ser<div class="t">14:25</div></div>
            <div class="bub in">Agendado pra quinta 15h <svg class="ic"><use href="#i-check"/></svg> O corretor Paulo Cesar vai te receber. Te confirmo no dia!<div class="t">14:25</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- CANAL DE VENDAS ATIVO -->
  <div class="tabpane" data-pane="ld" id="ld-ativo">
    <div class="card pad" style="margin-bottom:16px;background:linear-gradient(135deg,var(--ink-deep),#103DBE);color:#fff">
      <div class="row" style="gap:12px"><div style="width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.15);display:grid;place-items:center;font-size:19px"><svg class="ic"><use href="#i-phone"/></svg></div><div><div style="font-weight:800;font-size:16px">Prospecção ativa por IA</div><div style="opacity:.85;font-size:12.5px">A automação puxa uma lista de leads, entra em contato por WhatsApp e ligação, oferece imóveis e deixa a visita agendada pro corretor — seguindo o roteiro configurado.</div></div></div>
    </div>
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Leads na campanha</div><div class="v">420</div></div>
      <div class="card stat"><div class="k">Contatados</div><div class="v">286</div><div class="d muted">68% da lista</div></div>
      <div class="card stat"><div class="k">Interessados</div><div class="v" style="color:var(--good)">74</div></div>
      <div class="card stat"><div class="k">Visitas agendadas</div><div class="v" style="color:var(--blue)">31</div><div class="d up">pro corretor</div></div>
    </div>
    <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Campanhas de prospecção</h3><button class="btn-sm btn-blue" onclick="showInfo('Nova campanha de prospecção ativa', modalProspeccao(),'lg')">+ Nova campanha ativa</button></div>
    ${[
      ['Reativar leads frios','420 leads sem retorno há 30+ dias','WhatsApp + Ligação',68,'Rodando'],
      ['Novos lançamentos Jardins','180 leads interessados em lançamento','WhatsApp',45,'Rodando'],
      ['Pós-visita sem proposta','64 leads que visitaram e sumiram','Ligação',22,'Pausada'],
    ].map(([nm,desc,canais,prog,st])=>`
      <div class="card pad" style="margin-bottom:11px"><div class="between" style="margin-bottom:10px"><div><div style="font-weight:700;font-size:14.5px">${nm}</div><div class="muted" style="font-size:12px">${desc} · <span style="color:var(--blue)">${canais}</span></div></div><span class="tag ${st==='Rodando'?'t-green':'t-warn'}">${st==='Rodando'?'● '+st:st}</span></div>
        <div class="progress"><div class="pf" style="width:${prog}%"></div></div>
        <div class="between" style="margin-top:6px"><span class="muted" style="font-size:11px">${prog}% da lista contatada</span><button class="btn-sm" onclick="showInfo('Campanha · ${nm}', modalProspDetalhe('${nm}','${canais}'),'lg')">Ver detalhes</button></div>
      </div>`).join('')}
    <div class="card pad" style="border:1px solid var(--blue-100);background:var(--blue-50);margin-top:4px">
      <div class="row" style="gap:10px"><span style="font-size:18px"><svg class="ic"><use href="#i-lock"/></svg></span><div class="muted" style="font-size:12px">A prospecção ativa segue regras de consentimento e horário. A IA se identifica como atendimento da imobiliária quando solicitado e respeita pedidos de não contato.</div></div>
    </div>
  </div>`,

funil:()=>screens.leads(),

integracoes:()=>head('Integrações · Marketplaces','Publique um imóvel uma vez e ele sai em todos os portais. Os leads voltam para a plataforma e são direcionados aos corretores.')+fbar({search:'Buscar portal ou rede…',items:'#content .mkt',sels:[['Status',['Conectado','Disponível']],['Tipo',['Marketplace','Rede social']]]})+`
  <div class="ribbon" style="margin-bottom:18px"><div><h2><svg class="ic"><use href="#i-swap"/></svg> Anuncie em todos os lugares de uma vez</h2><p>Conecte seus portais e redes. Ao publicar um imóvel no Mavis OS, ele é distribuído automaticamente. Cada lead que chega volta pra cá e cai no funil do corretor certo.</p></div></div>
  <div class="grid g2">
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:14px">Portais de imóveis</h3>
      ${[['OLX','#6E0AD6','Conectado','t-green'],['Viva Real','#FF6B00','Conectado','t-green'],['Zap Imóveis','#0A66C2','Conectado','t-green'],['ImovelWeb','#E5292E','Conectar','t-grey'],['Chaves na Mão','#00A859','Conectar','t-grey']].map(([n,c,st,tg])=>`
        <div class="mkt" onclick="showInfo('${n}', modalIntegracao('${n}','${c}','${st}'),'lg')" style="cursor:pointer"><div class="l"><div class="ico brand">${brandLogo(n,c)}</div><div><div class="nm">${n}</div><div class="ds">Portal de classificados imobiliários</div></div></div>${st==='Conectado'?`<span class="tag ${tg}">✓ ${st}</span>`:`<button class="btn-sm btn-blue">${st}</button>`}</div>`).join('')}
    </div>
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:14px">Redes sociais</h3>
      ${[['Facebook','#1877F2','Conectado','t-green'],['Instagram','#E1306C','Conectado','t-green'],['Facebook Marketplace','#1877F2','Conectado','t-green'],['Google Ads','#4285F4','Conectar','t-grey'],['TikTok','#000000','Conectar','t-grey']].map(([n,c,st,tg])=>`
        <div class="mkt" onclick="showInfo('${n}', modalIntegracao('${n}','${c}','${st}'),'lg')" style="cursor:pointer"><div class="l"><div class="ico brand">${brandLogo(n,c)}</div><div><div class="nm">${n}</div><div class="ds">Distribuição e anúncios sociais</div></div></div>${st==='Conectado'?`<span class="tag ${tg}">✓ ${st}</span>`:`<button class="btn-sm btn-blue">${st}</button>`}</div>`).join('')}
    </div>
  </div>
  <div class="card pad" style="margin-top:16px">
    <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Como o lead percorre o sistema</h3><span class="tag t-blue">Fluxo automático</span></div>
    <div class="flow">
      <div class="step done"><div class="num">1</div><h5>Imóvel publicado</h5><p>Sai em todos os portais conectados</p></div>
      <div class="step done"><div class="num">2</div><h5>Lead clica e responde</h5><p>OLX, Viva Real, Instagram…</p></div>
      <div class="step active"><div class="num">3</div><h5>Cai no Mavis OS</h5><p>Entra no funil e vai ao corretor certo</p></div>
    </div>
  </div>`,

campanhas:()=>head('Campanhas & Tráfego','A IA de tráfego do Mavis OS gerencia os anúncios da imobiliária nas redes de forma automática: cria, distribui verba, otimiza e gera leads — conforme o modo que você configurar.')+fbar({search:'Buscar campanha…',sels:[['Status',['Ativa','Pausada','Encerrada']],['Canal',['Meta','Google','Instagram','OLX']]]})+`
  <div class="subtabs">
    <button class="on" data-tabgroup="cp" onclick="tab(this,'cp','cp-geral')">Visão geral</button>
    <button data-tabgroup="cp" onclick="tab(this,'cp','cp-canais')">Desempenho por canal</button>
    <button data-tabgroup="cp" onclick="tab(this,'cp','cp-publicos')">Públicos</button>
    <button data-tabgroup="cp" onclick="tab(this,'cp','cp-criativos')">Criativos</button>
    <button data-tabgroup="cp" onclick="tab(this,'cp','cp-roi')">Retorno (ROI)</button>
  </div>

  <!-- VISÃO GERAL -->
  <div class="tabpane on" data-pane="cp" id="cp-geral">
    <div class="card pad" style="margin-bottom:16px;background:linear-gradient(135deg,var(--ink-deep),#103DBE);color:#fff">
      <div class="between" style="flex-wrap:wrap;gap:12px">
        <div class="row" style="gap:12px"><div style="width:40px;height:40px;border-radius:11px;background:rgba(255,255,255,.15);display:grid;place-items:center;font-size:19px"><svg class="ic"><use href="#i-sparkle"/></svg></div><div><div style="font-weight:800;font-size:16px">IA de tráfego ativa</div><div style="opacity:.85;font-size:12.5px">Gerencia anúncios, verba e otimização nas redes da imobiliária — 24h, sem operação manual.</div></div></div>
        <div style="text-align:right"><div style="font-size:11px;opacity:.8;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Modo de operação</div>
          <div class="seg" style="margin:0;justify-content:flex-end"><span class="chip on" style="background:#fff;color:var(--blue);border:none" onclick="setIaModo(this,'auto')"><svg class="ic"><use href="#i-bolt"/></svg> Automático</span><span class="chip" style="background:rgba(255,255,255,.12);color:#fff;border:none" onclick="setIaModo(this,'aprov')"><svg class="ic"><use href="#i-shield"/></svg> Com aprovação</span></div>
        </div>
      </div>
      <div id="ia-modo-desc" style="margin-top:14px;background:rgba(255,255,255,.1);border-radius:10px;padding:11px 14px;font-size:12.5px"><svg class="ic"><use href="#i-bolt"/></svg> <b>Automático:</b> a IA cria campanhas, ajusta orçamento entre canais e otimiza sozinha, dentro do limite de verba definido. Você só acompanha os resultados.</div>
    </div>
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k"><svg class="ic"><use href="#i-money"/></svg> Investimento no mês</div><div class="v">R$ 4.800</div><div class="d muted">3 campanhas ativas</div></div>
      <div class="card stat"><div class="k"><svg class="ic"><use href="#i-eye"/></svg> Alcance</div><div class="v">182k</div><div class="d up">↑ 23% vs mês passado</div></div>
      <div class="card stat"><div class="k"><svg class="ic"><use href="#i-users"/></svg> Leads gerados</div><div class="v">147</div><div class="d up">↑ 18%</div></div>
      <div class="card stat"><div class="k"><svg class="ic"><use href="#i-money"/></svg> Custo por lead</div><div class="v">R$ 32</div><div class="d up">↓ 9%</div></div>
    </div>

    <div class="card pad" style="margin-bottom:16px;border:1px solid var(--blue-100);background:linear-gradient(135deg,var(--blue-50),var(--panel))">
      <div class="row" style="gap:11px;margin-bottom:12px"><div style="width:34px;height:34px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center;font-size:16px"><svg class="ic"><use href="#i-sparkle"/></svg></div><div><div style="font-weight:700;font-size:14px">Decisões da IA de tráfego</div><div class="muted" style="font-size:12px">No modo automático ela já aplica; no modo com aprovação, aguarda seu ok.</div></div></div>
      ${[
        ['<svg class="ic"><use href="#i-arrow-up"/></svg>','Aumentou o orçamento de "Apartamentos Zona Sul"','Custo/lead de R$ 26 — 19% abaixo da média. Realocou R$ 400 pra cá.','#16A34A','Aplicado'],
        ['<svg class="ic"><use href="#i-alert"/></svg>','Sugere trocar o criativo de "Casas alto padrão"','CTR caiu 12% nos últimos 5 dias. Já preparou 2 variações novas.','#F59E0B','Aprovar'],
        ['<svg class="ic"><use href="#i-clock"/></svg>','Reprogramou anúncios para 19h–21h','Seus leads convertem 2,3x mais à noite.','#1E5BFF','Aplicado'],
      ].map(([ic,t,d,c,acao])=>`<div class="perm" style="align-items:flex-start"><div class="row" style="align-items:flex-start;gap:11px"><div style="width:26px;height:26px;border-radius:7px;background:${c}22;color:${c};display:grid;place-items:center;font-weight:800;flex:none">${ic}</div><div><div class="pt">${t}</div><div class="pd">${d}</div></div></div><button class="btn-sm ${acao==='Aprovar'?'btn-blue':''}">${acao==='Aplicado'?'Aplicado':acao}</button></div>`).join('')}
    </div>

    <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Campanhas ativas</h3><button class="btn-sm btn-blue" onclick="showInfo('Nova campanha', modalCriarCampanha(),'lg')">+ Nova campanha</button></div>
    ${[
      ['Apartamentos · Zona Sul','Instagram + Facebook','#E1306C',2200,1800,68,82],
      ['Casas alto padrão','Google + Viva Real','#4285F4',1600,1400,41,74],
      ['Lançamento Jardins','Instagram Reels','#E1306C',1000,820,38,60],
    ].map(([nm,canal,c,orc,gasto,leads,prog])=>`
      <div class="card camp" onclick="showInfo('Campanha · ${nm}', modalCampanha('${nm}','${canal}','${c}',${orc},${gasto},${leads}),'lg')" style="cursor:pointer">
        <div class="top"><div><div style="font-weight:700;font-size:15px">${nm}</div><div class="muted" style="font-size:12px">${canal}</div></div><span class="tag t-green">● Ativa</span></div>
        <div class="metrics">
          <div class="m"><div class="mk">Orçamento</div><div class="mv">R$ ${orc}</div></div>
          <div class="m"><div class="mk">Gasto</div><div class="mv">R$ ${gasto}</div></div>
          <div class="m"><div class="mk">Leads</div><div class="mv" style="color:var(--blue)">${leads}</div></div>
          <div class="m"><div class="mk">Custo/lead</div><div class="mv">R$ ${Math.round(gasto/leads)}</div></div>
        </div>
        <div class="progress"><div class="pf" style="width:${prog}%"></div></div>
        <div class="muted" style="font-size:11px;margin-top:6px">${prog}% do orçamento utilizado</div>
      </div>`).join('')}
  </div>

  <!-- DESEMPENHO POR CANAL -->
  <div class="tabpane" data-pane="cp" id="cp-canais">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Quanto cada canal trouxe de leads e a que custo. Ajude a decidir onde investir mais.</div>
    <div class="grid g3" style="margin-bottom:16px">
      ${[['Instagram','#E1306C',64,28,'42%'],['Facebook','#1877F2',38,35,'26%'],['Google Ads','#4285F4',29,41,'20%'],['Viva Real','#FF6B00',12,52,'8%'],['Zap Imóveis','#0A66C2',8,58,'5%']].map(([n,c,leads,cpl,share])=>`
        <div class="card pad"><div class="row" style="gap:10px;margin-bottom:10px"><div style="width:34px;height:34px;border-radius:9px;background:${c};color:#fff;display:grid;place-items:center;font-weight:800">${n[0]}</div><div><div style="font-weight:700;font-size:13.5px">${n}</div><div class="muted" style="font-size:11px">${share} dos leads</div></div></div>
          <div class="row" style="justify-content:space-between;font-size:12px;padding:4px 0"><span class="muted">Leads</span><b>${leads}</b></div>
          <div class="row" style="justify-content:space-between;font-size:12px;padding:4px 0"><span class="muted">Custo/lead</span><b style="color:${cpl<35?'var(--good)':cpl<50?'var(--warn)':'var(--danger)'}">R$ ${cpl}</b></div>
          <div class="progress" style="margin-top:8px"><div class="pf" style="width:${share};background:${c}"></div></div>
        </div>`).join('')}
    </div>
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:12px">Leads por canal · últimos 30 dias</h3>
      <svg viewBox="0 0 700 180" width="100%" height="170">
        <polyline fill="none" stroke="#E1306C" stroke-width="2.5" points="0,120 100,100 200,90 300,70 400,75 500,55 600,45 700,40"/>
        <polyline fill="none" stroke="#1877F2" stroke-width="2.5" points="0,140 100,135 200,125 300,128 400,115 500,118 600,108 700,100"/>
        <polyline fill="none" stroke="#4285F4" stroke-width="2.5" points="0,150 100,148 200,140 300,142 400,135 500,138 600,130 700,128"/>
      </svg>
      <div class="row" style="gap:16px;font-size:12px;margin-top:8px"><span class="row" style="gap:6px"><span class="dot" style="background:#E1306C"></span>Instagram</span><span class="row" style="gap:6px"><span class="dot" style="background:#1877F2"></span>Facebook</span><span class="row" style="gap:6px"><span class="dot" style="background:#4285F4"></span>Google</span></div>
    </div>
  </div>

  <!-- PÚBLICOS -->
  <div class="tabpane" data-pane="cp" id="cp-publicos">
    <div class="between" style="margin-bottom:14px"><span class="muted" style="font-size:13px">Audiências salvas que você reusa entre campanhas.</span><button class="btn-sm btn-blue" onclick="showInfo('Novo público', modalPublico(),'lg')">+ Novo público</button></div>
    <div class="grid g2">
      ${[
        ['Compradores Zona Sul','30–45 anos · Zona Sul SP · interesse em apartamentos','48k pessoas','#1E5BFF'],
        ['Alto padrão','35–60 anos · renda alta · casas e coberturas','22k pessoas','#0B2A7A'],
        ['Investidores','28–50 anos · interesse em imóveis para renda','31k pessoas','#16A34A'],
        ['Primeira moradia','25–38 anos · studios e 2 quartos · financiamento','55k pessoas','#E1306C'],
      ].map(([n,d,size,c])=>`
        <div class="card pad"><div class="between" style="margin-bottom:8px"><div class="row" style="gap:10px"><div style="width:32px;height:32px;border-radius:9px;background:${c};color:#fff;display:grid;place-items:center"><svg class="ic"><use href="#i-target"/></svg></div><div style="font-weight:700;font-size:14px">${n}</div></div><span class="tag t-blue">${size}</span></div>
          <div class="muted" style="font-size:12px;margin-bottom:10px">${d}</div>
          <div class="row" style="gap:7px"><button class="btn-sm" style="flex:1">Editar</button><button class="btn-sm btn-blue" style="flex:1">Usar em campanha</button></div>
        </div>`).join('')}
    </div>
  </div>

  <!-- CRIATIVOS -->
  <div class="tabpane" data-pane="cp" id="cp-criativos">
    <div class="between" style="margin-bottom:14px"><span class="muted" style="font-size:13px">Anúncios que estão rodando. Veja qual performou melhor.</span><button class="btn-sm btn-blue" onclick="showInfo('Novo criativo', modalCriativo(),'lg')">+ Novo criativo</button></div>
    <div class="grid g3">
      ${[
        ['Casa de Férias · vídeo','Reels Instagram','https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&q=60','4.2%','Top'],
        ['Apto Centro · carrossel','Feed Facebook','https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=60','3.1%','Bom'],
        ['Cobertura · imagem','Stories','https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=60','2.8%','Bom'],
        ['Lançamento · vídeo','Reels','https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&q=60','5.1%','Top'],
        ['Studio · imagem','Feed Instagram','https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&q=60','1.9%','Baixo'],
        ['Sobrado · carrossel','Google Display','https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&q=60','2.4%','Bom'],
      ].map(([n,canal,img,ctr,perf])=>`
        <div class="card" style="overflow:hidden"><div style="height:120px;background-size:cover;background-position:center;background-image:url('${img}');position:relative"><span class="tag ${perf==='Top'?'t-green':perf==='Baixo'?'t-warn':'t-blue'}" style="position:absolute;top:8px;right:8px">${perf}</span></div>
          <div class="pad" style="padding:13px"><div style="font-weight:700;font-size:13px">${n}</div><div class="muted" style="font-size:11px;margin-top:2px">${canal}</div><div class="row" style="justify-content:space-between;margin-top:8px;font-size:12px"><span class="muted">CTR</span><b style="color:var(--blue)">${ctr}</b></div></div>
        </div>`).join('')}
    </div>
  </div>

  <!-- ROI -->
  <div class="tabpane" data-pane="cp" id="cp-roi">
    <div class="muted" style="font-size:13px;margin-bottom:14px">O caminho completo: do investimento em anúncio até a venda fechada. É aqui que se vê se o tráfego dá retorno.</div>
    <div class="card pad" style="margin-bottom:16px">
      <h3 class="sec-title" style="margin-bottom:16px">Funil de conversão · este mês</h3>
      <div style="display:flex;align-items:stretch;gap:4px;flex-wrap:nowrap">
        ${[['Investido','R$ 4.800','#0B2A7A','100%'],['Leads','147','#1E5BFF','—'],['Visitas','38','#3B82F6','26%'],['Propostas','12','#F59E0B','8%'],['Vendas','4','#16A34A','3%']].map(([k,v,c,pct],i,arr)=>`
          <div style="flex:1;background:${c};color:#fff;border-radius:10px;padding:12px 4px;text-align:center"><div style="opacity:.85;font-size:9px;text-transform:uppercase;letter-spacing:.3px">${k}</div><div style="font-size:17px;font-weight:800;margin-top:3px">${v}</div><div style="opacity:.8;font-size:9px;margin-top:1px">${pct}</div></div>${i<arr.length-1?'<div style="display:flex;align-items:center;color:var(--muted);font-size:13px;flex:none">→</div>':''}`).join('')}
      </div>
    </div>
    <div class="grid g3" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Receita gerada (VGV)</div><div class="v" style="font-size:22px">R$ 4,2M</div><div class="d muted">4 vendas no mês</div></div>
      <div class="card stat"><div class="k">Comissão da imobiliária</div><div class="v" style="font-size:22px;color:var(--good)">R$ 126k</div></div>
      <div class="card stat"><div class="k">Retorno sobre o tráfego</div><div class="v" style="color:var(--good)">26x</div><div class="d up">cada R$ 1 → R$ 26</div></div>
    </div>
    <div class="card"><table><thead><tr><th>Campanha</th><th>Investido</th><th>Leads</th><th>Vendas</th><th>Comissão</th><th>ROI</th></tr></thead><tbody>
      ${[['Apartamentos · Zona Sul','R$ 1.800',68,2,'R$ 54k','30x','t-green'],['Casas alto padrão','R$ 1.400',41,1,'R$ 42k','30x','t-green'],['Lançamento Jardins','R$ 820',38,1,'R$ 30k','37x','t-green']].map(([nm,inv,l,v,com,roi,tg])=>`<tr><td><b>${nm}</b></td><td>${inv}</td><td>${l}</td><td>${v}</td><td style="color:var(--good);font-weight:600">${com}</td><td><span class="tag ${tg}">${roi}</span></td></tr>`).join('')}
    </tbody></table></div>
  </div>`,

secretarias:()=>head('Secretarias inteligentes','Cada usuário da plataforma tem sua própria secretária-agente, conectada ao WhatsApp que ele cadastrou. As ações que ela pode executar dependem do perfil do usuário.')+`
  <div class="card pad" style="margin-bottom:16px;border:1px solid var(--blue-100);background:linear-gradient(135deg,var(--blue-50),var(--panel))">
    <div class="row" style="gap:11px"><div style="width:34px;height:34px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center;font-size:15px"><svg class="ic"><use href="#i-sparkle"/></svg></div><div><div style="font-weight:700;font-size:14px">Uma secretária por usuário, via WhatsApp cadastrado</div><div class="muted" style="font-size:12px;margin-top:2px">No cadastro, cada colaborador informa o número de WhatsApp. É por ele que a automação envia o que for solicitado — e cada perfil libera um conjunto de ações.</div></div></div>
  </div>

  <div class="row" style="gap:8px;margin-bottom:16px;flex-wrap:wrap">
    <span class="muted" style="font-size:12.5px;align-self:center">Ver secretária de:</span>
    <span class="tag t-blue" style="cursor:pointer">Paulo Cesar · Corretor</span>
  </div>

  <div class="grid" style="grid-template-columns:1.15fr .85fr;gap:16px;align-items:start">
    <div>
      <div class="card pad" style="margin-bottom:16px">
        <div class="between" style="margin-bottom:12px"><div class="row"><div class="avatar">PC</div><div><div style="font-weight:700">Secretária do Paulo Cesar</div><div class="muted" style="font-size:12px">Perfil: <b style="color:var(--blue)">Corretor</b> · WhatsApp cadastrado: +55 33 99908-7046</div></div></div><span class="tag t-green">● Online</span></div>
        <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin:4px 0 7px">Autorizações deste perfil</div>
        <div class="row" style="flex-wrap:wrap;gap:7px;margin-bottom:8px"><span class="tag t-blue"><svg class="ic"><use href="#i-calendar"/></svg> Própria agenda</span><span class="tag t-blue"><svg class="ic"><use href="#i-home"/></svg> Próprios imóveis</span><span class="tag t-blue"><svg class="ic"><use href="#i-users"/></svg> Próprios leads</span><span class="tag t-blue"><svg class="ic"><use href="#i-doc"/></svg> Relatórios próprios</span><span class="tag t-blue"><svg class="ic"><use href="#i-link"/></svg> Site do corretor</span><span class="tag t-blue"><svg class="ic"><use href="#i-doc"/></svg> Contratos</span></div>
        <div class="row" style="flex-wrap:wrap;gap:7px"><span class="tag t-grey"><svg class="ic"><use href="#i-x"/></svg> Dados de outros corretores</span><span class="tag t-grey"><svg class="ic"><use href="#i-x"/></svg> Financeiro da imobiliária</span><span class="tag t-grey"><svg class="ic"><use href="#i-x"/></svg> Campanhas</span></div>
      </div>
      <div class="card pad">
        <h3 class="sec-title" style="margin-bottom:6px">O que a secretária fez hoje</h3>
        <p class="muted" style="font-size:12px;margin:0 0 12px">Tudo registrado no sistema e enviado pelo WhatsApp do Paulo Cesar, sem ele abrir o painel.</p>
        <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-link"/></svg></div><div><b>Enviou 5 imóveis pro lead Paulo Cesar</b> · faixa R$ 400–600k, Zona Sul. Devolveu link do site do corretor.<div class="muted" style="font-size:11px;margin-top:2px">há 12 min</div></div></div>
        <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-calendar"/></svg></div><div><b>Remarcou visita</b> de quinta 14h → sexta 10h, por áudio do corretor.<div class="muted" style="font-size:11px;margin-top:2px">há 40 min</div></div></div>
        <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-doc"/></svg></div><div><b>Gerou relatório em PDF</b> · 23 leads atendidos esta semana.<div class="muted" style="font-size:11px;margin-top:2px">há 1h</div></div></div>
        <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-users"/></svg></div><div><b>Qualificou lead novo</b> (Paulo Cesar) e moveu pra etapa "Visita".<div class="muted" style="font-size:11px;margin-top:2px">há 2h</div></div></div>
        <button class="btn-sm" style="margin-top:14px;width:100%" onclick="showInfo('Configurar secretária do Paulo Cesar', modalConfigSec('Paulo Cesar','Corretor'),'lg')"><svg class="ic"><use href="#i-settings"/></svg> Configurar identidade e autorizações</button>
      </div>
    </div>
    <div class="wa">
      <div class="wa-head"><div class="av">S</div><div><div class="nm">Secretária · Mavis OS</div><div class="st">online · WhatsApp do Paulo Cesar (+55 33 99908-7046)</div></div></div>
      <div class="wa-body">
        <div class="bub sys">Demonstração — conversa real do corretor com sua secretaria</div>
        <div class="bub out">Oi! Caiu um lead querendo casa de 400 a 600 mil na Zona Sul. Manda umas opções pra ele<div class="t">09:12 ✓✓</div></div>
        <div class="bub in">Achei 5 imóveis no seu portfólio nessa faixa Já montei um link só com eles pro lead:
          <div class="imovel"><img src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=200&q=60"><div class="iv"><b>Casa Zona Sul</b><br>R$ 480.000 · 3 quartos</div></div>
          <div class="imovel"><img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=200&q=60"><div class="iv"><b>Sobrado Jardim</b><br>R$ 560.000 · 3 quartos</div></div>
          <a class="link">alphaimoveis.mavimob.site/eric/sel-marcos</a>
          <div class="t">09:12</div>
        </div>
        <div class="bub out">Perfeito, manda pra ele. Depois me fala quantos leads você atendeu essa semana<div class="t">09:13 ✓✓</div></div>
        <div class="bub in">Enviado <svg class="ic"><use href="#i-check"/></svg> Esta semana atendi <b>23 leads</b> seus. Quer o relatório completo?<div class="t">09:13</div></div>
        <div class="bub out"><svg class="ic"><use href="#i-mic"/></svg> Áudio (0:06) — "Quero sim, e remarca a visita de quinta pra sexta de manhã"<div class="t">09:14 ✓✓</div></div>
        <div class="bub in">Feito! <svg class="ic"><use href="#i-doc"/></svg> Relatório gerado: <a class="link">relatorio-leads-semana.pdf</a><br>E a visita foi remarcada: <b>quinta 14h → sexta 10h</b> <svg class="ic"><use href="#i-check"/></svg><div class="t">09:14</div></div>
      </div>
      <div class="wa-input"><div class="box">Digite ou grave um áudio…</div><div class="mic"><svg class="ic"><use href="#i-mic"/></svg></div></div>
    </div>
  </div>`,

agente:()=>head('Agente & Integração WhatsApp','Configure o escopo do agente e conecte o canal de atendimento.')+`
  <div class="grid g2">
    <div class="card pad"><h3 class="sec-title" style="margin-bottom:14px">Configuração do agente</h3>
      <div class="field"><label>Nome da imobiliária</label><input class="inp" value="Alpha Imóveis"></div>
      <div class="field"><label>Nome do agente</label><input class="inp" value="Paulo Cesar"></div>
      <div class="perm"><div><div class="pt">Consultar imóveis</div><div class="pd">Autoriza o agente a consultar o inventário.</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Abrir chamado</div><div class="pd">Registra chamados técnicos de forma assistida.</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Encaminhamento em fila</div><div class="pd">Permite encaminhar leads para a fila.</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="field" style="margin-top:6px"><label>DNA comportamental</label><input class="inp" value="Você é direto e rápido."></div>
      <button class="btn-sm btn-blue" style="width:100%"><svg class="ic"><use href="#i-save"/></svg> Salvar configurações</button>
    </div>
    <div class="card pad"><h3 class="sec-title" style="margin-bottom:4px">Integração WhatsApp</h3><p class="muted" style="font-size:13px;margin:0 0 16px">Atendimento automático via WhatsApp Business.</p>
      <div style="border:1px solid var(--line);border-radius:12px;padding:18px;text-align:center"><div class="between" style="margin-bottom:14px"><div class="row"><span style="font-size:22px"><svg class="ic"><use href="#i-chat"/></svg></span><b>WhatsApp Business</b></div><span class="tag t-warn">Desconectado</span></div><div style="background:var(--bg);border:2px dashed var(--line);border-radius:12px;padding:42px;color:var(--muted);font-size:13px"><svg class="ic"><use href="#i-bolt"/></svg><br>Clique abaixo para gerar o QR Code</div><button class="btn-sm btn-blue" style="width:100%;margin-top:14px"><svg class="ic"><use href="#i-grid"/></svg> Novo QR Code</button></div>
    </div>
  </div>`,

colaboradores:()=>head('Colaboradores & permissões','Admin e gestores criam perfis, definem permissões por módulo e acompanham status em tempo real.')+fbar({search:'Buscar colaborador por nome ou e-mail…',items:'#content tbody tr',sels:[['Perfil',['Gestor','Corretor','Agente','Secretaria']],['Acesso',['Online','Offline']],['Status',['Ativo','Inativo','Suspenso']]]})+`
  <div class="row" style="gap:10px;margin-bottom:16px"><button class="btn-sm btn-blue" onclick="abrirColaborador()"><svg class="ic"><use href="#i-plus"/></svg> Novo colaborador</button></div>
  <div class="grid g4" style="margin-bottom:16px"><div class="card stat"><div class="k">Ativos</div><div class="v">5</div></div><div class="card stat"><div class="k">Online agora</div><div class="v" style="color:var(--good)">2</div></div><div class="card stat"><div class="k">Corretores</div><div class="v">3</div></div><div class="card stat"><div class="k">Gestores</div><div class="v">1</div></div></div>
  <div class="card"><table><thead><tr><th>Colaborador</th><th>Perfil</th><th>Contato</th><th>Status</th><th></th></tr></thead><tbody>
    ${[['Paulo Cesar','Gestor','paulo.cesar@alpha.com','#16A34A','Online']].map(([n,p,e,c,s])=>`<tr><td><div class="row"><div class="avatar">${n[0].toUpperCase()}</div><b>${n}</b></div></td><td><span class="tag ${p==='Administrador'?'t-blue':p==='Gestor'?'t-warn':p==='Captador'?'t-green':'t-grey'}">${p}</span></td><td class="muted">${e}</td><td><span class="row" style="gap:6px"><span class="dot" style="background:${c}"></span>${s}</span></td><td><button class="btn-sm" onclick="modalPermColab('${n}','${p}')">Permissões</button></td></tr>`).join('')}
  </tbody></table></div>`,

contratos:()=>head('Contratos','A imobiliária sobe até 10 modelos de contrato. O corretor pede pelo WhatsApp, a secretária preenche e devolve o documento pronto.')+fbar({search:'Buscar contrato ou cliente…',items:'#content tbody tr',sels:[['Tipo',['Locação','Compra e Venda','Proposta de Compra','Autorização de Venda']],['Status',['Assinado','Aguardando']]]})+`
  <div class="subtabs"><button class="on" data-tabgroup="ct" onclick="tab(this,'ct','ct-modelos')">Modelos (4/10)</button><button data-tabgroup="ct" onclick="tab(this,'ct','ct-fluxo')">Como o corretor usa</button><button data-tabgroup="ct" onclick="tab(this,'ct','ct-assinatura')">Assinatura digital</button><button data-tabgroup="ct" onclick="tab(this,'ct','ct-hist')">Documentos gerados</button></div>

  <div class="tabpane on" data-pane="ct" id="ct-modelos">
    <div class="between" style="margin-bottom:14px"><span class="muted" style="font-size:13px">Modelos disponíveis para a secretária preencher automaticamente</span><button class="btn-sm btn-blue" onclick="showInfo('Subir novo modelo de contrato', modalUploadContrato(), 'lg')">+ Subir modelo</button></div>
    ${[['Contrato de Compra e Venda','Campos: comprador, vendedor, imóvel, valor, condições','<svg class="ic"><use href="#i-doc"/></svg>'],['Contrato de Locação','Campos: locador, locatário, imóvel, aluguel, prazo','<svg class="ic"><use href="#i-home"/></svg>'],['Autorização de Venda','Campos: proprietário, imóvel, exclusividade, comissão','<svg class="ic"><use href="#i-key"/></svg>'],['Proposta de Compra','Campos: proponente, imóvel, valor proposto, validade','<svg class="ic"><use href="#i-edit"/></svg>']].map(([n,d,ic])=>`
      <div class="contract"><div class="doc">${ic}</div><div style="flex:1"><div class="nm">${n}</div><div class="ds">${d}</div></div><div class="row"><span class="tag t-green">Ativo</span><button class="btn-sm" onclick="showInfo('${n}', modalVerContrato('${n}'),'lg')">Ver</button></div></div>`).join('')}
    <div class="box note" style="background:var(--bg);border:1px solid var(--line);border-radius:12px;padding:14px;font-size:12.5px;color:var(--muted);margin-top:6px">Você pode subir até <b>10 modelos</b>. A secretária identifica o contrato pelo nome quando o corretor pede no WhatsApp.</div>
  </div>

  <div class="tabpane" data-pane="ct" id="ct-fluxo">
    <div class="grid" style="grid-template-columns:1fr 1fr;gap:16px;align-items:start">
      <div class="card pad">
        <h3 class="sec-title" style="margin-bottom:12px">Passo a passo</h3>
        <div class="timeline2">
          <div class="tl"><div class="tt">1. Corretor pede no WhatsApp</div><div class="td">"Gera o contrato de locação pro cliente João, imóvel da Rua X, R$ 2.500/mês"</div></div>
          <div class="tl"><div class="tt">2. Secretária identifica o modelo</div><div class="td">Reconhece "contrato de locação" entre os modelos da imobiliária</div></div>
          <div class="tl"><div class="tt">3. Busca os dados no sistema</div><div class="td">Puxa dados do imóvel, do lead e do corretor automaticamente</div></div>
          <div class="tl"><div class="tt">4. Preenche e devolve em PDF</div><div class="td">Documento pronto entregue no WhatsApp do corretor</div></div>
        </div>
      </div>
      <div class="wa" style="height:480px">
        <div class="wa-head"><div class="av">S</div><div><div class="nm">Secretaria · Mavis OS</div><div class="st">online</div></div></div>
        <div class="wa-body">
          <div class="bub out">Gera o contrato de locação pro Paulo Cesar, imóvel da Rua das Flores 120, R$ 2.500/mês, 30 meses<div class="t">10:02 ✓✓</div></div>
          <div class="bub in">Perfeito! Localizei o modelo "Contrato de Locação" e os dados do imóvel. Preenchendo… <svg class="ic"><use href="#i-clock"/></svg><div class="t">10:02</div></div>
          <div class="bub in">Pronto! <svg class="ic"><use href="#i-doc"/></svg> Contrato preenchido com locador, locatário, imóvel, valor e prazo:<br><a class="link">contrato-locacao-paulo-cesar.pdf</a><div class="t">10:03</div></div>
          <div class="bub out">Top! Manda também a autorização de venda da Casa de Férias<div class="t">10:03 ✓✓</div></div>
          <div class="bub in">Feito <svg class="ic"><use href="#i-check"/></svg> <a class="link">autorizacao-venda-casa-ferias.pdf</a><div class="t">10:03</div></div>
        </div>
        <div class="wa-input"><div class="box">Digite ou grave um áudio…</div><div class="mic"><svg class="ic"><use href="#i-mic"/></svg></div></div>
      </div>
    </div>
  </div>

  <div class="tabpane" data-pane="ct" id="ct-assinatura">
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Aguardando assinatura</div><div class="v" style="color:var(--warn)">3</div></div>
      <div class="card stat"><div class="k">Assinados no mês</div><div class="v" style="color:var(--good)">18</div></div>
      <div class="card stat"><div class="k">Tempo médio</div><div class="v" style="font-size:22px">1h40</div><div class="d muted">envio → assinatura</div></div>
      <div class="card stat"><div class="k">Taxa de conclusão</div><div class="v">94%</div></div>
    </div>
    <div class="card pad" style="margin-bottom:16px">
      <h3 class="sec-title" style="margin-bottom:10px">Como funciona a assinatura digital</h3>
      <div class="stepline"><span class="s on">Secretária gera o contrato</span><span>→</span><span class="s">Envia link por WhatsApp/e-mail</span><span>→</span><span class="s">Cliente assina pelo celular</span><span>→</span><span class="s">Documento com validade jurídica</span></div>
      <div class="muted" style="font-size:12.5px">A assinatura tem validade jurídica (certificado + carimbo de tempo). Ambas as partes recebem a via final automaticamente.</div>
    </div>
    <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Documentos para assinatura</h3><button class="btn-sm btn-blue" onclick="showInfo('Enviar para assinatura', modalAssinatura(),'lg')">+ Enviar para assinatura</button></div>
    <div class="card"><table><thead><tr><th>Documento</th><th>Partes</th><th>Status</th><th></th></tr></thead><tbody>
      ${[
        ['Contrato locação · Casa de Férias','Paulo Cesar, Alpha Imóveis','Assinado','t-green','Baixar'],
      ].map(([doc,partes,st,tg,acao])=>`<tr><td><b>${doc}</b></td><td class="muted" style="font-size:12px">${partes}</td><td><span class="tag ${tg}">${st}</span></td><td><button class="btn-sm ${acao==='Lembrar'?'btn-blue':''}">${acao}</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="ct" id="ct-hist">
    <div class="card"><table><thead><tr><th>Documento</th><th>Modelo</th><th>Corretor</th><th>Data</th><th></th></tr></thead><tbody>
      ${[['Contrato locação · Casa de Férias','Locação','Paulo Cesar','hoje 10:03']].map(([n,m,c,d])=>`<tr><td><b>${n}</b></td><td><span class="tag t-blue">${m}</span></td><td class="muted">${c}</td><td class="muted">${d}</td><td><button class="btn-sm">Baixar PDF</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>`,

relatorios:()=>head('Relatórios','Central de relatórios do sistema. Gere em PDF qualquer visão da operação — sozinho ou pedindo pra secretária no WhatsApp. Ideais para comparação por período, corretor e canal.')+fbar({sels:[['Tipo de relatório',['Vendas','Locações','Leads','Financeiro','Desempenho']],['Canal',['OLX','Meta','Site','Indicação']]],seg:['Mês','Trimestre','Ano'],segActive:0})+`
  <h3 class="sec-title" style="margin-bottom:12px">Vendas & corretores</h3>
  <div class="grid g3" style="margin-bottom:22px">
    ${[
      ['Vendas por corretor','Ranking de vendas, ticket e comissão de cada corretor','#16A34A','<svg class="ic"><use href="#i-money"/></svg>'],
      ['Ranking de corretores','Comparativo de desempenho, conversão e visitas','#0B2A7A','<svg class="ic"><use href="#i-trophy"/></svg>'],
      ['Desempenho de vendas','Vendas fechadas, ticket médio e VGV no período','#1E5BFF','<svg class="ic"><use href="#i-chart"/></svg>'],
      ['Comissões a pagar','Quanto cada corretor tem a receber de comissão','#F59E0B','<svg class="ic"><use href="#i-money"/></svg>'],
      ['Comissões Mav Imob','Repasses por imóvel compartilhado e status','#E1306C','<svg class="ic"><use href="#i-star"/></svg>'],
    ].map(([n,d,c,ic])=>`<div class="rep" onclick="showInfo('Relatório · ${n}', modalRelatorio('${n}','${c}'),'lg')"><div class="ic2" style="background:${c}">${ic}</div><div class="nm">${n}</div><div class="ds">${d}</div><div class="ft">Gerar PDF →</div></div>`).join('')}
  </div>

  <h3 class="sec-title" style="margin-bottom:12px">Captação</h3>
  <div class="grid g3" style="margin-bottom:22px">
    ${[
      ['Captadores ativos/inativos','Quem está captando e quem está parado no período','#0EA5E9','<svg class="ic"><use href="#i-home"/></svg>'],
      ['Captador a receber','Valores a repassar a cada captador por imóvel captado','#16A34A','<svg class="ic"><use href="#i-money"/></svg>'],
      ['Imóveis captados','Volume de captação por captador e por região','#3B82F6','<svg class="ic"><use href="#i-pin"/></svg>'],
    ].map(([n,d,c,ic])=>`<div class="rep" onclick="showInfo('Relatório · ${n}', modalRelatorio('${n}','${c}'),'lg')"><div class="ic2" style="background:${c}">${ic}</div><div class="nm">${n}</div><div class="ds">${d}</div><div class="ft">Gerar PDF →</div></div>`).join('')}
  </div>

  <h3 class="sec-title" style="margin-bottom:12px">Financeiro</h3>
  <div class="grid g3" style="margin-bottom:22px">
    ${[
      ['Contas a pagar e receber','Fluxo de caixa, pendências e saldo previsto','#1E5BFF','<svg class="ic"><use href="#i-chart"/></svg>'],
      ['DRE simples','Receitas − custos = lucro do período','#0B2A7A','<svg class="ic"><use href="#i-doc"/></svg>'],
      ['Locações & taxa de adm.','Caixa recorrente dos aluguéis administrados','#16A34A','<svg class="ic"><use href="#i-key"/></svg>'],
      ['Inadimplência de aluguel','Contratos em atraso e valores em aberto','#EF4444','<svg class="ic"><use href="#i-alert"/></svg>'],
    ].map(([n,d,c,ic])=>`<div class="rep" onclick="showInfo('Relatório · ${n}', modalRelatorio('${n}','${c}'),'lg')"><div class="ic2" style="background:${c}">${ic}</div><div class="nm">${n}</div><div class="ds">${d}</div><div class="ft">Gerar PDF →</div></div>`).join('')}
  </div>

  <h3 class="sec-title" style="margin-bottom:12px">Operação & marketing</h3>
  <div class="grid g3">
    ${[
      ['Leads atendidos','Volume, origem e conversão por período e por corretor','#1E5BFF','<svg class="ic"><use href="#i-users"/></svg>'],
      ['Funil de leads','Conversão por etapa e tempo médio em cada fase','#8B5CF6','<svg class="ic"><use href="#i-clock"/></svg>'],
      ['Campanhas & tráfego','Investimento, alcance, leads e custo por lead','#E1306C','<svg class="ic"><use href="#i-megaphone"/></svg>'],
      ['Produtividade da secretária','Ações executadas, tempo de resposta, atendimentos','#0B2A7A','<svg class="ic"><use href="#i-sparkle"/></svg>'],
      ['Agenda & visitas','Visitas marcadas, concluídas e canceladas por corretor','#3B82F6','<svg class="ic"><use href="#i-calendar"/></svg>'],
      ['Imóveis & portfólio','Carteira, status e distribuição nos marketplaces','#0EA5E9','<svg class="ic"><use href="#i-home"/></svg>'],
      ['Chamados & SAC','Volume, prioridade e tempo médio de atendimento','#EF4444','<svg class="ic"><use href="#i-lifebuoy"/></svg>'],
    ].map(([n,d,c,ic])=>`<div class="rep" onclick="showInfo('Relatório · ${n}', modalRelatorio('${n}','${c}'),'lg')"><div class="ic2" style="background:${c}">${ic}</div><div class="nm">${n}</div><div class="ds">${d}</div><div class="ft">Gerar PDF →</div></div>`).join('')}
  </div>`,

metas:()=>head('Metas & Previsibilidade','Defina o alvo do mês e acompanhe o quanto falta. A IA projeta o fechamento com base no funil e no ritmo atual da equipe.')+fbar({seg:['Mês','Trimestre','Ano'],segActive:0})+`
  <div class="grid g3" style="margin-bottom:16px">
    <div class="card pad" style="grid-column:span 2;background:linear-gradient(135deg,var(--ink-deep),#103DBE);color:#fff">
      <div class="between" style="flex-wrap:wrap;gap:12px"><div><div style="font-size:11px;opacity:.8;text-transform:uppercase;letter-spacing:1px">Meta do mês · Junho 2026</div><div style="font-size:26px;font-weight:800;margin-top:4px">R$ 3,2M <span style="font-size:14px;opacity:.7;font-weight:400">em VGV</span></div><div style="opacity:.85;font-size:13px;margin-top:2px">R$ 2,1M realizados · faltam R$ 1,1M</div></div><div style="text-align:center"><div style="font-size:30px;font-weight:800">66%</div><div style="opacity:.8;font-size:11px">da meta</div></div></div>
      <div class="progress" style="margin-top:14px;background:rgba(255,255,255,.2)"><div class="pf" style="width:66%;background:#fff"></div></div>
    </div>
    <div class="card stat"><div class="k">Projeção da IA</div><div class="v" style="font-size:22px;color:var(--good)">R$ 3,4M</div><div class="d up">deve bater a meta (106%)</div></div>
  </div>
  <div class="card pad" style="margin-bottom:16px;border:1px solid var(--blue-100);background:linear-gradient(135deg,var(--blue-50),var(--panel))">
    <div class="row" style="gap:11px"><div style="width:32px;height:32px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center"><svg class="ic"><use href="#i-sparkle"/></svg></div><div class="muted" style="font-size:12.5px">Com <b style="color:var(--ink)">168 propostas</b> abertas e conversão histórica de 8%, a IA projeta <b style="color:var(--ink)">R$ 3,4M</b> de fechamento. Para garantir a meta, foque nos <b style="color:var(--ink)">12 leads em negociação</b> — eles valem R$ 1,4M.</div></div>
  </div>
  <div class="between" style="margin-bottom:14px"><h3 class="sec-title">Metas por corretor</h3><button class="btn-sm btn-blue" onclick="showInfo('Definir metas', modalMeta(),'lg')"><svg class="ic"><use href="#i-settings"/></svg> Definir metas</button></div>
  <div class="card"><table><thead><tr><th>Corretor</th><th>Meta (VGV)</th><th>Realizado</th><th>Progresso</th><th>Projeção</th></tr></thead><tbody>
    ${[['Paulo Cesar','1.200.000','920.000',77,'1.250.000','t-green']].map(([n,meta,real,prog,proj,tg])=>`<tr><td><div class="row"><div class="avatar">${n[0]}</div><b>${n}</b></div></td><td>R$ ${meta}</td><td>R$ ${real}</td><td style="min-width:140px"><div class="progress"><div class="pf" style="width:${prog}%;background:${prog>=70?'var(--good)':'var(--warn)'}"></div></div><span class="muted" style="font-size:11px">${prog}%</span></td><td><span class="tag ${tg}">R$ ${proj}</span></td></tr>`).join('')}
  </tbody></table></div>`,

portal:()=>head('Portal do cliente','Área externa onde proprietários e compradores acompanham o que importa pra eles: extratos de aluguel, repasses, propostas e documentos — com a marca da imobiliária.')+`
  <div class="subtabs">
    <button class="on" data-tabgroup="pt" onclick="tab(this,'pt','pt-config')">Configuração</button>
    <button data-tabgroup="pt" onclick="tab(this,'pt','pt-prop')">Visão do proprietário</button>
    <button data-tabgroup="pt" onclick="tab(this,'pt','pt-comp')">Visão do comprador</button>
  </div>

  <div class="tabpane on" data-pane="pt" id="pt-config">
    <div class="grid g3" style="margin-bottom:16px">
      <div class="card stat"><div class="k">Acessos no mês</div><div class="v">312</div><div class="d up">↑ 18%</div></div>
      <div class="card stat"><div class="k">Proprietários ativos</div><div class="v">24</div></div>
      <div class="card stat"><div class="k">Compradores ativos</div><div class="v">86</div></div>
    </div>
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:12px">O que o cliente vê no portal</h3>
      <div class="perm"><div><div class="pt">Extrato de aluguel e repasses (proprietário)</div><div class="pd">Quanto recebeu, taxa retida e datas</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Status da proposta (comprador)</div><div class="pd">Acompanha cada etapa da negociação</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Documentos e contratos</div><div class="pd">Baixar contratos e comprovantes</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">2ª via de boleto</div><div class="pd">Inquilino emite boleto pelo portal</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Falar com a imobiliária</div><div class="pd">Abre conversa no WhatsApp</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="linkbox" style="margin-top:14px"><svg class="ic"><use href="#i-link"/></svg> Link do portal: <code>portal.alphaimoveis.com.br</code> <button class="btn-sm" style="margin-left:auto">Copiar</button></div>
    </div>
  </div>

  <div class="tabpane" data-pane="pt" id="pt-prop">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Prévia do que o proprietário de um imóvel alugado vê quando entra no portal.</div>
    <div class="card pad" style="max-width:560px;margin:0 auto;border:1px solid var(--line)">
      <div class="row" style="gap:10px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--line)"><div style="width:38px;height:38px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center;font-weight:800">A</div><div><div style="font-weight:700">Olá, Paulo Cesar </div><div class="muted" style="font-size:12px">Proprietário · Casa 3qt Jardins</div></div></div>
      <div class="grid g2" style="margin-bottom:14px"><div class="card pad" style="padding:12px;background:var(--good-bg)"><div class="muted" style="font-size:11px">Próximo repasse</div><div style="font-weight:800;font-size:18px;color:var(--good)">R$ 3.780</div><div class="muted" style="font-size:11px">em 12/07</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:11px">Recebido em 2026</div><div style="font-weight:800;font-size:18px">R$ 22.680</div></div></div>
      <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Últimos repasses</div>
      ${[['Junho','R$ 3.780','pago'],['Maio','R$ 3.780','pago'],['Abril','R$ 3.780','pago']].map(([m,v,s])=>`<div class="row" style="justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--line);font-size:13px"><span>${m}/2026</span><span><b>${v}</b> <span class="tag t-green">${s}</span></span></div>`).join('')}
      <button class="btn-sm" style="width:100%;margin-top:12px"><svg class="ic"><use href="#i-doc"/></svg> Baixar extrato</button>
    </div>
  </div>

  <div class="tabpane" data-pane="pt" id="pt-comp">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Prévia do que o comprador vê ao acompanhar a proposta dele.</div>
    <div class="card pad" style="max-width:560px;margin:0 auto;border:1px solid var(--line)">
      <div class="row" style="gap:10px;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--line)"><div style="width:38px;height:38px;border-radius:9px;background:var(--blue);color:#fff;display:grid;place-items:center;font-weight:800">A</div><div><div style="font-weight:700">Olá, Paulo Cesar </div><div class="muted" style="font-size:12px">Proposta · Apto Centro · R$ 680.000</div></div></div>
      <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Status da sua compra</div>
      <div class="timeline2">
        <div class="tl"><div class="tt">Proposta enviada ✓</div><div class="td">02/06 · R$ 680.000</div></div>
        <div class="tl"><div class="tt">Proposta aceita ✓</div><div class="td">04/06 pelo proprietário</div></div>
        <div class="tl"><div class="tt">Documentação em análise</div><div class="td">em andamento · faltam 2 documentos</div></div>
        <div class="tl" style="opacity:.5"><div class="tt">Assinatura do contrato</div><div class="td">aguardando</div></div>
        <div class="tl" style="opacity:.5"><div class="tt">Escritura</div><div class="td">aguardando</div></div>
      </div>
      <button class="btn-sm btn-blue" style="width:100%;margin-top:8px"><svg class="ic"><use href="#i-clip"/></svg> Enviar documentos pendentes</button>
    </div>
  </div>`,

chamados:()=>head('Suporte / SAC','Atendimento humano de suporte. Quando a IA atinge o limite, abre um chamado com o contexto completo. Acompanhe em atendimento e histórico.')+fbar({search:'Buscar chamado ou cliente…',sels:[['Prioridade',['Crítica','Alta','Média','Baixa']],['Status',['Aberto','Em atendimento','Resolvido']]]})+`
  <div class="grid g4" style="margin-bottom:16px"><div class="card stat"><div class="k">Aguardando</div><div class="v" style="color:var(--warn)">2</div></div><div class="card stat"><div class="k">Resolvidos</div><div class="v">5</div></div><div class="card stat"><div class="k">Críticos</div><div class="v" style="color:var(--danger)">1</div></div><div class="card stat"><div class="k">Tempo médio</div><div class="v" style="font-size:24px">476 min</div></div></div>
  <div class="subtabs"><button class="on" data-tabgroup="ch" onclick="tab(this,'ch','ch-aberto')">Em atendimento (2)</button><button data-tabgroup="ch" onclick="tab(this,'ch','ch-hist')">Histórico (5)</button></div>
  <div class="tabpane on" data-pane="ch" id="ch-aberto">
    ${[['Cliente quer renegociar valor','Lead: Paulo Cesar · imóvel Casa de Férias','Alta','#F59E0B','há 38 min']].map(([t,d,pr,c,tm])=>`
      <div class="card pad" style="margin-bottom:11px"><div class="between"><div><div style="font-weight:700;font-size:14.5px">${t}</div><div class="muted" style="font-size:12.5px;margin-top:2px">${d} · ${tm}</div></div><div class="row"><span class="tag" style="background:${c}22;color:${c}">${pr}</span><button class="btn-sm btn-blue" onclick="showInfo('Chamado · ${t}', modalChamado('${t}','${d}'),'lg')">Atender</button></div></div></div>`).join('')}
  </div>
  <div class="tabpane" data-pane="ch" id="ch-hist">
    <div class="card"><table><thead><tr><th>Chamado</th><th>Prioridade</th><th>Resolvido por</th><th>Tempo</th></tr></thead><tbody>
      ${[['Agendar visita urgente','Média','Paulo Cesar','22 min']].map(([t,p,r,tm])=>`<tr><td><b>${t}</b></td><td><span class="tag ${p==='Alta'?'t-warn':p==='Média'?'t-blue':'t-grey'}">${p}</span></td><td class="muted">${r}</td><td class="muted">${tm}</td></tr>`).join('')}
    </tbody></table></div>
  </div>`,

encaminhamento:()=>screens.leads(),

financeiro:()=>head('Financeiro','Sua assinatura do Mavis OS, faturas e as comissões a receber da Mav Imob — tudo num lugar.')+fbar({sels:[['Categoria',['Receitas','Despesas','Comissões','Repasses','Faturas']]],seg:['Mês','Trimestre','Ano'],segActive:0})+`
  <div class="subtabs"><button class="on" data-tabgroup="fin" onclick="tab(this,'fin','fin-plano')">Minha assinatura</button><button data-tabgroup="fin" onclick="tab(this,'fin','fin-contas')">Contas a pagar/receber</button><button data-tabgroup="fin" onclick="tab(this,'fin','fin-faturas')">Faturas</button><button data-tabgroup="fin" onclick="tab(this,'fin','fin-comissoes')">Comissões Mav Imob</button><button data-tabgroup="fin" onclick="tab(this,'fin','fin-planos')">Planos & comparação</button></div>

  <div class="tabpane on" data-pane="fin" id="fin-plano">
    <div class="grid g3" style="margin-bottom:16px">
      <div class="card pad" style="grid-column:span 2;background:linear-gradient(135deg,var(--ink-deep),#103DBE);color:#fff">
        <div class="between"><div><div style="font-size:11px;opacity:.8;text-transform:uppercase;letter-spacing:1px">Plano atual</div><div style="font-size:24px;font-weight:800;margin-top:4px">Performance</div><div style="opacity:.85;font-size:13px;margin-top:2px">R$ 799/mês · renovação em 12/07/2026</div></div><span class="tag" style="background:rgba(255,255,255,.2);color:#fff">Ativo</span></div>
        <div class="row" style="gap:10px;margin-top:18px"><button class="btn-sm" style="background:#fff;color:var(--blue)" onclick="showInfo('Mudar de plano', modalPlanos(),'lg')">Mudar de plano</button><button class="btn-sm" style="background:rgba(255,255,255,.15);color:#fff;border:none">Gerenciar pagamento</button></div>
      </div>
      <div class="card stat"><div class="k">Próxima fatura</div><div class="v" style="font-size:24px">R$ 799</div><div class="d muted">vence 12/07</div></div>
    </div>
    <div class="card pad"><h3 class="sec-title" style="margin-bottom:12px">O que seu plano inclui</h3>
      <div class="grid g2">${['Imóveis ilimitados','Até 8 corretores','Secretária IA por corretor','Integrações com marketplaces','Campanhas & tráfego','Site próprio + domínio','Contratos e relatórios','Suporte prioritário'].map(f=>`<div class="row" style="padding:6px 0;font-size:13px"><span style="color:var(--good)">✓</span> ${f}</div>`).join('')}</div>
    </div>
  </div>

  <div class="tabpane" data-pane="fin" id="fin-contas">
    <div class="grid g4" style="margin-bottom:16px">
      <div class="card stat"><div class="k">A receber (mês)</div><div class="v" style="font-size:21px;color:var(--good)">R$ 64.200</div><div class="d muted">vendas + aluguéis + adm</div></div>
      <div class="card stat"><div class="k">A pagar (mês)</div><div class="v" style="font-size:21px;color:var(--danger)">R$ 38.900</div><div class="d muted">repasses + custos + comissões</div></div>
      <div class="card stat"><div class="k">Saldo previsto</div><div class="v" style="font-size:21px;color:var(--good)">R$ 25.300</div></div>
      <div class="card stat"><div class="k">Caixa de locação</div><div class="v" style="font-size:21px">R$ 8.640</div><div class="d muted">taxa de adm. recorrente</div></div>
    </div>
    <div class="grid g2" style="align-items:start">
      <div class="card pad">
        <div class="between" style="margin-bottom:12px"><h3 class="sec-title" style="color:var(--good)">Contas a receber</h3><button class="btn-sm" onclick="showInfo('Nova conta a receber', modalConta('receber'),'sm')">+ Lançar</button></div>
        <table style="font-size:12px">${[['Comissão venda · Apto Vila Mariana','R$ 28.000','08/07','t-warn'],['Taxa adm. aluguéis (24 contratos)','R$ 8.640','10/07','t-green'],['Aluguéis a receber','R$ 86.400','vários','t-blue'],['Comissão Mav Imob','R$ 9.800','previsto','t-warn']].map(([d,v,venc,tg])=>`<tr><td style="text-align:left"><b>${d}</b></td><td>${v}</td><td class="muted">${venc}</td></tr>`).join('')}</table>
      </div>
      <div class="card pad">
        <div class="between" style="margin-bottom:12px"><h3 class="sec-title" style="color:var(--danger)">Contas a pagar</h3><button class="btn-sm" onclick="showInfo('Nova conta a pagar', modalConta('pagar'),'sm')">+ Lançar</button></div>
        <table style="font-size:12px">${[['Repasse a proprietários','R$ 19.800','10/07','t-warn'],['Comissões a corretores','R$ 12.400','05/07','t-warn'],['Assinatura Mavis OS','R$ 799','12/07','t-blue'],['Marketing & tráfego','R$ 4.800','vários','t-grey'],['Custos operacionais','R$ 1.100','30/07','t-grey']].map(([d,v,venc,tg])=>`<tr><td style="text-align:left"><b>${d}</b></td><td>${v}</td><td class="muted">${venc}</td></tr>`).join('')}</table>
      </div>
    </div>
    <div class="card pad" style="margin-top:16px;background:var(--blue-50);border:1px solid var(--blue-100)"><div class="row" style="gap:10px"><span style="font-size:18px"><svg class="ic"><use href="#i-key"/></svg></span><div class="muted" style="font-size:12.5px">A <b style="color:var(--ink)">taxa de administração das locações (R$ 8.640/mês)</b> é caixa recorrente que entra automaticamente nas contas a receber. Veja os contratos no menu Locações.</div></div></div>
  </div>

  <div class="tabpane" data-pane="fin" id="fin-faturas">
    <div class="card"><table><thead><tr><th>Fatura</th><th>Período</th><th>Valor</th><th>Status</th><th></th></tr></thead><tbody>
      ${[['#2026-06','Jun/2026','R$ 799','Paga','t-green'],['#2026-05','Mai/2026','R$ 799','Paga','t-green'],['#2026-04','Abr/2026','R$ 799','Paga','t-green'],['#2026-07','Jul/2026','R$ 799','Em aberto','t-warn']].map(([n,p,v,s,tg])=>`<tr><td><b>${n}</b></td><td class="muted">${p}</td><td>${v}</td><td><span class="tag ${tg}">${s}</span></td><td><button class="btn-sm">Baixar</button></td></tr>`).join('')}
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="fin" id="fin-comissoes">
    <div class="grid g3" style="margin-bottom:16px"><div class="card stat"><div class="k">A receber</div><div class="v" style="color:var(--warn);font-size:24px">R$ 9.800</div><div class="d muted">1 venda em negociação</div></div><div class="card stat"><div class="k">Recebido em 2026</div><div class="v" style="color:var(--good);font-size:24px">R$ 42.300</div></div><div class="card stat"><div class="k">Imóveis na Mav Imob</div><div class="v">4</div></div></div>
    <div class="card"><table><thead><tr><th>Imóvel</th><th>Status</th><th>Sua comissão</th><th>Repasse</th></tr></thead><tbody>
      ${[['Casa de Férias','Anunciando','70%','—','t-blue']].map(([n,st,pct,rep,tg])=>`<tr><td><b>${n}</b></td><td><span class="tag ${tg}">${st}</span></td><td>${pct}</td><td style="font-weight:600${rep.includes('pago')?';color:var(--good)':''}">${rep}</td></tr>`).join('')}
    </tbody></table></div>
  </div>

  <div class="tabpane" data-pane="fin" id="fin-planos">
    <div class="muted" style="font-size:13px;margin-bottom:14px">Compare o que cada plano oferece. As funções e a capacidade crescem do Essencial ao Enterprise — que tem acesso a tudo.</div>
    <div class="grid g4" style="margin-bottom:18px">
      ${[['Essencial','199','1 corretor',false],['Profissional','399','até 3 corretores',false],['Performance','799','até 8 corretores',true],['Enterprise','1.499','ilimitado',false]].map(([n,p,cap,atual])=>`
        <div class="card pad" style="text-align:center;border:2px solid ${atual?'var(--blue)':'var(--line)'};${atual?'background:var(--blue-50)':''}">${atual?'<span class="tag t-blue" style="margin-bottom:6px">Seu plano</span>':''}<div style="font-weight:800;font-size:15px">${n}</div><div style="font-size:20px;font-weight:800;margin:4px 0">R$ ${p}<span style="font-size:11px;color:var(--muted);font-weight:400">/mês</span></div><div class="muted" style="font-size:11px">${cap}</div></div>`).join('')}
    </div>
    <div class="card" style="overflow-x:auto"><table style="font-size:12px;min-width:620px"><thead><tr><th style="text-align:left">Função</th><th>Essencial</th><th>Profissional</th><th>Performance</th><th>Enterprise</th></tr></thead><tbody>
      ${[
        ['Corretores','1','3','8','Ilimitado'],
        ['Imóveis na carteira','100','500','Ilimitado','Ilimitado'],
        ['Site próprio','Subdomínio','Domínio próprio','Domínio próprio','Domínio próprio'],
        ['Secretária IA (WhatsApp)','1','Por usuário','Por usuário','Por usuário'],
        ['Leads & funil','✓','✓','✓','✓'],
        ['Integrações marketplaces','—','✓','✓','✓'],
        ['Locações','—','✓','✓','✓'],
        ['Automação omnichannel','—','—','✓','✓'],
        ['Canal de vendas ativo (IA liga)','—','—','✓','✓'],
        ['Campanhas & Tráfego com IA','—','—','✓','✓'],
        ['Mav Imob (compartilhar imóveis)','—','—','✓','✓'],
        ['Modelos de contrato','3','5','10','Ilimitado'],
        ['Relatórios','Básicos','Avançados','Completos','Completos'],
        ['Financeiro (contas/DRE)','—','Básico','Completo','Completo'],
        ['Suporte','Padrão','Padrão','Prioritário','Dedicado + gerente'],
        ['API & integrações próprias','—','—','—','✓'],
      ].map(([f,e,pr,pe,en])=>`<tr><td style="text-align:left;font-weight:600">${f}</td>${[e,pr,pe,en].map((v,i)=>`<td style="${i===2?'background:var(--blue-50)':''}">${v==='✓'?'<span style="color:var(--good)"><svg class="ic"><use href="#i-check"/></svg></span>':v==='—'?'<span style="color:var(--muted)">—</span>':v}</td>`).join('')}</tr>`).join('')}
    </tbody></table></div>
    <div class="row" style="justify-content:center;margin-top:16px;gap:10px"><button class="btn-sm" onclick="showInfo('Planos', modalPlanos(),'lg')">Ver planos em cards</button><button class="btn-sm btn-blue">Fazer upgrade</button></div>
  </div>`,

notificacoes:()=>head('Notificações','Tudo que precisa da sua atenção, em ordem. Leads, visitas, faturas, comissões e fila.')+fbar({search:'Buscar notificação…',items:'#content .log-item',sels:[['Tipo',['Lead','Visita','Fatura','Comissão','Chamado']],['Situação',['Não lidas','Lidas']]]})+`
  <div class="row" style="gap:8px;margin-bottom:16px"><span class="tag t-blue">Todas (8)</span><span class="tag t-grey">Não lidas (3)</span><button class="btn-sm" style="margin-left:auto">Marcar todas como lidas</button></div>
  <div class="card">
    ${[
      ['<svg class="ic"><use href="#i-bell"/></svg>','Novo lead caiu no funil','Paulo Cesar · casa 400-600k · veio do OLX','há 8 min','#1E5BFF',true],
      ['<svg class="ic"><use href="#i-calendar"/></svg>','Visita amanhã às 09h','Paulo Cesar · Apto 2 quartos','há 25 min','#F59E0B',true],
      ['<svg class="ic"><use href="#i-star"/></svg>','Comissão prevista atualizada','Cobertura Duplex em negociação · R$ 9.800','há 1h','#16A34A',true],
      ['<svg class="ic"><use href="#i-forward"/></svg>','Lead voltou pra fila','Paulo Cesar aguardando reassunção','há 2h','#D97706',false],
      ['<svg class="ic"><use href="#i-chat"/></svg>','Chamado crítico aberto','Dúvida sobre documentação · Paulo Cesar','há 3h','#EF4444',false],
      ['<svg class="ic"><use href="#i-money"/></svg>','Fatura disponível','#2026-07 · R$ 799 · vence 12/07','ontem','#0B2A7A',false],
      ['<svg class="ic"><use href="#i-check"/></svg>','Imóvel vendido pela Mav Imob','Apto Vila Mariana · comissão R$ 28.000 paga','ontem','#16A34A',false],
      ['<svg class="ic"><use href="#i-megaphone"/></svg>','Campanha atingiu 82% do orçamento','Apartamentos Zona Sul','há 2 dias','#E1306C',false],
    ].map(([ic,t,d,tm,c,unread])=>`
      <div class="log-item" style="padding:14px;${unread?'background:var(--blue-50)':''}">
        <div class="ti" style="background:${c}22;color:${c}">${ic}</div>
        <div style="flex:1"><div style="font-weight:700;font-size:13.5px">${t} ${unread?'<span class="dot" style="background:var(--blue);margin-left:4px"></span>':''}</div><div class="muted" style="font-size:12px;margin-top:1px">${d}</div></div>
        <div class="muted" style="font-size:11px">${tm}</div>
      </div>`).join('')}
  </div>`,

treinamento:()=>head('Treinamento','Aprenda a usar cada módulo do Mavis OS. Trilhas, vídeos e tutoriais para a equipe.')+fbar({search:'Buscar trilha ou vídeo…',sels:[['Módulo',['Imóveis','Leads','Financeiro','Site','Secretária']]]})+`
  <div class="card pad" style="margin-bottom:16px;background:linear-gradient(135deg,#103DBE,#0B1B3A);color:#fff">
    <div class="between" style="flex-wrap:wrap;gap:12px"><div><div style="font-size:11px;opacity:.8;text-transform:uppercase;letter-spacing:1px">Sua trilha</div><div style="font-size:20px;font-weight:800;margin-top:3px">Começando no Mavis OS</div><div style="opacity:.85;font-size:13px;margin-top:2px">4 de 7 módulos concluídos</div></div><button class="btn-sm" style="background:#fff;color:var(--blue)">Continuar trilha →</button></div>
    <div class="progress" style="margin-top:14px;background:rgba(255,255,255,.2)"><div class="pf" style="width:57%;background:#fff"></div></div>
  </div>
  <div class="grid g3">
    ${[
      ['Primeiros passos','Configurar imobiliária e equipe','6 min','✓','#16A34A'],
      ['Cadastrar imóveis','Carteira e distribuição nos portais','8 min','✓','#16A34A'],
      ['Sua secretária IA','Configurar identidade e WhatsApp','10 min','✓','#16A34A'],
      ['Gestão de leads','Funil, distribuição e encaminhamento','7 min','✓','#16A34A'],
      ['Campanhas & tráfego','Criar campanhas que geram leads','9 min','<svg class="ic"><use href="#i-play"/></svg>','#1E5BFF'],
      ['Mav Imob','Como compartilhar e receber comissão','5 min','<svg class="ic"><use href="#i-play"/></svg>','#1E5BFF'],
      ['Contratos & relatórios','Gerar documentos pela secretária','6 min','<svg class="ic"><use href="#i-play"/></svg>','#1E5BFF'],
    ].map(([n,d,t,st,c])=>`
      <div class="rep" onclick="showInfo('${n}', modalAula('${n}','${d}','${t}'),'lg')">
        <div class="ic2" style="background:${c}">${st}</div>
        <div class="nm">${n}</div><div class="ds">${d}</div>
        <div class="ft">${st==='✓'?'Concluído · rever':'Assistir · '+t} →</div>
      </div>`).join('')}
  </div>`,

config:()=>head('Configurações','Dados da imobiliária, plano, identidade visual e segurança.')+`
  <div class="subtabs"><button class="on" data-tabgroup="cf" onclick="tab(this,'cf','cf-geral')">Imobiliária</button><button data-tabgroup="cf" onclick="tab(this,'cf','cf-marca')">Identidade visual</button><button data-tabgroup="cf" onclick="tab(this,'cf','cf-app')">App mobile</button><button data-tabgroup="cf" onclick="tab(this,'cf','cf-lgpd')">Privacidade & LGPD</button><button data-tabgroup="cf" onclick="tab(this,'cf','cf-seg')">Segurança</button></div>
  <div class="tabpane on" data-pane="cf" id="cf-geral">
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:14px">Dados da imobiliária</h3>
      <div class="grid g2"><div class="field"><label>Nome da imobiliária</label><input class="inp" value="Alpha Imóveis"></div><div class="field"><label>CRECI</label><input class="inp" value="CRECI-SP 12345-J"></div></div>
      <div class="grid g2"><div class="field"><label>CNPJ</label><input class="inp" value="12.345.678/0001-90"></div><div class="field"><label>Telefone</label><input class="inp" value="+55 11 3000-0000"></div></div>
      <div class="field"><label>Endereço</label><input class="inp" value="Av. Paulista, 1000 - São Paulo/SP"></div>
      <div class="grid g2"><div class="field"><label>Fuso horário</label><input class="inp" value="(GMT-3) Brasília"></div><div class="field"><label>Idioma</label><input class="inp" value="Português (Brasil)"></div></div>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm btn-blue">Salvar alterações</button></div>
    </div>
  </div>
  <div class="tabpane" data-pane="cf" id="cf-marca">
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:14px">Identidade visual</h3>
      <div class="grid g2">
        <div class="field"><label>Logo da imobiliária</label><div style="border:2px dashed var(--line);border-radius:11px;padding:24px;text-align:center;color:var(--muted);font-size:13px"><svg class="ic"><use href="#i-image"/></svg><br>Arraste ou clique para enviar a logo</div></div>
        <div><div class="field"><label>Cor principal</label><div class="seg"><span class="chip on" style="border-color:#1E5BFF"><span style="width:14px;height:14px;border-radius:4px;background:#1E5BFF;display:inline-block"></span> Azul</span><span class="chip"><span style="width:14px;height:14px;border-radius:4px;background:#16A34A;display:inline-block"></span> Verde</span><span class="chip"><span style="width:14px;height:14px;border-radius:4px;background:#0B2A7A;display:inline-block"></span> Marinho</span></div></div>
        <div class="field"><label>Aparece em</label><div class="muted" style="font-size:12.5px">Site público, contratos, relatórios e e-mails.</div></div></div>
      </div>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm btn-blue">Salvar identidade</button></div>
    </div>
  </div>
  <div class="tabpane" data-pane="cf" id="cf-app">
    <div class="grid g2" style="gap:16px;align-items:start">
      <div class="card pad">
        <h3 class="sec-title" style="margin-bottom:12px"><svg class="ic"><use href="#i-phone"/></svg> App do corretor</h3>
        <div class="muted" style="font-size:12.5px;line-height:1.6;margin-bottom:14px">O corretor leva o Mavis OS no bolso: recebe leads na hora, acessa imóveis e agenda na rua, registra visitas e fala com a secretária IA — tudo pelo celular.</div>
        <div class="row" style="flex-wrap:wrap;gap:7px;margin-bottom:14px"><span class="tag t-blue">Leads em tempo real</span><span class="tag t-blue">Agenda</span><span class="tag t-blue">Imóveis offline</span><span class="tag t-blue">Check-in de visita</span><span class="tag t-blue">Notificações push</span></div>
        <div class="row" style="gap:10px"><button class="btn-sm" style="background:#000;color:#fff;border:none"> App Store</button><button class="btn-sm" style="background:#000;color:#fff;border:none"><svg class="ic"><use href="#i-play"/></svg> Google Play</button></div>
      </div>
      <div class="card pad" style="display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center">
        <div style="width:140px;height:140px;background:#fff;border:1px solid var(--line);border-radius:14px;display:grid;place-items:center;margin-bottom:12px">
          <svg viewBox="0 0 100 100" width="110" height="110">${Array.from({length:100}).map((_,i)=>Math.random()>0.5?`<rect x="${(i%10)*10}" y="${Math.floor(i/10)*10}" width="10" height="10" fill="#0B1B3A"/>`:'').join('')}</svg>
        </div>
        <div class="muted" style="font-size:12px">Escaneie para baixar o app</div>
      </div>
    </div>
  </div>

  <div class="tabpane" data-pane="cf" id="cf-lgpd">
    <div class="card pad" style="margin-bottom:16px;border:1px solid #BBE7CC;background:var(--good-bg)">
      <div class="row" style="gap:11px"><span style="font-size:20px"><svg class="ic"><use href="#i-lock"/></svg></span><div><div style="font-weight:700;font-size:14px">Conformidade com a LGPD</div><div class="muted" style="font-size:12.5px">O Mavis OS trata os dados conforme a Lei Geral de Proteção de Dados. Configure consentimento, retenção e atendimento aos titulares.</div></div></div>
    </div>
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:12px">Configurações de privacidade</h3>
      <div class="perm"><div><div class="pt">Consentimento no primeiro contato</div><div class="pd">Lead aceita ser contatado antes da automação agir</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Identificação da automação quando solicitado</div><div class="pd">A IA informa que é um atendimento automatizado se perguntada</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Respeitar pedido de não contato</div><div class="pd">Remove o lead das campanhas ativas automaticamente</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Horário permitido de contato</div><div class="pd">Liga/mensagem só entre 09h–20h</div></div><span class="tag t-blue">09h–20h</span></div>
      <div class="perm"><div><div class="pt">Retenção de dados de leads inativos</div><div class="pd">Apaga dados após o período definido</div></div><span class="tag t-blue">24 meses</span></div>
      <h3 class="sec-title" style="margin:18px 0 12px">Direitos dos titulares</h3>
      <div class="muted" style="font-size:12.5px;margin-bottom:10px">Atenda pedidos de acesso, correção ou exclusão de dados pessoais.</div>
      <div class="row" style="gap:10px"><button class="btn-sm">Exportar dados de um titular</button><button class="btn-sm" style="color:var(--danger)">Excluir dados de um titular</button><button class="btn-sm">Política de privacidade</button></div>
    </div>
  </div>

  <div class="tabpane" data-pane="cf" id="cf-seg">
    <div class="card pad">
      <h3 class="sec-title" style="margin-bottom:14px">Segurança</h3>
      <div class="perm"><div><div class="pt">Autenticação em duas etapas</div><div class="pd">Código extra no login</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Registro de ações (auditoria)</div><div class="pd">Histórico de tudo que cada usuário faz</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
      <div class="perm"><div><div class="pt">Sessões ativas</div><div class="pd">2 dispositivos conectados</div></div><button class="btn-sm">Gerenciar</button></div>
      <div class="field" style="margin-top:14px"><label>Alterar senha</label><input class="inp" type="password" placeholder="Nova senha"></div>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm btn-blue">Salvar</button></div>
    </div>
  </div>`,
};

function modalPlanos(){
  const planos=[
    ['Essencial','199','1 corretor',['Secretária IA (1)','Site + subdomínio','Leads & funil','Contratos (3)','Relatórios básicos'],false],
    ['Profissional','399','Até 3 corretores',['Tudo do Essencial','Integrações marketplaces','Locações','Domínio próprio','Contratos (5)'],false],
    ['Performance','799','Até 8 corretores',['Tudo do Profissional','Campanhas & Tráfego IA','Automação omnichannel','Canal de vendas ativo','Mav Imob'],true],
    ['Enterprise','1.499','Ilimitado',['Tudo do Performance','Sem limites','Prioridade no suporte','API & integrações','Gerente de conta'],false],
  ];
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Escolha o plano ideal para o tamanho da sua imobiliária. Quanto maior o plano, mais funções e capacidade — o Enterprise tem tudo.</div>
    <div class="grid g2" style="gap:12px">${planos.map(([n,p,cap,feats,atual])=>`
      <div class="card pad" style="border:2px solid ${atual?'var(--blue)':'var(--line)'};${atual?'background:var(--blue-50)':''}"><div class="between"><div style="font-weight:700;font-size:15px">${n}</div>${atual?'<span class="tag t-blue">Atual</span>':''}</div>
        <div style="font-size:22px;font-weight:800;margin:6px 0">R$ ${p}<span style="font-size:12px;color:var(--muted);font-weight:400">/mês</span></div>
        <div class="muted" style="font-size:12px;margin-bottom:10px">${cap}</div>
        <div style="margin-bottom:12px">${feats.map(f=>`<div style="font-size:11.5px;padding:2px 0"><span style="color:var(--good)">✓</span> ${f}</div>`).join('')}</div>
        <button class="btn-sm ${atual?'':'btn-blue'}" style="width:100%" onclick="closeModal('modal-generic')">${atual?'Plano atual':'Escolher '+n}</button></div>`).join('')}</div>
    <div class="row" style="justify-content:space-between;margin-top:14px"><button class="btn-sm" onclick="closeModal('modal-generic');showScreen('financeiro');setTimeout(()=>{const b=document.querySelectorAll('[data-tabgroup=fin]')[4];if(b)b.click();},50)">Ver comparação completa →</button><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button></div>`;
}
function modalAula(n,d,t){
  return `<div style="background:var(--ink-deep);border-radius:12px;height:200px;display:flex;align-items:center;justify-content:center;color:#fff;margin-bottom:14px;position:relative"><div style="width:60px;height:60px;border-radius:50%;background:rgba(255,255,255,.2);display:grid;place-items:center;font-size:24px"><svg class="ic"><use href="#i-play"/></svg></div><div style="position:absolute;bottom:12px;left:14px;font-size:12px;opacity:.8">${t} · vídeo-aula</div></div>
    <div style="font-weight:700;font-size:15px;margin-bottom:4px">${n}</div><div class="muted" style="font-size:12.5px;margin-bottom:14px">${d}</div>
    <div class="muted" style="font-size:12px;line-height:1.6">Nesta aula você aprende, passo a passo, como usar este módulo na rotina da imobiliária, com exemplos práticos.</div>
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Marcar como concluída</button></div>`;
}
function modalMeta(){
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Defina a meta de VGV do mês para a imobiliária e por corretor.</div>
    <div class="field"><label>Meta total do mês (VGV)</label><input class="inp" value="R$ 3.200.000"></div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Meta por corretor</div>
    ${[['Paulo Cesar','1.200.000']].map(([n,m])=>`<div class="perm"><div class="row"><div class="avatar">${n[0]}</div><div class="pt">${n}</div></div><input class="inp" style="max-width:160px" value="R$ ${m}"></div>`).join('')}
    <div class="box note" style="background:var(--blue-50);border:1px solid var(--blue-100);border-radius:11px;padding:11px;font-size:12px;margin:12px 0"><b style="color:var(--blue)"><svg class="ic"><use href="#i-sparkle"/></svg> Sugestão da IA:</b> com base no histórico, uma meta de R$ 3,2M é realista (ritmo atual projeta R$ 3,4M).</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar metas</button></div>`;
}
function modalAssinatura(){
  return `<div class="field"><label>Documento *</label><div class="seg"><span class="chip on">Contrato locação · Paulo Cesar</span><span class="chip">Compra e venda · Cobertura</span><span class="chip">+ Outro</span></div></div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Quem precisa assinar</div>
    ${[['Paulo Cesar','Inquilino','+55 11 98800-1100']].map(([n,p,c])=>`<div class="perm"><div><div class="pt">${n}</div><div class="pd">${p} · ${c}</div></div><span class="tag t-blue">${p}</span></div>`).join('')}
    <button class="btn-sm" style="margin:8px 0 12px">+ Adicionar signatário</button>
    <div class="field"><label>Enviar por</label><div class="seg"><span class="chip on">WhatsApp</span><span class="chip on">E-mail</span><span class="chip">SMS</span></div></div>
    <div class="box note" style="background:var(--blue-50);border:1px solid var(--blue-100);border-radius:11px;padding:11px;font-size:12px;margin-bottom:14px"><svg class="ic"><use href="#i-lock"/></svg> A assinatura tem validade jurídica com certificado digital e carimbo de tempo. Cada parte recebe a via final ao concluir.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Enviar para assinatura</button></div>`;
}
function modalBoleto(){
  return `<div class="grid g2"><div class="field"><label>Inquilino *</label><input class="inp" placeholder="Nome do inquilino"></div><div class="field"><label>Imóvel</label><input class="inp" placeholder="Ex: Apto Vila Mariana"></div></div>
    <div class="grid g2"><div class="field"><label>Valor (R$)</label><input class="inp" placeholder="2.500"></div><div class="field"><label>Vencimento</label><input class="inp" placeholder="dd/mm/aaaa"></div></div>
    <div class="field"><label>Enviar boleto por</label><div class="seg"><span class="chip on">WhatsApp</span><span class="chip on">E-mail</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Emitir e enviar</button></div>`;
}

// ===== modais auxiliares (conteúdo) =====
function modalNovaLocacao(){
  return `<div class="grid g2"><div class="field"><label>Imóvel *</label><input class="inp" placeholder="Ex: Apto 2qt · Vila Mariana"></div><div class="field"><label>Inquilino *</label><input class="inp" placeholder="Nome do inquilino"></div></div>
    <div class="grid g2"><div class="field"><label>CPF do inquilino</label><input class="inp" placeholder="000.000.000-00"></div><div class="field"><label>Proprietário</label><input class="inp" placeholder="Nome do proprietário"></div></div>
    <div class="grid g2"><div class="field"><label>Valor do aluguel (R$)</label><input class="inp" placeholder="2.500"></div><div class="field"><label>Taxa de administração (%)</label><input class="inp" value="10"></div></div>
    <div class="grid g2"><div class="field"><label>Dia de vencimento</label><input class="inp" placeholder="dia 10"></div><div class="field"><label>Vigência</label><input class="inp" placeholder="30 meses"></div></div>
    <div class="box note" style="background:var(--blue-50);border:1px solid var(--blue-100);border-radius:11px;padding:11px;font-size:12px;margin-bottom:14px">Com aluguel de R$ 2.500 e taxa de 10%, a imobiliária recebe <b>R$ 250/mês</b> de caixa e repassa R$ 2.250 ao proprietário.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Criar contrato</button></div>`;
}
function modalLocacaoDetalhe(im,inq,val){
  const taxa = Math.round(parseInt(val.replace('.',''))*0.1);
  const rep = parseInt(val.replace('.',''))-taxa;
  return `<div class="row" style="margin-bottom:14px"><div style="width:46px;height:46px;border-radius:11px;background:var(--blue);color:#fff;display:grid;place-items:center;font-size:20px"><svg class="ic"><use href="#i-key"/></svg></div><div><div style="font-weight:700;font-size:16px">${im}</div><div class="muted" style="font-size:12.5px">Inquilino: ${inq}</div></div></div>
    <div class="grid g3" style="margin-bottom:14px"><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Aluguel</div><div style="font-weight:800;font-size:16px">R$ ${val}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Taxa adm.</div><div style="font-weight:800;font-size:16px;color:var(--good)">R$ ${taxa.toLocaleString('pt-BR')}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Repasse</div><div style="font-weight:800;font-size:16px">R$ ${rep.toLocaleString('pt-BR')}</div></div></div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Histórico de pagamentos</div>
    ${['Junho · pago em dia','Maio · pago em dia','Abril · pago em dia'].map(p=>`<div class="log-item"><div class="ti">✓</div><div>${p}</div></div>`).join('')}
    <div class="row" style="justify-content:flex-end;margin-top:12px"><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-doc"/></svg> Contrato</button><button class="btn-sm" onclick="closeModal('modal-generic')">Boleto do mês</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Editar</button></div>`;
}
function modalConta(tipo){
  const r = tipo==='receber';
  return `<div class="field"><label>Descrição *</label><input class="inp" placeholder="${r?'Ex: Comissão venda Apto X':'Ex: Repasse proprietário'}"></div>
    <div class="grid g2"><div class="field"><label>Valor (R$) *</label><input class="inp" placeholder="0,00"></div><div class="field"><label>Vencimento</label><input class="inp" placeholder="dd/mm/aaaa"></div></div>
    <div class="field"><label>Categoria</label><div class="seg">${(r?['Comissão','Aluguel','Taxa adm.','Outros']:['Repasse','Comissão','Marketing','Operacional','Imposto']).map((c,i)=>`<span class="chip ${i===0?'on':''}">${c}</span>`).join('')}</div></div>
    <div class="field"><label>Recorrência</label><div class="seg"><span class="chip on">Única</span><span class="chip">Mensal</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Lançar conta a ${tipo}</button></div>`;
}
function modalNovoColab(tipo){
  const ehCorretor = tipo==='Corretor';
  showInfo('Novo '+tipo, `
    <div class="field"><label>Nome completo *</label><input class="inp" placeholder="Ex: Paulo Cesar"></div>
    <div class="grid g2"><div class="field"><label>CPF *</label><input class="inp" placeholder="000.000.000-00"></div>${ehCorretor?`<div class="field"><label>CRECI *</label><input class="inp" placeholder="CRECI-SP 00000-J"></div>`:`<div class="field"><label>WhatsApp *</label><input class="inp" placeholder="+55 11 98765-4321"></div>`}</div>
    <div class="grid g2"><div class="field"><label>E-mail *</label><input class="inp" placeholder="carlos@imobiliaria.com"></div>${ehCorretor?`<div class="field"><label>WhatsApp *</label><input class="inp" placeholder="+55 11 98765-4321"></div>`:`<div class="field"><label>Especialidade</label><input class="inp" placeholder="Ex: Locação, Captação"></div>`}</div>
    ${ehCorretor?`<div class="field"><label>Especialidade / Tipo</label><input class="inp" placeholder="Ex: Alto padrão, Locação, Comercial"></div>`:''}
    <div class="muted" style="font-size:11px;margin-bottom:8px">${ehCorretor?'O WhatsApp informado é o número que a secretária-IA usará para falar com este corretor.':'O CPF é usado para repasses e relatórios financeiros.'}</div>
    <div class="field"><label>Permissões herdadas</label><div class="seg"><span class="chip on">Agenda própria</span><span class="chip on">Imóveis</span><span class="chip on">Leads</span><span class="chip">Dashboards</span><span class="chip">Campanhas</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Criar ${tipo}</button></div>`, 'lg');
}
function modalPermColab(nome,perfil){
  const perms=[['Dashboards','Visualização dos painéis gerais',false],['Agenda própria','Gerenciar a própria agenda',true],['Imóveis','Cadastrar e editar imóveis',true],['Leads','Receber e mover leads',true],['Campanhas & tráfego','Criar e ver campanhas',false],['Contratos','Gerar contratos pela secretária',true],['Relatórios','Gerar relatórios',false],['Secretária individual','Acesso à própria secretária IA',true]];
  showInfo('Permissões · '+nome, `<div class="muted" style="font-size:13px;margin-bottom:12px">Perfil: <b>${perfil}</b>. Ative ou desative o acesso a cada módulo.</div>`+
    perms.map(([t,d,on])=>`<div class="perm"><div><div class="pt">${t}</div><div class="pd">${d}</div></div><div class="tog ${on?'on':''}" onclick="this.classList.toggle('on')"></div></div>`).join('')+
    `<div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar permissões</button></div>`, 'lg');
}
function modalUploadContrato(){
  return `<div class="field"><label>Nome do modelo *</label><input class="inp" placeholder="Ex: Contrato de Compra e Venda"></div>
    <div class="field"><label>Arquivo do modelo</label><div style="border:2px dashed var(--line);border-radius:11px;padding:28px;text-align:center;color:var(--muted);font-size:13px"><svg class="ic"><use href="#i-doc"/></svg><br>Arraste o .docx ou .pdf com os campos marcados, ou clique para enviar</div></div>
    <div class="field"><label>Campos que a secretária vai preencher</label><div class="seg"><span class="chip on">Nome do cliente</span><span class="chip on">Imóvel</span><span class="chip on">Valor</span><span class="chip on">Prazo</span><span class="chip">CPF/CNPJ</span><span class="chip">Comissão</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar modelo</button></div>`;
}
function modalVerContrato(nome){
  return `<div style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:18px;font-size:12.5px;line-height:1.7;color:var(--ink)">
    <div style="text-align:center;font-weight:800;margin-bottom:10px">${nome.toUpperCase()}</div>
    <p>Pelo presente instrumento, <b>{{nome_cliente}}</b>, doravante denominado CONTRATANTE, e a imobiliária <b>Alpha Imóveis</b>, acordam as condições referentes ao imóvel <b>{{imovel}}</b>, no valor de <b>{{valor}}</b>...</p>
    <p style="color:var(--muted)">Os campos entre chaves são preenchidos automaticamente pela secretária com os dados do sistema.</p>
  </div><div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue">Editar modelo</button></div>`;
}
function modalRelatorio(nome,cor){
  return `<div class="row" style="margin-bottom:14px;gap:10px"><div style="width:46px;height:46px;border-radius:11px;background:${cor};display:grid;place-items:center;color:#fff;font-size:20px"><svg class="ic"><use href="#i-chart"/></svg></div><div><div style="font-weight:700">${nome}</div><div class="muted" style="font-size:12.5px">Configure o período e gere o PDF</div></div></div>
    <div class="grid g2"><div class="field"><label>Período</label><div class="seg"><span class="chip on">Últimos 30 dias</span><span class="chip">Mês atual</span><span class="chip">Personalizado</span></div></div></div>
    <div class="field"><label>Filtrar por corretor</label><input class="inp" placeholder="Todos os corretores"></div>
    <div style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:16px;margin-bottom:14px"><div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Prévia</div><svg viewBox="0 0 400 80" width="100%" height="70"><polyline fill="none" stroke="${cor}" stroke-width="2.5" points="0,60 60,50 120,55 180,30 240,40 300,18 360,28 400,12"/></svg></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-phone"/></svg> Pedir pra secretária</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-doc"/></svg> Gerar PDF</button></div>`;
}
function modalChamado(t,d){
  return `<div class="muted" style="font-size:13px;margin-bottom:12px">${d}</div>
    <div style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:14px;margin-bottom:14px;font-size:12.5px"><div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Contexto da conversa (a IA escalou)</div>
      <div class="bub in" style="max-width:100%;margin-bottom:6px">Cliente: "Quero saber se consigo desconto à vista no apartamento"</div>
      <div class="bub in" style="max-width:100%">IA: "Essa negociação precisa de um humano. Abrindo chamado…"</div></div>
    <div class="field"><label>Resolução</label><textarea class="inp" style="min-height:80px" placeholder="Descreva como resolveu…"></textarea></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Marcar como resolvido</button></div>`;
}
function modalEncaminhar(nome){
  return `<div class="muted" style="font-size:13px;margin-bottom:12px">Repassar <b>${nome}</b> ao próximo corretor da fila.</div>
    <div class="seg" style="flex-direction:column"><span class="chip on">Paulo Cesar · Alto padrão · 1 lead ativo</span></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Oferecer ao corretor</button></div>`;
}

function siteTab(btn,which){
  btn.parentElement.querySelectorAll('button').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
  document.getElementById('site-gerir').style.display = which==='gerir'?'block':'none';
  document.getElementById('site-design').style.display = which==='design'?'block':'none';
  document.getElementById('site-preview').style.display = which==='preview'?'block':'none';
}
function selectTpl(el){
  document.querySelectorAll('.tpl').forEach(t=>t.classList.remove('sel'));
  el.classList.add('sel');
}
function modalDistribuir(nome){
  const portais=[['OLX','#6E0AD6',true],['Viva Real','#FF6B00',true],['Zap Imóveis','#0A66C2',true],['Facebook','#1877F2',true],['Instagram','#E1306C',false],['ImovelWeb','#E5292E',false]];
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Selecione onde <b>${nome}</b> será anunciado. Ao salvar, o imóvel é publicado automaticamente nos canais ativos.</div>`+
    portais.map(([n,c,on])=>`<div class="perm"><div class="row"><div style="width:34px;height:34px;border-radius:9px;background:${c};color:#fff;display:grid;place-items:center;font-weight:800;font-size:13px">${n[0]}</div><div class="pt">${n}</div></div><div class="tog ${on?'on':''}" onclick="this.classList.toggle('on')"></div></div>`).join('')+
    `<div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Publicar nos selecionados</button></div>`;
}
function modalDistLeads(){
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Defina como os leads que chegam dos marketplaces são distribuídos aos corretores.</div>
    <div class="field"><label>Critério principal</label><div class="seg"><span class="chip on">Rodízio</span><span class="chip on">Por região</span><span class="chip">Por especialidade</span><span class="chip">Manual</span></div></div>
    <div class="perm"><div><div class="pt">Tempo para aceitar</div><div class="pd">Se o corretor não aceitar, passa ao próximo</div></div><span class="tag t-blue">15 min</span></div>
    <div class="perm"><div><div class="pt">Pular corretor offline</div><div class="pd">Oferece só a quem está online</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Devolver à fila se ninguém aceitar</div><div class="pd">Vai pra fila de encaminhamento</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar regra</button></div>`;
}
function modalLead(nome,desc){
  return `<div class="row" style="margin-bottom:14px"><div class="avatar" style="width:46px;height:46px">${nome[0]}</div><div><div style="font-weight:700;font-size:16px">${nome}</div><div class="muted" style="font-size:12.5px">${desc}</div></div></div>
    <div class="grid g2" style="margin-bottom:14px"><div class="card pad" style="padding:12px"><div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px">Corretor</div><div style="font-weight:700;margin-top:3px">Paulo Cesar</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px">Temperatura</div><div style="font-weight:700;margin-top:3px;color:var(--warn)">Quente</div></div></div>
    <div class="field"><label>Mover para etapa</label><div class="seg"><span class="chip">Captado</span><span class="chip on">Qualificando</span><span class="chip">Visita</span><span class="chip">Proposta</span><span class="chip">Negociando</span><span class="chip">Concluído</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-doc"/></svg> Ficha PDF</button><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-forward"/></svg> Encaminhar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar</button></div>`;
}
function modalNovoLead(){
  return `<div class="grid g2"><div class="field"><label>Nome *</label><input class="inp" placeholder="Nome do lead"></div><div class="field"><label>Telefone *</label><input class="inp" placeholder="+55 11 99999-9999"></div></div>
    <div class="field"><label>Interesse</label><input class="inp" placeholder="Ex: Apto 2 quartos, Zona Sul"></div>
    <div class="grid g2"><div class="field"><label>Orçamento mín.</label><input class="inp" placeholder="R$ 400.000"></div><div class="field"><label>Orçamento máx.</label><input class="inp" placeholder="R$ 600.000"></div></div>
    <div class="field"><label>Origem</label><div class="seg"><span class="chip on">OLX</span><span class="chip">Viva Real</span><span class="chip">Instagram</span><span class="chip">Site</span><span class="chip">Indicação</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Criar lead</button></div>`;
}

function modalNovaAgenda(){
  return `<div class="field"><label>Tipo de compromisso</label>
      <div class="seg"><span class="chip on">Visita</span><span class="chip">Proposta</span><span class="chip">Fechamento</span><span class="chip">Reunião</span></div></div>
    <div class="grid g2">
      <div class="field"><label>Corretor</label><input class="inp" value="Paulo Cesar"></div>
      <div class="field"><label>Cliente</label><input class="inp" placeholder="Nome do cliente"></div>
    </div>
    <div class="field"><label>Imóvel</label><input class="inp" placeholder="Ex: Apartamento Centro · Av. Paulista"></div>
    <div class="grid g3">
      <div class="field"><label>Data</label><input class="inp" type="date"></div>
      <div class="field"><label>Início</label><input class="inp" type="time" value="09:00"></div>
      <div class="field"><label>Fim</label><input class="inp" type="time" value="10:00"></div>
    </div>
    <div class="field"><label>Observações</label><input class="inp" placeholder="Detalhes, ponto de encontro, documentos…"></div>
    <div class="perm" style="background:var(--blue-50);border-color:var(--blue-100)">
      <div><div class="pt">Lembrar o cliente pelo WhatsApp</div><div class="pd">A secretária envia confirmação 1 dia antes e no dia.</div></div>
      <div class="tog on"></div>
    </div>
    <div class="row" style="justify-content:flex-end;margin-top:6px"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic');toast('Compromisso adicionado à agenda')">Salvar na agenda</button></div>`;
}
function modalIntegracao(nome,cor,status){
  const conectado = status==='Conectado';
  return `<div class="row" style="margin-bottom:14px"><div style="width:48px;height:48px;border-radius:12px;overflow:hidden;display:grid;place-items:center;flex:none">${brandLogo(nome,cor)}</div><div><div style="font-weight:700;font-size:16px">${nome}</div><div class="muted" style="font-size:12.5px">${conectado?'<span style="color:var(--good)">● Conectado e sincronizando</span>':'Não conectado'}</div></div></div>
    ${conectado?`
    <div class="grid g3" style="margin-bottom:14px"><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10.5px;text-transform:uppercase">Anúncios ativos</div><div style="font-weight:800;font-size:18px;margin-top:3px">${Math.floor(Math.random()*20+8)}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10.5px;text-transform:uppercase">Leads no mês</div><div style="font-weight:800;font-size:18px;margin-top:3px">${Math.floor(Math.random()*30+12)}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10.5px;text-transform:uppercase">Última sync</div><div style="font-weight:800;font-size:14px;margin-top:5px">há 4 min</div></div></div>
    <div class="perm"><div><div class="pt">Publicação automática</div><div class="pd">Novos imóveis vão direto pro ${nome}</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Importar leads</div><div class="pd">Mensagens viram leads no funil</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn-sm" style="color:var(--danger)" onclick="closeModal('modal-generic')">Desconectar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar</button></div>`
    :`<div class="box note" style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:14px;font-size:12.5px;margin-bottom:14px">Conecte sua conta ${nome} para publicar imóveis e importar leads automaticamente.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-link"/></svg> Conectar ${nome}</button></div>`}`;
}
function modalNovaCampanha(){
  return `<div class="field"><label>Nome da campanha *</label><input class="inp" placeholder="Ex: Apartamentos Zona Sul"></div>
    <div class="field"><label>Canais</label><div class="seg"><span class="chip on">Instagram</span><span class="chip on">Facebook</span><span class="chip">Google Ads</span><span class="chip">Viva Real</span><span class="chip">TikTok</span></div></div>
    <div class="grid g2"><div class="field"><label>Orçamento (R$)</label><input class="inp" placeholder="2.000"></div><div class="field"><label>Duração</label><input class="inp" placeholder="30 dias"></div></div>
    <div class="field"><label>Objetivo</label><div class="seg"><span class="chip on">Gerar leads</span><span class="chip">Alcance</span><span class="chip">Lançamento</span></div></div>
    <div class="field"><label>Imóveis em destaque</label><div class="seg"><span class="chip on">Casa de Férias</span><span class="chip on">Cobertura Duplex</span><span class="chip">Apto Centro</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Criar e publicar</button></div>`;
}
function modalCampanha(nm,canal,cor,orc,gasto,leads){
  return `<div class="row" style="margin-bottom:14px"><div style="width:46px;height:46px;border-radius:11px;background:${cor};color:#fff;display:grid;place-items:center;font-size:20px"><svg class="ic"><use href="#i-megaphone"/></svg></div><div><div style="font-weight:700;font-size:16px">${nm}</div><div class="muted" style="font-size:12.5px">${canal} · <span style="color:var(--good)">● Ativa</span></div></div></div>
    <div class="grid g4" style="margin-bottom:14px"><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Orçamento</div><div style="font-weight:800;font-size:16px">R$ ${orc}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Gasto</div><div style="font-weight:800;font-size:16px">R$ ${gasto}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Leads</div><div style="font-weight:800;font-size:16px;color:var(--blue)">${leads}</div></div><div class="card pad" style="padding:12px"><div class="muted" style="font-size:10px;text-transform:uppercase">Custo/lead</div><div style="font-weight:800;font-size:16px">R$ ${Math.round(gasto/leads)}</div></div></div>
    <div style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:16px;margin-bottom:14px"><div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Leads por dia</div><svg viewBox="0 0 400 80" width="100%" height="70"><polyline fill="none" stroke="${cor}" stroke-width="2.5" points="0,55 50,45 100,50 150,30 200,38 250,20 300,30 350,15 400,22"/></svg></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-pause"/></svg> Pausar</button><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-doc"/></svg> Relatório</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Editar campanha</button></div>`;
}
function modalCriarCampanha(){
  return `<div class="stepline"><span class="s on">1. Objetivo</span><span>→</span><span class="s on">2. Público</span><span>→</span><span class="s on">3. Criativo</span><span>→</span><span class="s on">4. Orçamento</span><span>→</span><span class="s">5. Revisar</span></div>
    <div class="field"><label>Nome da campanha *</label><input class="inp" placeholder="Ex: Apartamentos Zona Sul"></div>
    <div class="field"><label>1. Objetivo</label><div class="seg"><span class="chip on">Gerar leads</span><span class="chip">Alcance / marca</span><span class="chip">Divulgar lançamento</span><span class="chip">Remarketing</span></div></div>
    <div class="field"><label>2. Público</label><div class="seg"><span class="chip on">Compradores Zona Sul</span><span class="chip">Alto padrão</span><span class="chip">Investidores</span><span class="chip">+ Criar novo</span></div></div>
    <div class="field"><label>3. Canais e criativo</label><div class="seg"><span class="chip on">Instagram</span><span class="chip on">Facebook</span><span class="chip">Google Ads</span><span class="chip">TikTok</span></div>
      <div class="muted" style="font-size:11.5px;margin-top:6px">Criativo: <b style="color:var(--ink)">Casa de Férias · vídeo</b> (CTR 4,2%) · <span style="color:var(--blue);cursor:pointer">trocar</span></div></div>
    <div class="grid g2"><div class="field"><label>4. Orçamento total (R$)</label><input class="inp" placeholder="2.000"></div><div class="field"><label>Duração</label><input class="inp" placeholder="30 dias"></div></div>
    <div class="box note" style="background:var(--blue-50);border:1px solid var(--blue-100);border-radius:11px;padding:12px;font-size:12px;margin-bottom:14px"><b style="color:var(--blue)"><svg class="ic"><use href="#i-sparkle"/></svg> Estimativa da IA:</b> com esse público e orçamento, previsão de <b>55–70 leads</b> a um custo de <b>~R$ 30/lead</b>.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm">Salvar rascunho</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Revisar e publicar</button></div>`;
}
function modalPublico(){
  return `<div class="field"><label>Nome do público *</label><input class="inp" placeholder="Ex: Compradores Zona Sul"></div>
    <div class="grid g2"><div class="field"><label>Idade</label><input class="inp" placeholder="30 – 45 anos"></div><div class="field"><label>Localização</label><input class="inp" placeholder="Zona Sul, São Paulo"></div></div>
    <div class="field"><label>Interesses</label><div class="seg"><span class="chip on">Apartamentos</span><span class="chip on">Financiamento</span><span class="chip">Casas</span><span class="chip">Investimento</span><span class="chip">Decoração</span></div></div>
    <div class="field"><label>Faixa de renda</label><div class="seg"><span class="chip">Média</span><span class="chip on">Média-alta</span><span class="chip">Alta</span></div></div>
    <div class="box note" style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:12px;font-size:12px;margin-bottom:14px">Alcance estimado: <b>~48.000 pessoas</b></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar público</button></div>`;
}
function modalCriativo(){
  return `<div class="field"><label>Nome do criativo *</label><input class="inp" placeholder="Ex: Casa de Férias · vídeo"></div>
    <div class="field"><label>Formato</label><div class="seg"><span class="chip on">Imagem</span><span class="chip">Vídeo / Reels</span><span class="chip">Carrossel</span><span class="chip">Stories</span></div></div>
    <div class="field"><label>Arquivo</label><div style="border:2px dashed var(--line);border-radius:11px;padding:28px;text-align:center;color:var(--muted);font-size:13px"><svg class="ic"><use href="#i-image"/></svg><br>Arraste a imagem ou vídeo do anúncio</div></div>
    <div class="field"><label>Texto do anúncio</label><textarea class="inp" style="min-height:70px" placeholder="Realize o sonho da casa própria. Imóveis selecionados na Zona Sul..."></textarea></div>
    <div class="field"><label>Imóvel vinculado</label><div class="seg"><span class="chip on">Casa de Férias</span><span class="chip">Cobertura Duplex</span><span class="chip">Apto Centro</span></div></div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar criativo</button></div>`;
}
function setIaModo(el, modo){
  el.parentElement.querySelectorAll('.chip').forEach(c=>{c.classList.remove('on');c.style.background='rgba(255,255,255,.12)';c.style.color='#fff';});
  el.classList.add('on'); el.style.background='#fff'; el.style.color='var(--blue)';
  document.getElementById('ia-modo-desc').innerHTML = modo==='auto'
    ? '<svg class="ic"><use href="#i-bolt"/></svg> <b>Automático:</b> a IA cria campanhas, ajusta orçamento entre canais e otimiza sozinha, dentro do limite de verba definido. Você só acompanha os resultados.'
    : '<svg class="ic"><use href="#i-shield"/></svg> <b>Com aprovação:</b> a IA prepara as campanhas e otimizações, mas decisões grandes (subir verba, criar campanha, pausar) ficam aguardando o ok do gestor antes de executar.';
}
function modalSecPerfil(perfil){
  const cfg = {
    'Gestor': {wpp:'+55 11 98800-1122', pode:['Visão de toda a equipe','Todos os leads e imóveis','Relatórios gerais da imobiliária','Campanhas & tráfego','Financeiro','Aprovar ações da IA'], nao:['—']},
    'Captador': {wpp:'+55 11 97700-3344', pode:['Cadastrar imóveis','Agendar captação','Próprios leads de captação','Relatórios de captação'], nao:['Vendas e propostas','Financeiro','Campanhas']},
  }[perfil];
  return `<div class="row" style="margin-bottom:12px"><div class="avatar" style="width:42px;height:42px">${perfil[0]}</div><div><div style="font-weight:700;font-size:15px">Secretária · perfil ${perfil}</div><div class="muted" style="font-size:12px">WhatsApp cadastrado: ${cfg.wpp}</div></div></div>
    <div class="muted" style="font-size:12.5px;margin-bottom:12px">As autorizações da secretária seguem o perfil do usuário. Um <b>${perfil}</b> libera ações diferentes de um corretor.</div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:7px">Pode executar</div>
    <div class="row" style="flex-wrap:wrap;gap:7px;margin-bottom:12px">${cfg.pode.map(x=>`<span class="tag t-blue">✓ ${x}</span>`).join('')}</div>
    ${cfg.nao[0]!=='—'?`<div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:7px">Não pode</div><div class="row" style="flex-wrap:wrap;gap:7px">${cfg.nao.map(x=>`<span class="tag t-grey"><svg class="ic"><use href="#i-x"/></svg> ${x}</span>`).join('')}</div>`:''}
    <div class="row" style="justify-content:flex-end;margin-top:14px"><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic');showInfo('Configurar secretária',modalConfigSec('${perfil}','${perfil}'),'lg')">Configurar</button></div>`;
}
function modalConfigSec(nome,perfil){
  const acoes=[['Consultar e enviar imóveis','Busca no portfólio e devolve link',true],['Gerenciar agenda','Marcar, remarcar e cancelar visitas',true],['Qualificar e mover leads','Atualizar etapa no funil',true],['Gerar relatórios em PDF','Puxa dados e devolve o arquivo',true],['Preencher contratos','Usa os modelos da imobiliária',true],['Acessar dados de outros usuários','Ver leads/imóveis de terceiros',false],['Gerir campanhas','Criar e ajustar tráfego',false],['Acessar financeiro','Faturas e comissões',false]];
  return `<div class="row" style="margin-bottom:12px"><div class="avatar" style="width:42px;height:42px">${nome[0]}</div><div><div style="font-weight:700;font-size:15px">Secretária de ${nome}</div><div class="muted" style="font-size:12px">Perfil: ${perfil}</div></div></div>
    <div class="field"><label>WhatsApp da automação (cadastrado pelo usuário)</label><input class="inp" value="+55 33 99908-7046"><div class="muted" style="font-size:11px;margin-top:4px">É o número informado no cadastro do colaborador. A secretária envia tudo por aqui.</div></div>
    <div class="field"><label>Personalidade / tom de voz</label><div class="seg"><span class="chip on">Direta e objetiva</span><span class="chip">Consultiva</span><span class="chip">Acolhedora</span></div></div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin:10px 0 4px">Autorizações da secretária</div>
    <div class="perm-grid">${acoes.map(([t,d,on])=>`<div class="perm"><div><div class="pt">${t}</div><div class="pd">${d}</div></div><div class="tog ${on?'on':''}" onclick="this.classList.toggle('on')"></div></div>`).join('')}</div>
    <div class="box note" style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:11px;font-size:11.5px;color:var(--muted);margin-top:6px">As autorizações respeitam o perfil do usuário. Ações fora do perfil ficam bloqueadas mesmo se ativadas.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar configuração</button></div>`;
}
function modalCanalAuto(nome,cor,ativo){
  return `<div class="row" style="margin-bottom:14px"><div style="width:46px;height:46px;border-radius:12px;background:${cor};color:#fff;display:grid;place-items:center;font-weight:800;font-size:18px">${nome[0]}</div><div><div style="font-weight:700;font-size:16px">${nome}</div><div class="muted" style="font-size:12.5px">${ativo==='true'?'<span style="color:var(--good)">● Automação ativa</span>':'Não conectado'}</div></div></div>
    <div class="muted" style="font-size:12.5px;margin-bottom:12px">Configure como a IA atua neste canal. Ela conversa de forma natural, sem o lead perceber que é automação.</div>
    <div class="perm-grid"><div class="perm"><div><div class="pt">Responder automaticamente</div><div class="pd">Mensagens novas são respondidas pela IA</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Qualificar o lead</div><div class="pd">Pergunta interesse, faixa de preço e região</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Oferecer imóveis do portfólio</div><div class="pd">Sugere opções reais conforme o interesse</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Agendar visita pro corretor</div><div class="pd">Marca direto na agenda do corretor</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div>
    <div class="perm"><div><div class="pt">Escalar pro humano</div><div class="pd">Passa pro corretor quando a negociação aperta</div></div><div class="tog on" onclick="this.classList.toggle('on')"></div></div></div>
    ${nome==='Ligação por voz'?`<div class="field" style="margin-top:10px"><label>Voz da IA</label><div class="seg"><span class="chip on">Feminina · natural</span><span class="chip">Masculina · natural</span></div></div>`:''}
    <div class="row" style="justify-content:flex-end;margin-top:8px"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Salvar</button></div>`;
}
function modalProspeccao(){
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Crie uma campanha onde a IA contata ativamente uma lista de leads, oferece imóveis e agenda visitas.</div>
    <div class="field"><label>Nome da campanha *</label><input class="inp" placeholder="Ex: Reativar leads frios"></div>
    <div class="field"><label>Lista de leads *</label><div class="seg"><span class="chip on">Leads sem retorno 30+ dias (420)</span><span class="chip">Interessados em lançamento (180)</span><span class="chip">Importar CSV</span></div></div>
    <div class="field"><label>Canais que a IA vai usar</label><div class="seg"><span class="chip on">WhatsApp</span><span class="chip on">Ligação por voz</span><span class="chip">Instagram</span><span class="chip">Facebook</span></div></div>
    <div class="field"><label>Imóveis a oferecer</label><div class="seg"><span class="chip on">Apartamentos Zona Sul</span><span class="chip on">Lançamento Jardins</span><span class="chip">Casas alto padrão</span></div></div>
    <div class="field"><label>Roteiro / abordagem</label><div class="seg"><span class="chip on">Consultiva (entende a necessidade)</span><span class="chip">Direta (oferta rápida)</span></div></div>
    <div class="grid g2"><div class="field"><label>Horário de contato</label><input class="inp" value="09h – 19h"></div><div class="field"><label>Corretor que recebe as visitas</label><input class="inp" value="Rodízio automático"></div></div>
    <div class="box note" style="background:var(--blue-50);border:1px solid var(--blue-100);border-radius:11px;padding:11px;font-size:12px;margin-bottom:14px"><b style="color:var(--blue)"><svg class="ic"><use href="#i-sparkle"/></svg> A IA vai:</b> contatar os 420 leads por WhatsApp e ligação, qualificar, oferecer os imóveis e deixar a visita agendada na agenda do corretor.</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Iniciar prospecção</button></div>`;
}
function modalProspDetalhe(nome,canais){
  return `<div class="row" style="margin-bottom:14px"><div style="width:46px;height:46px;border-radius:11px;background:var(--ink-deep);color:#fff;display:grid;place-items:center;font-size:20px"><svg class="ic"><use href="#i-phone"/></svg></div><div><div style="font-weight:700;font-size:16px">${nome}</div><div class="muted" style="font-size:12.5px">${canais} · <span style="color:var(--good)">● Rodando</span></div></div></div>
    <div class="grid g4" style="margin-bottom:14px"><div class="card pad" style="padding:11px"><div class="muted" style="font-size:10px;text-transform:uppercase">Contatados</div><div style="font-weight:800;font-size:16px">286</div></div><div class="card pad" style="padding:11px"><div class="muted" style="font-size:10px;text-transform:uppercase">Atenderam</div><div style="font-weight:800;font-size:16px">152</div></div><div class="card pad" style="padding:11px"><div class="muted" style="font-size:10px;text-transform:uppercase">Interessados</div><div style="font-weight:800;font-size:16px;color:var(--good)">74</div></div><div class="card pad" style="padding:11px"><div class="muted" style="font-size:10px;text-transform:uppercase">Visitas</div><div style="font-weight:800;font-size:16px;color:var(--blue)">31</div></div></div>
    <div class="muted" style="font-size:11px;text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Últimas ações da IA</div>
    <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-chat"/></svg></div><div><b>WhatsApp para Paulo Cesar Lima</b> · ofereceu 3 apartamentos, agendou visita quinta 15h<div class="muted" style="font-size:11px">há 6 min</div></div></div>
    <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-phone"/></svg></div><div><b>Ligou para Paulo Cesar Dias</b> · interessado, pediu ligar amanhã às 10h<div class="muted" style="font-size:11px">há 22 min</div></div></div>
    <div class="log-item"><div class="ti"><svg class="ic"><use href="#i-chat"/></svg></div><div><b>WhatsApp para Ana Castro</b> · sem interesse no momento, marcado para 60 dias<div class="muted" style="font-size:11px">há 38 min</div></div></div>
    <div class="row" style="justify-content:flex-end;margin-top:10px"><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-pause"/></svg> Pausar</button><button class="btn-sm" onclick="closeModal('modal-generic')"><svg class="ic"><use href="#i-doc"/></svg> Relatório</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Editar campanha</button></div>`;
}

function modalEnviarMav(nome){
  const habilitado = true;
  if(habilitado){
    return `<div class="commission" style="margin-bottom:14px"><div class="pct">70%</div><div><div style="font-weight:700">Sua comissão na venda</div><div class="muted" style="font-size:12.5px">A Mav Imob assume tráfego, anúncio e negociação.</div></div></div>
      <div class="box note" style="background:var(--good-bg);border:1px solid #BBE7CC;border-radius:11px;padding:12px;font-size:12.5px;margin-bottom:12px"><svg class="ic"><use href="#i-check"/></svg> <b>Imobiliária habilitada</b> pela equipe Mav Imob. Você pode enviar imóveis.</div>
      <p class="muted" style="font-size:12.5px;line-height:1.6">Ao enviar <b>${nome}</b>, a Mav Imob passa a divulgar e negociar este imóvel. Você mantém o relacionamento; a venda é fechada pela imobiliária virtual e a comissão é repassada.</p>
      <label class="row" style="font-size:12.5px;font-weight:600;margin:12px 0;cursor:pointer;gap:8px"><input type="checkbox" style="width:16px;height:16px;accent-color:var(--blue)"> Aceito o termo de divulgação na Mav Imob</label>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Enviar pra Mav Imob</button></div>`;
  } else {
    return `<div class="box note" style="background:var(--warn-bg);border:1px solid #FAD9A5;border-radius:11px;padding:14px;font-size:12.5px;margin-bottom:12px"><svg class="ic"><use href="#i-alert"/></svg> <b>Imobiliária ainda não habilitada</b> pela equipe Mav Imob. Solicite a liberação para enviar imóveis.</div>
      <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Solicitar habilitação</button></div>`;
  }
}
function modalDominio(){
  return `<div class="muted" style="font-size:13px;margin-bottom:14px">Informe seu domínio e aponte o DNS para o Mavis OS. A propagação leva até 24h.</div>
    <div class="field"><label>Seu domínio *</label><input class="inp" placeholder="www.alphaimoveis.com.br"></div>
    <div class="box note" style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:14px;margin-bottom:8px">
      <div style="font-weight:700;font-size:12.5px;margin-bottom:10px">Configure estes registros no seu provedor de domínio:</div>
      <table style="font-size:11.5px">
        <tr style="background:#103DBE"><th style="padding:6px 8px">Tipo</th><th style="padding:6px 8px;text-align:left">Nome</th><th style="padding:6px 8px;text-align:left">Valor</th></tr>
        <tr><td style="text-align:left;font-weight:700">A</td><td style="text-align:left">@</td><td style="text-align:left">76.76.21.21</td></tr>
        <tr><td style="text-align:left;font-weight:700">CNAME</td><td style="text-align:left">www</td><td style="text-align:left">cname.mavimob.site</td></tr>
        <tr><td style="text-align:left;font-weight:700">TXT</td><td style="text-align:left">@</td><td style="text-align:left">mavis-verify=alpha2026</td></tr>
      </table>
    </div>
    <div class="row" style="font-size:12px;color:var(--muted);margin-bottom:12px"><span class="dot" style="background:var(--warn)"></span> Status: aguardando propagação do DNS</div>
    <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="closeModal('modal-generic')">Cancelar</button><button class="btn-sm" onclick="closeModal('modal-generic')">Copiar registros</button><button class="btn-sm btn-blue" onclick="closeModal('modal-generic')">Verificar domínio</button></div>`;
}
function modalTermoCompleto(){
  return `<div style="background:var(--bg);border:1px solid var(--line);border-radius:11px;padding:18px;font-size:12px;line-height:1.7;max-height:340px;overflow:auto;color:var(--ink)">
    <div style="text-align:center;font-weight:800;margin-bottom:12px">TERMO DE DIVULGAÇÃO E INTERMEDIAÇÃO — MAV IMOB</div>
    <p><b>1. Objeto.</b> Este termo autoriza a Mav Imob (imobiliária virtual) a divulgar, anunciar, gerar tráfego pago e conduzir a negociação dos imóveis que a imobiliária optar por compartilhar pela plataforma Mavis OS.</p>
    <p><b>2. Comissão.</b> Sobre cada venda intermediada pela Mav Imob, a imobiliária/corretor que cadastrou o imóvel recebe 70% da comissão; a Mav Imob retém 30%, responsável por marketing, anúncio e fechamento.</p>
    <p><b>3. Relacionamento.</b> A imobiliária mantém o relacionamento com o cliente e pode acompanhar o imóvel, porém o fechamento da venda é conduzido e formalizado pela Mav Imob.</p>
    <p><b>4. Habilitação.</b> O envio de imóveis à Mav Imob depende de habilitação prévia da imobiliária pela equipe Mav Imob.</p>
    <p><b>5. Retirada.</b> A imobiliária pode retirar um imóvel da Mav Imob enquanto não houver negociação ativa em andamento.</p>
    <p><b>6. Repasse.</b> Concluída a venda, a comissão devida é repassada automaticamente conforme os dados financeiros cadastrados.</p>
    <p><b>7. Vigência.</b> Este termo vigora por prazo indeterminado, podendo ser revogado por qualquer parte mediante aviso, ressalvadas negociações em curso.</p>
    <p style="color:var(--muted)">Documento de demonstração. Em produção, o texto jurídico final é definido pela Mav Imob.</p>
  </div>
  <label class="row" style="font-size:12.5px;font-weight:600;margin:14px 0;cursor:pointer;gap:8px"><input type="checkbox" ${termoAceito?'checked':''} style="width:16px;height:16px;accent-color:var(--blue)"> Li e aceito os termos de divulgação na Mav Imob.</label>
  <div class="row" style="justify-content:flex-end"><button class="btn-sm" onclick="alert('Termo baixado: termo-mav-imob.pdf')"><svg class="ic"><use href="#i-download"/></svg> Baixar PDF</button><button class="btn-sm" onclick="closeModal('modal-generic')">Fechar</button><button class="btn-sm btn-blue" onclick="termoAceito=true;closeModal('modal-generic');showScreen('site')">Aceitar termo</button></div>`;
}

/* ===== MAV IMOB RENDER ===== */
const mavProps=[
  ['Casa de Férias','São Paulo','2.000.000','Paulo Cesar','https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=700&q=70'],
];
function renderMav(){
  const el=document.getElementById('mav-content');
  if(mavView==='vit'){
    el.innerHTML=`
    <div class="mav-hero"><h1>Imóveis em destaque</h1><p>Catálogo da imobiliária virtual — imóveis compartilhados por corretores do Mavis OS.</p></div>
    <div class="mav-filter"><span class="on">Todos</span><span>Casas</span><span>Apartamentos</span><span>Coberturas</span><span>Terrenos</span></div>
    <div class="vit-grid">${mavProps.map(([n,l,p,ag,img])=>`<div class="vit-card"><div class="ph" style="background-image:url('${img}')"><div class="src-tag"><svg class="ic"><use href="#i-star"/></svg> Mav Imob</div></div><div class="body"><h3>${n}</h3><div class="loc"><svg class="ic"><use href="#i-pin"/></svg> ${l}</div><div class="price">R$ ${p}</div><div class="agent"><span style="width:22px;height:22px;border-radius:50%;background:var(--blue);display:grid;place-items:center;color:#fff;font-size:10px;font-weight:700">${ag.split(' ').map(x=>x[0]).join('')}</span> Captado por ${ag}</div></div></div>`).join('')}</div>`;
  } else {
    el.innerHTML=`
    <div class="mav-hero"><h1>Gestão da imobiliária virtual</h1><p>Tráfego, vendas e repasse de comissão dos imóveis compartilhados.</p></div>
    <div class="grid g4" style="margin-bottom:22px">
      <div class="gcard"><div class="k"><svg class="ic"><use href="#i-star"/></svg> Imóveis ativos</div><div class="v">6</div></div>
      <div class="gcard"><div class="k"><svg class="ic"><use href="#i-chart"/></svg> Em anúncio</div><div class="v">4</div></div>
      <div class="gcard"><div class="k"><svg class="ic"><use href="#i-money"/></svg> Comissão prevista</div><div class="v" style="color:#6CA2FF">R$ 9.800</div></div>
      <div class="gcard"><div class="k"><svg class="ic"><use href="#i-check"/></svg> Paga em 2026</div><div class="v" style="color:#4ADE80">R$ 84.6k</div></div>
    </div>
    <div class="mav-table"><table><thead><tr><th>Imóvel</th><th>Corretor</th><th>Status</th><th>Tráfego</th><th>Comissão corretor</th><th>Repasse</th></tr></thead><tbody>
      ${[['Casa de Férias','Paulo Cesar','Anunciando','R$ 1.200/mês','70%','—','#6CA2FF']].map(([n,ag,st,tr,pct,rep,c])=>`<tr><td style="color:#fff;font-weight:700">${n}</td><td>${ag}</td><td><span style="color:${c};font-weight:700">●</span> ${st}</td><td>${tr}</td><td>${pct}</td><td style="font-weight:600">${rep}</td></tr>`).join('')}
    </tbody></table></div>`;
  }
}


/* ===================== PONTE REACT (v0.3) ===================== */
/* As funções de navegação entre telas e ambientes agora avisam o React.
   O React Router controla login <svg class="ic"><use href="#i-swap"/></svg> app <svg class="ic"><use href="#i-swap"/></svg> mav e a tela ativa.            */
window.__mavisBridge = window.__mavisBridge || {};

window.showScreen = function(name){
  var content = document.getElementById('content');
  if(content && typeof screens!=='undefined' && screens[name]){
    content.innerHTML = screens[name]();
  }
  try{ if(window.__i18nApply) window.__i18nApply(content); }catch(e){}
  try{ _setCtx(name); }catch(e){}
  if(window.__mavisBridge.onScreen) window.__mavisBridge.onScreen(name);
  window.scrollTo(0,0);
};

window.go = function(where){ if(window.__mavisBridge.onGo) window.__mavisBridge.onGo(where); };
window.enterApp = function(){ if(window.__mavisBridge.onEnter) window.__mavisBridge.onEnter(); };
window.logout   = function(){ if(window.__mavisBridge.onLogout) window.__mavisBridge.onLogout(); };
window.openMav  = function(){ if(window.__mavisBridge.onOpenMav) window.__mavisBridge.onOpenMav(); };

/* Expor o necessário para o React montar cada ambiente */
window.__mavisEngine = {
  screens: (typeof screens!=='undefined') ? screens : {},
  renderMav: (typeof renderMav!=='undefined') ? renderMav : function(){},
  showScreen: window.showScreen,
};

/* expõe funções globais p/ onclick inline */
try{window.setDominio=setDominio;}catch(e){}
try{window.selectTplId=selectTplId;}catch(e){}
try{window.siteTemplateHTML=siteTemplateHTML;}catch(e){}
try{window.previewTemplate=previewTemplate;}catch(e){}
try{window.openModal=openModal;}catch(e){}
try{window.closeModal=closeModal;}catch(e){}
try{window.showInfo=showInfo;}catch(e){}
try{window.tab=tab;}catch(e){}
try{window.confirmTermo=confirmTermo;}catch(e){}
try{window.mavTab=mavTab;}catch(e){}
try{window.modalPlanos=modalPlanos;}catch(e){}
try{window.modalAula=modalAula;}catch(e){}
try{window.modalMeta=modalMeta;}catch(e){}
try{window.modalAssinatura=modalAssinatura;}catch(e){}
try{window.modalBoleto=modalBoleto;}catch(e){}
try{window.modalNovaLocacao=modalNovaLocacao;}catch(e){}
try{window.modalLocacaoDetalhe=modalLocacaoDetalhe;}catch(e){}
try{window.modalConta=modalConta;}catch(e){}
try{window.modalNovoColab=modalNovoColab;}catch(e){}
try{window.modalPermColab=modalPermColab;}catch(e){}
try{window.modalUploadContrato=modalUploadContrato;}catch(e){}
try{window.modalVerContrato=modalVerContrato;}catch(e){}
try{window.modalRelatorio=modalRelatorio;}catch(e){}
try{window.modalChamado=modalChamado;}catch(e){}
try{window.modalEncaminhar=modalEncaminhar;}catch(e){}
try{window.siteTab=siteTab;}catch(e){}
try{window.selectTpl=selectTpl;}catch(e){}
try{window.modalDistribuir=modalDistribuir;}catch(e){}
try{window.modalDistLeads=modalDistLeads;}catch(e){}
try{window.modalLead=modalLead;}catch(e){}
try{window.modalNovoLead=modalNovoLead;}catch(e){}
try{window.modalIntegracao=modalIntegracao;}catch(e){}
try{window.modalNovaCampanha=modalNovaCampanha;}catch(e){}
try{window.modalCampanha=modalCampanha;}catch(e){}
try{window.modalCriarCampanha=modalCriarCampanha;}catch(e){}
try{window.modalPublico=modalPublico;}catch(e){}
try{window.modalCriativo=modalCriativo;}catch(e){}
try{window.setIaModo=setIaModo;}catch(e){}
try{window.modalSecPerfil=modalSecPerfil;}catch(e){}
try{window.modalConfigSec=modalConfigSec;}catch(e){}
try{window.modalCanalAuto=modalCanalAuto;}catch(e){}
try{window.modalProspeccao=modalProspeccao;}catch(e){}
try{window.modalProspDetalhe=modalProspDetalhe;}catch(e){}
try{window.modalEnviarMav=modalEnviarMav;}catch(e){}
try{window.modalDominio=modalDominio;}catch(e){}
try{window.modalTermoCompleto=modalTermoCompleto;}catch(e){}
try{window.renderMav=renderMav;}catch(e){}
try{Object.defineProperty(window,'termoAceito',{get:()=>termoAceito,set:(x)=>{termoAceito=x;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'mavView',{get:()=>mavView,set:(x)=>{mavView=x;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'dominioTipo',{get:()=>dominioTipo,set:(x)=>{dominioTipo=x;},configurable:true});}catch(e){}
try{Object.defineProperty(window,'siteTpl',{get:()=>siteTpl,set:(x)=>{siteTpl=x;},configurable:true});}catch(e){}

try{window.toast=toast;}catch(e){}
try{window.modalNovaAgenda=modalNovaAgenda;}catch(e){}

/* ============================================================================
   MODAIS DO SISTEMA IMOBILIÁRIO  ·  tema automático (claro/escuro) + acento DOURADO
   Cadastrar Colaborador · Cadastrar Imóvel · Configurações do Perfil
   ============================================================================ */

/* ---- abertura genérica (header + corpo rolável + rodapé próprios) ---- */
function openForm(inner, size){
  const m = document.getElementById('mf-modal');
  m.className = 'modal modal-form' + (size ? ' ' + size : '');
  m.innerHTML = inner;
  document.getElementById('modal-form').classList.add('show');
  const body = m.querySelector('.mf-body');
  if (body) body.scrollTop = 0;
}

/* ---- helpers de markup ---- */
function mfHeader(t, s, id){
  return `<div class="modal-h mf-h"><div><h3>${t}</h3>${s?`<div class="mf-subh">${s}</div>`:''}</div>`
       + `<button class="x" onclick="closeModal('${id}')" aria-label="Fechar">×</button></div>`;
}
function mfCard(title, sub, body, extraClass){
  return `<div class="mf-card ${extraClass||''}"><div class="mf-card-h"><h4>${title}</h4>`
       + `${sub?`<div class="mf-sub">${sub}</div>`:''}</div>${body}</div>`;
}
function mfField(label, inputHTML, hint, req){
  return `<div class="field"><label>${label}${req?' <span class="req">*</span>':''}</label>`
       + `${inputHTML}${hint?`<div class="mf-hint">${hint}</div>`:''}</div>`;
}
function mfSelect(id, placeholder, opts, onchange, val){
  return `<select class="inp" id="${id}"${onchange?` onchange="${onchange}"`:''}>`
       + (placeholder?`<option value="" disabled ${val?'':'selected'}>${placeholder}</option>`:'')
       + opts.map(o=>{const v=Array.isArray(o)?o[0]:o, t=Array.isArray(o)?o[1]:o;
           return `<option value="${v}"${val===v?' selected':''}>${t}</option>`;}).join('')
       + `</select>`;
}
function mfPhone(idCountry, idNum, val){
  const ddis=[['+55','+55 · BR'],['+1','+1 · US'],['+351','+351 · PT'],['+54','+54 · AR'],['+34','+34 · ES'],['+44','+44 · UK']];
  return `<div class="phone-field"><select class="inp ddi" id="${idCountry}">`
       + ddis.map(([v,t])=>`<option value="${v}"${v==='+55'?' selected':''}>${t}</option>`).join('')
       + `</select><input class="inp" id="${idNum}" inputmode="tel" placeholder="(11) 98888-7777" value="${val||''}" oninput="maskPhoneBR(this)"></div>`;
}
function pwInput(id, ph){
  return `<div class="pw-field"><input class="inp" id="${id}" type="password" placeholder="${ph}">`
       + `<button type="button" class="pw-eye" tabindex="-1" aria-label="Mostrar senha" onclick="mfTogglePw(this,'${id}')"><svg class="ic"><use href="#i-eye"/></svg></button></div>`;
}

/* ---- máscaras ---- */
function mfDigits(v){return (v||'').replace(/\D/g,'');}
function maskPhoneBR(el){
  let d = mfDigits(el.value).slice(0,11), o='';
  if(d.length) o='('+d.substring(0,2);
  if(d.length>=3){ const cut = d.length>10?7:6; o+=') '+d.substring(2,cut); if(d.length>cut) o+='-'+d.substring(cut,11); }
  el.value=o;
}
function maskCEP(el){ let d=mfDigits(el.value).slice(0,8); el.value = d.length>5? d.slice(0,5)+'-'+d.slice(5) : d; }
function maskUF(el){ el.value = el.value.replace(/[^a-zA-Z]/g,'').toUpperCase().slice(0,2); }
function maskMoneyBR(el){
  let d = mfDigits(el.value); if(!d){ el.value=''; return; }
  d = d.replace(/^0+/,'') || '0';
  while(d.length<3) d='0'+d;
  const cents=d.slice(-2); let int=d.slice(0,-2);
  int = int.replace(/\B(?=(\d{3})+(?!\d))/g,'.');
  el.value = 'R$ '+int+','+cents;
}

/* ---- upload de foto ---- */
let mfFotoData = {};
let mfGalData = [];
function mfFoto(input, avatarId, key){
  const f = input.files && input.files[0]; if(!f) return;
  const r = new FileReader();
  r.onload = e => {
    const a = document.getElementById(avatarId);
    a.style.backgroundImage = 'url(' + e.target.result + ')';
    a.classList.add('has-img');
    mfFotoData[key] = f;
    const rm = document.getElementById(avatarId + '-rm'); if(rm) rm.style.display = 'inline-flex';
  };
  r.readAsDataURL(f);
}
function mfRemoveFoto(avatarId, key){
  const a = document.getElementById(avatarId);
  a.style.backgroundImage = ''; a.classList.remove('has-img');
  delete mfFotoData[key];
  const rm = document.getElementById(avatarId + '-rm'); if(rm) rm.style.display = 'none';
}
function mfGaleria(input){
  const gal = document.getElementById('im-gal');
  [...input.files].forEach(f=>{
    const r = new FileReader();
    r.onload = e => {
      const d = document.createElement('div'); d.className = 'mf-thumb';
      d.style.backgroundImage = 'url(' + e.target.result + ')';
      const x = document.createElement('button'); x.type='button'; x.className='mf-thumb-x'; x.innerHTML='×';
      x.onclick = () => { const i = mfGalData.indexOf(f); if(i>-1) mfGalData.splice(i,1); d.remove(); };
      d.appendChild(x); gal.appendChild(d); mfGalData.push(f);
    };
    r.readAsDataURL(f);
  });
  input.value = '';
}

/* ---- senha mostrar/ocultar ---- */
function mfTogglePw(btn, inputId){
  const i = document.getElementById(inputId); const on = i.type === 'password';
  i.type = on ? 'text' : 'password';
  btn.innerHTML = '<svg class="ic"><use href="#' + (on?'i-eye-off':'i-eye') + '"/></svg>';
}

/* ---- validação ---- */
function mfVal(id){ const e = document.getElementById(id); return e ? (e.value||'').trim() : ''; }
function mfEmailOk(v){ return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test((v||'').trim()); }
function mfClearInvalid(){ document.querySelectorAll('#mf-modal .inp.invalid').forEach(i=>i.classList.remove('invalid')); }
function mfBad(id, msg){ const e=document.getElementById(id); if(e){ e.classList.add('invalid'); e.scrollIntoView({block:'center',behavior:'smooth'}); try{e.focus({preventScroll:true});}catch(_){} } toast(msg); return null; }

/* ---- envio (proteção contra duplo clique + estados) — pronto pra API ---- */
function mfSubmit(btn, payloadFn, okMsg){
  if(btn.disabled) return;
  const data = payloadFn();
  if(!data) return;            // validação falhou
  btn.dataset.t = btn.textContent;
  btn.disabled = true; btn.classList.add('loading');
  btn.innerHTML = '<span class="mf-spin"></span>Enviando...';
  // >>> INTEGRAÇÃO API: enviar `data` aqui (fetch POST/PUT). Mock com timeout:
  // fetch(API_BASE + '/...', { method:'POST', body: montarFormData(data) })
  setTimeout(()=>{
    btn.disabled = false; btn.classList.remove('loading');
    btn.textContent = btn.dataset.t;
    closeModal('modal-form');
    toast(okMsg);
  }, 900);
}

/* ============================ 1) CADASTRAR COLABORADOR ============================ */
function permView(perfil){
  const cards = {
    Corretor: [
      ['Dashboards','Libera a visualização dos dashboards gerais',1],
      ['Agenda própria','Permite usar e gerenciar a agenda individual',1],
      ['Casas','Pode adicionar, editar e marcar imóvel como vendido',1],
      ['Secretaria individual','Acesso à própria secretaria e suas tarefas',1],
      ['Ranking','Pode visualizar a página de ranking',1],
      ['Chat assistente','Pode usar o chat assistente',0],
    ],
    Agente: [
      ['Dashboards','Visualização dos dashboards gerais',1],
      ['Casas','Pode adicionar e editar imóveis',1],
      ['Ranking','Pode visualizar o ranking',0],
      ['Chat assistente','Pode usar o chat assistente',1],
    ],
    Secretaria: [
      ['Agenda de todos','Gerencia a agenda de toda a equipe',1],
      ['Casas','Cadastro e edição de imóveis',1],
      ['Secretaria individual','Tarefas e atendimentos',1],
      ['Ranking','Visualiza o ranking',0],
      ['Chat assistente','Pode usar o chat assistente',1],
    ],
  };
  if(perfil === 'Gestor'){
    const mods = ['Dashboards','Agenda de todos','Casas','Secretarias','Ranking','Chat assistente','Leads','Agente','Chamados','Integrações'];
    return `<div class="mf-gestor"><div class="mf-gestor-h"><svg class="ic gold"><use href="#i-trophy"/></svg>`
         + `<div><div class="mf-gestor-t">Gestor herda acesso total</div>`
         + `<div class="mf-sub">Pode abrir qualquer dashboard, agenda ou secretaria, gerenciar colaboradores, imóveis, agentes e chamados.</div></div></div>`
         + `<div class="gpills">${mods.map(m=>`<span class="gpill">${m}</span>`).join('')}</div></div>`;
  }
  const list = cards[perfil] || cards.Corretor;
  return `<div class="perm-list">` + list.map(([t,d,on])=>
      `<div class="perm-row"><div><div class="pt">${t}</div><div class="pd">${d}</div></div>`
    + `<div class="tog${on?' on':''}" role="switch" aria-checked="${on?'true':'false'}" onclick="this.classList.toggle('on');this.setAttribute('aria-checked', this.classList.contains('on'))"></div></div>`
    ).join('') + `</div>`;
}
function mfPerfilChange(v){ const el = document.getElementById('colab-perm'); if(el) el.innerHTML = permView(v); }

function modalCadColaborador(){
  const head = mfHeader('Cadastrar Usuário / Colaborador','Crie o acesso de um novo membro da equipe','modal-form');
  const foto = mfCard('Foto','Imagem do colaborador (opcional)',
    `<div class="mf-foto"><div class="mf-avatar" id="colab-av"><svg class="ic mf-av-ic"><use href="#i-user"/></svg></div>`
  + `<div class="mf-foto-actions"><label class="btn-sm btn-gold-soft"><svg class="ic"><use href="#i-camera"/></svg> Adicionar Foto`
  + `<input type="file" accept="image/*" hidden onchange="mfFoto(this,'colab-av','colab')"></label>`
  + `<button type="button" class="btn-sm danger-ghost" id="colab-av-rm" style="display:none" onclick="mfRemoveFoto('colab-av','colab')"><svg class="ic"><use href="#i-trash"/></svg> Remover</button></div></div>`);
  const dados = mfCard('Dados do colaborador','Informações de acesso e contato',
    `<div class="mf-grid2">`
  + mfField('Nome Completo','<input class="inp" id="colab-nome" placeholder="Ex: Paulo Cesar">',null,true)
  + mfField('Email','<input class="inp" id="colab-email" type="email" placeholder="carlos@imobiliaria.com">',null,true)
  + mfField('Senha do novo perfil', pwInput('colab-senha','Defina a senha do novo usuário'))
  + mfField('Sua senha (Admin)', pwInput('colab-admin','Digite sua senha para confirmar'),null,true)
  + mfField('Telefone', mfPhone('colab-ddi','colab-fone'),null,true)
  + mfField('Especialidade / Tipo','<input class="inp" id="colab-esp" placeholder="Ex: Alto padrão, Locação, Comercial">','Para gestores, descreva a área que lidera; para corretores, informe a especialidade de atuação.')
  + mfField('Perfil', mfSelect('colab-perfil',null,['Gestor','Corretor','Agente','Secretaria'],'mfPerfilChange(this.value)','Corretor'))
  + mfField('Status', mfSelect('colab-status',null,['Ativo','Inativo','Suspenso'],null,'Ativo'))
  + `</div>`);
  const perms = `<div class="mf-card"><div class="mf-card-h"><h4><svg class="ic gold"><use href="#i-shield"/></svg> Permissões e heranças de acesso</h4>`
  + `<div class="mf-sub">Ajuste o que este perfil pode usar. Gestores herdam acesso total; corretores podem ser liberados módulo a módulo. Chamados, Agente e Integrações permanecem restritos para corretores.</div></div>`
  + `<div id="colab-perm">${permView('Corretor')}</div></div>`;
  const fim = mfCard('Finalização', null,
    `<div class="mf-grid2">`
  + mfField('Data de Admissão','<input class="inp" id="colab-adm" type="date">')
  + mfField('Observações','<input class="inp" id="colab-obs" placeholder="Equipe, plantão, região...">')
  + `</div>`);
  const body = `<div class="mf-body">${foto}${dados}${perms}${fim}</div>`;
  const foot = `<div class="mf-foot"><button class="btn-sm" onclick="closeModal('modal-form')">Cancelar</button>`
  + `<button class="btn-gold" onclick="mfSubmit(this, coletarColaborador, 'Colaborador cadastrado com sucesso')">Próximo (Verificar)</button></div>`;
  return head + body + foot;
}
function coletarColaborador(){
  mfClearInvalid();
  const nome=mfVal('colab-nome'), email=mfVal('colab-email'), fone=mfVal('colab-fone'), admin=mfVal('colab-admin');
  if(!nome) return mfBad('colab-nome','Informe o nome completo');
  if(!mfEmailOk(email)) return mfBad('colab-email','Email inválido');
  if(mfDigits(fone).length<10) return mfBad('colab-fone','Telefone inválido');
  if(!admin) return mfBad('colab-admin','Confirme com sua senha de admin');
  const perms = [...document.querySelectorAll('#colab-perm .perm-row')].map(r=>({
    modulo: r.querySelector('.pt').textContent,
    ativo: r.querySelector('.tog').classList.contains('on')
  }));
  const perfil = mfVal('colab-perfil');
  return { nome, email, senha:mfVal('colab-senha'), adminSenha:admin, ddi:mfVal('colab-ddi'), telefone:fone,
    especialidade:mfVal('colab-esp'), perfil, status:mfVal('colab-status'), admissao:mfVal('colab-adm'),
    observacoes:mfVal('colab-obs'), foto:mfFotoData.colab||null,
    permissoes: perfil==='Gestor' ? 'total' : perms };
}
function abrirColaborador(){ mfFotoData.colab=null; openForm(modalCadColaborador(),'xl'); }

/* ============================ 2) CADASTRAR IMÓVEL ============================ */
function modalCadImovel(){
  const head = mfHeader('Cadastrar Novo Imóvel','Preencha as informações do imóvel e do proprietário','modal-form');
  const s1 = mfCard('Informações principais','Identificação e endereço do imóvel',
    mfField('Nome do imóvel','<input class="inp" id="im-nome" placeholder="Casa de Férias">',null,true)
  + mfField('Descrição','<textarea class="inp" id="im-desc" rows="3" placeholder="Descreva o imóvel..."></textarea>')
  + mfField('Localização','<input class="inp" id="im-loc" placeholder="Ex: Rua das Flores, 123 - Centro, São Paulo">',null,true)
  + `<div class="mf-grid2">`
  + mfField('Bairro','<input class="inp" id="im-bairro" placeholder="Centro">')
  + mfField('Cidade','<input class="inp" id="im-cidade" placeholder="São Paulo">')
  + `</div><div class="mf-grid2">`
  + mfField('Estado','<input class="inp" id="im-uf" placeholder="SP" oninput="maskUF(this)">')
  + mfField('CEP','<input class="inp" id="im-cep" inputmode="numeric" placeholder="01000-000" oninput="maskCEP(this)">')
  + `</div>`);
  const s2 = mfCard('Detalhes e valores','Informações complementares do imóvel',
    `<div class="mf-grid2">`
  + mfField('Tipo', mfSelect('im-tipo','Selecione o tipo',['Casa','Apartamento','Terreno','Sala comercial','Chácara','Sobrado']))
  + mfField('Status', mfSelect('im-status','Selecione o status',['Disponível','Vendido','Reservado','Alugado','Inativo']))
  + `</div><div class="mf-grid2">`
  + mfField('Preço (R$)','<input class="inp" id="im-preco" inputmode="numeric" placeholder="450.000" oninput="maskMoneyBR(this)">',null,true)
  + mfField('Área (m²)','<input class="inp" id="im-area" inputmode="numeric" placeholder="85">')
  + `</div><div class="mf-grid3">`
  + mfField('Quartos','<input class="inp" id="im-q" inputmode="numeric" placeholder="3">')
  + mfField('Banheiros','<input class="inp" id="im-b" inputmode="numeric" placeholder="2">')
  + mfField('Vagas','<input class="inp" id="im-v" inputmode="numeric" placeholder="2">')
  + `</div>`);
  const s3 = mfCard('Detalhes adicionais','Mais informações para enriquecer o anúncio',
    `<div class="mf-grid2">`
  + mfField('Código interno','<input class="inp" id="im-cod" placeholder="Ex: A-1023">')
  + mfField('Ano de construção','<input class="inp" id="im-ano" inputmode="numeric" placeholder="2015">')
  + `</div><div class="mf-grid2">`
  + mfField('Andar/Planta','<input class="inp" id="im-andar" placeholder="Térreo, 8º, Cobertura...">')
  + mfField('Condomínio','<input class="inp" id="im-cond" inputmode="numeric" placeholder="R$ 500,00" oninput="maskMoneyBR(this)">')
  + `</div><div class="mf-grid2">`
  + mfField('IPTU','<input class="inp" id="im-iptu" inputmode="numeric" placeholder="R$ 0,00" oninput="maskMoneyBR(this)">')
  + mfField('Observações rápidas','<input class="inp" id="im-obs" placeholder="Aceita permuta, ponto comercial...">')
  + `</div>`);
  const main = `<div class="mf-col-main">${s1}${s2}${s3}</div>`;
  const c1 = mfCard('Dados do proprietário','Contato e responsável pelo imóvel',
    mfField('Nome do Proprietário','<input class="inp" id="im-pnome" placeholder="Ex: João da Silva">')
  + mfField('Telefone', mfPhone('im-pddi','im-pfone'))
  + mfField('E-mail','<input class="inp" id="im-pmail" type="email" placeholder="contato@exemplo.com">'));
  const c2 = mfCard('Mídia','Capte a galeria do anúncio',
    `<div class="mf-media" id="im-gal"></div>`
  + `<label class="btn-sm btn-gold-soft" style="width:100%;justify-content:center"><svg class="ic"><use href="#i-image"/></svg> Adicionar Foto`
  + `<input type="file" accept="image/*" multiple hidden onchange="mfGaleria(this)"></label>`);
  const c3 = mfCard('Links e destaques','Ajudam o cliente a conhecer mais',
    mfField('Vídeo/Tour virtual','<input class="inp" id="im-video" placeholder="https://youtube.com/...">')
  + mfField('Link do mapa','<input class="inp" id="im-mapa" placeholder="https://maps.google.com/...">')
  + mfField('Comodidades','<input class="inp" id="im-comod" placeholder="Piscina, Churrasqueira, Academia...">','Separe as comodidades por vírgula'));
  const side = `<div class="mf-col-side">${c1}${c2}${c3}</div>`;
  const body = `<div class="mf-body"><div class="mf-cols">${main}${side}</div></div>`;
  const foot = `<div class="mf-foot"><button class="btn-sm" onclick="closeModal('modal-form')">Cancelar</button>`
  + `<button class="btn-gold" onclick="mfSubmit(this, coletarImovel, 'Imóvel cadastrado com sucesso')">Salvar imóvel</button></div>`;
  return head + body + foot;
}
function coletarImovel(){
  mfClearInvalid();
  const nome=mfVal('im-nome'), loc=mfVal('im-loc'), preco=mfVal('im-preco');
  if(!nome) return mfBad('im-nome','Informe o nome do imóvel');
  if(!loc) return mfBad('im-loc','Informe a localização');
  if(!preco) return mfBad('im-preco','Informe o preço');
  const comodidades = mfVal('im-comod').split(',').map(s=>s.trim()).filter(Boolean);
  return { nome, descricao:mfVal('im-desc'), localizacao:loc, bairro:mfVal('im-bairro'), cidade:mfVal('im-cidade'),
    estado:mfVal('im-uf'), cep:mfVal('im-cep'), tipo:mfVal('im-tipo'), status:mfVal('im-status'), preco,
    area:mfVal('im-area'), quartos:mfVal('im-q'), banheiros:mfVal('im-b'), vagas:mfVal('im-v'),
    codigo:mfVal('im-cod'), ano:mfVal('im-ano'), andar:mfVal('im-andar'), condominio:mfVal('im-cond'),
    iptu:mfVal('im-iptu'), observacoes:mfVal('im-obs'),
    proprietario:{ nome:mfVal('im-pnome'), ddi:mfVal('im-pddi'), telefone:mfVal('im-pfone'), email:mfVal('im-pmail') },
    video:mfVal('im-video'), mapa:mfVal('im-mapa'), comodidades, fotos: mfGalData.slice() };
}
function abrirImovel(){ mfGalData = []; openForm(modalCadImovel(),'xl'); }

/* ============================ 3) CONFIGURAÇÕES DO PERFIL ============================ */
function prefRow(t, d, id, on){
  return `<div class="perm-row"><div><div class="pt">${t}</div><div class="pd">${d}</div></div>`
       + `<div class="tog${on?' on':''}" id="${id}" role="switch" aria-checked="${on?'true':'false'}" onclick="this.classList.toggle('on');this.setAttribute('aria-checked', this.classList.contains('on'))"></div></div>`;
}
function perfTema(v){
  let theme = v;
  if(v==='auto'){ theme = (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) ? 'light' : 'dark'; }
  document.documentElement.setAttribute('data-theme', theme);
  try{ localStorage.setItem('mavis-theme', v==='auto'?'dark':theme); }catch(e){}
}
function modalConfigPerfil(){
  const head = mfHeader('Configurações do Perfil','Gerencie suas informações, segurança e preferências do sistema','modal-form');
  const s1 = mfCard('Foto e informações básicas','Seus dados de contato',
    `<div class="mf-foto"><div class="mf-avatar has-img" id="perf-av" style="background-image:url(https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=160&h=160&fit=crop&crop=faces&q=80)"></div>`
  + `<div class="mf-foto-actions"><label class="btn-sm btn-gold-soft"><svg class="ic"><use href="#i-camera"/></svg> Alterar Foto`
  + `<input type="file" accept="image/*" hidden onchange="mfFoto(this,'perf-av','perfil')"></label>`
  + `<button type="button" class="btn-sm danger-ghost" id="perf-av-rm" onclick="mfRemoveFoto('perf-av','perfil')"><svg class="ic"><use href="#i-trash"/></svg> Remover Foto</button></div></div>`
  + `<div class="mf-grid2">`
  + mfField('Nome Completo','<input class="inp" id="perf-nome" value="Paulo Cesar">',null,true)
  + mfField('Email','<input class="inp" id="perf-email" type="email" value="paulo.cesar@alpha.com">',null,true)
  + mfField('Telefone', mfPhone('perf-ddi','perf-fone','(33) 99908-7046'))
  + mfField('Cargo / Especialidade','<input class="inp" id="perf-cargo" value="Gestor · Alto padrão">')
  + mfField('Perfil','<input class="inp locked" value="Gestor" readonly tabindex="-1">')
  + mfField('Status','<input class="inp locked" value="Ativo" readonly tabindex="-1">')
  + `</div>`);
  const s2 = mfCard('Segurança da conta','Preencha apenas se quiser alterar sua senha',
    `<div class="mf-grid3">`
  + mfField('Senha atual', pwInput('perf-pw0','••••••••'))
  + mfField('Nova senha', pwInput('perf-pw1','Nova senha'))
  + mfField('Confirmar nova senha', pwInput('perf-pw2','Repita a senha'))
  + `</div><div class="mf-hint">Preencha estes campos apenas se quiser alterar sua senha.</div>`);
  const mods = ['Dashboards','Agenda de todos','Casas','Secretarias','Ranking','Chat assistente','Leads','Agente','Chamados','Integrações'];
  const s3 = `<div class="mf-card"><div class="mf-card-h"><h4><svg class="ic gold"><use href="#i-shield"/></svg> Minhas permissões</h4>`
  + `<div class="mf-sub">Veja quais áreas do sistema estão liberadas para seu perfil.</div></div>`
  + `<div class="mf-gestor readonly"><div class="mf-gestor-h"><svg class="ic gold"><use href="#i-trophy"/></svg><div class="mf-gestor-t">Gestor herda acesso total</div></div>`
  + `<div class="gpills">${mods.map(m=>`<span class="gpill">${m}</span>`).join('')}</div></div>`
  + `<div class="mf-ro-note"><svg class="ic"><use href="#i-lock"/></svg> Apenas um gestor autorizado pode alterar permissões pela tela de cadastro de colaboradores.</div></div>`;
  const s4 = mfCard('Preferências','Ajuste o sistema do seu jeito',
    `<div class="mf-grid2">`
  + mfField('Tema do sistema', mfSelect('perf-tema',null,[['light','Claro'],['dark','Escuro'],['auto','Automático']],'perfTema(this.value)', (document.documentElement.getAttribute('data-theme')||'dark')))
  + mfField('Idioma', mfSelect('perf-idioma',null,[['pt','Português (Brasil)'],['es','Espanhol'],['en','Inglês']],null,'pt'))
  + `</div>`
  + prefRow('Notificações','Avisos do sistema em tempo real','perf-not',1)
  + prefRow('Sons de alerta','Tocar som ao receber avisos','perf-som',1)
  + prefRow('Receber avisos por e-mail','Resumo e alertas no seu email','perf-mail',0)
  + prefRow('Receber avisos pelo WhatsApp','Mensagens no WhatsApp cadastrado','perf-wpp',1));
  const sess = [['Último login','Hoje, 09:42'],['IP do último acesso','177.92.13.4'],['Dispositivo/Navegador','Chrome · Windows 11'],['Data de criação da conta','12/03/2024'],['Data de admissão','01/02/2024']];
  const s5 = `<div class="mf-card"><div class="mf-card-h"><h4>Sessão e acesso</h4></div>`
  + `<div class="mf-sess">${sess.map(([k,v])=>`<div class="mf-sess-row"><span class="mf-sess-k">${k}</span><span class="mf-sess-v">${v}</span></div>`).join('')}</div>`
  + `<button type="button" class="btn-sm danger-ghost mf-logout" onclick="toast('Sessão encerrada')"><svg class="ic"><use href="#i-power"/></svg> Sair da conta</button></div>`;
  const body = `<div class="mf-body">${s1}${s2}${s3}${s4}${s5}</div>`;
  const foot = `<div class="mf-foot"><button class="btn-sm" onclick="closeModal('modal-form')">Cancelar</button>`
  + `<button class="btn-gold" onclick="mfSubmit(this, coletarPerfil, 'Alterações salvas com sucesso')">Salvar alterações</button></div>`;
  return head + body + foot;
}
function coletarPerfil(){
  mfClearInvalid();
  const nome=mfVal('perf-nome'), email=mfVal('perf-email'), fone=mfVal('perf-fone');
  if(!nome) return mfBad('perf-nome','Informe o nome');
  if(!mfEmailOk(email)) return mfBad('perf-email','Email inválido');
  if(mfDigits(fone).length<10) return mfBad('perf-fone','Telefone inválido');
  const p0=mfVal('perf-pw0'), p1=mfVal('perf-pw1'), p2=mfVal('perf-pw2');
  let senha = null;
  if(p0||p1||p2){
    if(!(p0&&p1&&p2)){ toast('Preencha os 3 campos de senha'); return null; }
    if(p1!==p2) return mfBad('perf-pw2','A confirmação não confere');
    senha = { atual:p0, nova:p1 };
  }
  return { nome, email, ddi:mfVal('perf-ddi'), telefone:fone, cargo:mfVal('perf-cargo'), senha,
    foto: mfFotoData.perfil||null,
    preferencias:{ tema:mfVal('perf-tema'), idioma:mfVal('perf-idioma'),
      notificacoes: document.getElementById('perf-not').classList.contains('on'),
      sons: document.getElementById('perf-som').classList.contains('on'),
      email: document.getElementById('perf-mail').classList.contains('on'),
      whatsapp: document.getElementById('perf-wpp').classList.contains('on') } };
}
function abrirPerfil(){ openForm(modalConfigPerfil(),'xl'); }

/* ---- exposição no window p/ onclick ---- */
try{ window.openForm=openForm; }catch(e){}
try{ window.maskPhoneBR=maskPhoneBR; window.maskCEP=maskCEP; window.maskUF=maskUF; window.maskMoneyBR=maskMoneyBR; }catch(e){}
try{ window.mfFoto=mfFoto; window.mfRemoveFoto=mfRemoveFoto; window.mfGaleria=mfGaleria; window.mfTogglePw=mfTogglePw; window.mfSubmit=mfSubmit; }catch(e){}
try{ window.mfPerfilChange=mfPerfilChange; window.perfTema=perfTema; }catch(e){}
try{ window.coletarColaborador=coletarColaborador; window.coletarImovel=coletarImovel; window.coletarPerfil=coletarPerfil; }catch(e){}
try{ window.abrirColaborador=abrirColaborador; window.abrirImovel=abrirImovel; window.abrirPerfil=abrirPerfil; }catch(e){}

/* ============================================================================
   BARRA DE BUSCA/FILTROS CONTEXTUAL POR PÁGINA (substitui a busca central)
   ============================================================================ */
function fbar(c){
  c = c || {};
  let h = '<div class="filterbar" data-items="' + (c.items || '') + '">';
  if (c.search)
    h += '<div class="fb-search"><svg class="ic"><use href="#i-search"/></svg>'
       + '<input type="search" placeholder="' + c.search + '" oninput="fbApply(this)" aria-label="Buscar"></div>';
  (c.sels || []).forEach(s => {
    const label = s[0], opts = s[1];
    h += '<select class="fb-sel" onchange="fbApply(this)" aria-label="' + label + '">'
       + '<option value="">' + label + '</option>'
       + opts.map(o => '<option value="' + o + '">' + o + '</option>').join('')
       + '</select>';
  });
  if (c.seg)
    h += '<div class="fb-seg">'
       + c.seg.map((o, i) => '<button type="button" class="' + ((c.segActive || 0) === i ? 'on' : '') + '" onclick="' + (c.segFn ? c.segFn + '(' + i + ')' : 'fbSeg(this)') + '">' + o + '</button>').join('')
       + '</div>';
  if (c.search || (c.sels && c.sels.length))
    h += '<button type="button" class="fb-clear" onclick="fbClear(this)"><svg class="ic"><use href="#i-x"/></svg> Limpar</button>';
  h += '</div>';
  return h;
}
function fbApply(el){
  const bar = el.closest('.filterbar'); if(!bar) return;
  const sel = bar.dataset.items; if(!sel) return;          // barra só de período
  const terms = [];
  const si = bar.querySelector('.fb-search input'); if (si && si.value.trim()) terms.push(si.value.trim().toLowerCase());
  bar.querySelectorAll('.fb-sel').forEach(s => { if (s.value) terms.push(s.value.toLowerCase()); });
  document.querySelectorAll(sel).forEach(it => {
    const t = (it.textContent || '').toLowerCase();
    it.style.display = terms.every(x => t.includes(x)) ? '' : 'none';
  });
}
function fbSeg(btn){ const g = btn.parentElement; g.querySelectorAll('button').forEach(b => b.classList.remove('on')); btn.classList.add('on'); }
function fbClear(btn){
  const bar = btn.closest('.filterbar');
  const si = bar.querySelector('.fb-search input'); if (si) si.value = '';
  bar.querySelectorAll('.fb-sel').forEach(s => s.value = '');
  if (bar.dataset.items) document.querySelectorAll(bar.dataset.items).forEach(it => it.style.display = '');
}
/* título contextual da topbar */
window.__scrTitles = {dashboard:'Dashboard',agenda:'Agenda',imoveis:'Imóveis',locacoes:'Locações',site:'Meu site',leads:'Leads & Funil',integracoes:'Integrações',campanhas:'Campanhas',secretarias:'Secretárias',agente:'Agente WhatsApp',colaboradores:'Colaboradores',contratos:'Contratos',relatorios:'Relatórios',metas:'Metas',portal:'Portal do cliente',chamados:'Suporte / SAC',financeiro:'Financeiro',notificacoes:'Notificações',treinamento:'Treinamento',config:'Configurações'};
function _setCtx(name){ var c = document.getElementById('topbar-ctx'); if (c){ c.textContent = (window.__scrTitles && window.__scrTitles[name]) || ''; try{ if(window.__i18nApply) window.__i18nApply(c); }catch(e){} } }
try{ window.fbApply=fbApply; window.fbSeg=fbSeg; window.fbClear=fbClear; window._setCtx=_setCtx; }catch(e){}

/* ============================================================================
   DASHBOARD PREMIUM — período funcional + widgets de toda a plataforma
   + deep-links com destaque na seção de destino
   ============================================================================ */
let dashIdx = 2; // 0=Hoje 1=7d 2=30d 3=90d (padrão 30 dias)
let dashColab = 'Todos';
const COLABS = ['Todos','Paulo Cesar'];
const COLAB_ROLE = {'Paulo Cesar':'Gestor'};
const COLAB_SHARE = {'Paulo Cesar':1};
function colabShare(){ return dashColab==='Todos' ? 1 : (COLAB_SHARE[dashColab]||0); }
function fmtBR(n){ n=Math.round(Math.abs(n)); var s=''+n,o=''; for(var i=0;i<s.length;i++){ if(i>0 && (s.length-i)%3===0) o+='.'; o+=s.charAt(i); } return o; }
function scaleVal(str){ var sh=colabShare(); if(sh===1||str==null) return str; str=''+str; var neg=/[\u2212-]/.test(str);
  if(/mi\b/.test(str)){ var m=parseFloat(str.replace(/[^0-9,]/g,'').replace(',','.'))||0; return (neg?'\u2212 ':'')+'R$ '+(m*sh).toFixed(1).replace('.',',')+' mi'; }
  if(/R\$/.test(str)){ var n=parseInt(str.replace(/[^0-9]/g,''),10)||0; return (neg?'\u2212 ':'')+'R$ '+fmtBR(n*sh); }
  if(/%/.test(str)) return str;
  if(/^\s*\d+\s*$/.test(str)) return ''+Math.round(parseInt(str,10)*sh);
  return str; }
function scaleInt(n){ var sh=colabShare(); return sh===1? n : Math.round(n*sh); }

/* gráfico de evolução (parametrizado por série [ [dia, valor], ... ]) */
function dashChart(series){
  series = (series && series.length) ? series : [[1,0]];
  var W=700,H=210,padL=30,padR=16,padT=16,padB=30;
  var maxV=Math.max.apply(null, series.map(function(p){return p[1];}));
  maxV=Math.max(maxV,1);
  var stp = maxV<=6?1 : maxV<=15?3 : maxV<=40?10 : maxV<=120?30 : 50;
  var top = (Math.ceil(maxV/stp)*stp) || stp;
  var pw=W-padL-padR, ph=H-padT-padB;
  function X(i){return padL+pw*i/Math.max(series.length-1,1);}
  function Y(v){return padT+ph*(1-v/top);}
  var grid='';
  for(var g=0; g<=top; g+=stp){ var gy=Y(g); grid+='<line class="grid" x1="'+padL+'" y1="'+gy+'" x2="'+(W-padR)+'" y2="'+gy+'"/><text class="ylab" x="'+(padL-8)+'" y="'+(gy+3.5)+'">'+g+'</text>'; }
  var lpts=series.map(function(d,i){return X(i).toFixed(1)+','+Y(d[1]).toFixed(1);});
  var line=lpts.join(' ');
  var area='M'+X(0).toFixed(1)+','+(padT+ph)+' L'+lpts.join(' L')+' L'+X(series.length-1).toFixed(1)+','+(padT+ph)+' Z';
  var band=pw/Math.max(series.length-1,1);
  var every = series.length>9?2:1;
  var pts=series.map(function(d,i){
    var px=X(i), py=Y(d[1]); var up=py>54; var ry=up?-34:12;
    var lbl=(i%every===0)?'<text class="xlab" x="'+px.toFixed(1)+'" y="'+(padT+ph+18)+'">'+d[0]+'</text>':'';
    return '<g class="cpt" onclick="goAgenda('+d[0]+')"><rect class="hit" x="'+(px-band/2).toFixed(1)+'" y="'+padT+'" width="'+band.toFixed(1)+'" height="'+ph+'"/><line class="guide" x1="'+px.toFixed(1)+'" y1="'+padT+'" x2="'+px.toFixed(1)+'" y2="'+(padT+ph)+'"/><circle class="dot" cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.4"/><g class="tip" transform="translate('+px.toFixed(1)+','+py.toFixed(1)+')"><rect x="-26" y="'+ry+'" width="52" height="24" rx="7"/><text class="tipv" x="0" y="'+(ry+16)+'" text-anchor="middle">'+d[1]+'</text></g>'+lbl+'</g>';
  }).join('');
  return '<svg class="dash-chart" viewBox="0 0 '+W+' '+H+'"><defs><linearGradient id="gd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#2F6BFF" stop-opacity=".34"/><stop offset="1" stop-color="#2F6BFF" stop-opacity="0"/></linearGradient></defs>'+grid+'<g class="creveal"><path d="'+area+'" fill="url(#gd)" stroke="none"/><polyline fill="none" stroke="#2F6BFF" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" points="'+line+'"/>'+pts+'</g></svg>';
}

/* dataset por período */
function DASH(i){
  var P=[
    { tag:'Hoje',
      kpis:[
        {icon:'i-calendar',label:'Visitas marcadas',value:'2',delta:'↑ 1 vs ontem',trend:'up',screen:'agenda'},
        {icon:'i-users',label:'Novos leads',value:'1',delta:'no dia',trend:'up',screen:'leads'},
        {icon:'i-doc',label:'Propostas',value:'0',delta:'hoje',trend:'flat',screen:'leads'},
        {icon:'i-target',label:'Conversão',value:'—',delta:'lead → venda',trend:'flat',screen:'metas'},
        {icon:'i-star',label:'Comissão Mav',value:'R$ 0',delta:'recebida',trend:'flat',screen:'financeiro'},
        {icon:'i-money',label:'VGV negociação',value:'R$ 2,0 mi',delta:'1 imóvel',trend:'up',screen:'imoveis'} ],
      chart:[[13,1],[14,0],[15,1],[16,2],[17,1],[18,2],[19,2]],
      funnel:[['Captado',2,'#2F6BFF','Captado'],['Qualificando',1,'#8B5CF6','Qualificando'],['Visita',1,'#06B6D4','Visita/Apresentação'],['Proposta',0,'#F59E0B','Proposta'],['Negociação',0,'#FB7185','Negociando'],['Concluído',0,'#34D399','Concluído']],
      origem:[['OLX',1,'#6E0AD6'],['Viva Real',0,'#FF6B00'],['Zap Imóveis',0,'#FFB400'],['Instagram',0,'#DD2A7B'],['Facebook',0,'#1877F2'],['TikTok',0,'#25F4EE'],['Site',0,'#2F6BFF'],['Indicação',0,'#34D399']],
      fin:{receita:'R$ 0',vendas:'R$ 0',adm:'R$ 0',areceber:'R$ 2.750',despesas:'R$ 0',liquido:'R$ 0'} },
    { tag:'Últimos 7 dias',
      kpis:[
        {icon:'i-calendar',label:'Visitas marcadas',value:'9',delta:'↑ 8% vs semana',trend:'up',screen:'agenda'},
        {icon:'i-users',label:'Novos leads',value:'6',delta:'↑ 12%',trend:'up',screen:'leads'},
        {icon:'i-doc',label:'Propostas',value:'2',delta:'↑ 5%',trend:'up',screen:'leads'},
        {icon:'i-target',label:'Conversão',value:'17%',delta:'lead → venda',trend:'up',screen:'metas'},
        {icon:'i-star',label:'Comissão Mav',value:'R$ 0',delta:'recebida',trend:'flat',screen:'financeiro'},
        {icon:'i-money',label:'VGV negociação',value:'R$ 2,0 mi',delta:'1 imóvel',trend:'up',screen:'imoveis'} ],
      chart:[[13,1],[14,2],[15,1],[16,2],[17,0],[18,1],[19,2]],
      funnel:[['Captado',6,'#2F6BFF','Captado'],['Qualificando',4,'#8B5CF6','Qualificando'],['Visita',3,'#06B6D4','Visita/Apresentação'],['Proposta',2,'#F59E0B','Proposta'],['Negociação',1,'#FB7185','Negociando'],['Concluído',1,'#34D399','Concluído']],
      origem:[['OLX',2,'#6E0AD6'],['Viva Real',1,'#FF6B00'],['Zap Imóveis',1,'#FFB400'],['Instagram',1,'#DD2A7B'],['Facebook',0,'#1877F2'],['TikTok',1,'#25F4EE'],['Site',0,'#2F6BFF'],['Indicação',0,'#34D399']],
      fin:{receita:'R$ 0',vendas:'R$ 0',adm:'R$ 0',areceber:'R$ 2.750',despesas:'R$ 380',liquido:'− R$ 380'} },
    { tag:'Últimos 30 dias',
      kpis:[
        {icon:'i-calendar',label:'Visitas marcadas',value:'38',delta:'↑ 8% vs mês',trend:'up',screen:'agenda'},
        {icon:'i-users',label:'Novos leads',value:'24',delta:'↑ 12%',trend:'up',screen:'leads'},
        {icon:'i-doc',label:'Propostas',value:'7',delta:'↑ 5%',trend:'up',screen:'leads'},
        {icon:'i-target',label:'Conversão',value:'13%',delta:'lead → venda',trend:'up',screen:'metas'},
        {icon:'i-star',label:'Comissão Mav',value:'R$ 28.000',delta:'recebida',trend:'up',screen:'financeiro'},
        {icon:'i-money',label:'VGV negociação',value:'R$ 2,0 mi',delta:'1 imóvel',trend:'up',screen:'imoveis'} ],
      chart:[[2,2],[6,4],[10,3],[14,5],[18,4],[22,6],[26,5],[30,7]],
      funnel:[['Captado',24,'#2F6BFF','Captado'],['Qualificando',17,'#8B5CF6','Qualificando'],['Visita',11,'#06B6D4','Visita/Apresentação'],['Proposta',7,'#F59E0B','Proposta'],['Negociação',4,'#FB7185','Negociando'],['Concluído',3,'#34D399','Concluído']],
      origem:[['OLX',7,'#6E0AD6'],['Viva Real',5,'#FF6B00'],['Zap Imóveis',3,'#FFB400'],['Instagram',4,'#DD2A7B'],['Facebook',2,'#1877F2'],['TikTok',2,'#25F4EE'],['Site',1,'#2F6BFF'],['Indicação',0,'#34D399']],
      fin:{receita:'R$ 28.250',vendas:'R$ 28.000',adm:'R$ 250',areceber:'R$ 2.750',despesas:'R$ 1.999',liquido:'R$ 26.251'} },
    { tag:'Últimos 90 dias',
      kpis:[
        {icon:'i-calendar',label:'Visitas marcadas',value:'112',delta:'↑ 9% vs trim.',trend:'up',screen:'agenda'},
        {icon:'i-users',label:'Novos leads',value:'71',delta:'↑ 14%',trend:'up',screen:'leads'},
        {icon:'i-doc',label:'Propostas',value:'19',delta:'↑ 7%',trend:'up',screen:'leads'},
        {icon:'i-target',label:'Conversão',value:'11%',delta:'lead → venda',trend:'up',screen:'metas'},
        {icon:'i-star',label:'Comissão Mav',value:'R$ 56.600',delta:'recebida',trend:'up',screen:'financeiro'},
        {icon:'i-money',label:'VGV negociação',value:'R$ 2,0 mi',delta:'1 imóvel',trend:'up',screen:'imoveis'} ],
      chart:[[3,9],[8,14],[13,11],[18,16],[23,13],[28,18],[30,17]],
      funnel:[['Captado',71,'#2F6BFF','Captado'],['Qualificando',52,'#8B5CF6','Qualificando'],['Visita',33,'#06B6D4','Visita/Apresentação'],['Proposta',19,'#F59E0B','Proposta'],['Negociação',11,'#FB7185','Negociando'],['Concluído',8,'#34D399','Concluído']],
      origem:[['OLX',20,'#6E0AD6'],['Viva Real',14,'#FF6B00'],['Zap Imóveis',9,'#FFB400'],['Instagram',11,'#DD2A7B'],['Facebook',6,'#1877F2'],['TikTok',6,'#25F4EE'],['Site',3,'#2F6BFF'],['Indicação',2,'#34D399']],
      fin:{receita:'R$ 57.350',vendas:'R$ 56.600',adm:'R$ 750',areceber:'R$ 7.750',despesas:'R$ 5.997',liquido:'R$ 51.353'} } ];
  return P[i] || P[2];
}

function dashFin(d){
  var f=d.fin;
  var receita=scaleVal(f.receita), vendas=scaleVal(f.vendas), adm=scaleVal(f.adm), areceber=scaleVal(f.areceber), despesas=scaleVal(f.despesas), liquido=scaleVal(f.liquido);
  function row(k,v,cls){ return '<div class="finrow"><span class="fr-k">'+k+'</span><span class="fr-v '+(cls||'')+'">'+v+'</span></div>'; }
  var netCls=(liquido.indexOf('\u2212')===0||liquido.indexOf('-')===0)?'neg':'pos';
  return '<div class="fin-hero"><div class="fin-hero-k">Sua receita no período</div><div class="fin-hero-v">'+receita+'</div></div>'
    + '<div class="finrows">'
    + row('Comissões de vendas', vendas, 'pos')
    + row('Taxa de administração', adm, 'pos')
    + row('A receber (aluguéis)', areceber, 'warn')
    + row('Despesas', '\u2212 '+despesas, 'neg')
    + '</div>'
    + '<div class="fin-net"><span>Resultado líquido</span><b class="'+netCls+'">'+liquido+'</b></div>';
}

/* seletor de período no cabeçalho (à direita do título) */
function dashSeg(){
  var L=['Hoje','7 dias','30 dias','90 dias'];
  return '<div class="fb-seg dash-seg" role="group" aria-label="Período">'+L.map(function(o,i){return '<button type="button" class="'+(dashIdx===i?'on':'')+'" onclick="dashPeriod('+i+')">'+o+'</button>';}).join('')+'</div>';
}

/* conteúdo que muda com o período (KPIs, gráfico, funil, origem, financeiro) */
function dashDynamic(){
  var d=DASH(dashIdx);
  var kpis=d.kpis.map(function(k){
    var v=(k.label==='Conversão')?k.value:scaleVal(k.value);
    return '<div class="card stat dash-link" onclick="showScreen(\''+k.screen+'\')"><div class="k"><svg class="ic"><use href="#'+k.icon+'"/></svg> '+k.label+'</div><div class="v">'+v+'</div><div class="d '+k.trend+'">'+k.delta+'</div><span class="dash-go"><svg class="ic"><use href="#i-forward"/></svg></span></div>';
  }).join('');
  var fmax=Math.max.apply(null,d.funnel.map(function(f){return f[1];}))||1;
  var funnel=d.funnel.map(function(f,i){
    var pct=Math.round(f[1]/fmax*100);
    return '<div class="fstage dash-row" onclick="goLeads(\''+f[3]+'\')"><div class="fstage-top"><span class="fstage-name"><span class="fstage-dot" style="background:'+f[2]+';color:'+f[2]+'"></span>'+f[0]+'</span><span class="fstage-meta"><b>'+scaleInt(f[1])+'</b><span class="fstage-pct">'+pct+'%</span></span></div><div class="fstage-bar"><div class="fstage-fill" style="width:'+pct+'%;background:'+f[2]+';color:'+f[2]+';animation-delay:'+(i*90)+'ms"></div></div></div>';
  }).join('');
  var omax=Math.max.apply(null,d.origem.map(function(o){return o[1];}))||1;
  var origem=d.origem.map(function(o){
    var w=Math.round(o[1]/omax*100);
    return '<div class="leadbar dash-row" onclick="goLeadsSel(\''+o[0]+'\')"><div class="lb-name">'+o[0]+'</div><div class="lb-track"><div class="fill" style="width:'+w+'%;background:'+o[2]+';color:'+o[2]+'"></div></div><div class="lb-val">'+scaleInt(o[1])+'</div></div>';
  }).join('');
  return '<div class="dash-kpis">'+kpis+'</div>'
   + '<div class="grid g3 dash-grid" style="margin-bottom:16px">'
     + '<div class="card pad" style="grid-column:span 2"><div class="between" style="margin-bottom:4px"><h3 class="sec-title">Visitas marcadas · evolução</h3><span class="tag t-blue">'+(dashColab==='Todos'?'Equipe':dashColab)+'</span></div><div class="muted" style="font-size:11.5px;margin-bottom:10px">Clique num dia para abrir a agenda nele</div><div id="dash-chart-area">'+dashChart(dashChartSeries())+'</div></div>'
     + '<div class="card pad funnel-card"><div class="between" style="margin-bottom:14px"><h3 class="sec-title">Leads por etapa</h3><span class="tag t-blue">Funil</span></div><div class="fstages">'+funnel+'</div></div>'
   + '</div>'
   + '<div class="grid g3 dash-grid" style="margin-bottom:16px">'
     + '<div class="card pad origem-card" style="grid-column:span 2"><div class="between" style="margin-bottom:14px"><h3 class="sec-title">De onde vêm os leads</h3><span class="tag t-blue">'+d.tag+'</span></div><div class="leadbars">'+origem+'</div></div>'
     + '<div class="card pad dash-link" onclick="showScreen(\'financeiro\')"><div class="between" style="margin-bottom:8px"><h3 class="sec-title">Resumo financeiro</h3><svg class="ic op-arrow"><use href="#i-forward"/></svg></div>'+dashFin(d)+'</div>'
   + '</div>';
}

function dashScreen(){
  dashColab='Todos';
  var ops=[
    ['i-calendar','Próxima visita','Paulo Cesar · hoje 15h','goAgenda(19)','#2F6BFF'],
    ['i-doc','Contrato p/ assinatura','1 pendente','showScreen(\'contratos\')','#8B5CF6'],
    ['i-money','Aluguel a vencer','Casa de Férias · dia 10','showScreen(\'locacoes\')','#06B6D4'],
    ['i-headset','Chamado aberto','1 · prioridade alta','showScreen(\'chamados\')','#FB7185'],
    ['i-megaphone','Campanha ativa','Zona Sul · 68% do orçamento','showScreen(\'campanhas\')','#E1306C'],
    ['i-bell','Fatura Mavis OS','R$ 799 · vence 12/07','showScreen(\'financeiro\')','#F59E0B']
  ].map(function(o){
    return '<div class="opcard dash-link" onclick="'+o[3]+'"><span class="op-ic" style="background:'+o[4]+'22;color:'+o[4]+'"><svg class="ic"><use href="#'+o[0]+'"/></svg></span><div class="op-tx"><div class="op-l">'+o[1]+'</div><div class="op-v">'+o[2]+'</div></div><svg class="ic op-arrow"><use href="#i-forward"/></svg></div>';
  }).join('');
  return '<div class="dash-head">'
     + head('Dashboard','Acompanhe o desempenho da sua imobiliária em tempo real.')
     + '<div class="dash-tools">'+colabFilter()+dashSeg()+'</div>'
   + '</div>'
   + '<div id="dash-dynamic">'+dashDynamic()+'</div>'
   + '<h3 class="sec-title" style="margin:2px 0 12px">Precisa da sua atenção</h3>'
   + '<div class="dash-ops">'+ops+'</div>'
   + '<div class="ribbon" style="margin-top:16px"><div><h2><svg class="ic"><use href="#i-star"/></svg> Mav Imob — seus imóveis vendendo no automático</h2><p>Sua Casa de Férias está na imobiliária virtual. 1 venda em negociação com R$ 9.800 de comissão prevista.</p></div><button class="btn-sm btn-ghost" onclick="openMav()">Abrir Mav Imob →</button></div>';
}

/* troca de período: atualiza SÓ o bloco dinâmico (sem re-renderizar a página) */
function dashPeriod(i){
  dashIdx=i;
  var dyn=document.getElementById('dash-dynamic');
  if(dyn) dyn.innerHTML=dashDynamic();
  var segs=document.querySelectorAll('.dash-seg button');
  for(var k=0;k<segs.length;k++){ segs[k].classList.toggle('on', k===i); }
}


/* troca de período: re-renderiza TUDO instantaneamente */

/* ===== filtro premium de colaborador (card "Visitas marcadas") ===== */
function dashChartSeries(){
  var base=DASH(dashIdx).chart;
  if(dashColab==='Todos') return base;
  var sh=COLAB_SHARE[dashColab]||0;
  return base.map(function(p){ return [p[0], Math.round(p[1]*sh)]; });
}
function colabIniciais(n){ var w=n.trim().split(/\s+/); return (((w[0]||'')[0]||'')+((w[1]||'')[0]||'')).toUpperCase(); }
function colabFilter(){
  var cur=dashColab;
  var curAva = cur==='Todos' ? '<svg class="ic"><use href="#i-users"/></svg>' : colabIniciais(cur);
  var opts=COLABS.map(function(n){
    var ava = n==='Todos' ? '<span class="colab-opt-ava all"><svg class="ic"><use href="#i-users"/></svg></span>' : '<span class="colab-opt-ava">'+colabIniciais(n)+'</span>';
    var sub = n==='Todos' ? 'Visão geral da equipe' : (COLAB_ROLE[n]||'Corretor');
    return '<button type="button" class="colab-opt'+(n===cur?' sel':'')+'" data-name="'+n+'" onclick="dashColabFilter(\''+n+'\')">'+ava+'<span class="colab-opt-nm"><span class="colab-opt-nm-t">'+n+'</span><span class="colab-opt-sub">'+sub+'</span></span><svg class="ic colab-opt-chk"><use href="#i-check"/></svg></button>';
  }).join('');
  var search = COLABS.length>5 ? '<input class="colab-flt-search" type="text" placeholder="Buscar colaborador\u2026" oninput="colabSearch(this.value)" onclick="event.stopPropagation()">' : '';
  return '<div class="colab-flt" id="colab-flt">'
    + '<button type="button" class="colab-flt-btn" onclick="toggleColab(event)" aria-haspopup="true"><span class="colab-flt-ava'+(cur==='Todos'?' all':'')+'">'+curAva+'</span><span class="colab-flt-name" id="colab-flt-name">'+cur+'</span><svg class="ic colab-flt-chev"><use href="#i-forward"/></svg></button>'
    + '<div class="colab-flt-menu" id="colab-flt-menu" role="menu"><div class="colab-flt-head">Filtrar por colaborador</div>'+search+'<div class="colab-flt-list" id="colab-flt-list">'+opts+'<div class="colab-flt-empty" id="colab-flt-empty">Nenhum colaborador encontrado</div></div></div>'
    + '</div>';
}
function dashColabFilter(name){
  dashColab=name;
  var dyn=document.getElementById('dash-dynamic'); if(dyn) dyn.innerHTML=dashDynamic();
  var nm=document.getElementById('colab-flt-name'); if(nm) nm.textContent=name;
  var ava=document.querySelector('#colab-flt .colab-flt-ava');
  if(ava){ if(name==='Todos'){ ava.classList.add('all'); ava.innerHTML='<svg class="ic"><use href="#i-users"/></svg>'; } else { ava.classList.remove('all'); ava.textContent=colabIniciais(name); } }
  var os=document.querySelectorAll('#colab-flt-menu .colab-opt');
  for(var k=0;k<os.length;k++){ os[k].classList.toggle('sel', os[k].getAttribute('data-name')===name); }
  var f=document.getElementById('colab-flt'); if(f) f.classList.remove('open');
}
function toggleColab(ev){
  if(ev){ ev.stopPropagation(); }
  var f=document.getElementById('colab-flt'); if(!f) return;
  var opening=!f.classList.contains('open');
  f.classList.toggle('open');
  if(opening){
    var sx=document.querySelector('#colab-flt-menu .colab-flt-search');
    if(sx){ sx.value=''; colabSearch(''); setTimeout(function(){ try{ sx.focus(); }catch(e){} },30); }
  }
}
function colabSearch(q){
  q=(q||'').trim().toLowerCase();
  var menu=document.getElementById('colab-flt-menu'); if(!menu) return;
  var os=menu.querySelectorAll('.colab-opt'); var shown=0;
  for(var k=0;k<os.length;k++){ var nm=(os[k].getAttribute('data-name')||'').toLowerCase(); var ok=(!q||nm.indexOf(q)>=0); os[k].style.display=ok?'':'none'; if(ok) shown++; }
  var empty=document.getElementById('colab-flt-empty'); if(empty) empty.style.display=shown?'none':'block';
}
/* deep-link do gráfico para a agenda (restaurado) */
function goAgenda(day){
  window.__agendaHL=day; showScreen('agenda');
  setTimeout(function(){ var h=document.querySelector('#content .cell.hl'); if(h) h.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'}); },70);
  setTimeout(function(){ window.__agendaHL=null; },5000);
}

function goLeads(stage){
  window.__leadsHL=stage; showScreen('leads');
  setTimeout(function(){var h=document.querySelector('#content .kcol.hl'); if(h) h.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});},70);
  setTimeout(function(){window.__leadsHL=null;},5000);
}
function goLeadsSel(value){
  showScreen('leads');
  setTimeout(function(){
    var sels=document.querySelectorAll('#content .filterbar .fb-sel');
    sels.forEach(function(sel){ for(var k=0;k<sel.options.length;k++){ if(sel.options[k].value===value){ sel.value=value; fbApply(sel); } } });
  },70);
}
try{ window.dashPeriod=dashPeriod; window.goAgenda=goAgenda; window.goLeads=goLeads; window.goLeadsSel=goLeadsSel; window.dashColabFilter=dashColabFilter; window.toggleColab=toggleColab; window.colabSearch=colabSearch;
try{ document.addEventListener('click', function(ev){ var f=document.getElementById('colab-flt'); if(f && f.classList.contains('open') && !f.contains(ev.target)){ f.classList.remove('open'); } }); }catch(e){}
 }catch(e){}
