# 🚀 Oppal Design System - Quick Reference

**Last Updated**: January 31, 2026

---

## 📍 Project Locations

### Live Deployment
🌐 **https://hoppal.github.io/DS_Manager/**

### Repository
📁 `/Users/aaronoppal/AI Development/DesignSystemGen`

### Key Directories
```
├── oppal-app/              # Main React application
├── packages/oppal-ui/      # Component library
├── PROJECT_REVIEW.md       # Comprehensive review (12KB)
├── ACTION_PLAN.md          # Implementation plan (9.7KB)
├── REVIEW_SUMMARY.md       # Executive summary (5.7KB)
└── TASKS.md                # Task tracking (6.2KB)
```

---

## ⚡ Quick Commands

### Development
```bash
cd oppal-app
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview build
npm run lint             # Run linter
```

### Deployment
```bash
cd oppal-app
npm run deploy           # Deploy to GitHub Pages
```

### Git
```bash
git status               # Check status
git log --oneline -10    # Recent commits
git branch -a            # List branches
```

---

## 🎨 Component Quick Reference

### Import Statement
```javascript
import { 
  Button, Card, StatCard, DataTable, Alert, Input,
  DonutChart, MiniBarChart, DashboardLayout, Sidebar
} from '@oppal/ui';
```

### Common Components

#### Button
```jsx
<Button variant="primary|secondary|outline|ghost|danger" size="sm|md|lg">
  Click me
</Button>
```

#### StatCard
```jsx
<StatCard 
  title="Total Spend" 
  value="€90,000" 
  trend="+13%" 
  trendDirection="up|down|neutral"
  data={[10, 20, 30, 40, 50]}
/>
```

#### DataTable
```jsx
<DataTable
  title="Suppliers"
  columns={[
    { header: 'Name', key: 'name' },
    { header: 'Spend', key: 'spend', align: 'right' }
  ]}
  data={[{ name: 'Acme', spend: '€12,000' }]}
/>
```

#### Alert
```jsx
<Alert variant="info|success|warning|error" title="Title">
  Message content
</Alert>
```

---

## 🎨 Design Tokens

### Colors
```css
Primary (Teal):  #00af91
Success:         #16a34a
Error:           #dc2626
Warning:         #ea580c
Neutral-50:      #f8f9fa
Neutral-900:     #212529
```

### Typography
```css
Font: 'Inter', system-ui, sans-serif
Weights: 400, 500, 600, 700, 800
Metric Numbers: text-4xl font-extrabold
Labels: text-xs font-medium uppercase
```

### Spacing
```css
4px grid: 4, 8, 12, 16, 24, 32, 48px
Card padding: p-6 (24px)
Border radius: rounded-lg (12px)
```

---

## 📊 Project Status

### Health Indicators
- ✅ **Build**: Passing (356KB JS, 39KB CSS)
- ✅ **Deployment**: Live on GitHub Pages
- ✅ **Git**: Clean working tree
- ⚠️ **Tests**: None (priority to add)
- ⚠️ **CI/CD**: Missing (priority to add)

### Current Branch
```
* fix/router-basename (ahead of main)
```

### Recent Commits
```
82080fd Fix React initialization
6258cd9 Fix: Bundle dependencies
2550ef2 Fix React initialization
1e3a450 Fix React Router basename
d609da6 Cleanup temporary files
```

---

## 🎯 Top 3 Priorities

### 1. Merge to Main
```bash
git checkout main
git merge fix/router-basename
git push origin main
```

### 2. Add GitHub Actions
Create `.github/workflows/deploy.yml` (see ACTION_PLAN.md)

### 3. Set Up Testing
```bash
cd packages/oppal-ui
npm install --save-dev vitest @testing-library/react
```

---

## 📚 Documentation Index

### Core Documentation
- **README.md** (8.8KB) - Main documentation
- **OVERVIEW.md** (8.3KB) - Project overview
- **TASKS.md** (6.2KB) - Task tracking

### Review Documents
- **PROJECT_REVIEW.md** (12KB) - Comprehensive technical review
- **ACTION_PLAN.md** (9.7KB) - Detailed implementation plan
- **REVIEW_SUMMARY.md** (5.7KB) - Executive summary

### AI Integration
- **AI_USAGE_GUIDE.md** (10KB) - How to use with AI tools
- **USING_AI_TOOLS.md** (21KB) - Advanced AI integration
- **oppal-app/.context/ai-context.md** (4.9KB) - Portable context

