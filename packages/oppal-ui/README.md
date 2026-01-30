# @oppal/ui

A reusable design system package for Oppal applications.

## Installation

```bash
npm install @oppal/ui
# Or if local:
npm install ../path/to/packages/oppal-ui
```

## Setup

### Tailwind CSS

This package requires Tailwind CSS. Add the Oppal preset to your `tailwind.config.js` to ensure brand-consistent colors, spacing, and typography.

```javascript
// tailwind.config.js
module.exports = {
  presets: [
    require('@oppal/ui/tailwind.preset.cjs')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Important: Scan the package for Tailwind classes
    "./node_modules/@oppal/ui/dist/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

## Usage

```jsx
import { Button, Card, StatCard } from '@oppal/ui';

function MyDashboard() {
  return (
    <Card>
      <StatCard title="My Metric" value="$12,000" trend="+5%" />
      <Button variant="primary">Click Me</Button>
    </Card>
  );
}
```

## Development

```bash
cd packages/oppal-ui
npm install
npm run build
```
