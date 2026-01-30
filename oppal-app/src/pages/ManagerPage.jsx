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
    MessageCircle
} from 'lucide-react';

export default function ManagerPage() {
    const [activeTab, setActiveTab] = useState('gallery');
    const [copied, setCopied] = useState(false);

    const copyCommand = () => {
        navigator.clipboard.writeText('./setup.sh');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const tabs = [
        { id: 'gallery', label: 'Component Gallery', icon: Layout },
        { id: 'tokens', label: 'Design Tokens', icon: Palette },
        { id: 'typography', label: 'Typography', icon: Type },
        { id: 'deploy', label: 'Deployment', icon: Terminal },
        { id: 'usage', label: 'AI Usage', icon: MessageCircle },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900">Oppal DS Manager</h1>
                    <p className="text-neutral-600">Central hub for managing and applying the Oppal Design System.</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary" onClick={copyCommand}>
                        {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                        {copied ? 'Copied' : 'Copy Setup Script'}
                    </Button>
                    <Button>
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
                {activeTab === 'tokens' && <TokensManager />}
                {activeTab === 'typography' && <TypographyManager />}
                {activeTab === 'deploy' && <DeployWizard />}
                {activeTab === 'usage' && <UsageGuide />}
            </div>
        </div>
    );
}

function UsageGuide() {
    const systemPrompt = `I am building an app using the Oppal Design System. 
Please refer to the following context:
1. design-tokens.json - The source of truth for all colors, spacing, and brand styles.
2. @oppal/ui - The component library containing StatCard, Button, DataTable, etc.

When generating UI, always use components from @oppal/ui and follow the Tailwind utility patterns defined in the design tokens.`;

    const [copiedPrompt, setCopiedPrompt] = useState(false);

    const copyPrompt = () => {
        navigator.clipboard.writeText(systemPrompt);
        setCopiedPrompt(true);
        setTimeout(() => setCopiedPrompt(false), 2000);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
                <section className="space-y-4">
                    <h2 className="text-xl font-bold text-neutral-900">AI Collaboration Guide</h2>
                    <p className="text-neutral-600">
                        Maximize productivity by teaching Gemini or Claude about the Oppal Design System.
                        Follow these steps to ensure the AI generates on-brand, compatible code.
                    </p>
                </section>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs">1</span>
                                Share Context
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">
                            Upload your <code className="bg-neutral-100 px-1 rounded">design-tokens.json</code> and the
                            <code className="bg-neutral-100 px-1 rounded">@oppal/ui</code> documentation to the AI chat.
                            This gives the AI the "rules" of your brand.
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs">2</span>
                                Use the System Prompt
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-neutral-600">
                            Copy the system prompt below and paste it as your first message.
                            It sets the constraints for the entire session.
                        </CardContent>
                    </Card>
                </div>

                <section className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-neutral-500 uppercase tracking-wider">System Prompt</h3>
                        <button
                            onClick={copyPrompt}
                            className="text-xs flex items-center gap-1.5 text-primary-600 hover:text-primary-700 font-medium"
                        >
                            {copiedPrompt ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            {copiedPrompt ? 'Copied!' : 'Copy Prompt'}
                        </button>
                    </div>
                    <div className="bg-neutral-900 rounded-xl p-6 font-mono text-sm leading-relaxed text-neutral-300 border border-neutral-800 shadow-lg">
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
                                <p className="text-xs text-neutral-500">Ask the AI to "Check this for Oppal compliance" after an edit.</p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <div className="mt-1"><Code className="w-4 h-4 text-primary-500" /></div>
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">Component First</p>
                                <p className="text-xs text-neutral-500">Always ask the AI to use existing components before writing custom CSS.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Alert variant="info">
                    Did you know? You can tell Gemini to "Study the Dashboard pages" in this app to learn how to structure complex data layouts.
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
                        { name: 'Oppal UI', status: 'Active', updated: '2 mins ago' },
                        { name: 'SupplyChain Pro', status: 'Draft', updated: '1 hour ago' },
                        { name: 'Finance Dashboard', status: 'Archived', updated: '3 days ago' },
                    ]}
                />
            </section>
        </div>
    );
}

function TokensManager() {
    const colors = [
        { name: 'Primary', class: 'bg-primary-500', hex: '#00af91' },
        { name: 'Teal', class: 'bg-teal-500', hex: '#009b9b' },
        { name: 'Success', class: 'bg-success-500', hex: '#22c55e' },
        { name: 'Warning', class: 'bg-warning-500', hex: '#f97316' },
        { name: 'Error', class: 'bg-error-500', hex: '#ef4444' },
        { name: 'Neutral', class: 'bg-neutral-500', hex: '#adb5bd' },
    ];

    return (
        <Card>
            <CardHeader>
                <CardTitle>Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
                    {colors.map((color) => (
                        <div key={color.name} className="space-y-3">
                            <div className={`aspect-square rounded-xl shadow-inner ${color.class}`} />
                            <div>
                                <p className="text-sm font-semibold text-neutral-900">{color.name}</p>
                                <p className="text-xs text-neutral-500 font-mono uppercase">{color.hex}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

function TypographyManager() {
    return (
        <Card>
            <CardContent className="divide-y divide-neutral-100">
                <div className="py-6 first:pt-0">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 2.25rem / Extrabold</p>
                    <h1 className="text-4xl font-extrabold text-neutral-900">Sphinx of black quartz, judge my vow.</h1>
                </div>
                <div className="py-6">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 1.5rem / Bold</p>
                    <h2 className="text-2xl font-bold text-neutral-900">Pack my box with five dozen liquor jugs.</h2>
                </div>
                <div className="py-6">
                    <p className="text-xs text-neutral-500 font-mono mb-4">Font: Inter / 1rem / Regular</p>
                    <p className="text-base text-neutral-700">
                        The quick brown fox jumps over the lazy dog. Designers use this text to see how their typography looks in real-world scenarios. It helps in assessing spacing, weight, and readability.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
}

function DeployWizard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">Deploy to New Project</h2>
                <p className="text-neutral-600">Apply the Oppal Design System to your existing projects using our CLI tool.</p>

                <div className="space-y-4">
                    <div className="bg-neutral-900 rounded-lg p-4 font-mono text-sm text-neutral-300">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-neutral-500">Terminal</span>
                            <button className="text-neutral-400 hover:text-white transition-colors">
                                <Copy className="w-4 h-4" />
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
                        <Button variant="outline" className="w-full bg-white border-primary-200 text-primary-700 hover:bg-primary-50">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Documentation
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
