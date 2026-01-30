# AI Tool Usage Guide

## Overview

This guide demonstrates how to effectively use the design system with Claude Code, Gemini CLI, and other AI coding assistants.

## Basic Patterns

### Pattern 1: Reference Specific Components

When you need a specific UI element, reference the exact component file:

```bash
# Claude Code
claude "Create a signup form with email and password inputs. Use the Input component from .context/components/Input.examples.md and the Button component from .context/components/Button.examples.md"

# Gemini CLI
gemini "Add a success alert after form submission using .context/components/Alert.examples.md"
```

**Why this works**: AI tools can read the markdown files and apply the exact patterns, ensuring consistency.

### Pattern 2: Reference the Entire Design System

For larger features, reference the main design system file:

```bash
claude "Create a user profile page following .context/design-system.md. Include a profile card with avatar, name, email, and edit button."
```

**Why this works**: The AI gets color palette, spacing, and typography rules in one reference.

### Pattern 3: Combine Multiple References

For complex features, reference multiple files:

```bash
claude "Build a settings page with:
- Dashboard layout from .context/templates/dashboard-layout.md
- Form inputs from .context/components/Input.examples.md  
- Cards for each settings section from .context/components/Card.examples.md
- Follow accessibility guidelines in .context/guidelines/accessibility.md"
```

**Why this works**: AI can synthesize information from multiple sources to build cohesive features.

## Advanced Techniques

### Using Design Tokens Programmatically

```bash
claude "Generate a Tailwind config file that uses the design tokens from .context/tokens/design-tokens.json. Map all colors, spacing, and typography values."
```

### Creating Variations

```bash
claude "Create a pricing card component similar to the Card component in .context/components/Card.examples.md but with:
- Larger padding
- Centered text
- Price prominently displayed
- CTA button at the bottom"
```

### Ensuring Consistency Across Files

```bash
claude "Review all React components in /src/components and update any that don't follow the button patterns in .context/components/Button.examples.md. Show me which files need updates."
```

## Real-World Examples

### Example 1: Building a Login Page

```bash
# Step 1: Create the page structure
claude "Create a login page with:
- Centered card layout using .context/components/Card.examples.md
- Email and password inputs from .context/components/Input.examples.md
- Primary button for login from .context/components/Button.examples.md
- Responsive design following .context/guidelines/responsive-design.md"

# Step 2: Add validation
claude "Add form validation to the login page. Show error alerts using .context/components/Alert.examples.md when validation fails."

# Step 3: Add accessibility
claude "Ensure the login page meets all requirements in .context/guidelines/accessibility.md. Add proper ARIA labels and keyboard navigation."
```

### Example 2: Building a Dashboard

```bash
# Step 1: Create layout
claude "Create a dashboard using .context/templates/dashboard-layout.md with navigation items for: Dashboard, Analytics, Users, Settings"

# Step 2: Add stat cards
claude "Add 4 stat cards to the dashboard showing: Total Users, Revenue, Active Sessions, Conversion Rate. Use the stats card pattern from .context/components/Card.examples.md"

# Step 3: Add data table
claude "Add a users table below the stats cards. Follow the design system colors and spacing from .context/design-system.md"
```

### Example 3: Form with Validation

```bash
claude "Create a contact form with:
- Name, email, phone, and message fields using .context/components/Input.examples.md
- Submit button using .context/components/Button.examples.md
- Show success alert on submit using .context/components/Alert.examples.md
- Show error alert if validation fails
- Follow accessibility guidelines from .context/guidelines/accessibility.md"
```

### Example 4: Responsive Gallery

```bash
claude "Create an image gallery with:
- Card grid layout from .context/components/Card.examples.md
- 1 column on mobile, 2 on tablet, 3 on desktop per .context/guidelines/responsive-design.md
- Hover effects that match the design system
- Loading states"
```

## Tips for Better Results

### Be Specific About Files

❌ Bad: "Use the design system"
✅ Good: "Use .context/components/Button.examples.md"

### Reference Multiple Times

Don't assume the AI remembers from earlier in the conversation:

```bash
claude "Add a modal dialog. Use the Button component from .context/components/Button.examples.md for the close button and follow accessibility modal guidelines from .context/guidelines/accessibility.md"
```

### Ask for Design System Compliance

```bash
claude "Review this component and ensure it follows .context/design-system.md. List any deviations."
```

### Request Specific Variants

```bash
claude "Create an error state for this form using the error Alert from .context/components/Alert.examples.md and the error Input state from .context/components/Input.examples.md"
```

