/** @type {import('tailwindcss').Config} */
const tokens = require('./tokens/design-tokens.json');

module.exports = {
    theme: {
        extend: {
            colors: {
                primary: tokens.colors.primary,
                teal: tokens.colors.teal,
                neutral: tokens.colors.neutral,
                success: tokens.colors.success,
                error: tokens.colors.error,
            },
            borderRadius: tokens.borderRadius,
            boxShadow: tokens.shadows,
            spacing: tokens.spacing,
            fontFamily: tokens.typography.fontFamily,
            fontSize: tokens.typography.fontSize,
            fontWeight: tokens.typography.fontWeight,
        },
    },
};
