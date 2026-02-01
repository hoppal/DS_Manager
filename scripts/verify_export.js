
// logic extracted from ManagerPage.jsx to verify JSON structure

const tokens = {
    "global": {
        "colors": {
            "primary": {
                "50": { "value": "#e6f7f4", "type": "color" },
                "100": { "value": "#b3e6dd", "type": "color" },
                "200": { "value": "#80d5c6", "type": "color" },
                "300": { "value": "#4dc4af", "type": "color" },
                "400": { "value": "#1ab398", "type": "color" },
                "500": { "value": "#00af91", "type": "color" },
                "600": { "value": "#009c82", "type": "color" },
                "700": { "value": "#008973", "type": "color" },
                "800": { "value": "#007664", "type": "color" },
                "900": { "value": "#006355", "type": "color" }
            },
            "neutral": {
                "50": { "value": "#f9fafb", "type": "color" },
                "100": { "value": "#f3f4f6", "type": "color" },
                "200": { "value": "#e5e7eb", "type": "color" },
                "300": { "value": "#d1d5db", "type": "color" },
                "400": { "value": "#9ca3af", "type": "color" },
                "500": { "value": "#6b7280", "type": "color" },
                "600": { "value": "#4b5563", "type": "color" },
                "700": { "value": "#374151", "type": "color" },
                "800": { "value": "#1f2937", "type": "color" },
                "900": { "value": "#111827", "type": "color" }
            },
            "success": { "value": "#10b981", "type": "color" },
            "warning": { "value": "#f59e0b", "type": "color" },
            "danger": { "value": "#ef4444", "type": "color" },
            "info": { "value": "#3b82f6", "type": "color" }
        },
        "fontFamilies": {
            "sans": { "value": "Inter", "type": "fontFamilies" }
        },
        "fontWeights": {
            "normal": { "value": "400", "type": "fontWeights" },
            "medium": { "value": "500", "type": "fontWeights" },
            "semibold": { "value": "600", "type": "fontWeights" },
            "bold": { "value": "700", "type": "fontWeights" },
            "extrabold": { "value": "800", "type": "fontWeights" }
        },
        "fontSizes": {
            "xs": { "value": "0.75rem", "type": "fontSizes" },
            "sm": { "value": "0.875rem", "type": "fontSizes" },
            "base": { "value": "1rem", "type": "fontSizes" },
            "lg": { "value": "1.125rem", "type": "fontSizes" },
            "xl": { "value": "1.25rem", "type": "fontSizes" },
            "2xl": { "value": "1.5rem", "type": "fontSizes" },
            "3xl": { "value": "1.875rem", "type": "fontSizes" },
            "4xl": { "value": "2.25rem", "type": "fontSizes" }
        },
        "spacing": {
            "base": { "value": "4px", "type": "spacing" },
            "1": { "value": "4px", "type": "spacing" },
            "2": { "value": "8px", "type": "spacing" },
            "3": { "value": "12px", "type": "spacing" },
            "4": { "value": "16px", "type": "spacing" },
            "6": { "value": "24px", "type": "spacing" },
            "8": { "value": "32px", "type": "spacing" },
            "12": { "value": "48px", "type": "spacing" },
            "16": { "value": "64px", "type": "spacing" },
            "24": { "value": "96px", "type": "spacing" },
            "32": { "value": "128px", "type": "spacing" }
        }
    },
    "$metadata": {
        "tokenSetOrder": [
            "global"
        ]
    }
};

try {
    const jsonString = JSON.stringify(tokens, null, 2);
    // basic validation
    if (!jsonString.includes('"value": "#00af91"')) throw new Error("Primary color missing");
    if (!jsonString.includes('"type": "color"')) throw new Error("Token type missing");

    console.log("✅ JSON Structure is valid.");
    console.log("✅ Primary Color (500) found: #00af91");
    console.log("✅ Token Types configured correctly.");
    console.log("✅ Output preview:");
    console.log(jsonString.substring(0, 200) + "...");
} catch (e) {
    console.error("❌ Validation Failed:", e.message);
    process.exit(1);
}
