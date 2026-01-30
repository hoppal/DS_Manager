/** @type {import('tailwindcss').Config} */
const tokens = require('./.context/tokens/design-tokens.json');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "../packages/oppal-ui/src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: tokens.colors.primary,
                teal: tokens.colors.teal,
                success: tokens.colors.success,
                warning: tokens.colors.warning,
                error: tokens.colors.error,
                neutral: tokens.colors.neutral,
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
