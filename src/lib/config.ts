/**
 * Configuração central — o ÚNICO ponto que decide mock x backend.
 *
 * VITE_USE_MOCK=true  → dados de demonstração (sem backend). Padrão p/ testar agora.
 * VITE_USE_MOCK=false → chama a API real (quando o backend existir).
 *
 * As telas NÃO mudam ao ligar o backend — só este arquivo e a camada de dados.
 */
export const config = {
  USE_MOCK: import.meta.env.VITE_USE_MOCK !== 'false',
  API_URL: import.meta.env.VITE_API_URL ?? 'http://localhost:3000',
}
