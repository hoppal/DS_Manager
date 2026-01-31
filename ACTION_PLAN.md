# Oppal Design System - Action Plan

**Created**: January 31, 2026  
**Status**: Ready for Next Phase

---

## 🎯 Immediate Actions (Today)

### 1. Merge Branch to Main ⚡
**Priority**: High  
**Effort**: 5 minutes

```bash
# You're currently on fix/router-basename
# This branch has important deployment fixes
git checkout main
git merge fix/router-basename
git push origin main
```

**Why**: Keep main branch up to date with latest deployment fixes.

---

## 📅 This Week (Next 3 Days)

### 2. Add GitHub Actions CI/CD 🔄
**Priority**: High  
**Effort**: 2 hours

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: oppal-app/package-lock.json
      
      - name: Install dependencies
        run: |
          cd oppal-app
          npm ci
      
      - name: Build
        run: |
          cd oppal-app
          npm run build
      
      - name: Deploy to GitHub Pages
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./oppal-app/dist
```

**Benefits**:
- ✅ Automated deployment on every push to main
- ✅ Build verification on PRs
- ✅ No manual `npm run deploy` needed

### 3. Add ESLint Accessibility Plugin 🎯
**Priority**: Medium  
**Effort**: 1 hour

```bash
cd oppal-app
npm install --save-dev eslint-plugin-jsx-a11y
```

Update `eslint.config.js`:
```javascript
import jsxA11y from 'eslint-plugin-jsx-a11y';

export default [
  // ... existing config
  {
    plugins: {
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...jsxA11y.configs.recommended.rules,
    },
  },
];
```

**Benefits**:
- ✅ Catch accessibility issues during development
- ✅ Enforce WCAG standards
- ✅ Better user experience

---

## 📅 This Month (Next 2 Weeks)

### 4. Add Testing Framework 🧪
**Priority**: High  
**Effort**: 6 hours

#### Step 1: Install Dependencies
```bash
cd packages/oppal-ui
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom @testing-library/user-event jsdom
```

#### Step 2: Create Vitest Config
```javascript
// packages/oppal-ui/vitest.config.js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.js',
  },
});
```

#### Step 3: Write First Tests
```javascript
// packages/oppal-ui/src/__tests__/Button.test.jsx
import { render, screen } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByText('Primary');
    expect(button).toHaveClass('bg-primary-500');
  });

  it('handles disabled state', () => {
    render(<Button disabled>Disabled</Button>);
    expect(screen.getByText('Disabled')).toBeDisabled();
  });
});
```

#### Step 4: Add Test Scripts
```json
// packages/oppal-ui/package.json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

**Target Coverage**: 80% for core components (Button, StatCard, Alert, Card, Input)

### 5. Refactor ManagerPage.jsx 📦
**Priority**: Medium  
**Effort**: 3 hours

Split the 1,178-line file into separate components:

```
oppal-app/src/pages/ManagerPage/
├── index.jsx                 # Main component with tabs
├── ComponentGallery.jsx      # Gallery tab
├── PatternLibrary.jsx        # Patterns tab
├── IconBrowser.jsx           # Icons tab
├── TokensManager.jsx         # Tokens tab
├── TypographyManager.jsx     # Typography tab
├── DeployWizard.jsx          # Deploy tab
└── UsageGuide.jsx            # AI Usage tab
```

**Benefits**:
- ✅ Better maintainability
- ✅ Easier to test individual tabs
- ✅ Faster development iteration

### 6. Add Component PropTypes 📝
**Priority**: Medium  
**Effort**: 2 hours

Add PropTypes to all components for better DX:

```javascript
// packages/oppal-ui/src/Button.jsx
import PropTypes from 'prop-types';

export function Button({ variant, size, isLoading, disabled, children, ...props }) {
  // ... component code
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'ghost', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  isLoading: false,
  disabled: false,
};
```

---

## 📅 Next Quarter (2-3 Months)

### 7. Add TypeScript 🔷
**Priority**: Medium  
**Effort**: 12 hours

Convert the entire codebase to TypeScript for better type safety and DX.

