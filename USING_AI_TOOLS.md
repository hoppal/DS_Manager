# Using Claude Code / Gemini CLI for Implementation

## Overview

This guide shows you how to use **Claude Code** or **Gemini CLI** to automatically implement the entire Oppal design system. These AI coding assistants will read your design system files and generate production-ready code.

---

## Prerequisites

### Install Claude Code
```bash
# Install Claude Code
npm install -g @anthropic-ai/claude-code

# Or use npx (no installation)
npx @anthropic-ai/claude-code
```

**Documentation**: https://docs.claude.com/claude-code

### Install Gemini CLI
```bash
# Install Gemini CLI
npm install -g @google/generative-ai-cli

# Or use with npx
npx @google/generative-ai-cli
```

**Documentation**: https://ai.google.dev/gemini-api/docs/cli

### Set Up Your Project First
```bash
# 1. Initialize your project
npm create vite@latest my-oppal-app -- --template react
cd my-oppal-app

# 2. Install dependencies
npm install

# 3. Copy design system
cp -r /path/to/oppal-design-system/.context ./

# 4. Verify .context is in your project root
ls .context/
```

---

## Method 1: Claude Code (Recommended)

Claude Code can read files, write code, and execute commands. It's perfect for this workflow.

### Setup Claude Code

```bash
# Navigate to your project
cd my-oppal-app

# Start Claude Code
claude-code

# Or with npx
npx @anthropic-ai/claude-code
```

### Phase 1: Setup (Day 1)

#### 1.1 Configure Tailwind with Design Tokens

**Prompt:**
```
Read .context/tokens/design-tokens.json and create a tailwind.config.js file that:
1. Imports all Oppal colors (primary, teal, success, error, neutral)
2. Adds all spacing values
3. Adds typography settings (fontFamily, fontSize, fontWeight)
4. Adds borderRadius values
5. Adds box shadow values

Then show me the config file.
```

**Claude Code will:**
- Read design-tokens.json
- Generate tailwind.config.js
- Show you the file
- You can ask it to apply the changes

**Verify:**
```
Check that tailwind.config.js includes all Oppal colors and the build still works. Run npm run dev.
```

#### 1.2 Set Up Project Structure

**Prompt:**
```
Create the following folder structure in src/:
- src/components/ui/
- src/components/layout/
- src/components/charts/
- src/layouts/
- src/pages/dashboard/

List the folders you created.
```

### Phase 2: Core Components (Day 1-2)

#### 2.1 Create Button Component

**Prompt:**
```
Read .context/components/Button.examples.md and create a Button component at src/components/ui/Button.jsx that:
1. Follows ALL patterns in the examples
2. Includes all variants (primary, secondary, outline, ghost, danger)
3. Includes all sizes (small, medium, large)
4. Includes disabled and loading states
5. Uses Tailwind classes from our config
6. Is fully accessible with proper ARIA attributes
7. Exports a default React component

Show me the complete file.
```

**Claude Code will:**
- Read Button.examples.md
- Read design-system.md for context
- Generate complete Button.jsx
- Show you the code

**Then:**
```
Create the file at src/components/ui/Button.jsx
```

**Test it:**
```
Create a test page at src/pages/ButtonTest.jsx that shows all button variants and sizes. Then run npm run dev and open the page.
```

#### 2.2 Create Input Component

**Prompt:**
```
Read .context/components/Input.examples.md and create an Input component at src/components/ui/Input.jsx that:
1. Supports all input types (text, email, password, number, search, date)
2. Includes label support
3. Shows error and success states
4. Includes helper text
5. Has proper accessibility (labels, aria-describedby, aria-invalid)
6. Uses our design tokens for colors

Show me the code, then create the file.
```

#### 2.3 Create Card Component

**Prompt:**
```
Read .context/components/Card.examples.md and create a Card component at src/components/ui/Card.jsx following all patterns. Include support for header, body, and footer sections. Create the file.
```

#### 2.4 Create Alert Component

**Prompt:**
```
Read .context/components/Alert.examples.md and create an Alert component with all variants (info, success, warning, error) and dismissible support. Save to src/components/ui/Alert.jsx
```

### Phase 3: Oppal-Specific Components (Day 2-3)

#### 3.1 Create StatCard Component (CRITICAL)

