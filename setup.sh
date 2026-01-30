#!/bin/bash

# Design System Setup Script
# This script copies the design system to your project and optionally customizes it

set -e

echo "🎨 Design System Setup"
echo "====================="
echo ""

# Check if running from correct directory
if [ ! -f "README.md" ]; then
    echo "❌ Error: Please run this script from the design-system-template directory"
    exit 1
fi

# Get target project path
read -p "Enter the path to your project (or press Enter for current directory): " TARGET_PATH

if [ -z "$TARGET_PATH" ]; then
    TARGET_PATH="."
fi

# Expand ~ to home directory
TARGET_PATH="${TARGET_PATH/#\~/$HOME}"

# Check if target exists
if [ ! -d "$TARGET_PATH" ]; then
    echo "❌ Error: Directory $TARGET_PATH does not exist"
    exit 1
fi

# Check if .context already exists
if [ -d "$TARGET_PATH/.context" ]; then
    read -p "⚠️  .context directory already exists. Overwrite? (y/N): " OVERWRITE
    if [[ ! $OVERWRITE =~ ^[Yy]$ ]]; then
        echo "Setup cancelled."
        exit 0
    fi
    rm -rf "$TARGET_PATH/.context"
fi

# Copy design system
echo ""
echo "📁 Copying design system files..."
cp -r .context "$TARGET_PATH/"
echo "✓ Design system copied to $TARGET_PATH/.context"

# Ask if user wants to customize
echo ""
read -p "Would you like to customize the primary color? (y/N): " CUSTOMIZE

if [[ $CUSTOMIZE =~ ^[Yy]$ ]]; then
    read -p "Enter your primary color hex code (e.g., #0066cc): " PRIMARY_COLOR
    
    if [[ $PRIMARY_COLOR =~ ^#[0-9A-Fa-f]{6}$ ]]; then
        # Update design tokens (simple find/replace for primary-600)
        TOKENS_FILE="$TARGET_PATH/.context/tokens/design-tokens.json"
        
        # Create a backup
        cp "$TOKENS_FILE" "$TOKENS_FILE.backup"
        
        # Replace primary-600 color
        sed -i.tmp "s/\"600\": \"#2563eb\"/\"600\": \"$PRIMARY_COLOR\"/g" "$TOKENS_FILE"
        rm -f "$TOKENS_FILE.tmp"
        
        echo "✓ Primary color updated to $PRIMARY_COLOR"
        echo "  (Backup saved as design-tokens.json.backup)"
    else
        echo "⚠️  Invalid hex color format. Skipping customization."
    fi
fi

# Ask about framework setup
echo ""
echo "Framework Integration"
echo "--------------------"
read -p "Are you using Tailwind CSS? (y/N): " USES_TAILWIND

if [[ $USES_TAILWIND =~ ^[Yy]$ ]]; then
    cat > "$TARGET_PATH/tailwind.config.example.js" << 'EOF'
// Example Tailwind configuration with design system tokens
const tokens = require('./.context/tokens/design-tokens.json');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        success: tokens.colors.success,
        warning: tokens.colors.warning,
        error: tokens.colors.error,
        info: tokens.colors.info,
        gray: tokens.colors.gray,
      },
      spacing: tokens.spacing,
      fontFamily: tokens.typography.fontFamily,
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
    },
  },
  plugins: [],
}
EOF
    echo "✓ Created tailwind.config.example.js"
    echo "  Rename to tailwind.config.js and customize as needed"
fi

# Create a getting started guide
cat > "$TARGET_PATH/.context/GETTING_STARTED.md" << 'EOF'
# Getting Started with Your Design System

## Quick Reference

### Using with AI Tools

```bash
# Claude Code
claude "Create a login form following .context/design-system.md"

# Gemini CLI  
gemini "Build a dashboard using .context/templates/dashboard-layout.md"
```

### Component Reference

- **Buttons**: `.context/components/Button.examples.md`
- **Inputs**: `.context/components/Input.examples.md`
- **Cards**: `.context/components/Card.examples.md`
- **Alerts**: `.context/components/Alert.examples.md`

### Templates

- **Dashboard**: `.context/templates/dashboard-layout.md`

### Guidelines

- **Accessibility**: `.context/guidelines/accessibility.md`
- **Responsive Design**: `.context/guidelines/responsive-design.md`

## Next Steps

1. Review `design-system.md` for color palette and spacing
2. Customize `tokens/design-tokens.json` for your brand
3. Reference components in your AI prompts
4. Add new components as patterns emerge

## Customization

Edit `.context/tokens/design-tokens.json` to change:
- Colors
- Spacing scale
- Typography
- Border radius
- Shadows

## Integration

See the main README.md for framework-specific integration instructions.
EOF

echo "✓ Created .context/GETTING_STARTED.md"

# Summary
echo ""
echo "✅ Setup Complete!"
echo ""
echo "📚 Next Steps:"
echo "1. Review $TARGET_PATH/.context/GETTING_STARTED.md"
echo "2. Customize $TARGET_PATH/.context/tokens/design-tokens.json"
echo "3. Start building with AI: reference .context/ files in your prompts"
echo ""
echo "💡 Example AI prompt:"
echo '   "Create a contact form using .context/components/Input.examples.md"'
echo ""
echo "For more information, see $TARGET_PATH/.context/../README.md"
echo ""
