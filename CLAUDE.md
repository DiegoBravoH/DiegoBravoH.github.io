# CLAUDE.md — Portfolio diegobravoh.github.io

Contexto persistente para el desarrollo de este proyecto. Léelo al inicio de cada sesión.

---

## Descripción del proyecto

Portfolio personal de **Diego Bravo** (ML Engineer / Researcher) con estética de VS Code.
Muestra experiencia laboral, proyectos open-source, papers académicos, actividad GitHub y CV.

- **Repo:** `diegobravoh/diegobravoh.github.io`
- **Dominio:** `gkos.dev` (via CNAME)
- **Rama principal:** `main`

---

## Stack tecnológico

| Capa | Tecnología | Versión |
|------|-----------|---------|
| Framework | Next.js | 12.0.6 |
| UI | React | 17.0.2 |
| Runtime | Node.js | 22.x |
| Estilos | CSS Modules + CSS custom properties | — |
| Backend externo | Notion (`@notionhq/client`) | 0.2.2 |
| Analytics | `@vercel/analytics` | 0.1.3 |
| PDF viewer | `react-pdf` | 5.7.2 |
| GitHub calendar | `react-github-calendar` | 3.2.2 |
| Deploy (primario) | Vercel | — |
| Deploy (secundario) | GitHub Pages (`gh-pages` branch) | — |

---

## Arquitectura general

```
BROWSER
  └── Layout.jsx (shell VS Code)
        ├── Titlebar.jsx
        ├── Sidebar.jsx
        ├── Explorer.jsx
        ├── Tabsbar.jsx
        └── Bottombar.jsx
              └── Pages (JSX)
                    ├── getStaticProps → API helpers → JSON files  (build-time)
                    ├── useEffect → GitHub REST API               (client-side)
                    └── Form POST → /api/contact → Notion DB      (runtime)
```

---

## Estructura de carpetas

```
/
├── pages/
│   ├── _app.js                  # Global: tema + Analytics
│   ├── index.jsx                # Home: hero + timeline experiencia
│   ├── projects.jsx             # 4 categorías de proyectos
│   ├── papers.jsx               # Papers académicos (ordenables/expandibles)
│   ├── github.jsx               # Repos + GitHub contribution calendar
│   ├── resume.jsx               # PDF viewer (react-pdf)
│   ├── contact.jsx              # Formulario → Notion
│   ├── settings.jsx             # Selector de temas
│   └── api/
│       ├── experience.js + .json
│       ├── bots-projects.js + .json   # Proyectos VLM
│       ├── ml-projects.js + .json     # Proyectos ML
│       ├── pypi-projects.js + .json   # Paquetes PyPI
│       ├── misc-projects.js + .json   # Desarrollo sostenible
│       ├── published-papers.js + .json
│       └── contact.js                 # POST → Notion SDK
│
├── components/
│   ├── Layout.jsx
│   ├── Titlebar.jsx
│   ├── Sidebar.jsx
│   ├── Explorer.jsx
│   ├── Tabsbar.jsx / Tab.jsx
│   ├── Bottombar.jsx
│   ├── ProjectCard.jsx
│   ├── RepoCard.jsx
│   ├── ArticleCard.jsx
│   ├── ContactCode.jsx
│   ├── ThemeInfo.jsx
│   ├── Head.jsx
│   └── icons/                   # 24 iconos SVG como componentes React
│
├── styles/                      # Un .module.css por componente + globales
├── public/                      # Assets estáticos (PDF, imágenes, favicon, iconos SVG)
├── images/                      # preview.png
├── .env.development
├── .env.production
├── .env.local.example           # Plantilla de variables de entorno
├── next.config.js
├── vercel.json                  # CORS headers para /api/*
└── CNAME                        # → gkos.dev
```

---

## Variables de entorno requeridas

| Variable | Exposición | Uso |
|----------|-----------|-----|
| `NOTION_API_TOKEN` | Server-only | Auth Notion SDK |
| `NOTION_DATABASE_ID` | Server-only | BD de contacto |
| `GITHUB_API_KEY` | Server-only | GitHub API |
| `NEXT_PUBLIC_GITHUB_USERNAME` | Cliente | Username GitHub (DiegoBravoH) |

Copiar `.env.local.example` → `.env.local` para desarrollo local.

---

## Patrones y convenciones

### API routes
Cada endpoint sigue el mismo patrón:
```js
// pages/api/ml-projects.js
import data from './ml-projects.json'
export function getMlProjects() { return data }
export default function handler(req, res) { res.status(200).json(data) }
```
Los datos viven en archivos `.json` junto al `.js` correspondiente.

### Páginas con datos estáticos
```js
export async function getStaticProps() {
  const data = getSomeData()
  return { props: { data } }
}
```

### Páginas con datos dinámicos
- `github.jsx` usa `useEffect` + `fetch` al GitHub REST API directamente en el cliente.
- Requiere `NEXT_PUBLIC_GITHUB_USERNAME` para construir las URLs.

### Temas
- 5 temas disponibles: `ayu`, `dracula`, `github-dark`, `night-owl`, `nord`
- Se aplican con `data-theme` en `<html>` y se persisten en `localStorage`
- Variables CSS definidas en `styles/globals.css`

### Estilos
- CSS Modules estrictos: un archivo `.module.css` por componente
- Sin Tailwind, sin styled-components
- Los tags de proyectos usan `className={styles[tag]}` para colores dinámicos

---

## Scripts de desarrollo

```bash
npm run dev        # Servidor de desarrollo (localhost:3000)
npm run build      # next build && next export → /out
npm run deploy     # Publica /out en branch gh-pages (GitHub Pages)
```

El build genera HTML estático en `/out`. Vercel también despliega automáticamente desde `main`.

---

## Configuración de Next.js

```js
// next.config.js
{
  images: {
    unoptimized: true,   // Necesario para static export
    domains: ['res.cloudinary.com', 'avatars.githubusercontent.com', 'imgur.com']
  }
}
```

---

## Flujo de datos resumido

| Página | Estrategia | Fuente |
|--------|-----------|--------|
| `index` | `getStaticProps` | `experience.json` |
| `projects` | `getStaticProps` | 4 JSON files |
| `papers` | `getStaticProps` | `published-papers.json` |
| `github` | `useEffect` (cliente) | GitHub REST API |
| `resume` | Sin datos | `public/CV_Diego_Bravo.pdf` |
| `contact` | Form submit | POST `/api/contact` → Notion |
| `settings` | `localStorage` | — |

---

## Notas de deployment

- **Vercel:** deploy automático en push a `main`. Las API routes funcionan como serverless functions.
- **GitHub Pages:** solo estático (sin API routes). Se despliega con `npm run deploy`.
- `vercel.json` configura headers CORS para `/api/*`.
- `CNAME` apunta el dominio `gkos.dev` a GitHub Pages.
