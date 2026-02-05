import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Button,
    Alert
} from '@oppal/ui';
import {
    Check,
    Download,
    Copy,
    Eye,
    Code,
    Terminal
} from 'lucide-react';

export default function UsageGuide() {
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
            const response = await fetch('/.context/ai-context.md');
            if (response.ok) {
                const content = await response.text();
                navigator.clipboard.writeText(content);
                setCopiedContext(true);
                setTimeout(() => setCopiedContext(false), 2000);
            } else {
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
                                <p className="text-xs text-neutral-500">For new projects, share <code className="bg-neutral-200 px-1 rounded text-xs">.context/ai-context.md</code></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Alert variant="info">
                    The full context file is at <code className="font-mono text-xs">.context/ai-context.md</code>
                </Alert>
            </div>
        </div>
    );
}
