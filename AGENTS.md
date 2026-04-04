# AGENTS.md - Coding Agent Guidelines

## Project Overview
Pensión El Carmen - React + Vite landing page for a Madrid hostel. GSAP animations with ScrollTrigger. Design: tranquility, simplicity, minimalism.

## Build/Lint/Test Commands
```bash
# All commands must be run from the web/ directory
cd web && npm install        # Install dependencies
npm run dev                  # Start development server
npm run build                # Build for production
npm run preview              # Preview production build
npm run lint                 # Run ESLint
```
**Note:** No test framework configured.

## Tech Stack
React 19 + Vite | JavaScript (ES modules) | Tailwind CSS v3 | GSAP + @gsap/react + ScrollTrigger | ESLint v9 flat config

## Project Structure
```
web/
├── src/
│   ├── main.jsx              # Entry point, wraps providers
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles, Tailwind, fonts
│   ├── context/              # React contexts (LanguageContext)
│   ├── translations.js       # i18n translation data
│   └── components/           # React components (one per file)
├── public/                   # Static assets
├── index.html
├── tailwind.config.js        # Custom colors & fonts
└── eslint.config.js          # ESLint flat config
```

## Code Style Guidelines

### Import Order
```jsx
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '../context/LanguageContext.jsx'
```

### Components & Naming
- Function components with hooks
- One component per file, default export
- **Components:** PascalCase (`Header`, `HeroSection`)
- **Functions:** camelCase (`handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE
- **Files:** Match component (`Header.jsx`)
- **GSAP selectors:** Descriptive kebab-case (`.room-card`, `.decor-line`)

### Formatting
- 2-space indentation, single quotes
- Self-closing tags: `<img src={src} alt="" />`
- No comments unless absolutely necessary

### Error Handling (Context Pattern)
```jsx
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
```

## GSAP Animation Guidelines

### Critical Rules
1. **ALWAYS use `useGSAP`** from `@gsap/react` - NEVER `useEffect`
2. **Single ref per component** attached to `<section>` or `<footer>`
3. **Always use scope**: `{ scope: sectionRef }` in `useGSAP`
4. **Register plugins at module level**: `gsap.registerPlugin(ScrollTrigger)`

### Reference Pattern
```jsx
function MyComponent() {
  const sectionRef = useRef(null)
  useGSAP(() => {
    gsap.from('.content', {
      y: 30, opacity: 0, duration: 0.6, ease: 'power3.out',
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' },
    })
  }, { scope: sectionRef })
  return <section ref={sectionRef}>...</section>
}
```

### ScrollTrigger Patterns
**Standard sections:** `scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none reverse' }`

**End-of-page (Footer, ContactSection) - prevent flicker:**
```jsx
gsap.fromTo('.content', { y: 20, opacity: 0 },
  { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out',
    scrollTrigger: { trigger: sectionRef.current, start: 'top bottom', once: true } })
```

### Animation Values
- Easing: `power3.out` (entry), `power3.inOut` (reveals)
- Duration: `0.6s` - `1.2s` | Stagger: `0.15s`

## Design System

### ⚠️ The "No-Line" Rule (CRITICAL)
**NEVER use `1px solid` borders for containment.**
- Use tonal layering: `bg-surface` → `bg-surface-container-low` → `bg-surface-container-lowest`
- Ghost borders only: `border-t border-outline-variant/15`
- Cards: Use `shadow-md` + `-translate-y-2` on hover

### Colors & Typography
- **Primary:** `#8e4d30` (terracotta) - CTAs, accents
- **Surface:** `#fafaf3` - canvas | **On-surface:** `#1b1c18` - text
- **Surface Container Low:** `#f5f4ed` - secondary sections
- **Headlines:** `font-headline` (Noto Serif) | **Body:** `font-body` (Inter)

### Hover Effects
- Cards: `-translate-y-2 shadow-md`
- Buttons: `opacity-90`, no scale
- Transitions: `duration-300` minimum

## Context Pattern
```jsx
// context/LanguageContext.jsx
const LanguageContext = createContext(null)
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('es')
  return <LanguageContext.Provider value={{ language, ... }}>{children}</LanguageContext.Provider>
}
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used within LanguageProvider')
  return context
}
// main.jsx - wrap App with provider
<LanguageProvider><App /></LanguageProvider>
```

## ESLint Configuration
- `no-unused-vars`: Error (ignores `^[A-Z_]`)
- `react-hooks/rules-of-hooks`: Error
- `react-refresh/only-export-components`: Warn (off for context files)

Run `npm run lint` before committing.

## Best Practices
1. **Mobile-first:** Design for mobile, add `md:` breakpoints
2. **Accessibility:** Meaningful `alt` text for images
3. **Self-documenting code:** No comments needed
4. **Work directory:** Commands must run from `web/`