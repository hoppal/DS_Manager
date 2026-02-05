# Stat Card Component

## Overview
Stat cards display key metrics with optional trend indicators and mini visualizations. Core component for dashboard views in Orbitron.

## Basic Stat Card

```jsx
// React/Next.js
<div className="bg-white rounded-lg shadow-md p-6">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-medium text-neutral-600">Total Spend</h3>
    <div className="flex items-center gap-1 text-sm">
      <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-success-600 font-medium">+13.93%</span>
      <span className="text-neutral-500">that last week</span>
    </div>
  </div>
  <p className="text-4xl font-extrabold text-neutral-900">€90,000</p>
</div>
```

```html
<!-- HTML/CSS -->
<div class="stat-card">
  <div class="stat-card-header">
    <h3 class="stat-card-title">Total Spend</h3>
    <div class="stat-card-trend positive">
      <svg class="trend-icon">...</svg>
      <span class="trend-value">+13.93%</span>
      <span class="trend-label">that last week</span>
    </div>
  </div>
  <p class="stat-card-value">€90,000</p>
</div>

<style>
.stat-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
}

.stat-card-header {
  display: flex;
  align-items: center;
  justify-between;
  margin-bottom: 8px;
}

.stat-card-title {
  font-size: 0.875rem;
  font-weight: 500;
  color: #6c757d;
  text-transform: uppercase;
  letter-spacing: 0.025em;
}

.stat-card-trend {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
}

.stat-card-trend.positive {
  color: #16a34a;
}

.stat-card-trend.negative {
  color: #dc2626;
}

.trend-label {
  color: #adb5bd;
}

.stat-card-value {
  font-size: 2.25rem;
  font-weight: 800;
  color: #212529;
  line-height: 1.2;
}
</style>
```

## Stat Card with Mini Bar Chart

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  {/* Header with trend */}
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
      Total Spend
    </h3>
    <div className="flex items-center gap-1 text-sm">
      <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-success-600 font-medium">+13.93%</span>
      <span className="text-neutral-500">that last week</span>
    </div>
  </div>
  
  {/* Main metric */}
  <p className="text-4xl font-extrabold text-neutral-900 mb-4">€90,000</p>
  
  {/* Mini bar chart */}
  <div className="flex items-end justify-between h-20 gap-1">
    {[45, 38, 52, 35, 48, 42, 55, 38, 45, 50, 40, 48, 35, 58, 45, 42, 50, 48].map((height, i) => (
      <div 
        key={i}
        className="flex-1 bg-primary-500 rounded-t-sm transition-all hover:bg-primary-600"
        style={{ height: `${height}%` }}
      />
    ))}
  </div>
</div>
```

## Negative Trend Stat Card

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
      Total Suppliers
    </h3>
    <div className="flex items-center gap-1 text-sm">
      <svg className="w-4 h-4 text-error-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-error-600 font-medium">-13.93%</span>
      <span className="text-neutral-500">that last week</span>
    </div>
  </div>
  <p className="text-4xl font-extrabold text-neutral-900 mb-4">289</p>
  
  {/* Mini chart */}
  <div className="flex items-end justify-between h-20 gap-1">
    {[55, 48, 42, 50, 45, 52, 48, 55, 42, 50, 58, 45, 50, 42, 38, 45, 48, 40].map((height, i) => (
      <div 
        key={i}
        className="flex-1 bg-primary-500 rounded-t-sm"
        style={{ height: `${height}%` }}
      />
    ))}
  </div>
</div>
```

## Compact Stat Card (No Chart)

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide mb-2">
    Average Order Value
  </h3>
  <div className="flex items-baseline gap-3">
    <p className="text-4xl font-extrabold text-neutral-900">€36,056</p>
    <span className="inline-flex items-center gap-1 text-sm text-success-600 font-medium">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      +18.63%
    </span>
  </div>
  <p className="text-xs text-neutral-500 mt-2">that last week</p>
