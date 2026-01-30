# Plan: Extract `@oppal/ui` Reusable Design System Package

## Overview

Create a standalone npm package at `packages/oppal-ui/` containing all Oppal UI components, charts, layout components, design tokens, and a Tailwind preset. Then update `oppal-app` to consume from the package.

---

## Package Structure

```
packages/oppal-ui/
├── package.json
├── vite.config.js
├── .gitignore
├── tailwind.preset.cjs
├── tokens/
│   └── design-tokens.json
├── src/
│   ├── index.js
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Alert.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── DataTable.jsx
│   │   │   └── StatCard.jsx
│   │   ├── charts/
│   │   │   ├── MiniBarChart.jsx
│   │   │   └── DonutChart.jsx
│   │   └── layout/
│   │       ├── Sidebar.jsx
│   │       └── DashboardLayout.jsx
└── dist/
```

---

## Key Decisions

- **Peer deps**: react, react-dom (required); react-router-dom, lucide-react (optional)
- **Build**: Vite library mode, ESM, preserveModules for tree-shaking
- **No Tailwind bundled** — consumers scan dist files via content paths
- **Sidebar & DashboardLayout**: Made configurable (navigation, user, brand, pageTitles as props)
- **DonutChart**: Colors configurable via `activeColor`/`trackColor` props

---

## Phase 1: Create Package (15 files) [COMPLETED]
## Phase 2: Update oppal-app (9 files modified, 10 deleted) [COMPLETED]
## Phase 3: Portability & Documentation [IN PROGRESS]
- [NEW] packages/oppal-ui/README.md: Instructions for usage in other projects.
- [NEW] packages/oppal-ui/tailwind.preset.cjs: (Already created) For consistent styling.

## How to use in other projects

1. **Install**: `npm install /path/to/packages/oppal-ui` (or publish to npm/registry).
2. **Tailwind Config**: Add the preset to your `tailwind.config.js`:
   ```js
   module.exports = {
     presets: [require('@oppal/ui/tailwind.preset.cjs')],
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
       "./node_modules/@oppal/ui/dist/**/*.{js,ts,jsx,tsx}" // Crucial for scanning package components
     ],
     // ...
   }
   ```
3. **Usage**: `import { Button } from '@oppal/ui';`
