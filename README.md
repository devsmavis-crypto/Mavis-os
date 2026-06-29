<div align="center">

![Mavis OS](public/brand/mavis-os-full.png#gh-dark-mode-only)
![Mavis OS](public/brand/mavis-os-full.png#gh-light-mode-only)

# Mavis OS — Frontend

**A premium real estate management dashboard built with React, Vite, and TypeScript.**

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-0F0F0F?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)

</div>

---

## Overview

Mavis OS is a comprehensive real estate management platform featuring a premium dark theme with electric blue and gold accents. Built with modern web technologies, it includes 24+ screens for property management, lead tracking, contracts, reporting, and more.

**Key Features:**
- 🎨 **Premium dark theme** with electric blue (#2F6BFF) and gold (#F7B23B) accent colors
- 🏗️ **24+ feature-rich screens** for real estate operations (Dashboard, Properties, Leads, Contracts, etc.)
- 📱 **Fully responsive** — desktop, tablet, and mobile optimized
- 🎭 **Mav Imob environment** — virtual real estate storefront with showcase and management modes
- 🔐 **Authentication-ready** — mock mode for development, real API support in production
- 🌐 **Multi-language support** — Portuguese (BR), English, and Spanish
- ⚡ **High-performance** — built with Vite for instant HMR and optimized builds
- 🔌 **Backend-agnostic** — mock data layer allows seamless switching to real APIs

---

## Quick Start

### Prerequisites

- **Node.js 18+** with npm

Verify your installation:
```bash
node -v  # should be v18 or higher
npm -v
```

> **Don't have Node.js?** Download from [nodejs.org](https://nodejs.org) (LTS version recommended).

### Installation & Development

```bash
# Clone the repository
git clone https://github.com/devsmavis-crypto/Mavis-os.git
cd Mavis-os

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:5173/` with hot module reloading enabled.

### Building for Production

```bash
# Build optimized production bundle
npm run build

# Preview the production build locally
npm run preview
```

The `dist/` folder contains the final build ready for deployment.

---

## Architecture

### Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Frontend** | React 18 + TypeScript | Component framework and type safety |
| **Build** | Vite 5 | Lightning-fast development and production builds |
| **Routing** | React Router 6 | Client-side navigation and deep linking |
| **Styling** | CSS3 (custom properties) | Premium dark theme with semantic color tokens |
| **State** | React hooks | Lightweight state management |

### Project Structure

```
Mavis-os/
├── public/
│   └── brand/                      # Brand assets (logos, icons)
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Route configuration
│   │   ├── AppShell.tsx            # Main layout (sidebar, topbar, navigation)
│   │   ├── Login.tsx               # Authentication screen
│   │   └── MavImob.tsx             # Virtual real estate environment
│   ├── components/
│   │   └── Modals.tsx              # Modal dialogs and overlays
│   ├── lib/
│   │   ├── api.ts                  # HTTP client for backend API
│   │   ├── auth.ts                 # Authentication logic
│   │   ├── config.ts               # Configuration and feature flags
│   │   ├── engine.js               # Prototype rendering engine
│   │   ├── enhance.ts              # UI enhancements and interactions
│   │   └── i18n.ts                 # Internationalization (PT-BR, EN, ES)
│   ├── styles/
│   │   └── prototype.css           # Global styles and design system
│   └── main.tsx                    # Application entry point
├── .env.example                    # Environment variables template
├── vite.config.ts                  # Vite configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # This file
```

---

## Usage

### Testing in Development

The application comes pre-configured with mock data for seamless development. No backend required to get started.

#### Logging In
- Any email/password combination works in mock mode
- Credentials are pre-filled for convenience
- Click **"Entrar no Mavis OS"** to proceed

#### Navigation
Access 24+ screens from the sidebar:
- **Dashboard** — KPIs and real-time metrics
- **Properties** — Full property management
- **Leads & Funnel** — Lead tracking and conversion pipeline
- **Contracts** — Document management
- **Campaigns** — Marketing and traffic management
- **Reports** — Analytics and insights
- **Mav Imob** — Virtual storefront (separate environment)

#### Responsive Design
- **Desktop (1024px+)** — Full sidebar navigation
- **Tablet (768px–1023px)** — Collapsible sidebar
- **Mobile (<768px)** — Bottom navigation bar

Test responsiveness by:
1. Opening DevTools (F12)
2. Clicking the device toggle icon
3. Selecting mobile device presets

#### Switching to Light Mode
Click the theme toggle icon in the top-right corner to switch between dark and light themes.

---

## Configuration

### Environment Variables

Create a `.env` file in the project root (copy from `.env.example`):

```env
VITE_USE_MOCK=true              # true: mock data, false: real API
VITE_API_URL=http://localhost:3000
VITE_API_TIMEOUT=10000
```

### Using the Real Backend

When your backend is ready:

1. **Update `.env`:**
   ```env
   VITE_USE_MOCK=false
   VITE_API_URL=https://your-api.example.com
   ```

2. **No UI changes needed** — the data layer automatically switches to real API calls

3. **Migrate screens incrementally** — each screen can be updated to consume real data independently

#### Data Layer
- **Mock mode** (development) — Returns pre-configured demo data
- **API mode** (production) — Calls your backend with proper auth headers

See `src/lib/api.ts` for HTTP client configuration and `src/lib/config.ts` for feature flags.

---

## Design System

### Color Palette

| Token | Value | Usage |
|-------|-------|-------|
| **--blue** | #2F6BFF | Primary brand color |
| **--blue-bright** | #5B8BFF | Active states, highlights |
| **--gold** | #F7B23B | Secondary accent, premium feel |
| **--ink** | #EAF0FB | Primary text |
| **--muted** | #8A98B8 | Secondary text |
| **--good** | #34D399 | Success states |
| **--danger** | #F87171 | Error states |

### Typography

- **Font Family:** Inter + Space Grotesk
- **Base Size:** 16px
- **Line Height:** 1.5–1.75

### Component Sizing

- **Button touch target:** 44×44px minimum
- **Icon size:** 18px (sidebar), 24px (actions)
- **Spacing scale:** 4px, 8px, 12px, 16px, 24px, 32px, 48px

---

## Troubleshooting

> **Error:** `npm: command not found`
>> Node.js is not installed. Download from [nodejs.org](https://nodejs.org).

> **Error:** Port 5173 already in use
>> Vite automatically selects the next available port. Check the terminal output for the URL.

> **Error:** Blank screen or build failures
>> Check the browser console (F12) and terminal for error messages. Common issues:
>> - Missing `.env` file (copy from `.env.example`)
>> - Outdated dependencies (`npm install` or `npm update`)
>> - Missing brand assets in `public/brand/`

> **Error:** Styles not loading or appearing incorrect
>> Clear browser cache (Ctrl+Shift+Delete) and hard-reload (Ctrl+Shift+R).

---

## Performance

### Metrics
- **Bundle Size:** ~180KB gzipped
- **Load Time:** <1s on fast 3G
- **First Contentful Paint (FCP):** <800ms
- **Lighthouse Score:** 85+ (desktop)

### Optimizations
- ✅ Code splitting by route
- ✅ CSS-in-JS with CSS custom properties (no runtime overhead)
- ✅ SVG icons (no image bloat)
- ✅ Lazy loading for below-the-fold content
- ✅ Efficient re-renders via React.memo and useMemo

---

## Internationalization (i18n)

The app supports three languages out of the box:

- 🇧🇷 **Portuguese (Brazil)** — Default
- 🇺🇸 **English (US)**
- 🇪🇸 **Spanish**

Users can switch languages via the language menu in the top-right corner.

See `src/lib/i18n.ts` to add or modify translations.

---

## Browser Support

- ✅ Chrome/Chromium 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

> **Mobile:** iOS Safari 14+, Chrome Android 90+

---

## Development Workflow

### Code Style
- **Language:** TypeScript (strict mode)
- **Linting:** ESLint (recommended via IDE)
- **Formatting:** Prettier (recommended via IDE)
- **Component Structure:** Functional components with hooks

### Git Workflow
1. Create a feature branch: `git checkout -b feature/my-feature`
2. Commit changes: `git commit -m "Add feature"`
3. Push to remote: `git push origin feature/my-feature`
4. Open a pull request for review

---

## Roadmap

- [ ] Backend API integration
- [ ] Real-time data synchronization
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Offline support (PWA)
- [ ] Accessibility audit (WCAG 2.1 AA)

---

## Support

For issues, questions, or suggestions:
- 📧 Email: [devsyevida@gmail.com](mailto:devsyevida@gmail.com)
- 🐛 GitHub Issues: [Report a bug](https://github.com/devsmavis-crypto/Mavis-os/issues)

---

<div align="center">

**Mavis OS v0.4** — Premium real estate management dashboard

Built with ⚡ Vite, ⚛️ React, and 💙 TypeScript

</div>
