import React, { useState } from 'react';
import { Button } from '@oppal/ui';
import {
    Layout,
    Layers,
    Grid,
    Palette,
    Type,
    Terminal,
    MessageCircle,
    Check,
    Copy,
    Download
} from 'lucide-react';

import ComponentGallery from './manager/ComponentGallery';
import PatternLibrary from './manager/PatternLibrary';
import IconBrowser from './manager/IconBrowser';
import TokensManager from './manager/TokensManager';
import TypographyManager from './manager/TypographyManager';
import DeployWizard from './manager/DeployWizard';
import UsageGuide from './manager/UsageGuide';

export default function ManagerPage() {
    const [activeTab, setActiveTab] = useState('gallery');
    const [copied, setCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText('./setup.sh');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const exportConfig = () => {
        const config = {
            name: "Prism Design System",
            version: "1.0.0",
            colors: {
                primary: {
                    50: "#e6f7f4",
                    100: "#b3e6dd",
                    200: "#80d5c6",
                    300: "#4dc4af",
                    400: "#1ab398",
                    500: "#00af91",
                    600: "#009c82",
                    700: "#008973",
                    800: "#007664",
                    900: "#006355"
                },
                neutral: {
                    50: "#f9fafb",
                    100: "#f3f4f6",
                    200: "#e5e7eb",
                    300: "#d1d5db",
                    400: "#9ca3af",
                    500: "#6b7280",
                    600: "#4b5563",
                    700: "#374151",
                    800: "#1f2937",
                    900: "#111827"
                },
                success: "#10b981",
                warning: "#f59e0b",
                danger: "#ef4444",
                info: "#3b82f6"
            },
            typography: {
                fontFamily: "'Inter', system-ui, sans-serif",
                weights: {
                    normal: 400,
                    medium: 500,
                    semibold: 600,
                    bold: 700,
                    extrabold: 800
                },
                sizes: {
                    xs: "0.75rem",
                    sm: "0.875rem",
                    base: "1rem",
                    lg: "1.125rem",
                    xl: "1.25rem",
                    "2xl": "1.5rem",
                    "3xl": "1.875rem",
                    "4xl": "2.25rem"
                }
            },
            spacing: {
                grid: "4px",
                values: [4, 8, 12, 16, 24, 32, 48, 64, 96, 128]
            },
            components: [
                "Button",
                "Card",
                "StatCard",
                "DataTable",
                "Alert",
                "Input",
                "DonutChart",
                "MiniBarChart",
                "DashboardLayout",
                "Sidebar"
            ],
            exportedAt: new Date().toISOString()
        };

        const dataStr = JSON.stringify(config, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'prism-ds-config.json';
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
                {activeTab === 'tokens' && <TokensManager />}
                {activeTab === 'typography' && <TypographyManager />}
                {activeTab === 'deploy' && <DeployWizard />}
                {activeTab === 'usage' && <UsageGuide />}
            </div>
        </div>
    );
}
