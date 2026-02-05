/**
 * Prism Design System - Figma Component Generator
 * 
 * INSTRUCTIONS:
 * 1. Install the "Scripter" plugin in Figma (by Rasmus Andersson).
 * 2. Open Scripter and create a new script.
 * 3. Copy and paste ALL the code below into Scripter.
 * 4. Run the script.
 * 
 * It will generate a page called "Prism DS Components" with:
 * - Color Palette
 * - Buttons (Primary, Secondary, Outline)
 * - Stat Card
 */

// --- 1. SETUP & UTILS ---

const page = figma.createPage();
page.name = "Prism DS Components";
figma.currentPage = page;

// Load fonts async
await figma.loadFontAsync({ family: "Inter", style: "Regular" });
await figma.loadFontAsync({ family: "Inter", style: "Medium" });
await figma.loadFontAsync({ family: "Inter", style: "Bold" });
await figma.loadFontAsync({ family: "Inter", style: "Extra Bold" });

// Token Definitions (Synced with Code)
const colors = {
    primary: { 500: "#00af91", 50: "#e6f7f4", 600: "#009c82" },
    neutral: { 900: "#111827", 600: "#4b5563", 500: "#6b7280", 200: "#e5e7eb", 50: "#f9fafb", white: "#ffffff" },
    success: { 500: "#10b981", 100: "#dcfce7", 800: "#166534" },
    danger: { 500: "#ef4444" }
};

const spacing = { 2: 8, 3: 12, 4: 16, 6: 24 };
const radius = { md: 8, lg: 12 };

// Helper to hex to rgb
function hexToRgb(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16) / 255,
        g: parseInt(result[2], 16) / 255,
        b: parseInt(result[3], 16) / 255
    } : { r: 0, g: 0, b: 0 };
}

function createText(content, x, y, size = 16, weight = "Regular", colorHex = "#111827") {
    const text = figma.createText();
    text.characters = content;
    text.x = x;
    text.y = y;
    text.fontSize = size;
    text.fontName = { family: "Inter", style: weight };
    text.fills = [{ type: 'SOLID', color: hexToRgb(colorHex) }];
    return text;
}

// --- 2. GENERATE COMPONENT: BUTTON ---

function createButton(label, variant = "primary", x, y) {
    const frame = figma.createFrame();
    frame.name = `Button/${variant}`;
    frame.layoutMode = "HORIZONTAL";
    frame.primaryAxisAlignItems = "CENTER";
    frame.counterAxisAlignItems = "CENTER";
    frame.paddingLeft = 16;
    frame.paddingRight = 16;
    frame.paddingTop = 8;
    frame.paddingBottom = 8;
    frame.cornerRadius = 8;
    frame.x = x;
    frame.y = y;

    let bgHex = colors.primary[500];
    let textHex = "#ffffff";
    let borderHex = null;

    if (variant === "secondary") {
        bgHex = colors.primary[50];
        textHex = colors.primary[600];
    } else if (variant === "outline") {
        bgHex = "#ffffff";
        textHex = colors.neutral[600];
        borderHex = colors.neutral[200];
    }

    // Background
    frame.fills = [{ type: 'SOLID', color: hexToRgb(bgHex) }];

    // Border (Stroke)
    if (borderHex) {
        frame.strokes = [{ type: 'SOLID', color: hexToRgb(borderHex) }];
        frame.strokeWeight = 1;
    }

    // Label
    const text = createText(label, 0, 0, 14, "Medium", textHex);
    frame.appendChild(text);

    // Resize to fit content
    frame.resize(frame.width, frame.height);

    return frame;
}

// --- 3. GENERATE COMPONENT: STAT CARD ---

function createStatCard(title, value, trend, x, y) {
    const card = figma.createFrame();
    card.name = "Stat Card";
    card.layoutMode = "VERTICAL";
    card.itemSpacing = 16;
    card.paddingLeft = 24;
    card.paddingRight = 24;
    card.paddingTop = 24;
    card.paddingBottom = 24;
    card.cornerRadius = 12;
    card.fills = [{ type: 'SOLID', color: hexToRgb(colors.neutral.white) }];
    // Add Shadow (approximate shadow-md)
    card.effects = [{
        type: 'DROP_SHADOW',
        color: { r: 0, g: 0, b: 0, a: 0.1 },
        offset: { x: 0, y: 4 },
        radius: 6,
        spread: -1,
        visible: true,
        blendMode: 'NORMAL'
    }];
    card.x = x;
    card.y = y;
    card.resize(300, 150);

    // Header
    const header = figma.createFrame();
    header.layoutMode = "HORIZONTAL";
    header.primaryAxisAlignItems = "SPACE_BETWEEN";
    header.layoutAlign = "STRETCH";
    header.fills = [];

    const titleText = createText(title, 0, 0, 14, "Medium", colors.neutral[500]);
    header.appendChild(titleText);
    card.appendChild(header);

    // Value
    const valueText = createText(value, 0, 0, 30, "Bold", colors.neutral[900]);
    card.appendChild(valueText);

    // Trend
    const trendFrame = figma.createFrame();
    trendFrame.layoutMode = "HORIZONTAL";
    trendFrame.itemSpacing = 4;
    trendFrame.fills = [];

    const trendColor = trend.includes("+") ? colors.success[800] : colors.danger[500];
    const trendBg = trend.includes("+") ? colors.success[100] : "#fee2e2"; // red-100 approx

    const badge = figma.createFrame();
    badge.layoutMode = "HORIZONTAL";
    badge.paddingLeft = 8;
    badge.paddingRight = 8;
    badge.paddingTop = 2;
    badge.paddingBottom = 2;
    badge.cornerRadius = 99;
    badge.fills = [{ type: 'SOLID', color: hexToRgb(trendBg) }];

    const trendText = createText(trend, 0, 0, 12, "Medium", trendColor);
    badge.appendChild(trendText);

    const descText = createText("from last month", 0, 0, 12, "Regular", colors.neutral[500]);

    trendFrame.appendChild(badge);
    trendFrame.appendChild(descText);
    card.appendChild(trendFrame);

    return card;
}

// --- 4. EXECUTE DRAWING ---

// Title
createText("Prism Design System Generated Components", 0, -100, 32, "Extra Bold", colors.neutral[900]);

// Draw Buttons
createButton("Primary Button", "primary", 0, 0);
createButton("Secondary Button", "secondary", 150, 0);
createButton("Outline Button", "outline", 320, 0);

// Draw Cards
createStatCard("Total Revenue", "€124,500", "+12.5%", 0, 100);
createStatCard("Active Users", "1,234", "+5.2%", 340, 100);

figma.notify("Prism DS Components Generated! 🚀");