## Common Workflows

### Starting a New Feature

```bash
# 1. Plan the feature
claude "I need to build a user settings page. Based on .context/design-system.md and available components in .context/components/, suggest a structure."

# 2. Build the layout
claude "Create the settings page using the suggested structure. Use the dashboard layout from .context/templates/dashboard-layout.md"

# 3. Add components
claude "Add form sections using Card components and Input components from .context/"

# 4. Review and refine
claude "Review the settings page against .context/guidelines/accessibility.md and fix any issues."
```

### Refactoring Existing Code

```bash
# 1. Audit
claude "Compare src/components/Button.jsx with .context/components/Button.examples.md and list differences."

# 2. Update
claude "Update src/components/Button.jsx to match the design system patterns in .context/components/Button.examples.md. Preserve existing functionality."

# 3. Test
claude "Check if the updated button is used correctly throughout the app and flag any misuses."
```

### Adding New Components to Design System

```bash
# 1. Generate template
claude "Create a new component documentation file for a Tabs component following the format used in .context/components/Button.examples.md. Include variants, states, accessibility guidelines, and usage rules for AI."

# 2. Review
claude "Review the new Tabs documentation and ensure it's consistent with other components in .context/components/"
```

## Integration with Git Workflow

### Feature Branch Workflow

```bash
# Start feature
git checkout -b feature/user-dashboard

# Build with design system
claude "Build user dashboard using .context/templates/dashboard-layout.md"

# Ensure consistency before PR
claude "Review all changed files and ensure they follow .context/design-system.md. Create a checklist of any design system violations."
```

### Pre-commit Checks

```bash
# Audit before committing
claude "Review staged files and verify compliance with:
- .context/design-system.md
- .context/guidelines/accessibility.md  
- .context/guidelines/responsive-design.md"
```

## Troubleshooting

### AI Not Following Design System

**Problem**: AI generates code that doesn't match the design system.

**Solutions**:
```bash
# Be more explicit
claude "Create a button that EXACTLY matches the primary button in .context/components/Button.examples.md. Use the same classes and structure."

# Provide context multiple times
claude "Using .context/components/Button.examples.md as reference, create a submit button. The button must use: px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700"
```

### Inconsistent Results

**Problem**: AI produces different styles each time.

**Solutions**:
```bash
# Reference specific examples
claude "Create 3 stat cards that match EXACTLY the stats card example in .context/components/Card.examples.md"

# Create a component library
claude "Create a shared Button component at src/components/Button.jsx based on .context/components/Button.examples.md. Use this component throughout the app instead of inline buttons."
```

### Complex Features

**Problem**: Feature requires many components and patterns.

**Solutions**:
```bash
# Break into steps
claude "Step 1: Create the layout structure for a user management page using .context/templates/dashboard-layout.md"

# Then continue
claude "Step 2: Add a user table to the management page. Use Card wrapper from .context/components/Card.examples.md"

claude "Step 3: Add action buttons using .context/components/Button.examples.md"
```

## Best Practices

1. **Always reference file paths explicitly**
2. **Combine design system references for complex features**
3. **Ask for compliance checks after generation**
4. **Break large features into steps**
5. **Request specific variants when needed**
6. **Review accessibility after each component**
7. **Audit existing code against design system regularly**
8. **Update design system when new patterns emerge**

## Example Prompts Library

Copy-paste ready prompts:

```bash
# Button with loading state
claude "Create a submit button with loading state from .context/components/Button.examples.md"

# Form with validation
claude "Create a form using .context/components/Input.examples.md with validation and error states from .context/components/Alert.examples.md"

# Responsive card grid
claude "Create a 3-column card grid using .context/components/Card.examples.md and responsive patterns from .context/guidelines/responsive-design.md"

# Accessible modal
claude "Create an accessible modal dialog following .context/guidelines/accessibility.md with buttons from .context/components/Button.examples.md"

# Dashboard page
claude "Create a dashboard page using .context/templates/dashboard-layout.md with stat cards from .context/components/Card.examples.md"
```

## Measuring Success

Your design system is working well when:

✅ AI generates consistent components on first try
✅ No manual styling adjustments needed
✅ All components pass accessibility audits
✅ Code reviews focus on logic, not styling
✅ New team members can build features quickly
✅ Design system is reference in most AI prompts

---

**Pro Tip**: Keep this guide open while working with AI tools. Reference it when crafting prompts for best results.
