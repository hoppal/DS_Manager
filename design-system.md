# Oppal Design System

**Version:** 1.0.0  
**Last Updated:** 2026-01-29  
**Brand:** Oppal Spend Management

This design system captures the visual language of the Oppal spend management platform, optimized for data-heavy dashboards, financial interfaces, and B2B applications.

## Quick Reference for AI Tools

When generating code for Oppal, follow these principles:
- Use the teal/green primary color (#00af91) for interactive elements and data visualization
- Apply clean, modern card-based layouts with subtle shadows
- Use consistent spacing and rounded corners (12px default)
- Follow data visualization patterns for charts and metrics
- Maintain professional, business-focused aesthetics

## Brand Colors

### Primary (Teal/Green)
```
Primary:          #00af91 (main brand color)
Primary Hover:    #008c74
Primary Light:    #66cfbd
Primary Lighter:  #99dfd3
```

### Chart Colors
```
Chart Primary:    #00af91 (bars, primary data)
Chart Secondary:  #009b9b (secondary data)
Chart Light:      #66cfbd (highlights)
Chart Gradient:   linear-gradient(135deg, #00af91, #009b9b)
```

### Semantic Colors
```
Success (Positive):  #16a34a (↑ increases, positive metrics)
Error (Negative):    #dc2626 (↓ decreases, alerts)
Warning:             #ea580c (cautions)
```

### Neutral Colors
```
Neutral 50:       #f8f9fa (backgrounds)
Neutral 100:      #f1f3f5 (card backgrounds)
Neutral 200:      #e9ecef (borders)
Neutral 300:      #dee2e6 (dividers)
Neutral 600:      #6c757d (secondary text)
Neutral 700:      #495057 (primary text)
Neutral 900:      #212529 (headings)
```

### Sidebar Colors
```
Background:       #f8f9fa (light gray)
Active Item:      #00af91 (teal background)
Active Text:      #ffffff (white)
Inactive Text:    #495057 (dark gray)
```

## Typography

### Font Family
```
Primary:    'Inter', system-ui, sans-serif
Display:    'Inter', sans-serif
Monospace:  'JetBrains Mono', monospace (for numbers/metrics)
```

### Font Scale
```
xs:    0.75rem  (12px) - Small labels
sm:    0.875rem (14px) - Secondary text, table cells
base:  1rem     (16px) - Body text
lg:    1.125rem (18px) - Card titles
xl:    1.25rem  (20px) - Section headings
2xl:   1.5rem   (24px) - Page titles
3xl:   1.875rem (30px) - Large metrics
4xl:   2.25rem  (36px) - Hero numbers
```

### Font Weights
```
Normal:     400 - Body text
Medium:     500 - Navigation, labels
Semibold:   600 - Card titles, metrics
Bold:       700 - Page headings
Extrabold:  800 - Large display numbers
```

## Spacing Scale

Consistent 4px-based spacing:
```
1:    4px   - Tight spacing
2:    8px   - Very close items
3:    12px  - Related items
4:    16px  - Standard spacing
6:    24px  - Card padding
8:    32px  - Section spacing
12:   48px  - Large gaps
16:   64px  - Page margins
```

## Border Radius

```
sm:    4px   - Small elements
md:    8px   - Buttons, inputs
lg:    12px  - Cards, panels (PRIMARY)
xl:    16px  - Large containers
full:  9999px - Pills, avatars, circular elements
```

**Note:** Cards use `12px` (lg) radius consistently throughout Oppal.

## Shadows

```
sm:  0 1px 3px rgba(0,0,0,0.1)   - Subtle elevation
md:  0 4px 6px rgba(0,0,0,0.1)   - Cards (PRIMARY)
lg:  0 10px 15px rgba(0,0,0,0.1) - Modals, dropdowns
xl:  0 20px 25px rgba(0,0,0,0.1) - Popovers
```

## Layout System

### Sidebar Navigation
- **Width**: 240px (desktop)
- **Background**: #f8f9fa
- **Active State**: Rounded teal background with white text
- **Icons**: Leading icons for all nav items
- **Position**: Fixed left

### Content Area
- **Max Width**: None (full width with padding)
- **Padding**: 32px (desktop), 16px (mobile)
- **Background**: #ffffff

### Grid System
- **Stat Cards**: 3-4 columns on desktop, 1 on mobile
- **Gap**: 24px between cards
- **Card Padding**: 24px

## Component Patterns

### Stat Cards
```jsx
- White background with subtle shadow
- Rounded corners (12px)
- Title in small text (14px)
- Large metric value (36px+) in bold
- Percentage change with colored triangle indicator
- Mini bar chart below (optional)
- Padding: 24px
```

### Mini Bar Charts
```jsx
- Height: ~80-100px
- Bar color: Primary teal (#00af91)
- Rounded tops on bars
- No axes or labels (minimalist)
- Even spacing between bars
```

### Data Tables
```jsx
- Clean rows with subtle borders
- Header: Medium weight, neutral-700
- Cells: Regular weight, 14px
- Row hover: Light gray background
- Alternating row colors (optional)
```

### Donut Charts
```jsx
- Size: 160px diameter
- Stroke width: 24px
- Primary color with lighter secondary
- Center: Large percentage (48px+) in bold
- Label below center number
```

### Progress Bars
```jsx
- Height: 8-12px
- Background: neutral-200
- Fill: Primary teal or semantic colors
- Rounded ends (full)
- Smooth transitions
```

## Breakpoints

```
sm:   640px  - Landscape phones
md:   768px  - Tablets
lg:   1024px - Laptops (sidebar collapses here)
xl:   1280px - Desktops
2xl:  1536px - Large screens
```

## Data Visualization Principles

### Color Usage
1. **Primary Data**: Always use teal (#00af91)
2. **Secondary Data**: Use teal variant (#009b9b)
3. **Comparison Data**: Use lighter teal shades
4. **Positive Metrics**: Green (#16a34a)
5. **Negative Metrics**: Red (#dc2626)

### Chart Types
- **Bar Charts**: For trends over time, spending by category
- **Donut Charts**: For percentage breakdowns
- **Line Charts**: For continuous data trends
- **Tables**: For detailed line-item data

### Metric Display
- **Large Numbers**: Use extrabold weight (800)
- **Currency**: Include symbol, use comma separators
- **Percentages**: Show with 2 decimal places
- **Trends**: Use triangle icons (▲ ▼) with color

## Icon System

### Icon Style
- **Library**: Lucide React or Heroicons (outline style)
- **Size**: 20-24px for navigation, 16-20px for inline
- **Color**: Match text color or use primary
- **Stroke Width**: 2px (medium)

### Common Icons
- Credit Card / Wallet: Spend
- Alert Triangle: Risks
- CheckCircle: Quality
- FileText: Contracts
- MessageCircle: Chat
- Settings: Settings
- User: Profile

## Accessibility

### Contrast Requirements
- **Primary on White**: 4.5:1 ✓ (meets AA)
- **Text Colors**: All meet WCAG AA standards
- **Chart Colors**: Distinguishable for colorblind users

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Visible focus indicators (2px outline in primary color)
- Skip links for main navigation

### Screen Readers
- Proper ARIA labels on charts and data visualizations
- Table headers properly marked
- Form inputs always labeled

## Usage Instructions for AI Tools

### When creating dashboard views:
1. Use white cards with `shadow-md` and `rounded-lg`
2. Grid layout: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
3. Apply consistent 24px gap between cards
4. Show metrics with large bold numbers
5. Include trend indicators with colored triangles

### When creating navigation:
1. Sidebar fixed at 240px wide
2. Light gray background (#f8f9fa)
3. Active item: teal rounded background
4. Include icons for all nav items
5. Logo/brand at top

### When creating charts:
1. Use primary teal (#00af91) as main color
2. Keep designs minimal and clean
3. Round tops of bars
4. Use consistent spacing
5. No gridlines unless absolutely necessary

### When creating tables:
1. Clean borders (neutral-200)
2. Proper header styling (semibold, neutral-700)
3. Hover states on rows
4. Right-align numbers, left-align text
5. Use monospace font for numbers if needed

## File Structure Reference

```
.context/
├── design-system.md              # This file
├── components/
│   ├── StatCard.examples.md      # Metric cards
│   ├── DataTable.examples.md     # Tables
│   ├── Charts.examples.md        # Data visualizations
│   ├── Sidebar.examples.md       # Navigation
│   └── ... (other components)
├── tokens/
│   └── design-tokens.json        # All design values
├── templates/
│   ├── dashboard-page.md         # Full dashboard layout
│   └── data-table-page.md        # Table-focused page
└── guidelines/
    ├── data-visualization.md     # Chart best practices
    └── accessibility.md          # A11y requirements
```

## Brand Personality

**Oppal embodies:**
- Professional and trustworthy
- Data-driven and analytical
- Clean and modern
- Efficient and organized
- Focused on clarity

**Visual expression:**
- Generous white space
- Clean typography
- Subtle shadows and elevation
- Teal as accent, not dominant
- Organized grid-based layouts

## Common Patterns

### Dashboard Header
```jsx
- Sticky position
- White background
- Page title (2xl, bold)
- Date range picker on right
- Theme toggle (optional)
- Minimal border bottom
```

### Metric Card with Chart
```jsx
- Card with 24px padding
- Title + percentage change at top
- Large metric value
- Mini bar chart at bottom
- Hover: subtle scale (1.02)
```

### Category List
```jsx
- Horizontal bars showing percentage
- Category name on left
- Percentage + delivered count on right
- Color intensity based on percentage
- Clean spacing between rows
```

---

**For comprehensive examples, see:**
- Component examples in `.context/components/`
- Full page templates in `.context/templates/`
- Data visualization guidelines in `.context/guidelines/`

**Remember:** Oppal is about clarity, professionalism, and making complex data accessible. Every design choice should serve these goals.