**Prompt:**
```
Read .context/components/StatCard.examples.md and .context/design-system.md.

Create a StatCard component at src/components/ui/StatCard.jsx that:
1. Shows a title (small, uppercase, medium weight)
2. Displays a large metric value (4xl, extrabold, neutral-900)
3. Shows trend indicator (up/down arrow with color)
4. Includes optional mini bar chart below (18 bars, teal color)
5. Uses card styling (white bg, rounded-lg, shadow-md, p-6)
6. Matches the Oppal screenshot exactly

The mini bar chart should:
- Be 80px tall
- Use teal bars (#00af91)
- Have rounded tops
- Show no axes or labels
- Accept an array of values (0-100)

Show me the complete component with TypeScript types (or PropTypes).
```

**Then test:**
```
Create src/pages/StatsTest.jsx showing three StatCard components:
1. Total Spend: €90,000 with +13.93% and sample chart data
2. Total Suppliers: 289 with -13.93% and sample chart data  
3. Average Order: €36,056 with +18.63% and sample chart data

Run npm run dev and verify they look like the Oppal screenshot.
```

#### 3.2 Create Sidebar Component (CRITICAL)

**Prompt:**
```
Read .context/components/Sidebar.examples.md carefully.

Create a Sidebar component at src/components/layout/Sidebar.jsx that:
1. Is fixed positioned, 240px wide
2. Has light gray background (#f8f9fa)
3. Includes logo section at top (80px height)
4. Has navigation items with icons
5. Active item has teal background (#00af91) with white text and rounded corners
6. Inactive items are dark gray (#495057) and hover to light gray
7. Includes user profile at bottom
8. Includes settings button at bottom
9. Works on mobile (drawer with backdrop)
10. Matches the Oppal screenshot exactly

For icons, use lucide-react:
npm install lucide-react

Use these icons: LayoutDashboard, CreditCard, AlertTriangle, CheckCircle, FileText, MessageCircle, Settings

Show me the complete component.
```

**Test:**
```
Create a test page that wraps content with the Sidebar. Verify:
- Sidebar is fixed on left
- Active item (Spend) has teal background
- All items have icons
- User profile shows at bottom
- Mobile: sidebar becomes drawer

Run npm run dev and test.
```

#### 3.3 Create DataTable Component (CRITICAL)

**Prompt:**
```
Read .context/components/DataTable.examples.md.

Create a DataTable component at src/components/ui/DataTable.jsx that:
1. Accepts columns and data as props
2. Has styled header (bg-neutral-50, uppercase text, semibold, small)
3. Body rows with hover states
4. Right-aligns number columns
5. Includes section header with title and optional dropdown
6. Is responsive (card layout on mobile)
7. Matches the Suppliers Management table in Oppal

Show me the component, then create it.
```

**Test:**
```
Create src/pages/TableTest.jsx with a Suppliers Management table showing:
- Columns: Supplier Class, Name, Spend, Risk Score, Category
- 5 sample rows of supplier data
- Section header "Suppliers Management" with year dropdown

Run and verify it matches the Oppal table.
```

### Phase 4: Dashboard Layout (Day 3-4)

#### 4.1 Create Dashboard Layout

**Prompt:**
```
Read .context/templates/dashboard-page.md carefully.

Create a DashboardLayout component at src/layouts/DashboardLayout.jsx that:
1. Includes the Sidebar component (import from ../components/layout/Sidebar)
2. Has a main content area offset by 240px (ml-60)
3. Includes a sticky header with:
   - Page title
   - Date range picker (simple select for now)
   - Theme toggle button
4. Has proper responsive behavior (mobile: drawer sidebar)
5. Accepts children for page content

Show me the complete layout component.
```

**Test:**
```
Create src/pages/LayoutTest.jsx that uses DashboardLayout with some placeholder content. Verify layout matches Oppal screenshot.
```

### Phase 5: Charts (Day 4-5)

#### 5.1 Set Up Recharts

**Prompt:**
```
Install recharts:
npm install recharts

Confirm installation worked.
```

#### 5.2 Create Mini Bar Chart

**Prompt:**
```
Create src/components/charts/MiniBarChart.jsx that:
1. Accepts data prop (array of numbers 0-100)
2. Renders 18 bars at equal spacing
3. Uses teal color (#00af91)
4. Has rounded tops on bars
5. Is 80-100px tall
6. Has no axes, labels, or gridlines
7. Uses Recharts library

Show me the component.
```

#### 5.3 Create Donut Chart

