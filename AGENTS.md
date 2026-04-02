# AGENTS.md - Coding Agent Guidelines

## Project Overview
Pensión El Carmen - A React + Vite landing page for a boutique hostel with a "Boutique Vibes" aesthetic (tranquility, elegance, minimalism). The design uses warm colors (terracotta, taupe, off-whites) and editorial typography.

## Build/Lint/Test Commands

```bash
# Install dependencies
cd web && npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run ESLint
npm run lint
```

**Note:** No test framework is currently configured. If tests are added, follow the project's testing conventions.

## Tech Stack
- **Framework:** React 19 + Vite
- **Language:** JavaScript (ES modules, no TypeScript)
- **Styling:** Tailwind CSS v3
- **Linting:** ESLint v9 with flat config
- **Package Manager:** npm

## Project Structure
```
web/
├── src/
│   ├── main.jsx              # Entry point
│   ├── App.jsx               # Main App component
│   ├── index.css             # Global styles & Tailwind imports
│   ├── components/           # React components (one per file)
│   │   ├── Header.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ValueProposition.jsx
│   │   ├── RoomsGallery.jsx
│   │   ├── LocationSection.jsx
│   │   ├── ContactSection.jsx
│   │   └── Footer.jsx
│   └── assets/               # Static assets (images, icons)
├── public/                   # Static files served directly
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
├── tailwind.config.js        # Tailwind configuration
└── eslint.config.js          # ESLint flat config
```

## Code Style Guidelines

### Imports
- Group imports logically: React imports first, then external libraries, then local modules
- Use named imports from React: `import { useState } from 'react'`
- Use explicit `.jsx` extensions in import paths for local components
- CSS files imported in `index.css` or component-level

```jsx
import { useState } from 'react'
import Header from './components/Header.jsx'
```

### Components
- Use function components with hooks (React 19)
- One component per file in `src/components/`
- Export components as default: `export default ComponentName`
- Keep components pure and presentational

### Formatting
- Use 2-space indentation
- Use single quotes for strings
- Use parentheses for multi-line JSX
- Self-closing tags: `<img src={src} alt="" />`

### Naming Conventions
- **Components:** PascalCase (`Header`, `HeroSection`)
- **Functions:** camelCase (`handleSubmit`)
- **Constants:** UPPER_SNAKE_CASE for true constants
- **Files:** Match component name (`Header.jsx`)

### JSX Style
- Use fragments (`<>...</>`) instead of `<div>` when no container needed
- Prefer arrow functions inline: `onClick={() => setCount(c => c + 1)}`
- Use semantic HTML elements (`<section>`, `<nav>`, `<article>`)
- Add `role="presentation"` and `aria-hidden="true"` for decorative SVGs

## Design System: "Boutique Vibes"

### The "No-Line" Rule
**CRITICAL:** Do NOT use `1px solid` borders for sectioning or containment.
- Define boundaries through background color shifts
- Use `surface` → `surface-container-low` → `surface-container-lowest` hierarchy
- If borders are required for accessibility, use `outline-variant/15` (15% opacity)

### Color Palette
- **Primary (Terracotta):** `#8e4d30` - use for CTAs, accents
- **Primary Container:** `#cc7f5e` - gradient endpoint
- **Surface:** `#fafaf3` - base canvas
- **Surface Container Low:** `#f5f4ed` - secondary sections
- **Surface Container Lowest:** `#ffffff` - floating cards
- **On-surface:** `#1b1c18` - primary text

### Buttons
- **Primary:** Gradient from `primary` to `primary-container`, `rounded-sm`, no border
- **Secondary:** Ghost style, `shadow-sm` for elevation, no solid borders
- Hover: opacity change, avoid dramatic scale transforms

### Typography
- **Headlines:** `font-headline` (Noto Serif) - editorial, artisanal feel
- **Body:** `font-body` (Inter) - functional text
- Pair large headings with smaller body text for contrast

### Spacing & Layout
- Use generous whitespace (`py-24`, `gap-12`, `gap-16`)
- Mobile-first responsive design with `md:` breakpoints
- Section padding: `py-24 px-8`
- Card padding: `p-8`

### Transitions
- Timing: `cubic-bezier(0.4, 0, 0.2, 1)`
- Duration: minimum `duration-300`
- Maintain tranquil feel - no bouncy or instant transitions

## File Organization
- Components in `src/components/`
- One component per file
- Use index.html for page title

## Best Practices
1. **Mobile-First:** Design for mobile, add `md:` breakpoints for larger screens
2. **Accessibility:** Add `alt` text for meaningful images, empty `alt=""` for decorative
3. **Performance:** Use lazy loading for images below the fold
4. **Self-Documenting:** Prefer descriptive names over comments
5. **No Comments:** Code should be self-explanatory. Only comment non-obvious business logic

## ESLint Configuration
- `no-unused-vars`: Error (ignores variables matching `^[A-Z_]`)
- `react-hooks/rules-of-hooks`: Error
- `react-refresh/only-export-components`: Warn

Run `npm run lint` before committing.

## Common Patterns

### Section Structure
```jsx
function MySection() {
  return (
    <section className="py-24 px-8 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Content */}
      </div>
    </section>
  )
}
```

### Card with Tonal Layering
```jsx
<div className="p-8 bg-surface-container-low hover:bg-surface-container-lowest transition-all duration-300">
  {/* Card content */}
</div>
```

### Primary CTA Button
```jsx
<button className="px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-white rounded-sm hover:opacity-90 transition-all duration-300">
  Button Text
</button>
```

### Google Maps Embed
Use the standard embed URL format with `width="100%" height="100%"` and `style={{ border: 0 }}`.