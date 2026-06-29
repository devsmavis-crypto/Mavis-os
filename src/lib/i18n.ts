/* =========================================================================
   i18n — tradução em runtime (PT-BR base → EN / ES)
   - t(s)           → tradução para uso no React (chrome: sidebar, topbar)
   - applyDomI18n() → traduz uma subárvore do DOM (conteúdo do engine)
   - setLang(code)  → troca o idioma e reaplica ('pt' | 'en' | 'es')
   O português é a base; chaves ausentes no dicionário caem no PT (graceful).
   Dicionário extensível: basta adicionar pares "texto PT": "tradução".
   ========================================================================= */

type Dict = Record<string, string>

const EN: Dict = {
  // navegação (sidebar)
  Dashboard: 'Dashboard',
  Agenda: 'Schedule',
  Imóveis: 'Properties',
  Locações: 'Rentals',
  'Meu site': 'My website',
  'Leads & Funil': 'Leads & Funnel',
  Metas: 'Goals',
  Integrações: 'Integrations',
  'Campanhas & Tráfego': 'Campaigns & Traffic',
  Secretarias: 'Assistants',
  'Agente & WhatsApp': 'Agent & WhatsApp',
  Colaboradores: 'Team',
  Contratos: 'Contracts',
  Relatórios: 'Reports',
  Financeiro: 'Finance',
  'Portal do cliente': 'Client portal',
  'Suporte / SAC': 'Support / Helpdesk',
  Notificações: 'Notifications',
  Treinamento: 'Training',
  Configurações: 'Settings',
  'Abrir Mav Imob': 'Open Mav Imob',
  'Conta & gestão': 'Account & management',
  'Imobiliária virtual': 'Virtual agency',
  // topbar
  'Logado como Admin': 'Logged in as Admin',
  Sair: 'Log out',
  'Marcar como lidas': 'Mark as read',
  'Ver todas as notificações': 'See all notifications',
  Idioma: 'Language',
  'Notificações gerais': 'General',
  'Do sistema': 'System',
  // notificações (popover)
  'Novo lead recebido': 'New lead received',
  'Casa de Férias · via OLX': 'Vacation Home · via OLX',
  'Visita confirmada': 'Visit confirmed',
  'Casa de Férias · hoje às 15h': 'Vacation Home · today at 3pm',
  'Proposta recebida': 'Proposal received',
  'Casa de Férias · aguardando análise': 'Vacation Home · awaiting review',
  'Nova mensagem no WhatsApp': 'New WhatsApp message',
  'Cliente pediu mais fotos do imóvel': 'Client asked for more photos of the property',
  'Atualização disponível': 'Update available',
  'Nova versão do Mavis OS com melhorias no funil': 'New Mavis OS version with funnel improvements',
  'Fatura do Mavis OS': 'Mavis OS invoice',
  'R$ 799 · vence em 12/07': 'R$ 799 · due on 07/12',
  'Backup concluído': 'Backup completed',
  'Seus dados foram salvos com segurança': 'Your data was safely saved',
  // títulos de tela (head) + topbar-ctx
  'Agenda de visitas': 'Visit schedule',
  'Gestão de imóveis': 'Property management',
  'Integrações · Marketplaces': 'Integrations · Marketplaces',
  Campanhas: 'Campaigns',
  'Secretarias inteligentes': 'Smart assistants',
  Secretárias: 'Assistants',
  'Agente & Integração WhatsApp': 'Agent & WhatsApp Integration',
  'Agente WhatsApp': 'WhatsApp Agent',
  'Colaboradores & permissões': 'Team & permissions',
  'Metas & Previsibilidade': 'Goals & Forecast',
  // subtítulos de tela
  'Acompanhe o desempenho da sua imobiliária em tempo real.':
    "Track your agency's performance in real time.",
  'Calendário individual por corretor, sincronizado com o time.':
    'Individual calendar per agent, synced with the team.',
  'O gestor cadastra os imóveis da imobiliária e decide para onde distribuir: marketplaces via integração, ou Mav Imob (se habilitado pela equipe Mav Imob).':
    "The manager registers the agency's properties and decides where to distribute them: marketplaces via integration, or Mav Imob (if enabled by the Mav Imob team).",
  'Administração de aluguéis: cada contrato ativo gera caixa recorrente para a imobiliária via taxa de administração. Acompanhe repasses, recebimentos e inadimplência.':
    'Rental management: each active contract generates recurring revenue for the agency via the administration fee. Track transfers, payments and defaults.',
  'Cada imobiliária ganha um site próprio. Configure o domínio, escolha o design e gerencie os imóveis. Com o termo aceito, os imóveis vão pra Mav Imob.':
    'Each agency gets its own website. Set up the domain, choose the design and manage the properties. With the terms accepted, properties go to Mav Imob.',
  'Toda a jornada do lead num lugar: o funil de vendas, a regra de distribuição, a fila de encaminhamento e a automação que conversa em todos os canais.':
    'The entire lead journey in one place: the sales funnel, the distribution rule, the routing queue and the automation that talks across every channel.',
  'Publique um imóvel uma vez e ele sai em todos os portais. Os leads voltam para a plataforma e são direcionados aos corretores.':
    'Publish a property once and it goes out on every portal. Leads come back to the platform and are routed to agents.',
  'A IA de tráfego do Mavis OS gerencia os anúncios da imobiliária nas redes de forma automática: cria, distribui verba, otimiza e gera leads — conforme o modo que você configurar.':
    "Mavis OS's traffic AI manages the agency's ads across networks automatically: it creates, allocates budget, optimizes and generates leads — according to the mode you configure.",
  'Cada usuário da plataforma tem sua própria secretária-agente, conectada ao WhatsApp que ele cadastrou. As ações que ela pode executar dependem do perfil do usuário.':
    "Each platform user has their own assistant-agent, connected to the WhatsApp they registered. The actions it can perform depend on the user's profile.",
  'Configure o escopo do agente e conecte o canal de atendimento.':
    "Configure the agent's scope and connect the service channel.",
  'Admin e gestores criam perfis, definem permissões por módulo e acompanham status em tempo real.':
    'Admins and managers create profiles, set permissions per module and track status in real time.',
  'A imobiliária sobe até 10 modelos de contrato. O corretor pede pelo WhatsApp, a secretária preenche e devolve o documento pronto.':
    'The agency uploads up to 10 contract templates. The agent requests via WhatsApp, the assistant fills it in and returns the finished document.',
  'Central de relatórios do sistema. Gere em PDF qualquer visão da operação — sozinho ou pedindo pra secretária no WhatsApp. Ideais para comparação por período, corretor e canal.':
    "The system's report center. Generate any view of the operation as PDF — on your own or by asking the assistant on WhatsApp. Ideal for comparison by period, agent and channel.",
  'Defina o alvo do mês e acompanhe o quanto falta. A IA projeta o fechamento com base no funil e no ritmo atual da equipe.':
    "Set the month's target and track how much is left. The AI projects the close based on the funnel and the team's current pace.",
  'Área externa onde proprietários e compradores acompanham o que importa pra eles: extratos de aluguel, repasses, propostas e documentos — com a marca da imobiliária.':
    "External area where owners and buyers track what matters to them: rent statements, transfers, proposals and documents — with the agency's branding.",
  'Atendimento humano de suporte. Quando a IA atinge o limite, abre um chamado com o contexto completo. Acompanhe em atendimento e histórico.':
    'Human support service. When the AI reaches its limit, it opens a ticket with the full context. Track ongoing service and history.',
  'Sua assinatura do Mavis OS, faturas e as comissões a receber da Mav Imob — tudo num lugar.':
    'Your Mavis OS subscription, invoices and the commissions to receive from Mav Imob — all in one place.',
  'Tudo que precisa da sua atenção, em ordem. Leads, visitas, faturas, comissões e fila.':
    'Everything that needs your attention, in order. Leads, visits, invoices, commissions and queue.',
  'Aprenda a usar cada módulo do Mavis OS. Trilhas, vídeos e tutoriais para a equipe.':
    'Learn to use each Mavis OS module. Tracks, videos and tutorials for the team.',
  'Dados da imobiliária, plano, identidade visual e segurança.':
    'Agency data, plan, visual identity and security.',
  // dashboard — KPIs e seções
  'Visitas marcadas': 'Scheduled visits',
  'Novos leads': 'New leads',
  Propostas: 'Proposals',
  Conversão: 'Conversion',
  'Comissão Mav': 'Mav commission',
  'VGV negociação': 'Sales value (neg.)',
  'Visitas marcadas · evolução': 'Scheduled visits · trend',
  'Clique num dia para abrir a agenda nele': 'Click a day to open the schedule on it',
  'Leads por etapa': 'Leads by stage',
  Funil: 'Funnel',
  'De onde vêm os leads': 'Where leads come from',
  'Resumo financeiro': 'Financial summary',
  'Precisa da sua atenção': 'Needs your attention',
  'Filtrar por colaborador': 'Filter by team member',
  Todos: 'All',
  Hoje: 'Today',
  '7 dias': '7 days',
  '30 dias': '30 days',
  '90 dias': '90 days',
  // dashboard — cards "precisa da sua atenção"
  'Próxima visita': 'Next visit',
  'Contrato p/ assinatura': 'Contract to sign',
  '1 pendente': '1 pending',
  'Aluguel a vencer': 'Rent due',
  'Chamado aberto': 'Open ticket',
  '1 · prioridade alta': '1 · high priority',
  'Campanha ativa': 'Active campaign',
  'Fatura Mavis OS': 'Mavis OS invoice',
  // dashboard — resumo financeiro
  'Sua receita no período': 'Your revenue in the period',
  'Comissões de vendas': 'Sales commissions',
  'Taxa de administração': 'Administration fee',
  'A receber (aluguéis)': 'To receive (rents)',
  Despesas: 'Expenses',
  'Resultado líquido': 'Net result',
  // comuns
  Limpar: 'Clear',
  Ativo: 'Active',
  Inativo: 'Inactive',
  Online: 'Online',
  Offline: 'Offline',
  Gestor: 'Manager',
  Corretor: 'Agent',
  Agente: 'Agent',
  Secretaria: 'Assistant',
  Tipo: 'Type',
  Status: 'Status',
  Situação: 'Status',
  Perfil: 'Profile',
  Origem: 'Source',
  Acesso: 'Access',
}