**Prompt:**
```
Create src/components/charts/DonutChart.jsx that:
1. Accepts percentage (0-100) and label props
2. Is 160px in diameter
3. Has 16px stroke width
4. Uses teal color for fill (#00af91)
5. Shows percentage in center (large, bold)
6. Shows label below percentage
7. Uses Recharts PieChart

Show me the component.
```

#### 5.4 Create Category Progress

**Prompt:**
```
Create src/components/charts/CategoryProgress.jsx that:
1. Accepts array of categories with: name, percent, delivered
2. Renders horizontal progress bar for each
3. Shows name on left, percent and delivered count on right
4. Uses teal fill color
5. Has proper spacing between rows
6. Matches "Spend by Category" section in Oppal

Show me the component.
```

### Phase 6: Complete Dashboard Page (Day 5-6) - MILESTONE

**This is the big one - full dashboard**

**Prompt:**
```
Read .context/templates/dashboard-page.md very carefully.

Create src/pages/dashboard/SpendDashboard.jsx that recreates the ENTIRE Oppal Spend Management dashboard:

1. Use DashboardLayout as wrapper
2. Top row: Grid of 3 StatCards showing:
   - Total Spend: €90,000 (+13.93%)
   - Total Suppliers: 289 (-13.93%)
   - Average Order Value: €36,056 (+18.63%)
   Each with mini bar chart

3. Middle section with 2-column grid:
   - Left: "Spend by Category" with CategoryProgress showing:
     * Medical Equipment (27%, 1150)
     * IT & Software (16%, 1890)
     * Building & Infra (38%, 1690)
     * Admin & Stationery (14%, 1,750,000)
     * Sterilization Materials (24%, 1,980,110)
   
   - Right: 3 DonutCharts in a grid:
     * Spend Pareto (20%)
     * Contracted Spend (60%)
     * Assessed Spend (50%)

4. Bottom: DataTable "Suppliers Management" with:
   - Columns: Class, Name, Spend, Risk Score, Category
   - 4 sample supplier rows
   - Year dropdown (2025)

Use sample data for now. Make it responsive (mobile: single column).

Show me the complete page component.
```

**Then:**
```
Create the file and update routing to show this page at /dashboard/spend. Run npm run dev and verify the entire page matches the Oppal screenshot.
```

**Verification checklist:**
```
Please verify the spend dashboard page:
1. Has 3 stat cards in top row with charts
2. Category progress section works
3. 3 donut charts show correctly
4. Suppliers table displays properly
5. Sidebar shows with Spend active
6. Header has title and date picker
7. Responsive on mobile
8. Colors match Oppal (teal primary)

List any issues you find.
```

---

## Method 2: Gemini CLI

Similar workflow, slightly different syntax:

### Setup Gemini CLI

```bash
cd my-oppal-app
gemini
```

### Example Prompts for Gemini

**Create Button:**
```
Read the file .context/components/Button.examples.md and create a React Button component at src/components/ui/Button.jsx that implements all the variants and patterns shown in the examples. Use Tailwind CSS classes.
```

**Create Dashboard:**
```
Read .context/templates/dashboard-page.md and create a complete Spend Management dashboard page at src/pages/dashboard/SpendDashboard.jsx. Include all sections: stat cards, charts, and data table. Use the components from src/components/.
```

---

## Advanced Techniques

### 1. Multi-File Generation

**Prompt:**
```
Read .context/components/StatCard.examples.md and create:
1. src/components/ui/StatCard.jsx - the main component
2. src/components/charts/MiniBarChart.jsx - the chart component
3. src/pages/test/StatCardTest.jsx - test page with examples

Show me all three files.
```

### 2. Iterative Refinement

**First prompt:**
```
Create StatCard component from .context/components/StatCard.examples.md
```

**Then refine:**
```
The StatCard component looks good but the mini chart bars need:
- More spacing between bars (2px gap)
- Slightly rounded tops (2px radius)
- Hover effect (opacity change)

Update the MiniBarChart component with these changes.
```

### 3. Debug with AI

**Prompt:**
```
The StatCard component isn't showing the trend indicator correctly. The arrow icon and percentage should be on the same line. 

Current code is in src/components/ui/StatCard.jsx

Read the file, identify the issue, and fix it.
```

### 4. Add Features

**Prompt:**
```
Read src/components/ui/DataTable.jsx and add:
1. Sorting functionality (click headers to sort)
2. Search/filter box above table
3. Pagination at bottom (10 rows per page)

Keep all existing styling from .context/components/DataTable.examples.md
```