</div>
```

## Stat Card Grid Layout

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Stat Card 1 */}
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
        Total Spend
      </h3>
      <div className="flex items-center gap-1 text-sm">
        <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-success-600 font-medium">+13.93%</span>
      </div>
    </div>
    <p className="text-4xl font-extrabold text-neutral-900">€90,000</p>
  </div>
  
  {/* Stat Card 2 */}
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
        Total Suppliers
      </h3>
      <div className="flex items-center gap-1 text-sm">
        <svg className="w-4 h-4 text-error-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-error-600 font-medium">-13.93%</span>
      </div>
    </div>
    <p className="text-4xl font-extrabold text-neutral-900">289</p>
  </div>
  
  {/* Stat Card 3 */}
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center justify-between mb-2">
      <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
        Average Order Value
      </h3>
      <div className="flex items-center gap-1 text-sm">
        <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-success-600 font-medium">+18.63%</span>
      </div>
    </div>
    <p className="text-4xl font-extrabold text-neutral-900">€36,056</p>
  </div>
</div>
```

## Interactive Stat Card (with hover)

```jsx
<div className="bg-white rounded-lg shadow-md hover:shadow-lg p-6 transition-all duration-200 cursor-pointer group">
  <div className="flex items-center justify-between mb-2">
    <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide group-hover:text-primary-600 transition-colors">
      Total Spend
    </h3>
    <div className="flex items-center gap-1 text-sm">
      <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
      </svg>
      <span className="text-success-600 font-medium">+13.93%</span>
    </div>
  </div>
  <p className="text-4xl font-extrabold text-neutral-900 mb-4">€90,000</p>
  
  {/* Show more detail on hover */}
  <div className="opacity-0 group-hover:opacity-100 transition-opacity">
    <p className="text-xs text-neutral-500">Click to view details</p>
  </div>
</div>
```

## Stat Card with Icon

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <div className="flex items-start justify-between mb-4">
    <div>
      <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide mb-2">
        Total Spend
      </h3>
      <p className="text-4xl font-extrabold text-neutral-900">€90,000</p>
    </div>
    <div className="p-3 bg-primary-100 rounded-lg">
      <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    </div>
  </div>
  
  <div className="flex items-center gap-1 text-sm">
    <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
    <span className="text-success-600 font-medium">+13.93%</span>
    <span className="text-neutral-500">that last week</span>
  </div>
</div>
```

## Loading State

```jsx
<div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
  <div className="flex items-center justify-between mb-2">
    <div className="h-3 bg-neutral-200 rounded w-24"></div>
    <div className="h-3 bg-neutral-200 rounded w-20"></div>
  </div>
  <div className="h-10 bg-neutral-200 rounded w-32 mb-4"></div>
  <div className="h-20 bg-neutral-100 rounded"></div>
</div>
```

## Accessibility Guidelines

1. **Semantic HTML**: Use proper heading levels for card titles
2. **Color + Text**: Never rely on color alone for trend direction (include arrow icons)
3. **Focus States**: Ensure interactive cards have visible focus indicators
4. **Screen Readers**: Add `aria-label` to describe the full metric context
5. **Number Formatting**: Use proper locale formatting for currency

```jsx
// Accessible stat card
<div 
  className="bg-white rounded-lg shadow-md p-6"
  role="article"
  aria-label="Total Spend: 90,000 euros, up 13.93 percent from last week"
>
  <h3 id="total-spend-title" className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
    Total Spend
  </h3>
  <p 
    className="text-4xl font-extrabold text-neutral-900"
    aria-describedby="total-spend-title"
  >
    €90,000
  </p>
  <div className="flex items-center gap-1 text-sm" aria-label="Trend: up 13.93 percent">
    <svg aria-hidden="true" className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
    </svg>
    <span className="text-success-600 font-medium">+13.93%</span>
    <span className="text-neutral-500">that last week</span>
  </div>
</div>
```

## Usage Rules for AI

When generating stat cards:
- Always use `rounded-lg` (12px) for corners
- Apply `shadow-md` for elevation
- Use `p-6` (24px) for padding
- Title should be `text-sm`, `font-medium`, `uppercase`, with `tracking-wide`
- Metric value should be `text-4xl`, `font-extrabold`, `text-neutral-900`
- Include trend indicator with appropriate color (success-600 or error-600)
- Add mini bar chart only when showing time-series data
- Ensure proper spacing: `mb-2` between title and value, `mb-4` before chart
- Use consistent gap in grid layouts: `gap-6`

## Responsive Behavior

```jsx
// Mobile: 1 column
// Tablet: 2 columns  
// Desktop: 3 columns
// Wide: 4 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
  {/* Stat cards */}
</div>
```

## Common Patterns

### Dashboard Top Row
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
  {/* 3 main KPI cards */}
</div>
```

### Comparison Cards
```jsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {/* Two cards side by side for comparison */}
</div>
```