**Approach**:
1. Install TypeScript and types
2. Rename `.jsx` → `.tsx`
3. Add type definitions for all components
4. Configure `tsconfig.json`
5. Update build process

**Benefits**:
- ✅ Better IDE autocomplete
- ✅ Catch errors at compile time
- ✅ Self-documenting code
- ✅ Easier refactoring

### 8. Add Storybook 📚
**Priority**: Medium  
**Effort**: 8 hours

```bash
npx storybook@latest init
```

Create stories for all components:
```javascript
// packages/oppal-ui/src/Button.stories.jsx
export default {
  title: 'Components/Button',
  component: Button,
};

export const Primary = {
  args: {
    variant: 'primary',
    children: 'Primary Button',
  },
};

export const AllVariants = () => (
  <div className="flex gap-4">
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="danger">Danger</Button>
  </div>
);
```

**Benefits**:
- ✅ Interactive component documentation
- ✅ Visual regression testing
- ✅ Isolated component development
- ✅ Better collaboration with designers

### 9. Implement Future Features from TASKS.md 🚀

#### 9.1 Component Registry
- Searchable component library
- Live previews
- API documentation generator
- Version history

#### 9.2 Theme Editor
- Visual design token editing
- Live preview of changes
- Export custom themes
- Color palette generator

#### 9.3 AI Playground
- Embedded chat interface
- Auto-injected design context
- Real-time component generation
- Code preview and export

#### 9.4 Snippet Generator
- Natural language to component code
- Template library
- Custom snippet creation
- VS Code extension

---

## 📊 Success Metrics

Track these metrics to measure progress:

### Code Quality
- [ ] Test coverage ≥ 80%
- [ ] Zero ESLint errors
- [ ] Zero accessibility violations
- [ ] Build time < 5 seconds

### Documentation
- [ ] All components have PropTypes/TypeScript
- [ ] All components have Storybook stories
- [ ] All components have usage examples
- [ ] Changelog maintained

### Performance
- [ ] Bundle size < 400KB
- [ ] Lighthouse score ≥ 90
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3s

### Adoption
- [ ] Used in 3+ projects
- [ ] 10+ GitHub stars
- [ ] Active community contributions
- [ ] Regular updates (monthly)

---

## 🎓 Learning Resources

### For Testing
- [Vitest Documentation](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/react)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

### For TypeScript
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

### For Storybook
- [Storybook for React](https://storybook.js.org/docs/react/get-started/introduction)
- [Component Story Format](https://storybook.js.org/docs/react/api/csf)

### For Accessibility
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [A11y Project](https://www.a11yproject.com/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🔄 Review Cadence

### Weekly
- Review open issues/PRs
- Update TASKS.md
- Check deployment status
- Monitor bundle size

### Monthly
- Review metrics
- Update roadmap
- Release new version
- Update documentation

### Quarterly
- Major feature releases
- Architecture review
- Performance audit
- Community feedback session

---

## 🎯 Priority Matrix

```
High Priority, High Impact:
├── Add GitHub Actions CI/CD
├── Add Testing Framework
└── Merge fix/router-basename to main

High Priority, Medium Impact:
├── Add ESLint Accessibility Plugin
└── Add Component PropTypes

Medium Priority, High Impact:
├── Add TypeScript
└── Add Storybook

Medium Priority, Medium Impact:
├── Refactor ManagerPage.jsx
└── Implement Theme Editor

Low Priority, High Impact:
└── AI Playground

Low Priority, Medium Impact:
└── Component Registry
```

---

## ✅ Quick Wins (< 1 hour each)

1. **Add .nvmrc file** - Specify Node version
2. **Add CONTRIBUTING.md** - Contribution guidelines
3. **Add LICENSE** - Open source license
4. **Add CHANGELOG.md** - Version history
5. **Update README badges** - Build status, coverage, etc.
6. **Add .editorconfig** - Consistent code formatting
7. **Add .prettierrc** - Code formatting rules
8. **Add issue templates** - Bug reports, feature requests

---

**Last Updated**: January 31, 2026  
**Next Review**: February 7, 2026