---

## Time-Saving Workflows

### Workflow 1: Batch Create Components (2 hours)

**Single prompt for all core UI:**
```
Read the following files:
- .context/components/Button.examples.md
- .context/components/Input.examples.md
- .context/components/Card.examples.md
- .context/components/Alert.examples.md

Create all 4 components in src/components/ui/ following all patterns. Show me each file, then create them all.
```

### Workflow 2: Complete Dashboard in One Shot (3 hours)

**The mega prompt:**
```
Read these files in order:
1. .context/design-system.md
2. .context/components/StatCard.examples.md
3. .context/components/Sidebar.examples.md
4. .context/components/DataTable.examples.md
5. .context/templates/dashboard-page.md

Then create a complete working Oppal Spend Management dashboard with:
- All necessary components in src/components/
- Dashboard layout in src/layouts/
- Complete dashboard page in src/pages/dashboard/SpendDashboard.jsx
- Sample data included
- Full routing setup

This should match the Oppal screenshot exactly. Create all files.
```

⚠️ **Note**: This might hit context limits. If so, break into 2-3 prompts.

### Workflow 3: Fix & Polish (1 hour)

**Prompt:**
```
Review all files in src/components/ and src/pages/dashboard/ and:
1. Verify colors match .context/tokens/design-tokens.json
2. Check spacing matches design system (multiples of 4px)
3. Ensure all components are accessible (ARIA labels, keyboard nav)
4. Add loading states where needed
5. Add error boundaries

List any issues found and fix them.
```

---

## Pro Tips

### 1. Always Provide Context

❌ **Bad:**
```
Create a button component
```

✅ **Good:**
```
Read .context/components/Button.examples.md and .context/design-system.md, then create a Button component at src/components/ui/Button.jsx following all Oppal patterns
```

### 2. Be Specific About File Paths

❌ **Bad:**
```
Create the StatCard component
```

✅ **Good:**
```
Create src/components/ui/StatCard.jsx based on .context/components/StatCard.examples.md
```

### 3. Request Verification

Always end with:
```
Show me the file, then create it, then run npm run dev and verify it works.
```

### 4. Iterate Incrementally

Don't try to build everything at once:
1. Build component
2. Test it
3. Refine if needed
4. Move to next component

### 5. Use the AI for Testing

```
Create a test page at src/pages/ComponentTests.jsx that shows all my UI components (Button, Input, Card, Alert, StatCard) with all their variants. This will help me verify everything works.
```

---

## Common Issues & Solutions

### Issue 1: AI Can't Find Files

**Error:** "I cannot access .context/components/Button.examples.md"

**Solution:**
```
Are you in the project root directory? Run: pwd

The .context folder should be at the same level as src/. Run: ls -la

If .context is missing, copy it: cp -r /path/to/oppal-design-system/.context ./
```

### Issue 2: Generated Code Doesn't Match Design

**Solution:**
```
The button component doesn't match Oppal colors. Please read .context/design-system.md specifically the "Brand Colors" section and update the Button component to use primary-500 (#00af91) for primary buttons.
```

### Issue 3: Missing Dependencies

**Solution:**
```
Install the missing packages:
npm install lucide-react recharts

Then regenerate the component.
```

### Issue 4: Build Errors

**Solution:**
```
There's a build error in src/components/ui/StatCard.jsx. Read the file, identify the error, and fix it. The error message is: [paste error]
```

---

## Complete Implementation Script

Here's a full script you can follow:

### Day 1: Foundation (4-5 hours)

```bash
# 1. Setup project
npm create vite@latest oppal-app -- --template react
cd oppal-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 2. Copy design system
cp -r /path/to/oppal-design-system/.context ./

# 3. Start Claude Code
claude-code
```

**Prompts in order:**

```
1. Configure Tailwind:
Read .context/tokens/design-tokens.json and update tailwind.config.js with all Oppal colors, spacing, typography. Show me the config.

2. Create folders:
Create src/components/ui/, src/components/layout/, src/components/charts/, src/layouts/, src/pages/dashboard/

3. Install dependencies:
npm install lucide-react recharts

4. Create Button:
Read .context/components/Button.examples.md and create src/components/ui/Button.jsx with all variants

5. Create Input:
Read .context/components/Input.examples.md and create src/components/ui/Input.jsx

6. Create Card:
Read .context/components/Card.examples.md and create src/components/ui/Card.jsx

7. Create Alert:
Read .context/components/Alert.examples.md and create src/components/ui/Alert.jsx

8. Test components:
Create src/pages/UITest.jsx showing all 4 components with various states. Run npm run dev.
```

