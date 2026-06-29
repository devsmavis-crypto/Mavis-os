# Mavis OS — Frontend (v0.4)

Frontend do **Mavis OS** + ambiente **Mav Imob**, em React + Vite + TypeScript.
Login, sidebar, as 22+ telas e a Mav Imob, com **tema escuro premium** (azul-elétrico
+ dourado da marca), **ícones SVG** (sem emoji), **transições de UX** (entrada por tela
e reveal no scroll), **logos reais**, **botão Sair** e **layout responsivo** (desktop,
tablet e celular).

Roda em **modo mock** (sem backend): os dados são de demonstração. Quando o backend
existir, é só virar uma chave — sem mexer nas telas.

---

## 1. Pré-requisitos

Você precisa do **Node.js 18 ou superior** instalado (vem com o `npm`).

Para conferir se já tem, abra o terminal e rode:

```bash
node -v
npm -v
```

Se aparecer um número de versão em cada (ex.: `v20.11.0`), está pronto.
Se der "command not found", instale o Node em https://nodejs.org (baixe a versão **LTS**).

---

## 2. Instalar o projeto

No terminal, entre na pasta do projeto e instale as dependências:

```bash
cd mavis-frontend
npm install
```

Isso baixa tudo que o projeto precisa (cria a pasta `node_modules`).
Só precisa fazer **uma vez** (ou quando mudar o `package.json`).

---

## 3. Rodar em modo de desenvolvimento (para testar)

```bash
npm run dev
```

O terminal vai mostrar algo como:

```
  ➜  Local:   http://localhost:5173/
```

Abra esse endereço no navegador. Pronto — o Mavis OS está rodando na sua máquina.

Para **parar** o servidor, volte ao terminal e aperte `Ctrl + C`.

---

## 4. Como testar (sem backend)

O app já vem em **modo mock**, então tudo funciona com dados de demonstração:

1. **Login** — qualquer e-mail/senha entra (já vem preenchido). Clique em **Entrar no Mavis OS**.
2. **Navegação** — use o menu lateral para abrir qualquer uma das 24 telas
   (Dashboard, Imóveis, Leads & Funil, Locações, Campanhas, Contratos, Relatórios,
   Configurações, etc.).
3. **Mav Imob** — clique em **Abrir Mav Imob** (no fim do menu) para ver o ambiente da
   imobiliária virtual, com as abas **Vitrine** e **Gestão**. Use **← Voltar ao Mavis OS**
   para retornar.
4. **Sair** — o botão **⏻ Sair** (canto superior direito) volta para a tela de login.
5. **Responsivo** — diminua a janela do navegador (ou abra no celular). No mobile, a
   barra lateral vira um **menu ☰** no topo, e o conteúdo se reorganiza em uma coluna.

> Dica: no navegador, aperte **F12** e ative o modo dispositivo (ícone de celular) para
> testar o layout mobile sem precisar de um aparelho.

---

## 5. Gerar a versão de produção (opcional)

Quando quiser gerar os arquivos finais para publicar:

```bash
npm run build      # gera a pasta dist/
npm run preview    # serve a dist/ localmente para conferir
```

A pasta `dist/` é o que vai para o servidor/hospedagem.

---

## 6. Ligar no backend (quando ele existir)

A camada de dados é separada das telas. Para apontar para a API real:

1. Crie um arquivo `.env` na raiz do projeto (pode copiar de `.env.example`):

   ```
   VITE_USE_MOCK=false
   VITE_API_URL=https://sua-api.com
   ```

2. Pronto. Com `VITE_USE_MOCK=false`, o app passa a chamar a API de verdade em vez dos
   mocks. **As telas não mudam** — só a fonte dos dados.

O ponto de ligação fica em `src/lib/config.ts` (a flag) e `src/lib/api.ts` (o cliente
HTTP, que já manda o token de login no cabeçalho `Authorization`).

Conforme o backend nascer, cada tela vai sendo migrada para consumir dados reais — uma
de cada vez, sem quebrar o que já funciona.

---

## Estrutura do projeto

```
mavis-frontend/
├── public/
│   └── brand/                  # logos (Mavis OS e Mav Imob)
├── src/
│   ├── app/
│   │   ├── App.tsx             # rotas (login / app / mav)
│   │   ├── Login.tsx           # tela de login (logo branca)
│   │   ├── AppShell.tsx        # sidebar + topbar + botão Sair + menu mobile
│   │   └── MavImob.tsx         # ambiente Mav Imob (vitrine / gestão)
│   ├── components/
│   │   └── Modals.tsx          # modais do protótipo
│   ├── lib/
│   │   ├── config.ts           # ⭐ a flag USE_MOCK (mock x backend)
│   │   ├── api.ts              # cliente HTTP para a API real
│   │   ├── auth.ts             # login/logout (mock)
│   │   └── engine.js           # motor do protótipo v3 (monta cada tela)
│   ├── styles/
│   │   └── prototype.css       # CSS do v3 + camada responsiva
│   └── main.tsx                # ponto de entrada
├── .env.example                # modelo de configuração
├── package.json
└── README.md                   # este arquivo
```

---

## Resolução de problemas

- **`npm: command not found`** → instale o Node.js (passo 1).
- **Porta 5173 ocupada** → o Vite escolhe outra porta automaticamente; use o endereço
  que ele mostrar no terminal.
- **Tela em branco depois de mexer no código** → veja o terminal e o console do navegador
  (F12) para a mensagem de erro.
- **As logos não aparecem** → confirme que a pasta `public/brand/` tem os 5 arquivos `.png`.

---

*Versão 0.4 — tema escuro premium, ícones SVG, transições de UX, responsivo, em modo mock e pronto para o backend.*
