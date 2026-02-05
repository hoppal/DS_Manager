import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Button
} from '@oppal/ui';
import {
    Pipette,
    Palette,
    CheckCircle,
    AlertTriangle
} from 'lucide-react';

export default function TokensManager() {
    // Initial state matching standard Prism tokens
    const [theme, setTheme] = useState({
        colors: {
            primary: '#00af91',
            teal: '#009b9b',
            success: '#10b981',
            warning: '#f59e0b',
            error: '#ef4444',
            neutral: '#6b7280',
        },
        borderRadius: 0.5, // rem
    });

    // Preset palette for quick selection
    const presetColors = [
        '#64748b', // Slate
        '#ef4444', // Red
        '#f97316', // Orange
        '#f59e0b', // Amber
        '#22c55e', // Green
        '#00af91', // Prism Teal
        '#3b82f6', // Blue
        '#6366f1', // Indigo
        '#ec4899', // Pink
        '#111827', // Gray
    ];

    const handleColorChange = (role, color) => {
        setTheme(prev => ({
            ...prev,
            colors: { ...prev.colors, [role]: color }
        }));
    };

    const handleRadiusChange = (e) => {
        setTheme(prev => ({ ...prev, borderRadius: parseFloat(e.target.value) }));
    };

    // Helper functions (simplified for demo)
    const lighten = (hex, percent) => {
        const num = parseInt(hex.replace('#', ''), 16);
        const r = (num >> 16) + Math.round((255 - (num >> 16)) * percent);
        const g = ((num >> 8) & 0x00FF) + Math.round((255 - ((num >> 8) & 0x00FF)) * percent);
        const b = (num & 0x0000FF) + Math.round((255 - (num & 0x0000FF)) * percent);
        return `#${(0x1000000 + (r < 255 ? r : 255) * 0x10000 + (g < 255 ? g : 255) * 0x100 + (b < 255 ? b : 255)).toString(16).slice(1)}`;
    };

    const darken = (hex, percent) => {
        const num = parseInt(hex.replace('#', ''), 16);
        const r = Math.round((num >> 16) * (1 - percent));
        const g = Math.round(((num >> 8) & 0x00FF) * (1 - percent));
        const b = Math.round((num & 0x0000FF) * (1 - percent));
        return `#${(0x1000000 + r * 0x10000 + g * 0x100 + b).toString(16).slice(1)}`;
    };

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">Tokens Manager</h2>
                <p className="text-neutral-600">
                    Customize your semantic palette and global shape.
                </p>
            </section>

            {/* Editor Panel - Full Width */}
            <Card className="overflow-visible">
                <CardHeader>
                    <CardTitle>Design Tokens</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8 overflow-visible">
                    {/* Semantic Colors - Horizontal Row */}
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-neutral-700">Semantic Colors</label>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                            {Object.entries(theme.colors).map(([role, color]) => (
                                <div key={role} className="group relative">
                                    {/* Color Card - Applies Border Radius */}
                                    <div
                                        className="aspect-square shadow-sm border border-neutral-200 mb-3 transition-transform group-hover:scale-105 overflow-visible relative cursor-pointer"
                                        style={{
                                            backgroundColor: color,
                                            borderRadius: `${theme.borderRadius}rem`
                                        }}
                                    >
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Pipette className="text-white drop-shadow-md w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-neutral-900 capitalize leading-tight">{role}</p>
                                        <p className="text-xs text-neutral-500 font-mono uppercase mt-1">{color}</p>
                                    </div>

                                    {/* Hover Popover Picker */}
                                    <div className="absolute top-full left-0 mt-2 z-50 w-64 bg-white rounded-xl shadow-xl border border-neutral-200 p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 text-left">
                                        <div className="space-y-3">
                                            <div>
                                                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Base Colors</p>
                                                <div className="grid grid-cols-5 gap-2">
                                                    {presetColors.map((c) => (
                                                        <button
                                                            key={c}
                                                            className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform"
                                                            style={{ backgroundColor: c }}
                                                            onClick={() => handleColorChange(role, c)}
                                                            title={c}
                                                        />
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wide mb-2">Shades</p>
                                                <div className="grid grid-cols-5 gap-2">
                                                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform" style={{ backgroundColor: darken(color, 0.4) }} onClick={() => handleColorChange(role, darken(color, 0.4))} />
                                                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform" style={{ backgroundColor: darken(color, 0.2) }} onClick={() => handleColorChange(role, darken(color, 0.2))} />
                                                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform ring-2 ring-neutral-900 ring-offset-2" style={{ backgroundColor: color }} />
                                                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform" style={{ backgroundColor: lighten(color, 0.2) }} onClick={() => handleColorChange(role, lighten(color, 0.2))} />
                                                    <button className="w-8 h-8 rounded-full border border-neutral-200 hover:scale-110 transition-transform" style={{ backgroundColor: lighten(color, 0.4) }} onClick={() => handleColorChange(role, lighten(color, 0.4))} />
                                                </div>
                                            </div>

                                            <div className="pt-2 border-t border-neutral-100">
                                                <div className="relative">
                                                    <input
                                                        type="color"
                                                        value={color}
                                                        onChange={(e) => handleColorChange(role, e.target.value)}
                                                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                                    />
                                                    <Button variant="outline" size="sm" className="w-full">
                                                        <Palette className="w-3 h-3 mr-2" />
                                                        Custom Color
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="h-px bg-neutral-100" />

                    {/* Border Radius - Slider Underneath */}
                    <div className="space-y-4 max-w-xl">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-medium text-neutral-700">Global Border Radius</label>
                            <span className="text-sm text-neutral-500 font-mono bg-neutral-100 px-2 py-1 rounded">{theme.borderRadius}rem</span>
                        </div>
                        <div className="pt-2">
                            <input
                                type="range"
                                min="0"
                                max="2"
                                step="0.125"
                                value={theme.borderRadius}
                                onChange={handleRadiusChange}
                                className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                            />
                            <div className="flex justify-between text-xs text-neutral-400 mt-2">
                                <span>Square (0rem)</span>
                                <span>Rounded (0.5rem)</span>
                                <span>Pill (2rem)</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Live Preview Panel */}
            <section className="space-y-4 pt-4 border-t border-neutral-200">
                <h2 className="text-xl font-bold text-neutral-900">Live Preview</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Primary Button Preview */}
                    <Card className="md:col-span-2">
                        <CardHeader><CardTitle>Interactive Elements</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-4 items-center p-8 bg-neutral-50 rounded-b-lg border-t border-neutral-100">
                            <button
                                className="px-6 py-2.5 font-medium text-white shadow-md transition-transform active:scale-95"
                                style={{
                                    backgroundColor: theme.colors.primary,
                                    borderRadius: `${theme.borderRadius}rem`
                                }}
                            >
                                Primary Action
                            </button>
                            <button
                                className="px-6 py-2.5 font-medium bg-white border shadow-sm hover:bg-neutral-50"
                                style={{
                                    color: theme.colors.neutral,
                                    borderColor: '#e5e7eb', // neutral-200
                                    borderRadius: `${theme.borderRadius}rem`
                                }}
                            >
                                Secondary
                            </button>
                            <button
                                className="px-6 py-2.5 font-medium border border-transparent hover:underline"
                                style={{
                                    color: theme.colors.error,
                                    borderRadius: `${theme.borderRadius}rem`
                                }}
                            >
                                Destructive
                            </button>
                        </CardContent>
                    </Card>

                    {/* Card & Alert Previews */}
                    <Card style={{ borderRadius: `${theme.borderRadius}rem`, overflow: 'hidden' }}>
                        <div className="p-6 border-b border-neutral-100">
                            <h3 className="font-semibold text-neutral-900">Card Component</h3>
                        </div>
                        <div className="p-6 space-y-4">
                            <p className="text-neutral-600 text-sm">
                                This card inherits the global border radius.
                            </p>
                            <div
                                className="p-4 border-l-4 rounded-r"
                                style={{
                                    backgroundColor: lighten(theme.colors.primary, 0.9),
                                    borderColor: theme.colors.primary,
                                    color: darken(theme.colors.primary, 0.2)
                                }}
                            >
                                <p className="text-sm font-medium">Primary Highlight</p>
                            </div>
                        </div>
                    </Card>

                    <div className="space-y-4">
                        <div
                            className="p-4 border border-l-4 shadow-sm"
                            style={{
                                backgroundColor: lighten(theme.colors.success, 0.9),
                                borderColor: theme.colors.success,
                                borderRadius: `${theme.borderRadius}rem`
                            }}
                        >
                            <div className="flex gap-3">
                                <div style={{ color: theme.colors.success }}>
                                    <CheckCircle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-neutral-900">Success Message</h4>
                                    <p className="text-sm mt-1 text-neutral-600">Operation completed successfully.</p>
                                </div>
                            </div>
                        </div>

                        <div
                            className="p-4 border border-l-4 shadow-sm"
                            style={{
                                backgroundColor: lighten(theme.colors.warning, 0.9),
                                borderColor: theme.colors.warning,
                                borderRadius: `${theme.borderRadius}rem`
                            }}
                        >
                            <div className="flex gap-3">
                                <div style={{ color: theme.colors.warning }}>
                                    <AlertTriangle className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-sm text-neutral-900">Warning Alert</h4>
                                    <p className="text-sm mt-1 text-neutral-600">Check your input.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