const ES: Dict = {
  // navegação (sidebar)
  Dashboard: 'Panel',
  Agenda: 'Agenda',
  Imóveis: 'Inmuebles',
  Locações: 'Alquileres',
  'Meu site': 'Mi sitio',
  'Leads & Funil': 'Leads y Embudo',
  Metas: 'Metas',
  Integrações: 'Integraciones',
  'Campanhas & Tráfego': 'Campañas y Tráfico',
  Secretarias: 'Secretarias',
  'Agente & WhatsApp': 'Agente y WhatsApp',
  Colaboradores: 'Colaboradores',
  Contratos: 'Contratos',
  Relatórios: 'Informes',
  Financeiro: 'Finanzas',
  'Portal do cliente': 'Portal del cliente',
  'Suporte / SAC': 'Soporte / SAC',
  Notificações: 'Notificaciones',
  Treinamento: 'Capacitación',
  Configurações: 'Configuración',
  'Abrir Mav Imob': 'Abrir Mav Imob',
  'Conta & gestão': 'Cuenta y gestión',
  'Imobiliária virtual': 'Inmobiliaria virtual',
  // topbar
  'Logado como Admin': 'Conectado como Admin',
  Sair: 'Salir',
  'Marcar como lidas': 'Marcar como leídas',
  'Ver todas as notificações': 'Ver todas las notificaciones',
  Idioma: 'Idioma',
  'Notificações gerais': 'Generales',
  'Do sistema': 'Del sistema',
  // notificações (popover)
  'Novo lead recebido': 'Nuevo lead recibido',
  'Casa de Férias · via OLX': 'Casa de Vacaciones · vía OLX',
  'Visita confirmada': 'Visita confirmada',
  'Casa de Férias · hoje às 15h': 'Casa de Vacaciones · hoy a las 15h',
  'Proposta recebida': 'Propuesta recibida',
  'Casa de Férias · aguardando análise': 'Casa de Vacaciones · esperando revisión',
  'Nova mensagem no WhatsApp': 'Nuevo mensaje en WhatsApp',
  'Cliente pediu mais fotos do imóvel': 'El cliente pidió más fotos del inmueble',
  'Atualização disponível': 'Actualización disponible',
  'Nova versão do Mavis OS com melhorias no funil': 'Nueva versión de Mavis OS con mejoras en el embudo',
  'Fatura do Mavis OS': 'Factura de Mavis OS',
  'R$ 799 · vence em 12/07': 'R$ 799 · vence el 12/07',
  'Backup concluído': 'Copia de seguridad completada',
  'Seus dados foram salvos com segurança': 'Tus datos se guardaron de forma segura',
  // títulos de tela
  'Agenda de visitas': 'Agenda de visitas',
  'Gestão de imóveis': 'Gestión de inmuebles',
  'Integrações · Marketplaces': 'Integraciones · Marketplaces',
  Campanhas: 'Campañas',
  'Secretarias inteligentes': 'Secretarias inteligentes',
  Secretárias: 'Secretarias',
  'Agente & Integração WhatsApp': 'Agente e Integración WhatsApp',
  'Agente WhatsApp': 'Agente WhatsApp',
  'Colaboradores & permissões': 'Colaboradores y permisos',
  'Metas & Previsibilidade': 'Metas y Previsibilidad',
  // subtítulos de tela
  'Acompanhe o desempenho da sua imobiliária em tempo real.':
    'Sigue el rendimiento de tu inmobiliaria en tiempo real.',
  'Calendário individual por corretor, sincronizado com o time.':
    'Calendario individual por agente, sincronizado con el equipo.',
  'O gestor cadastra os imóveis da imobiliária e decide para onde distribuir: marketplaces via integração, ou Mav Imob (se habilitado pela equipe Mav Imob).':
    'El gestor registra los inmuebles de la inmobiliaria y decide a dónde distribuirlos: marketplaces por integración, o Mav Imob (si lo habilita el equipo de Mav Imob).',
  'Administração de aluguéis: cada contrato ativo gera caixa recorrente para a imobiliária via taxa de administração. Acompanhe repasses, recebimentos e inadimplência.':
    'Administración de alquileres: cada contrato activo genera ingresos recurrentes para la inmobiliaria vía la tarifa de administración. Sigue traspasos, cobros y morosidad.',
  'Cada imobiliária ganha um site próprio. Configure o domínio, escolha o design e gerencie os imóveis. Com o termo aceito, os imóveis vão pra Mav Imob.':
    'Cada inmobiliaria recibe su propio sitio. Configura el dominio, elige el diseño y gestiona los inmuebles. Con el término aceptado, los inmuebles van a Mav Imob.',
  'Toda a jornada do lead num lugar: o funil de vendas, a regra de distribuição, a fila de encaminhamento e a automação que conversa em todos os canais.':
    'Todo el recorrido del lead en un solo lugar: el embudo de ventas, la regla de distribución, la cola de derivación y la automatización que conversa en todos los canales.',
  'Publique um imóvel uma vez e ele sai em todos os portais. Os leads voltam para a plataforma e são direcionados aos corretores.':
    'Publica un inmueble una vez y sale en todos los portales. Los leads vuelven a la plataforma y se dirigen a los agentes.',
  'A IA de tráfego do Mavis OS gerencia os anúncios da imobiliária nas redes de forma automática: cria, distribui verba, otimiza e gera leads — conforme o modo que você configurar.':
    'La IA de tráfico de Mavis OS gestiona los anuncios de la inmobiliaria en las redes de forma automática: crea, distribuye presupuesto, optimiza y genera leads — según el modo que configures.',
  'Cada usuário da plataforma tem sua própria secretária-agente, conectada ao WhatsApp que ele cadastrou. As ações que ela pode executar dependem do perfil do usuário.':
    'Cada usuario de la plataforma tiene su propia secretaria-agente, conectada al WhatsApp que registró. Las acciones que puede ejecutar dependen del perfil del usuario.',
  'Configure o escopo do agente e conecte o canal de atendimento.':
    'Configura el alcance del agente y conecta el canal de atención.',
  'Admin e gestores criam perfis, definem permissões por módulo e acompanham status em tempo real.':
    'Admin y gestores crean perfiles, definen permisos por módulo y siguen el estado en tiempo real.',
  'A imobiliária sobe até 10 modelos de contrato. O corretor pede pelo WhatsApp, a secretária preenche e devolve o documento pronto.':
    'La inmobiliaria sube hasta 10 modelos de contrato. El agente lo pide por WhatsApp, la secretaria lo completa y devuelve el documento listo.',
  'Central de relatórios do sistema. Gere em PDF qualquer visão da operação — sozinho ou pedindo pra secretária no WhatsApp. Ideais para comparação por período, corretor e canal.':
    'Central de informes del sistema. Genera en PDF cualquier vista de la operación — solo o pidiéndoselo a la secretaria por WhatsApp. Ideales para comparar por período, agente y canal.',
  'Defina o alvo do mês e acompanhe o quanto falta. A IA projeta o fechamento com base no funil e no ritmo atual da equipe.':
    'Define el objetivo del mes y sigue cuánto falta. La IA proyecta el cierre con base en el embudo y el ritmo actual del equipo.',
  'Área externa onde proprietários e compradores acompanham o que importa pra eles: extratos de aluguel, repasses, propostas e documentos — com a marca da imobiliária.':
    'Área externa donde propietarios y compradores siguen lo que les importa: extractos de alquiler, traspasos, propuestas y documentos — con la marca de la inmobiliaria.',
  'Atendimento humano de suporte. Quando a IA atinge o limite, abre um chamado com o contexto completo. Acompanhe em atendimento e histórico.':
    'Atención humana de soporte. Cuando la IA alcanza el límite, abre un ticket con el contexto completo. Sigue la atención en curso y el historial.',
  'Sua assinatura do Mavis OS, faturas e as comissões a receber da Mav Imob — tudo num lugar.':
    'Tu suscripción de Mavis OS, facturas y las comisiones a recibir de Mav Imob — todo en un solo lugar.',
  'Tudo que precisa da sua atenção, em ordem. Leads, visitas, faturas, comissões e fila.':
    'Todo lo que necesita tu atención, en orden. Leads, visitas, facturas, comisiones y cola.',
  'Aprenda a usar cada módulo do Mavis OS. Trilhas, vídeos e tutoriais para a equipe.':
    'Aprende a usar cada módulo de Mavis OS. Rutas, videos y tutoriales para el equipo.',
  'Dados da imobiliária, plano, identidade visual e segurança.':
    'Datos de la inmobiliaria, plan, identidad visual y seguridad.',
  // dashboard — KPIs e seções
  'Visitas marcadas': 'Visitas agendadas',
  'Novos leads': 'Nuevos leads',
  Propostas: 'Propuestas',
  Conversão: 'Conversión',
  'Comissão Mav': 'Comisión Mav',
  'VGV negociação': 'Valor en negociación',
  'Visitas marcadas · evolução': 'Visitas agendadas · evolución',
  'Clique num dia para abrir a agenda nele': 'Haz clic en un día para abrir la agenda en él',
  'Leads por etapa': 'Leads por etapa',
  Funil: 'Embudo',
  'De onde vêm os leads': 'De dónde vienen los leads',
  'Resumo financeiro': 'Resumen financiero',
  'Precisa da sua atenção': 'Necesita tu atención',
  'Filtrar por colaborador': 'Filtrar por colaborador',
  Todos: 'Todos',
  Hoje: 'Hoy',
  '7 dias': '7 días',
  '30 dias': '30 días',
  '90 dias': '90 días',
  // dashboard — cards "precisa da sua atenção"
  'Próxima visita': 'Próxima visita',
  'Contrato p/ assinatura': 'Contrato por firmar',
  '1 pendente': '1 pendiente',
  'Aluguel a vencer': 'Alquiler por vencer',
  'Chamado aberto': 'Ticket abierto',
  '1 · prioridade alta': '1 · prioridad alta',
  'Campanha ativa': 'Campaña activa',
  'Fatura Mavis OS': 'Factura Mavis OS',
  // dashboard — resumo financeiro
  'Sua receita no período': 'Tu ingreso en el período',
  'Comissões de vendas': 'Comisiones de ventas',
  'Taxa de administração': 'Tarifa de administración',
  'A receber (aluguéis)': 'Por recibir (alquileres)',
  Despesas: 'Gastos',
  'Resultado líquido': 'Resultado neto',
  // comuns
  Limpar: 'Limpiar',
  Ativo: 'Activo',
  Inativo: 'Inactivo',
  Online: 'En línea',
  Offline: 'Desconectado',
  Gestor: 'Gestor',
  Corretor: 'Agente',
  Agente: 'Agente',
  Secretaria: 'Secretaria',
  Tipo: 'Tipo',
  Status: 'Estado',
  Situação: 'Estado',
  Perfil: 'Perfil',
  Origem: 'Origen',
  Acesso: 'Acceso',
}

