import React, { useState } from 'react';
import {
    StatCard,
    Button,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    DataTable,
    Alert,
    Input,
    DonutChart
} from '@oppal/ui';
import {
    Settings,
    Eye,
    Download,
    Copy,
    Check,
    Palette,
    Type,
    Layout,
    Terminal,
    ExternalLink,
    Code,
    MessageCircle,
    Layers,
    Clipboard,
    Search,
    Grid,
    RotateCcw,
    Edit,
    ChevronDown
} from 'lucide-react';
import { ICON_CATEGORIES, ALL_ICONS } from '../constants/icons';

export default function ManagerPage() {
    const [activeTab, setActiveTab] = useState('gallery');
    const [copied, setCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText('./setup.sh');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const defaultColors = [
        { name: 'Primary', class: 'bg-primary-500', hex: '#00af91', key: 'primary' },
        { name: 'Teal', class: 'bg-teal-500', hex: '#009b9b', key: 'teal' },
        { name: 'Success', class: 'bg-success-500', hex: '#22c55e', key: 'success' },
        { name: 'Warning', class: 'bg-warning-500', hex: '#f97316', key: 'warning' },
        { name: 'Error', class: 'bg-error-500', hex: '#ef4444', key: 'danger' },
        { name: 'Neutral', class: 'bg-neutral-500', hex: '#6b7280', key: 'neutral' },
    ];

    const [tokenColors, setTokenColors] = useState(defaultColors);

    const updateColor = (index, newHex) => {
        // Only update if it's a valid hex or starts with # for typing
        if (/^#([0-9A-F]{3,6})$/i.test(newHex) || newHex === '#') {
            const newColors = [...tokenColors];
            newColors[index] = { ...newColors[index], hex: newHex, isCustom: true };
            setTokenColors(newColors);
        }
    };

    const resetColor = (index) => {
        const newColors = [...tokenColors];
        newColors[index] = { ...defaultColors[index], isCustom: false };
        setTokenColors(newColors);
    };

    const resetAllColors = () => setTokenColors(defaultColors);

    const defaultTypography = [
        { id: 'h1', name: 'Heading 1', family: 'Inter', size: '2.25rem', weight: '800', description: 'Primary page titles' },
        { id: 'h2', name: 'Heading 2', family: 'Inter', size: '1.5rem', weight: '700', description: 'Section headers' },
        { id: 'body', name: 'Body Text', family: 'Inter', size: '1rem', weight: '400', description: 'Default paragraph text' },
    ];

    const [tokenTypography, setTokenTypography] = useState(defaultTypography);

    const updateTypography = (id, updates) => {
        setTokenTypography(prev => prev.map(t => t.id === id ? { ...t, ...updates, isCustom: true } : t));
    };

    const resetTypography = (id) => {
        const original = defaultTypography.find(t => t.id === id);
        setTokenTypography(prev => prev.map(t => t.id === id ? { ...original, isCustom: false } : t));
    };

    const resetAllTypography = () => setTokenTypography(defaultTypography);

    const [tokenRadius, setTokenRadius] = useState(8);
    const [tokenSpacing, setTokenSpacing] = useState(24);

    // Dynamic Font & Color & Layout Loader
    React.useEffect(() => {
        const families = [...new Set(tokenTypography.map(t => t.family))];
        const linkId = 'google-fonts-loader';
        let link = document.getElementById(linkId);

        if (!link) {
            link = document.createElement('link');
            link.id = linkId;
            link.rel = 'stylesheet';
            document.head.appendChild(link);
        }

        const fontString = families.map(f => `family=${f.replace(/\s+/g, '+')}:wght@400;500;600;700;800`).join('&');
        link.href = `https://fonts.googleapis.com/css2?${fontString}&display=swap`;

        // Apply to CSS Variables for Global Sync
        const root = document.documentElement;
        tokenTypography.forEach(t => {
            root.style.setProperty(`--font-${t.id}`, `'${t.family}', sans-serif`);
        });

        // Sync colors
        const primary = tokenColors.find(c => c.key === 'primary');
        if (primary) {
            root.style.setProperty('--color-primary-500', primary.hex);
            root.style.setProperty('--color-primary-600', primary.hex);
        }

        // Sync Layout
        root.style.setProperty('--radius-base', `${tokenRadius}px`);
        root.style.setProperty('--spacing-base', `${tokenSpacing}px`);

    }, [tokenTypography, tokenColors, tokenRadius, tokenSpacing]);

    const exportConfig = () => {
        // Map current colors to the tokens object
        const colorTokens = {};
        tokenColors.forEach(c => {
            if (c.key === 'primary' || c.key === 'neutral') {
                colorTokens[c.key] = { "500": { "value": c.hex } };
            } else {
                colorTokens[c.key] = { "value": c.hex };
            }
        });
        // Map typography
        const typoTokens = {};
        tokenTypography.forEach(t => {
            typoTokens[t.id] = {
                "fontFamily": { "value": t.family },
                "fontSize": { "value": t.size },
                "fontWeight": { "value": t.weight }
            };
        });

        const tokens = {
            "global": {
                "colors": {
                    ...colorTokens,
                    "info": { "value": "#3b82f6" }
                },
                "typography": typoTokens,
                "fontFamilies": {
                    "sans": { "value": tokenTypography.find(t => t.id === 'body')?.family || "Inter" }
                },
                "fontWeights": {
                    "normal": { "value": "400" },
                    "medium": { "value": "500" },
                    "semibold": { "value": "600" },
                    "bold": { "value": "700" },
                    "extrabold": { "value": "800" }
                },
                "fontSizes": {
                    "xs": { "value": "0.75rem" },
                    "sm": { "value": "0.875rem" },
                    "base": { "value": "1rem" },
                    "lg": { "value": "1.125rem" },
                    "xl": { "value": "1.25rem" },
                    "2xl": { "value": "1.5rem" },
                    "3xl": { "value": "1.875rem" },
                    "4xl": { "value": "2.25rem" }
                },
                "spacing": {
                    "base": { "value": `${tokenSpacing / 4}px` },
                    "1": { "value": `${tokenSpacing / 4}px` },
                    "2": { "value": `${tokenSpacing / 2}px` },
                    "3": { "value": `${tokenSpacing * 0.75}px` },
                    "4": { "value": `${tokenSpacing}px` },
                    "6": { "value": `${tokenSpacing * 1.5}px` },
                    "8": { "value": `${tokenSpacing * 2}px` },
                    "12": { "value": `${tokenSpacing * 3}px` },
                    "16": { "value": `${tokenSpacing * 4}px` },
                    "24": { "value": `${tokenSpacing * 6}px` },
                    "32": { "value": `${tokenSpacing * 8}px` }
                },
                "borderRadius": {
                    "base": { "value": `${tokenRadius}px` },
                    "lg": { "value": `${tokenRadius}px` },
                    "xl": { "value": `${tokenRadius * 1.5}px` }
                }
            }
        };

        const dataStr = JSON.stringify(tokens, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'prism-tokens.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    const tabs = [
        { id: 'gallery', label: 'Component Gallery', icon: Layout },
        { id: 'patterns', label: 'Patterns', icon: Layers },
        { id: 'icons', label: 'Icons', icon: Grid },
        { id: 'tokens', label: 'Design Tokens', icon: Palette },
        { id: 'typography', label: 'Typography', icon: Type },
        { id: 'deploy', label: 'Deployment', icon: Terminal },
        { id: 'usage', label: 'AI Usage', icon: MessageCircle },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900">Prism DS Manager</h1>
                    <p className="text-neutral-600">Central hub for managing and applying the Prism Design System.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary" onClick={copyCommand}>
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied' : 'Copy Setup Script'}
                    </Button>
                    <Button onClick={exportConfig}>
                        <Download className="w-4 h-4 mr-2" />
                        Export Config
                    </Button>
                </div>
            </div>

            {/* Navigation Tabs */}
            <div className="flex border-b border-neutral-200 overflow-x-auto">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-neutral-500 hover:text-neutral-700 hover:border-neutral-300'
                            }`}
                    >
                        <tab.icon className="w-4 h-4" />
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-6">
                {activeTab === 'gallery' && <ComponentGallery />}
                {activeTab === 'patterns' && <PatternLibrary />}
                {activeTab === 'icons' && <IconBrowser />}
                {activeTab === 'tokens' && (
                    <TokensManager
                        colors={tokenColors}
                        updateColor={updateColor}
                        resetColor={resetColor}
                        resetAll={resetAllColors}
                        radius={tokenRadius}
                        setRadius={setTokenRadius}
                        spacing={tokenSpacing}
                        setSpacing={setTokenSpacing}
                    />
                )}
                {activeTab === 'typography' && (
                    <TypographyManager
                        typography={tokenTypography}
                        updateTypography={updateTypography}
                        resetTypography={resetTypography}
                        resetAll={resetAllTypography}
                    />
                )}
                {activeTab === 'deploy' && <DeployWizard />}
                {activeTab === 'usage' && <UsageGuide />}
            </div>
        </div>
    );
}

function UsageGuide() {
    const systemPrompt = `I am building an app using the Prism Design System.

## Design Tokens
- Primary (Teal): #00af91 — buttons, active states, charts
- Success: #16a34a — positive trends (▲)
- Error: #dc2626 — negative trends (▼)
- Neutral-50: #f8f9fa — backgrounds
- Neutral-900: #212529 — headings

## Typography
- Font: 'Inter', system-ui, sans-serif
- Metric values: text-4xl font-extrabold (800)
- Labels: text-xs font-medium uppercase

## Component Library: @oppal/ui
Available: Button, Card, StatCard, DataTable, Alert, Input, DonutChart, MiniBarChart, DashboardLayout, Sidebar

## Key APIs
\`\`\`jsx
<StatCard title="Total Spend" value="€90,000" trend="+13%" trendDirection="up" data={[10,20,30]} />
<DataTable title="Suppliers" columns={[{header:'Name',key:'name'}]} data={[{name:'Acme'}]} />
<Alert variant="info|success|warning|error">Message</Alert>
<Button variant="primary|secondary|outline|ghost|danger">Label</Button>
\`\`\`

## Rules
1. Always use components from @oppal/ui
2. Cards: white bg, shadow-md, rounded-lg, p-6
3. Tables: right-align numbers, uppercase headers
4. Charts: teal (#00af91), no gridlines`;

    const [copiedPrompt, setCopiedPrompt] = useState(false);
    const [copiedContext, setCopiedContext] = useState(false);

    const copyPrompt = () => {
        navigator.clipboard.writeText(systemPrompt);
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 2000);
    };

    const exportContext = async () => {
        try {
            const baseUrl = import.meta.env.BASE_URL || '/';
            const contextPath = `${baseUrl.endsWith('/') ? baseUrl : baseUrl + '/'}design-context/ai-context.md`;
            const response = await fetch(contextPath);

            if (response.ok) {
                const content = await response.text();
                navigator.clipboard.writeText(content);
                setCopiedContext(true);
                setTimeout(() => setCopiedContext(false), 2000);
            } else {
                // Fallback: copy system prompt if file not accessible
                navigator.clipboard.writeText(systemPrompt);
                setCopiedContext(true);
                setTimeout(() => setCopiedContext(false), 2000);
            }
        } catch {
            navigator.clipboard.writeText(systemPrompt);
            setCopiedContext(true);
            setTimeout(() => setCopiedContext(false), 2000);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-neutral-900">AI Collaboration Guide</h2>
                    <p className="text-neutral-600">
                        Maximize productivity by teaching Gemini or Claude about the Prism Design System.
                        Follow these steps to ensure the AI generates on-brand, compatible code.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs">1</span>
                                Copy Context
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">
                            Click "Export Full Context" to copy the complete design system reference to your clipboard.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs">2</span>
                                Paste to AI
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">
                            Paste the context as your first message to Claude or Gemini to set the design rules.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs">3</span>
                                Start Building
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">
                            Ask the AI to create components. It will use @oppal/ui and follow your brand automatically.
                        </CardContent>
                    </Card>
                </div>

                {/* Quick Export Button */}
                <div className="bg-gradient-to-r from-primary-500 to-teal-500 rounded-xl p-6 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-bold">Ready to use with AI?</h3>
                            <p className="text-primary-100 text-sm mt-1">One click to copy everything Claude or Gemini needs.</p>
                        </div>
                        <button
                            onClick={exportContext}
                            className="flex items-center gap-2 bg-white text-primary-600 px-5 py-2.5 rounded-lg font-semibold hover:bg-primary-50 transition-colors shadow-lg"
                        >
                            {copiedContext ? <Check className="w-5 h-5" /> : <Download className="w-5 h-5" />}
                            {copiedContext ? 'Copied!' : 'Export Full Context'}
                        </button>
                    </div>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">Quick System Prompt</h3>
                        <button
                            onClick={copyPrompt}
                            className="text-xs flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium"
                        >
                            {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedPrompt ? 'Copied!' : 'Copy Prompt'}
                        </button>
                    </div>
                    <div className="bg-neutral-900 rounded-xl p-6 font-mono text-sm leading-relaxed text-neutral-300 border border-neutral-800 shadow-lg max-h-80 overflow-y-auto">
                        <pre className="whitespace-pre-wrap">{systemPrompt}</pre>
                    </div>
                </section>
            </div>

            <div className="space-y-6">
                <Card className="bg-neutral-50 border-neutral-200">
                    <CardHeader>
                        <CardTitle className="text-lg">Pro Tips</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex gap-3">
                            <div className="mt-1"><Eye className="w-4 h-4 text-primary-500" /></div>
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">Visual Checks</p>
                                <p className="text-xs text-neutral-500">Ask the AI to "Check this for Prism compliance" after an edit.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1"><Code className="w-4 h-4 text-primary-500" /></div>
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">Component First</p>
                                <p className="text-xs text-neutral-500">Always ask the AI to use existing components before writing custom CSS.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1"><Terminal className="w-4 h-4 text-primary-500" /></div>
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">Share the Context File</p>
                                <p className="text-xs text-neutral-500">For new projects, share <code className="bg-neutral-200 px-1 rounded text-xs">design-context/ai-context.md</code></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Alert variant="info">
                    The full context file is at <code className="font-mono text-xs">design-context/ai-context.md</code> — share this with any AI tool!
                </Alert>
            </div>
        </div>
    );
}

function ComponentGallery() {
    return (
        <div className="space-y-8">
            {/* Stat Cards Section */}
            <section>
                <div className="flex items-center gap-2 mb-4">
                    <h2 className="text-lg font-semibold text-neutral-900">Stat Cards</h2>
                    <span className="px-2 py-0.5 text-xs font-medium bg-teal-100 text-teal-800 rounded">Interactive</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StatCard
                        title="Revenue"
                        value="€1.2M"
                        trend="+12%"
                        trendDirection="up"
                        data={[10, 20, 15, 30, 25, 40]}
                    />
                    <StatCard
                        title="Bounce Rate"
                        value="24.5%"
                        trend="-2.4%"
                        trendDirection="down"
                        data={[40, 35, 30, 32, 28, 24]}
                    />
                    <StatCard
                        title="New Users"
                        value="1,280"
                        trend="+5%"
                        trendDirection="neutral"
                    />
                </div>
            </section>

            {/* Buttons Section */}
            <section>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Buttons & Controls</h2>
                <Card>
                    <CardContent className="space-y-6">
                        <div className="flex flex-wrap gap-4">
                            <Button variant="primary">Primary Button</Button>
                            <Button variant="secondary">Secondary Button</Button>
                            <Button variant="outline">Outline</Button>
                            <Button variant="ghost">Ghost</Button>
                            <Button variant="danger">Danger</Button>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                            <Button size="sm">Small</Button>
                            <Button size="md">Medium</Button>
                            <Button size="lg">Large</Button>
                            <Button isLoading>Loading</Button>
                            <Button disabled>Disabled</Button>
                        </div>
                    </CardContent>
                </Card>
            </section>

            {/* Alerts Section */}
            <section>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Alerts</h2>
                <div className="space-y-4">
                    <Alert variant="info" title="Information">This is a standard informational alert.</Alert>
                    <Alert variant="success" title="Success">Data has been successfully exported.</Alert>
                    <Alert variant="warning" title="Warning">Your subscription is expiring in 3 days.</Alert>
                    <Alert variant="error" title="Error">Failed to connect to the server.</Alert>
                </div>
            </section>

            {/* Data Table Section */}
            <section>
                <h2 className="text-lg font-semibold text-neutral-900 mb-4">Data Management</h2>
                <DataTable
                    title="Recent Projects"
                    columns={[
                        { header: 'Project Name', key: 'name', fontWeight: 'medium' },
                        { header: 'Status', key: 'status' },
                        { header: 'Last Updated', key: 'updated', align: 'right' },
                    ]}
                    data={[
                        { name: 'Prism UI', status: 'Active', updated: '2 mins ago' },
                        { name: 'SupplyChain Pro', status: 'Draft', updated: '1 hour ago' },
                        { name: 'Finance Dashboard', status: 'Archived', updated: '3 days ago' },
                    ]}
                />
            </section>
        </div>
    );
}

function TokensManager({ colors, updateColor, resetColor, resetAll, radius, setRadius, spacing, setSpacing }) {
    return (
        <div className="space-y-8">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Color Palette</CardTitle>
                        <p className="text-sm text-neutral-500 mt-1">Click a color to customize it or type the hex code manually.</p>
                    </div>
                    {colors.some(c => c.isCustom) && (
                        <Button variant="ghost" size="sm" onClick={resetAll}>
                            Reset All
                        </Button>
                    )}
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                        {colors.map((color, index) => (
                            <div key={color.name} className="space-y-3">
                                <div className="relative group">
                                    <div
                                        className={`aspect-square rounded-2xl shadow-inner cursor-pointer transition-all duration-300 group-hover:scale-[1.05] group-hover:shadow-lg ${!color.isCustom ? color.class : ''}`}
                                        style={color.isCustom ? { backgroundColor: color.hex } : {}}
                                        onClick={() => document.getElementById(`color-picker-${index}`).click()}
                                    />
                                    <input
                                        id={`color-picker-${index}`}
                                        type="color"
                                        value={color.hex}
                                        onChange={(e) => updateColor(index, e.target.value)}
                                        className="absolute inset-0 w-full h-full opacity-0 invisible"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <div className="bg-white/90 p-2 rounded-xl shadow-xl backdrop-blur-sm border border-white/20">
                                            <Edit className="w-5 h-5 text-neutral-800" />
                                        </div>
                                    </div>
                                    {color.isCustom && (
                                        <button
                                            onClick={(e) => { e.stopPropagation(); resetColor(index); }}
                                            className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full shadow-md border border-neutral-100 flex items-center justify-center hover:bg-neutral-50 transition-colors z-10"
                                            title="Reset to default"
                                        >
                                            <RotateCcw className="w-3 h-3 text-neutral-500" />
                                        </button>
                                    )}
                                </div>
                                <div className="space-y-1.5 px-1">
                                    <p className="text-sm font-bold text-neutral-900">{color.name}</p>
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <input
                                                type="text"
                                                value={color.hex}
                                                onChange={(e) => updateColor(index, e.target.value)}
                                                className="w-full text-[10px] text-neutral-600 font-mono uppercase tracking-widest bg-neutral-50 border border-neutral-200 rounded px-1.5 py-0.5 focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500 transition-all"
                                            />
                                        </div>
                                        {color.isCustom && (
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" title="Customized" />
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Border Radius</CardTitle>
                        <p className="text-sm text-neutral-500 mt-1">Adjust the global corner roundness for all components.</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-neutral-700">Corner Radius</span>
                            <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded font-mono text-xs">{radius}px</span>
                        </div>
                        <input
                            type="range"
                            min="0"
                            max="32"
                            value={radius}
                            onChange={(e) => setRadius(parseInt(e.target.value))}
                            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                        />
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[0, 8, 16].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setRadius(val)}
                                    className={`py-6 border-2 rounded-xl transition-all flex items-center justify-center font-medium text-xs ${radius === val ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-neutral-100 bg-white text-neutral-400 hover:border-neutral-200'}`}
                                >
                                    {val === 0 ? 'Sharp' : val === 8 ? 'Default' : 'Round'}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Base Spacing</CardTitle>
                        <p className="text-sm text-neutral-500 mt-1">Control the padding and gaps between UI elements.</p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center justify-between text-sm">
                            <span className="font-medium text-neutral-700">Internal Padding</span>
                            <span className="bg-primary-50 text-primary-700 px-2 py-1 rounded font-mono text-xs">{spacing}px</span>
                        </div>
                        <input
                            type="range"
                            min="8"
                            max="48"
                            value={spacing}
                            onChange={(e) => setSpacing(parseInt(e.target.value))}
                            className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                        />
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[12, 24, 36].map(val => (
                                <button
                                    key={val}
                                    onClick={() => setSpacing(val)}
                                    className={`py-3 border-2 rounded-xl transition-all flex flex-col items-center justify-center font-medium text-xs ${spacing === val ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-neutral-100 bg-white text-neutral-400 hover:border-neutral-200'}`}
                                >
                                    <div className="flex gap-1 mb-1">
                                        <div className="w-1 h-3 bg-current rounded-full" />
                                        <div className="w-1 h-3 bg-current rounded-full" />
                                    </div>
                                    {val === 12 ? 'Compact' : val === 24 ? 'Cozy' : 'Spacious'}
                                </button>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

function TypographyManager({ typography, updateTypography, resetTypography, resetAll }) {
    const googleFonts = [
        'Inter', 'Roboto', 'Open Sans', 'Lato', 'Poppins', 'Montserrat',
        'Playfair Display', 'Merriweather', 'Lora', 'Oswald',
        'JetBrains Mono', 'Fira Code', 'Space Grotesk', 'Outfit', 'Plus Jakarta Sans'
    ].sort();

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
                <div>
                    <h2 className="text-xl font-bold text-neutral-900">Typography System</h2>
                    <p className="text-sm text-neutral-500">Configure font families for different text levels.</p>
                </div>
                {typography.some(t => t.isCustom) && (
                    <Button variant="ghost" size="sm" onClick={resetAll}>
                        <RotateCcw className="w-3.5 h-3.5 mr-2" />
                        Reset All
                    </Button>
                )}
            </div>

            <div className="grid grid-cols-1 gap-6">
                {typography.map((typo) => (
                    <Card key={typo.id} className="overflow-hidden border-neutral-200">
                        <CardHeader className="bg-neutral-50/50 border-b border-neutral-100 py-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div>
                                    <div className="flex items-center gap-2">
                                        <CardTitle className="text-lg">{typo.name}</CardTitle>
                                        {typo.isCustom && (
                                            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                                        )}
                                    </div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider font-medium">{typo.description}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <select
                                            value={typo.family}
                                            onChange={(e) => updateTypography(typo.id, { family: e.target.value })}
                                            className="appearance-none bg-white border border-neutral-200 rounded-lg pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all font-medium min-w-[180px]"
                                        >
                                            {googleFonts.map(font => (
                                                <option key={font} value={font}>{font}</option>
                                            ))}
                                        </select>
                                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none" />
                                    </div>
                                    {typo.isCustom && (
                                        <button
                                            onClick={() => resetTypography(typo.id)}
                                            className="p-2 text-neutral-400 hover:text-neutral-600 hover:bg-neutral-100 rounded-lg transition-colors"
                                            title="Reset to default"
                                        >
                                            <RotateCcw className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="p-8">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-xs font-mono text-neutral-400 border-b border-neutral-50 pb-2">
                                    <span>Family: {typo.family}</span>
                                    <span>Size: {typo.size}</span>
                                    <span>Weight: {typo.weight}</span>
                                </div>
                                <p
                                    style={{
                                        fontFamily: `'${typo.family}', sans-serif`,
                                        fontSize: typo.size,
                                        fontWeight: typo.weight,
                                        lineHeight: 1.2
                                    }}
                                    className="text-neutral-900"
                                >
                                    {typo.id === 'body'
                                        ? 'The quick brown fox jumps over the lazy dog. Designers use this text to see how their typography looks in real-world scenarios. It helps in assessing spacing, weight, and readability.'
                                        : 'Sphinx of black quartz, judge my vow.'
                                    }
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}

function DeployWizard() {
    const [copiedSetup, setCopiedSetup] = useState(false);

    const copySetupCommand = () => {
        navigator.clipboard.writeText('./setup.sh');
        setCopiedSetup(true);
        setTimeout(() => setCopiedSetup(false), 2000);
    };

    const openDocumentation = () => {
        window.open('/DS_Manager/design-context/design-system.md', '_blank');
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">Deploy to New Project</h2>
                <p className="text-neutral-600">Apply the Prism Design System to your existing projects using our CLI tool.</p>

                <div className="space-y-4">
                    <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-neutral-500">Terminal</span>
                            <button
                                onClick={copySetupCommand}
                                className="text-neutral-400 hover:text-white transition-colors"
                                title="Copy command"
                            >
                                {copiedSetup ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                        <p><span className="text-primary-400">$</span> ./setup.sh</p>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-semibold text-neutral-900">Steps:</h3>
                        <ul className="space-y-2 text-sm text-neutral-600 list-decimal list-inside">
                            <li>Open your project root in the terminal</li>
                            <li>Run the setup script provided above</li>
                            <li>Follow the interactive prompts to customize your tokens</li>
                            <li>Initialize Tailwind with the generated config</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Card className="bg-primary-50 border-primary-100">
                <CardContent className="pt-6">
                    <div className="space-y-4">
                        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                            <Code className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-bold text-primary-900">Tailwind Preset</h3>
                        <p className="text-sm text-primary-700">
                            Our Tailwind preset automatically syncs your design tokens with your CSS utility classes.
                            Changes made in the manager will be reflected in your project's next build.
                        </p>
                        <Button
                            variant="outline"
                            className="w-full bg-white border-primary-200 text-primary-700 hover:bg-primary-50"
                            onClick={openDocumentation}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Documentation
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

// Pattern Library Component
function PatternLibrary() {
    const [copiedPattern, setCopiedPattern] = useState(null);

    // Sample data for previews
    const sampleOrders = [
        { id: 'ORD-001', customer: 'Acme Corp', amount: '€12,450' },
        { id: 'ORD-002', customer: 'Tech Inc', amount: '€8,200' },
    ];

    const patterns = [
        {
            id: 'stats-row',
            name: 'Stats Row',
            description: '3-column grid of StatCards for KPI display',
            category: 'Dashboard',
            code: `<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <StatCard title="Revenue" value="€90,000" trend="+12%" trendDirection="up" />
  <StatCard title="Users" value="1,234" trend="+5%" trendDirection="up" />
  <StatCard title="Orders" value="456" trend="-2%" trendDirection="down" />
</div>`,
            render: () => (
                <div className="grid grid-cols-3 gap-3 scale-[0.85] origin-top-left">
                    <StatCard title="Revenue" value="€90K" trend="+12%" trendDirection="up" />
                    <StatCard title="Users" value="1,234" trend="+5%" trendDirection="up" />
                    <StatCard title="Orders" value="456" trend="-2%" trendDirection="down" />
                </div>
            ),
        },
        {
            id: 'table-with-header',
            name: 'Data Table Section',
            description: 'Card-wrapped table with header and filters',
            category: 'Data',
            code: `<Card>
  <CardHeader className="flex flex-row items-center justify-between">
    <CardTitle>Recent Orders</CardTitle>
    <Button variant="outline" size="sm">Export</Button>
  </CardHeader>
  <CardContent>
    <DataTable columns={[...]} data={orders} />
  </CardContent>
</Card>`,
            render: () => (
                <Card className="scale-[0.9] origin-top-left">
                    <CardHeader className="flex flex-row items-center justify-between py-3">
                        <CardTitle className="text-sm">Recent Orders</CardTitle>
                        <Button variant="outline" size="sm">Export</Button>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <DataTable
                            columns={[
                                { header: 'Order ID', key: 'id' },
                                { header: 'Customer', key: 'customer' },
                                { header: 'Amount', key: 'amount', align: 'right' },
                            ]}
                            data={sampleOrders}
                        />
                    </CardContent>
                </Card>
            ),
        },
        {
            id: 'chart-grid',
            name: 'Chart Grid',
            description: '3 donut charts for percentage metrics',
            category: 'Charts',
            code: `<div className="grid grid-cols-3 gap-6">
  <Card>
    <CardContent className="flex justify-center">
      <DonutChart percentage={75} label="Conversion" />
    </CardContent>
  </Card>
  ...
</div>`,
            render: () => (
                <div className="flex gap-3 scale-[0.8] origin-top-left">
                    <DonutChart percentage={75} label="Conv" />
                    <DonutChart percentage={82} label="Ret" />
                    <DonutChart percentage={94} label="Sat" />
                </div>
            ),
        },
        {
            id: 'form-card',
            name: 'Form Card',
            description: 'Card with form inputs and submit button',
            category: 'Forms',
            code: `<Card className="max-w-md">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
  </CardHeader>
  <CardContent className="space-y-4">
    <Input label="Email" placeholder="you@example.com" />
    <Input label="Password" type="password" />
    <Button className="w-full">Sign Up</Button>
  </CardContent>
</Card>`,
            render: () => (
                <Card className="scale-[0.85] origin-top-left w-full">
                    <CardHeader className="py-3">
                        <CardTitle className="text-sm">Create Account</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0">
                        <Input label="Email" placeholder="you@example.com" />
                        <Button className="w-full" size="sm">Sign Up</Button>
                    </CardContent>
                </Card>
            ),
        },
        {
            id: 'alert-stack',
            name: 'Alert Stack',
            description: 'Stacked alerts for notifications',
            category: 'Feedback',
            code: `<div className="space-y-4">
  <Alert variant="success" title="Payment Received">
    Your payment has been processed.
  </Alert>
  <Alert variant="warning" title="Low Stock">
    3 products running low.
  </Alert>
  <Alert variant="error" title="Sync Failed">
    Unable to sync. Retry?
  </Alert>
</div>`,
            render: () => (
                <div className="space-y-2 scale-[0.85] origin-top-left">
                    <Alert variant="success" title="Payment Received">Processed</Alert>
                    <Alert variant="warning" title="Low Stock">3 items</Alert>
                    <Alert variant="error" title="Sync Failed">Retry?</Alert>
                </div>
            ),
        },
        {
            id: 'page-header',
            name: 'Page Header',
            description: 'Title, subtitle, and action buttons',
            category: 'Layout',
            code: `<div className="flex items-center justify-between gap-4 mb-6">
  <div>
    <h1 className="text-2xl font-bold">Dashboard</h1>
    <p className="text-neutral-600">Overview of metrics</p>
  </div>
  <div className="flex items-center gap-3">
    <Button variant="secondary">Settings</Button>
    <Button>Add New</Button>
  </div>
</div>`,
            render: () => (
                <div className="flex items-center justify-between gap-4 scale-[0.85] origin-top-left">
                    <div>
                        <h1 className="text-lg font-bold text-neutral-900">Dashboard</h1>
                        <p className="text-xs text-neutral-600">Overview of metrics</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button variant="secondary" size="sm">Settings</Button>
                        <Button size="sm">Add New</Button>
                    </div>
                </div>
            ),
        },
        {
            id: 'button-group',
            name: 'Button Group',
            description: 'Primary, secondary, and outline buttons together',
            category: 'Actions',
            code: `<div className="flex items-center gap-3">
  <Button>Save Changes</Button>
  <Button variant="secondary">Cancel</Button>
  <Button variant="outline">Reset</Button>
  <Button variant="ghost">Delete</Button>
</div>`,
            render: () => (
                <div className="flex items-center gap-2 scale-[0.85] origin-top-left flex-wrap">
                    <Button size="sm">Save</Button>
                    <Button variant="secondary" size="sm">Cancel</Button>
                    <Button variant="outline" size="sm">Reset</Button>
                    <Button variant="ghost" size="sm">Delete</Button>
                </div>
            ),
        },
        {
            id: 'search-bar',
            name: 'Search Bar',
            description: 'Input with search icon and filter button',
            category: 'Navigation',
            code: `<div className="flex items-center gap-3">
  <div className="relative flex-1">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
    <Input className="pl-10" placeholder="Search suppliers..." />
  </div>
  <Button variant="outline">Filters</Button>
</div>`,
            render: () => (
                <div className="flex items-center gap-2 scale-[0.9] origin-top-left">
                    <Input placeholder="Search suppliers..." />
                    <Button variant="outline" size="sm">Filters</Button>
                </div>
            ),
        },
        {
            id: 'metric-card-chart',
            name: 'Metric Card with Chart',
            description: 'StatCard with embedded mini bar chart',
            category: 'Dashboard',
            code: `<StatCard
  title="Monthly Revenue"
  value="€142,500"
  trend="+18.5%"
  trendDirection="up"
  data={[45, 52, 38, 65, 72, 58, 80, 95, 88, 102, 115, 142]}
/>`,
            render: () => (
                <div className="scale-[0.85] origin-top-left">
                    <StatCard
                        title="Monthly Revenue"
                        value="€142K"
                        trend="+18%"
                        trendDirection="up"
                        data={[45, 52, 38, 65, 72, 58, 80, 95, 88, 102, 115, 142]}
                    />
                </div>
            ),
        },
        {
            id: 'empty-state',
            name: 'Empty State',
            description: 'Placeholder for when no data exists',
            category: 'Feedback',
            code: `<Card className="text-center py-12">
  <CardContent>
    <div className="text-neutral-300 mb-4">
      <Inbox className="w-12 h-12 mx-auto" />
    </div>
    <h3 className="text-lg font-semibold text-neutral-700">No suppliers yet</h3>
    <p className="text-neutral-500 mt-1">Get started by adding your first supplier.</p>
    <Button className="mt-4">Add Supplier</Button>
  </CardContent>
</Card>`,
            render: () => (
                <Card className="text-center py-6 scale-[0.85] origin-top-left">
                    <CardContent>
                        <div className="text-neutral-300 mb-2">
                            <Layout className="w-8 h-8 mx-auto" />
                        </div>
                        <h3 className="text-sm font-semibold text-neutral-700">No data yet</h3>
                        <p className="text-xs text-neutral-500 mt-1">Add your first item</p>
                        <Button size="sm" className="mt-3">Add Item</Button>
                    </CardContent>
                </Card>
            ),
        },
        {
            id: 'two-col-layout',
            name: 'Two-Column Card Layout',
            description: 'Side-by-side cards for comparison',
            category: 'Layout',
            code: `<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <Card>
    <CardHeader><CardTitle>This Month</CardTitle></CardHeader>
    <CardContent>
      <StatCard title="Revenue" value="€45,000" />
    </CardContent>
  </Card>
  <Card>
    <CardHeader><CardTitle>Last Month</CardTitle></CardHeader>
    <CardContent>
      <StatCard title="Revenue" value="€38,000" />
    </CardContent>
  </Card>
</div>`,
            render: () => (
                <div className="grid grid-cols-2 gap-3 scale-[0.8] origin-top-left">
                    <Card>
                        <CardContent className="py-3">
                            <div className="text-xs text-neutral-500">This Month</div>
                            <div className="text-lg font-bold text-neutral-900">€45K</div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="py-3">
                            <div className="text-xs text-neutral-500">Last Month</div>
                            <div className="text-lg font-bold text-neutral-900">€38K</div>
                        </CardContent>
                    </Card>
                </div>
            ),
        },
        {
            id: 'action-footer',
            name: 'Action Footer',
            description: 'Sticky footer with save/cancel actions',
            category: 'Actions',
            code: `<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 p-4">
  <div className="max-w-4xl mx-auto flex items-center justify-between">
    <span className="text-sm text-neutral-500">Unsaved changes</span>
    <div className="flex items-center gap-3">
      <Button variant="secondary">Discard</Button>
      <Button>Save Changes</Button>
    </div>
  </div>
</div>`,
            render: () => (
                <div className="bg-white border border-neutral-200 rounded-lg p-3 scale-[0.85] origin-top-left">
                    <div className="flex items-center justify-between">
                        <span className="text-xs text-neutral-500">Unsaved</span>
                        <div className="flex items-center gap-2">
                            <Button variant="secondary" size="sm">Discard</Button>
                            <Button size="sm">Save</Button>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    const copyCode = (patternId, code) => {
        navigator.clipboard.writeText(code);
        setCopiedPattern(patternId);
        setTimeout(() => setCopiedPattern(null), 2000);
    };

    const categories = [...new Set(patterns.map(p => p.category))];

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">Pattern Library</h2>
                <p className="text-neutral-600">
                    Pre-built layout compositions using @oppal/ui components. Copy and customize for rapid development.
                </p>
            </section>

            {categories.map(category => (
                <section key={category} className="space-y-4">
                    <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">{category}</h3>
                    <div className="space-y-6">
                        {patterns.filter(p => p.category === category).map(pattern => (
                            <Card key={pattern.id} className="overflow-hidden">
                                <CardHeader className="pb-2">
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-base">{pattern.name}</CardTitle>
                                        <button
                                            onClick={() => copyCode(pattern.id, pattern.code)}
                                            className="flex items-center gap-1.5 text-xs font-medium text-primary-600 hover:text-primary-700"
                                        >
                                            {copiedPattern === pattern.id ? (
                                                <><Check className="w-3.5 h-3.5" /> Copied!</>
                                            ) : (
                                                <><Clipboard className="w-3.5 h-3.5" /> Copy Code</>
                                            )}
                                        </button>
                                    </div>
                                    <p className="text-sm text-neutral-500">{pattern.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        {/* Live Preview */}
                                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 min-h-[120px] overflow-hidden">
                                            <div className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-3">Preview</div>
                                            <div className="overflow-hidden">
                                                {pattern.render()}
                                            </div>
                                        </div>
                                        {/* Code Block */}
                                        <div className="bg-neutral-900 rounded-lg p-4 font-mono text-xs text-neutral-300 overflow-x-auto max-h-48">
                                            <pre className="whitespace-pre-wrap">{pattern.code}</pre>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            ))}

            <Alert variant="info">
                These patterns use components from <code className="font-mono text-xs">@oppal/ui</code>.
                Make sure to import the required components before using.
            </Alert>
        </div>
    );
}

// Icon Browser Component
function IconBrowser() {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedIcon, setCopiedIcon] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const iconCategories = ICON_CATEGORIES;
    const allIcons = ALL_ICONS;

    const filteredIcons = selectedCategory === 'all'
        ? allIcons.filter(icon => icon.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : iconCategories[selectedCategory]?.filter(icon =>
            icon.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

    const copyImport = (iconName) => {
        const importStatement = `import { ${iconName} } from 'lucide-react';`;
        navigator.clipboard.writeText(importStatement);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
    };

    const categories = ['all', ...Object.keys(iconCategories)];

    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">Icon Browser</h2>
                <p className="text-neutral-600">
                    Browse and copy Lucide React icons. Click any icon to copy its import statement.
                </p>
            </section>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedCategory === cat
                                ? 'bg-primary-500 text-white'
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                }`}
                        >
                            {cat === 'all' ? 'All' : cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Icon count */}
            <p className="text-sm text-neutral-500">
                Showing {filteredIcons.length} icon{filteredIcons.length !== 1 ? 's' : ''}
            </p>

            {/* Icon Grid */}
            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {filteredIcons.map((icon) => {
                    const IconComponent = icon.component;
                    return (
                        <button
                            key={icon.name}
                            onClick={() => copyImport(icon.name)}
                            className={`group flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${copiedIcon === icon.name
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                                }`}
                            title={`Click to copy: import { ${icon.name} } from 'lucide-react'`}
                        >
                            <IconComponent className={`w-5 h-5 ${copiedIcon === icon.name ? 'text-primary-600' : 'text-neutral-600'
                                }`} />
                            <span className={`mt-1.5 text-[10px] truncate max-w-full ${copiedIcon === icon.name ? 'text-primary-600 font-medium' : 'text-neutral-500'
                                }`}>
                                {copiedIcon === icon.name ? 'Copied!' : icon.name}
                            </span>
                        </button>
                    );
                })}
            </div>

            {filteredIcons.length === 0 && (
                <Card className="text-center py-12">
                    <CardContent>
                        <Search className="w-12 h-12 mx-auto text-neutral-300 mb-4" />
                        <h3 className="text-lg font-semibold text-neutral-700">No icons found</h3>
                        <p className="text-neutral-500 mt-1">Try a different search term or category.</p>
                    </CardContent>
                </Card>
            )}

            <Alert variant="info">
                All icons are from <code className="font-mono text-xs">lucide-react</code>.
                See the full library at <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="underline">lucide.dev</a>
            </Alert>
        </div>
    );
}