### Component Examples
- **Button.examples.md**, **Card.examples.md**, **Alert.examples.md**
- **StatCard.examples.md** (13KB), **DataTable.examples.md** (13KB)
- **Sidebar.examples.md** (14KB), **Input.examples.md** (9.9KB)

### Guidelines
- **accessibility.md** (10KB) - WCAG AA compliance
- **responsive-design.md** (7.9KB) - Mobile-first patterns
- **design-system.md** (9.2KB) - Design system reference

### Templates
- **dashboard-layout.md** (9.5KB) - Layout template
- **dashboard-page.md** (20KB) - Complete page example

---

## 🤖 AI Integration

### Export Context
1. Open https://hoppal.github.io/DS_Manager/
2. Click "AI Usage" tab
3. Click "Export Full Context" button
4. Paste into Claude/Gemini

### Quick System Prompt
```
I am building an app using the Oppal Design System.

Design Tokens:
- Primary (Teal): #00af91
- Font: 'Inter', sans-serif
- Metric values: text-4xl font-extrabold

Component Library: @oppal/ui
Available: Button, Card, StatCard, DataTable, Alert, Input, 
DonutChart, MiniBarChart, DashboardLayout, Sidebar

Rules:
1. Always use components from @oppal/ui
2. Cards: white bg, shadow-md, rounded-lg, p-6
3. Tables: right-align numbers, uppercase headers
4. Charts: teal (#00af91), no gridlines
```

---

## 📈 Metrics Dashboard

### Code Quality
- **Components**: 10/10 ✅
- **Documentation**: 95% ✅
- **Build Status**: Passing ✅
- **Bundle Size**: 356KB ✅
- **Test Coverage**: 0% ❌

### Features
- **Component Gallery**: ✅
- **Pattern Library**: ✅
- **Icon Browser**: ✅
- **AI Integration**: ✅
- **Deployment**: ✅

### Technical Debt
- **Testing**: High priority ⚠️
- **CI/CD**: High priority ⚠️
- **TypeScript**: Medium priority ⚠️
- **Storybook**: Medium priority ⚠️

---

## 🔗 Useful Links

### Internal
- [Component Gallery](https://hoppal.github.io/DS_Manager/#/manager)
- [Pattern Library](https://hoppal.github.io/DS_Manager/#/manager) (Patterns tab)
- [Icon Browser](https://hoppal.github.io/DS_Manager/#/manager) (Icons tab)

### External
- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Recharts](https://recharts.org/)

---

## 💡 Quick Tips

### For Development
1. Always reference `@oppal/ui` components
2. Use design tokens from `design-tokens.json`
3. Follow the 4px spacing grid
4. Test on mobile (responsive design)

### For AI Collaboration
1. Share `.context/ai-context.md` with AI tools
2. Use "Export Full Context" button in Manager
3. Reference component examples in prompts
4. Ask AI to check for "Oppal compliance"

### For Deployment
1. Build locally first: `npm run build`
2. Test preview: `npm run preview`
3. Deploy: `npm run deploy`
4. Verify at https://hoppal.github.io/DS_Manager/

---

## 🎓 Learning Path

### Week 1: Explore
- ✅ Review all documentation
- ✅ Explore live deployment
- ✅ Try component examples
- ✅ Test AI integration

### Week 2: Improve
- 🔧 Add GitHub Actions
- 🧪 Set up testing
- 📝 Add PropTypes
- 🔍 Run accessibility audit

### Week 3: Enhance
- 🔷 Start TypeScript migration
- 📚 Set up Storybook
- 📦 Refactor large files
- 🚀 Publish to npm

---

## 📞 Support

### Documentation
- Check `PROJECT_REVIEW.md` for detailed analysis
- Check `ACTION_PLAN.md` for implementation steps
- Check `TASKS.md` for current priorities

### Issues
- Review `TASKS.md` → Known Issues section
- Check build output for errors
- Verify deployment at live URL

---

**Quick Reference Version**: 1.0  
**Last Updated**: January 31, 2026  
**Next Review**: February 7, 2026

---

## 🎯 Remember

> "The project is production-ready. Focus on adding tests and CI/CD in the next iteration while continuing to use the system in real projects."

**Overall Grade**: A- (Excellent)  
**Status**: ✅ Production Ready  
**Recommendation**: Ship It! 🚀
