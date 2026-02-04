# Oppal Design System - AI Context

> Share this file with Claude/Gemini when building apps with the Oppal Design System.

## Brand Overview

**Oppal** is a professional spend management platform with a teal/green color scheme, card-based layouts, and modern data visualizations.

---

## Design Tokens

### Colors

```
Primary (Teal):   #00af91   // Main brand, buttons, active states
Teal Secondary:   #009b9b   // Chart variations
Success:          #16a34a   // Positive trends (▲)
Error:            #dc2626   // Negative trends (▼)
Warning:          #ea580c   // Alerts
Neutral-50:       #f8f9fa   // Backgrounds
Neutral-900:      #212529   // Headings
```

### Typography

```
Font Family: 'Inter', system-ui, sans-serif
Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
Metric Numbers: text-4xl font-extrabold (800)
Labels: text-xs font-medium uppercase
Body: text-sm/base font-normal
```

### Spacing

```
4px grid: 4, 8, 12, 16, 24, 32, 48px
Card padding: 24px (p-6)
Section gaps: 24px (gap-6)
Border radius: 12px (rounded-lg)
```

---

## Component Library: @oppal/ui

### Available Components

| Component | Import |
|-----------|--------|
| `Button` | `import { Button } from '@oppal/ui'` |
| `Card`, `CardHeader`, `CardTitle`, `CardContent`, `CardFooter` | `import { Card, ... } from '@oppal/ui'` |
| `StatCard` | `import { StatCard } from '@oppal/ui'` |
| `DataTable` | `import { DataTable } from '@oppal/ui'` |
| `Alert` | `import { Alert } from '@oppal/ui'` |
| `Input` | `import { Input } from '@oppal/ui'` |
| `DonutChart` | `import { DonutChart } from '@oppal/ui'` |
| `MiniBarChart` | `import { MiniBarChart } from '@oppal/ui'` |
| `DashboardLayout` | `import { DashboardLayout } from '@oppal/ui'` |
| `Sidebar`, `MobileSidebar` | `import { Sidebar, MobileSidebar } from '@oppal/ui'` |

---

## Component APIs

### Button
```jsx
<Button 
  variant="primary|secondary|outline|ghost|danger"
  size="sm|md|lg"
  isLoading={boolean}
  disabled={boolean}
>
  Label
</Button>
```

### StatCard
```jsx
<StatCard
  title="Total Spend"
  value="€90,000"
  trend="+13.93%"
  trendDirection="up|down|neutral"
  data={[10, 20, 30, 40, 50, 60]}  // Optional mini chart
/>
```

### DataTable
```jsx
<DataTable
  title="Suppliers"
  columns={[
    { header: 'Name', key: 'name', fontWeight: 'medium' },
    { header: 'Spend', key: 'spend', align: 'right' },
  ]}
  data={[{ name: 'Acme Corp', spend: '€12,000' }]}
/>
```

### Alert
```jsx
<Alert 
  variant="info|success|warning|error" 
  title="Optional Title"
>
  Message content
</Alert>
```

### Card
```jsx
<Card>
  <CardHeader>
    <CardTitle>Section Title</CardTitle>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
</Card>
```

### DonutChart
```jsx
<DonutChart percentage={60} label="Contracted" />
```

---

## Usage Rules

1. **Always use components from `@oppal/ui`** - don't recreate custom versions
2. **Metric values**: Use `text-4xl font-extrabold text-neutral-900`
3. **Trend colors**: Success green for positive, error red for negative
4. **Cards**: White background, `shadow-md`, `rounded-lg`, `p-6`
5. **Tables**: Right-align numbers, uppercase headers
6. **Charts**: Use teal (#00af91), no gridlines or axes

---

## Example: Dashboard Page

```jsx
import { 
  DashboardLayout, StatCard, DataTable, Card, 
  CardHeader, CardTitle, CardContent, DonutChart 
} from '@oppal/ui';

export default function SpendDashboard() {
  return (
    <DashboardLayout>
      {/* Top Row: Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Spend" value="€90,000" trend="+13%" trendDirection="up" />
        <StatCard title="Suppliers" value="289" trend="-3%" trendDirection="down" />
        <StatCard title="Avg Order" value="€36,056" trend="+18%" trendDirection="up" />
      </div>
      
      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6 mt-6">
        <DonutChart percentage={20} label="Spend Pareto" />
        <DonutChart percentage={60} label="Contracted" />
        <DonutChart percentage={50} label="Assessed" />
      </div>
      
      {/* Table */}
      <DataTable
        title="Recent Suppliers"
        columns={[
          { header: 'Name', key: 'name' },
          { header: 'Spend', key: 'spend', align: 'right' },
        ]}
        data={[
          { name: 'Medical Supplies Co', spend: '€45,000' },
          { name: 'IT Solutions', spend: '€28,000' },
        ]}
      />
    </DashboardLayout>
  );
}
```

---

## Tailwind Classes Reference

```
Backgrounds: bg-white, bg-neutral-50, bg-primary-500
Text: text-neutral-900 (headings), text-neutral-600 (body)
Borders: border-neutral-200
Shadows: shadow-md
Radius: rounded-lg (12px), rounded-xl (16px)
Spacing: p-6 (24px), gap-6 (24px), space-y-6
```

---

*Version 1.0 | Oppal Design System*
