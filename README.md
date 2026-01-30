# Oppal Design System

A comprehensive, AI-optimized design system specifically created for the Oppal spend management platform. Built for data-heavy dashboards and B2B financial interfaces.

## 🎨 Brand Identity

**Oppal** is a professional spend management platform with a distinctive teal/green color scheme, clean data visualizations, and modern card-based layouts.

### Visual Characteristics
- **Primary Color**: Teal (#00af91) for interactive elements and data viz
- **Background**: Light neutral gray (#f8f9fa) 
- **Cards**: White with subtle shadows and 12px rounded corners
- **Typography**: Inter font family, bold metrics, clean hierarchy
- **Data Viz**: Minimalist bar charts, donut charts, clean tables

## 📦 What's Included

### Core Files
- **design-system.md** - Complete brand guidelines, colors, typography, spacing
- **design-tokens.json** - Programmatic access to all design values
- **4 Component Examples**:
  - StatCard - Metric cards with trend indicators and mini charts
  - Sidebar - Fixed navigation with teal active states
  - DataTable - Clean tables for supplier/transaction data
  - (Standard Button, Input, Alert, Card components from base template)
- **Dashboard Template** - Complete Spend Management dashboard
- **Setup Tools** - Automated installation and customization

### Unique Oppal Features
✅ Teal/green color palette optimized for financial data
✅ Stat cards with mini bar chart visualizations
✅ Light gray sidebar with rounded active states
✅ Professional data table styling
✅ Donut chart patterns for percentages
✅ Category progress bars with dual metrics

## 🚀 Quick Start

### 1. Install

```bash
cd oppal-design-system
./setup.sh
```

### 2. Start Building with AI

```bash
# Create a dashboard
claude "Build a spend dashboard using .context/templates/dashboard-page.md"

# Create stat cards
claude "Create metric cards showing Total Spend, Suppliers, and Average Order Value using .context/components/StatCard.examples.md"

# Create data table
claude "Build a suppliers table using .context/components/DataTable.examples.md"
```

## 🎯 Key Components

### Stat Cards
Metric displays with:
- Large bold numbers (extrabold 800 weight)
- Trend indicators (▲/▼ with color)
- Optional mini bar charts
- Consistent 24px padding

```bash
claude "Create three stat cards from .context/components/StatCard.examples.md showing revenue metrics"
```

### Sidebar Navigation  
Professional navigation with:
- 240px fixed width
- Light gray background (#f8f9fa)
- Teal active states with white text
- Rounded corners on nav items
- Leading icons for all items

```bash
claude "Build the sidebar navigation from .context/components/Sidebar.examples.md"
```

### Data Tables
Clean tables featuring:
- Uppercase column headers (xs, semibold)
- Right-aligned numbers
- Hover states on rows
- Proper borders and spacing

```bash
claude "Create a suppliers table from .context/components/DataTable.examples.md"
```

## 🎨 Design Tokens

### Colors
```javascript
Primary (Teal):  #00af91  // Main brand color
Teal Secondary:  #009b9b  // Chart variations
Success:         #16a34a  // Positive trends
Error:           #dc2626  // Negative trends
Neutral-50:      #f8f9fa  // Backgrounds
Neutral-900:     #212529  // Headings
```

### Typography
```javascript
Font:      'Inter', sans-serif
Weights:   400 (normal), 500 (medium), 600 (semibold), 700 (bold), 800 (extrabold)
Scale:     xs(12px), sm(14px), base(16px), lg(18px), 2xl(24px), 4xl(36px)
```

### Spacing
```javascript
Based on 4px grid
Key values: 4px, 8px, 12px, 16px, 24px, 32px, 48px
Card padding: 24px (p-6)
Section gaps: 24px (gap-6)
```

## 📊 Data Visualization Guidelines

### Bar Charts
- Color: Primary teal (#00af91)
- Rounded tops on bars
- Even spacing, no axes
- Height: ~80-100px

### Donut Charts
- Stroke: 16px width
- Primary teal fill
- Large center percentage (48px bold)
- Diameter: 160px

### Progress Bars
- Height: 8px
- Background: neutral-200
- Fill: primary-500
- Fully rounded ends

### Tables
- Header: neutral-50 background
- Cell padding: 24px horizontal, 16px vertical
- Numbers: right-aligned, medium weight
- Text: left-aligned, regular weight

## 🔧 Customization

### Change Brand Color

Edit `.context/tokens/design-tokens.json`:
```json
{
  "colors": {
    "primary": {
      "500": "#YOUR_BRAND_COLOR"
    }
  }
}
```

### Add New Metric Cards

Create variations in `.context/components/StatCard.examples.md`:
- Follow existing pattern
- Use extrabold (800) for numbers
- Include trend indicator
- Add mini chart if time-series data

### Customize Sidebar

Modify `.context/components/Sidebar.examples.md`:
- Adjust width (default 240px)
- Change active color (default teal)
- Add/remove nav items
- Customize logo area

## 🏗️ Architecture

```
.context/
├── design-system.md           # Main reference (Oppal-specific)
├── components/
│   ├── StatCard.examples.md   # Metric cards with charts
│   ├── Sidebar.examples.md    # Navigation
│   ├── DataTable.examples.md  # Tables
│   ├── Button.examples.md     # (from base)
│   ├── Input.examples.md      # (from base)
│   ├── Card.examples.md       # (from base)
│   └── Alert.examples.md      # (from base)
├── tokens/
│   └── design-tokens.json     # Oppal colors/spacing
├── templates/
│   └── dashboard-page.md      # Complete spend dashboard
└── guidelines/
    ├── accessibility.md       # WCAG AA compliance
    └── responsive-design.md   # Mobile-first patterns
```

## 💡 Usage Patterns

### Creating Dashboards
```bash
# Full dashboard
claude "Create a spend management dashboard using .context/templates/dashboard-page.md"

# Just the top row metrics
claude "Create three KPI cards using .context/components/StatCard.examples.md"

# Add data visualization
claude "Create a category breakdown chart using the Oppal design system in .context/design-system.md"
```

### Building Tables
```bash
# Suppliers table
claude "Create a suppliers management table using .context/components/DataTable.examples.md with columns for Class, Name, Spend, Risk Score, Category"

# Add sorting
claude "Add sortable column headers to the table following .context/components/DataTable.examples.md patterns"
```

### Implementing Navigation
```bash
# Full sidebar
claude "Build the sidebar navigation using .context/components/Sidebar.examples.md with menu items for Cockpit, Spend, Risks, Quality, Contracts, Chat"

# Mobile responsive
claude "Make the sidebar responsive using the mobile drawer pattern from .context/components/Sidebar.examples.md"
```

## 🎓 Best Practices

### For Data Dashboards
1. Lead with 3-4 key metrics in stat cards
2. Use mini bar charts for trends
3. Keep charts minimal - no gridlines
4. Right-align all numbers in tables
5. Use proper currency formatting

### For Professional Feel
1. Consistent 24px card padding
2. Generous white space
3. Subtle shadows (shadow-md)
4. Clean borders (neutral-200)
5. Professional typography hierarchy

### For Performance
1. Virtualize long tables
2. Lazy load below-fold charts
3. Optimize SVG charts
4. Cache API responses
5. Use proper loading states

## 📱 Responsive Design

- **Desktop (1024px+)**: Full sidebar, 3-4 column grids
- **Tablet (768-1023px)**: Collapsible sidebar, 2 column grids
- **Mobile (<768px)**: Drawer sidebar, single column

All components include responsive patterns following `.context/guidelines/responsive-design.md`.

## ♿ Accessibility

All components meet WCAG 2.1 AA standards:
- Proper color contrast (tested)
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- ARIA labels on charts/data viz

See `.context/guidelines/accessibility.md` for full requirements.

## 🔗 Integration

### Tailwind CSS

```javascript
// tailwind.config.js
const tokens = require('./.context/tokens/design-tokens.json');

module.exports = {
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        teal: tokens.colors.teal,
        neutral: tokens.colors.neutral,
      }
    }
  }
}
```

### React/Next.js

Components are provided as copy-paste React/JSX. Simply reference the design system in prompts and AI will generate matching code.

## 📚 Additional Resources

- Full component examples in `.context/components/`
- Complete dashboard template in `.context/templates/`
- Design guidelines in `.context/guidelines/`
- AI usage examples in `AI_USAGE_GUIDE.md`

## 🆘 Support

For questions about using this design system:
1. Check component examples in `.context/components/`
2. Review the main design system doc: `.context/design-system.md`
3. See AI usage guide for prompting tips
4. Reference the dashboard template for full examples

---

**Version**: 1.0.0  
**Brand**: Oppal Spend Management  
**Optimized for**: Claude Code, Gemini CLI, AI-assisted development  
**Focus**: B2B dashboards, financial data, professional interfaces