const I18N: Record<string, Dict> = { en: EN, es: ES }

const VALID = ['pt', 'en', 'es']
let LANG = 'pt'
try {
  const saved = localStorage.getItem('mavis-lang')
  if (saved && VALID.includes(saved)) LANG = saved
} catch {
  /* ignore */
}

export function getLang() {
  return LANG
}

/** Tradução de string (para uso no React: sidebar, topbar). */
export function t(s: string): string {
  if (LANG === 'pt' || !s) return s
  const key = s.replace(/\s+/g, ' ').trim()
  const dict = I18N[LANG]
  const hit = dict && dict[key]
  return hit ? s.replace(key, hit) : s
}

const _orig = new WeakMap<Node, string>()

/** Traduz uma subárvore do DOM (conteúdo renderizado pelo engine). */
export function applyDomI18n(root: ParentNode | null) {
  if (!root || typeof document === 'undefined') return
  try {
    const walker = document.createTreeWalker(root as Node, NodeFilter.SHOW_TEXT)
    const nodes: Text[] = []
    let n: Node | null
    while ((n = walker.nextNode())) nodes.push(n as Text)
    nodes.forEach((node) => {
      let orig = _orig.get(node)
      if (orig === undefined) {
        orig = node.nodeValue || ''
        _orig.set(node, orig)
      }
      const key = orig.replace(/\s+/g, ' ').trim()
      if (!key) return
      let next = orig
      if (LANG !== 'pt') {
        const hit = I18N[LANG] && I18N[LANG][key]
        if (hit) next = orig.replace(key, hit)
      }
      if (node.nodeValue !== next) node.nodeValue = next
    })
    // atributos visíveis
    const el = root as Element
    if (el.querySelectorAll) {
      el.querySelectorAll('[placeholder],[title],[aria-label]').forEach((node) => {
        ;(['placeholder', 'title', 'aria-label'] as const).forEach((attr) => {
          const cur = node.getAttribute(attr)
          if (cur == null) return
          const dk = 'i18n_' + attr
          let orig = (node as HTMLElement).dataset[dk]
          if (orig === undefined) {
            orig = cur
            ;(node as HTMLElement).dataset[dk] = orig
          }
          const key = orig.replace(/\s+/g, ' ').trim()
          if (!key) return
          let next = orig
          if (LANG !== 'pt') {
            const hit = I18N[LANG] && I18N[LANG][key]
            if (hit) next = orig.replace(key, hit)
          }
          if (node.getAttribute(attr) !== next) node.setAttribute(attr, next)
        })
      })
    }
  } catch {
    /* ignore */
  }
}

/** Troca o idioma e reaplica no conteúdo do engine. */
export function setLang(code: string) {
  if (!VALID.includes(code)) return
  LANG = code
  try {
    localStorage.setItem('mavis-lang', code)
  } catch {
    /* ignore */
  }
  if (typeof document !== 'undefined') {
    applyDomI18n(document.getElementById('content'))
    applyDomI18n(document.getElementById('topbar-ctx'))
  }
}

/* expõe para o engine (vanilla JS) aplicar a tradução após renderizar cada tela */
if (typeof window !== 'undefined') {
  ;(window as unknown as Record<string, unknown>).__i18nApply = applyDomI18n
  ;(window as unknown as Record<string, unknown>).__i18nSetLang = setLang
  ;(window as unknown as Record<string, unknown>).__i18nGetLang = getLang
}