### Day 2: Oppal Components (6-8 hours)

```
9. Create StatCard:
Read .context/components/StatCard.examples.md and create src/components/ui/StatCard.jsx with mini bar chart support

10. Create MiniBarChart:
Create src/components/charts/MiniBarChart.jsx for the StatCard charts (18 bars, teal, rounded tops)

11. Test StatCards:
Create src/pages/StatsTest.jsx with 3 stat cards matching Oppal screenshot

12. Create Sidebar:
Read .context/components/Sidebar.examples.md and create src/components/layout/Sidebar.jsx (240px, light gray, teal active)

13. Test Sidebar:
Create test page with sidebar navigation

14. Create DataTable:
Read .context/components/DataTable.examples.md and create src/components/ui/DataTable.jsx

15. Test Table:
Create suppliers table test page
```

### Day 3: Layout & Charts (4-6 hours)

```
16. Create DashboardLayout:
Read .context/templates/dashboard-page.md and create src/layouts/DashboardLayout.jsx with sidebar, header, main content

17. Create DonutChart:
Create src/components/charts/DonutChart.jsx (160px, teal, center label)

18. Create CategoryProgress:
Create src/components/charts/CategoryProgress.jsx for category breakdown

19. Test charts:
Create test page with all chart types
```

### Day 4: Complete Dashboard (4-6 hours)

```
20. Create Complete Dashboard:
Read .context/templates/dashboard-page.md and create src/pages/dashboard/SpendDashboard.jsx with all sections:
- 3 stat cards with charts
- Category breakdown
- 3 donut charts  
- Suppliers table

21. Set up routing:
Configure React Router to show dashboard at /dashboard/spend

22. Test everything:
Run npm run dev, test all features, verify matches Oppal screenshot

23. Fix any issues:
Review and fix any styling, responsiveness, or functionality issues
```

### Day 5: Polish (2-4 hours)

```
24. Add loading states:
Add skeleton loaders for components

25. Add responsive behavior:
Test and fix mobile/tablet layouts

26. Accessibility audit:
Check keyboard navigation, ARIA labels, color contrast

27. Performance:
Add React.memo, lazy loading where appropriate
```

---

## Success Checklist

After running through the AI-assisted implementation:

- [ ] All 7 core components built (Button, Input, Card, Alert, StatCard, Sidebar, DataTable)
- [ ] All 3 chart components work (MiniBar, Donut, CategoryProgress)
- [ ] Dashboard layout functional (sidebar + main)
- [ ] Complete Spend dashboard page matches screenshot
- [ ] Responsive on mobile, tablet, desktop
- [ ] All colors match Oppal (#00af91 teal primary)
- [ ] Build runs without errors (`npm run build`)
- [ ] Dev server works (`npm run dev`)

---

## Estimated Time with AI

**Traditional Coding**: 3-4 weeks (80-120 hours)
**With Claude Code/Gemini**: 4-5 days (30-40 hours)

**Breakdown:**
- Day 1: Setup + Core UI (4-5 hours)
- Day 2: Oppal components (6-8 hours)
- Day 3: Layout + Charts (4-6 hours)
- Day 4: Complete dashboard (4-6 hours)
- Day 5: Polish + testing (2-4 hours)

**Total: 20-30 hours** vs 80-120 hours traditional

**Time Savings: 60-75%** 🚀

---

## Resources

- **Claude Code Docs**: https://docs.claude.com/claude-code
- **Gemini CLI Docs**: https://ai.google.dev/gemini-api/docs/cli
- **Your Design System**: `.context/` folder in your project
- **This Guide**: Reference anytime you're stuck

---

## Get Started Now

```bash
# 1. Copy this to your clipboard
# 2. Start Claude Code
claude-code

# 3. Paste this prompt:
I have the Oppal design system in .context/. Let's implement it step by step. First, read .context/design-system.md to understand the brand, then let's configure Tailwind with the design tokens from .context/tokens/design-tokens.json.

# 4. Follow the prompts above in order
# 5. Build amazing dashboards! 🎉
```

Good luck! The AI will do 80% of the heavy lifting - you just guide it. 🚀
