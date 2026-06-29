/**
 * enhance.ts — camada de micro-interações e transições do Mavis OS.
 *
 * Decoplado do engine: observa o DOM e aplica animações de entrada quando o
 * engine troca de tela (innerHTML), além de revelar cartões ao rolar a página.
 * Tudo respeita `prefers-reduced-motion`.
 */

let started = false

const reduceMotion = () =>
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/** Anima os filhos diretos de um container (entrada escalonada por tela). */
function animateChildren(container: Element) {
  if (reduceMotion()) return
  const kids = Array.from(container.children) as HTMLElement[]
  kids.forEach((el, i) => {
    el.classList.remove('reveal-up')
    // força reflow p/ reiniciar a animação a cada troca de tela
    void el.offsetWidth
    el.style.animationDelay = `${Math.min(i * 45, 320)}ms`
    el.classList.add('reveal-up')
  })
}

/** Revela elementos (cartões internos) conforme entram na viewport. */
function makeRevealObserver(): IntersectionObserver | null {
  if (reduceMotion() || !('IntersectionObserver' in window)) return null
  return new IntersectionObserver(
    (entries, obs) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          ;(e.target as HTMLElement).classList.add('reveal-up')
          obs.unobserve(e.target)
        }
      }
    },
    { threshold: 0.08, rootMargin: '0px 0px -8% 0px' },
  )
}

/**
 * Liga as melhorias. Idempotente — chamar em cada tela que monta conteúdo
 * dinâmico (#content do AppShell e #mav-content da Mav Imob).
 */
export function initEnhancements() {
  if (started) {
    // já ligado: só re-observa os containers atuais (nova rota montou outro nó)
    hookContainers()
    return
  }
  started = true
  hookContainers()
}

const observed = new WeakSet<Element>()

function hookContainers() {
  const ids = ['content', 'mav-content']
  for (const id of ids) {
    const node = document.getElementById(id)
    if (!node || observed.has(node)) continue
    observed.add(node)

    const reveal = makeRevealObserver()

    const run = () => {
      animateChildren(node)
      if (reveal) {
        node
          .querySelectorAll('.card, .rep, .mkt, .camp, .contract, .vit-card, .gcard, .tpl')
          .forEach((el) => {
            const r = el.getBoundingClientRect()
            // só observa o que está abaixo da dobra; o resto já entra animado
            if (r.top > window.innerHeight * 0.92) reveal.observe(el)
          })
      }
    }

    // primeira montagem + cada troca de innerHTML feita pelo engine
    const mo = new MutationObserver(() => run())
    mo.observe(node, { childList: true })
    if (node.children.length) run()
  }
}
