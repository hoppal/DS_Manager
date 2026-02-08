import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, Alert, Button } from '@oppal/ui';
import { Download, ExternalLink, BookOpen, Sparkles } from 'lucide-react';

function AIWorkflowPage() {
    const downloadGuide = () => {
        window.open('https://github.com/hoppal/DS_Manager/blob/main/AI_WORKFLOW_GUIDE.md', '_blank');
    };

    const openDSManager = () => {
        window.open('/DS_Manager/#/manager', '_blank');
    };

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-teal-600 flex items-center justify-center">
                        <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                        <h1 className="text-3xl font-bold text-neutral-900">AI Workflow Guide</h1>
                        <p className="text-neutral-600">Using Prism Design System with Claude Code & Gemini CLI</p>
                    </div>
                </div>
            </div>

            {/* Alert */}
            <Alert variant="info" title="Maintain Design Consistency with AI Assistants">
                This workflow helps you ensure that AI coding assistants like Claude Code and Gemini CLI
                consistently use your Prism Design System tokens, components, and patterns across all projects.
            </Alert>

            {/* Main Workflow Diagram */}
            <Card className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-primary-50 to-teal-50 border-b border-primary-100">
                    <CardTitle className="text-xl">4-Step Workflow</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="bg-white p-8">
                        <img
                            src={`${import.meta.env.BASE_URL || '/'}ai_workflow_diagram.png`}
                            alt="Prism Design System AI Workflow"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Step Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Step 1 */}
                <Card className="border-l-4 border-l-primary-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary-100 text-primary-700 flex items-center justify-center font-bold text-sm">
                                1
                            </div>
                            Export Design System
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-neutral-600">
                            Click "Export Config" in the DS Manager to download all design tokens,
                            Tailwind preset, CSS variables, and documentation.
                        </p>
                        <div className="bg-neutral-50 p-3 rounded-lg text-xs font-mono text-neutral-700">
                            <div>✓ tailwind.preset.js</div>
                            <div>✓ variables.css</div>
                            <div>✓ tokens.json</div>
                            <div>✓ ai-context.md</div>
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                            onClick={openDSManager}
                        >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Open DS Manager
                        </Button>
                    </CardContent>
                </Card>

                {/* Step 2 */}
                <Card className="border-l-4 border-l-teal-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-bold text-sm">
                                2
                            </div>
                            Share Context with AI
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-neutral-600">
                            Start every AI conversation by asking it to read your ai-context.md file first.
                            This ensures the AI knows your design rules.
                        </p>
                        <div className="bg-neutral-900 p-3 rounded-lg text-xs font-mono text-neutral-100">
                            <div className="text-primary-400">// First message to AI:</div>
                            <div className="mt-1">"Read @ai-context.md</div>
                            <div>for design system rules."</div>
                        </div>
                    </CardContent>
                </Card>

                {/* Step 3 */}
                <Card className="border-l-4 border-l-success-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-success-100 text-success-700 flex items-center justify-center font-bold text-sm">
                                3
                            </div>
                            Build with Tokens
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-neutral-600">
                            Use semantic token names instead of hardcoded values. This ensures consistency
                            and makes updates automatic.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-success-600 font-bold">✓</span>
                                <code className="bg-success-50 text-success-700 px-2 py-1 rounded">bg-primary</code>
                                <span className="text-neutral-500">Semantic</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                                <span className="text-error-600 font-bold">✗</span>
                                <code className="bg-error-50 text-error-700 px-2 py-1 rounded">#00AF91</code>
                                <span className="text-neutral-500">Hardcoded</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Step 4 */}
                <Card className="border-l-4 border-l-warning-500">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-warning-100 text-warning-700 flex items-center justify-center font-bold text-sm">
                                4
                            </div>
                            Compliance Check
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <p className="text-sm text-neutral-600">
                            Before finishing, ask the AI to validate that all code follows your design system rules.
                        </p>
                        <div className="space-y-1.5 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-success-600">✓</span>
                                <span className="text-neutral-700">Semantic colors</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-success-600">✓</span>
                                <span className="text-neutral-700">Token spacing</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-success-600">✓</span>
                                <span className="text-neutral-700">DS components</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-success-600">✓</span>
                                <span className="text-neutral-700">Consistent typography</span>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Key Benefits */}
            <Card className="bg-gradient-to-br from-primary-50 to-teal-50 border-primary-100">
                <CardHeader>
                    <CardTitle>Key Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-primary-500 text-white flex items-center justify-center">
                                <Sparkles className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-neutral-900">Consistent Design</h4>
                            <p className="text-sm text-neutral-600">
                                All AI-generated code follows your design system automatically
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-teal-500 text-white flex items-center justify-center">
                                <BookOpen className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-neutral-900">Easy Updates</h4>
                            <p className="text-sm text-neutral-600">
                                Change tokens once, update all projects instantly
                            </p>
                        </div>
                        <div className="space-y-2">
                            <div className="w-10 h-10 rounded-lg bg-success-500 text-white flex items-center justify-center">
                                <Download className="w-5 h-5" />
                            </div>
                            <h4 className="font-semibold text-neutral-900">Faster Development</h4>
                            <p className="text-sm text-neutral-600">
                                No manual design reviews needed - AI follows the rules
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Starter */}
            <Card className="border-2 border-primary-200 bg-gradient-to-br from-white to-primary-50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Sparkles className="w-5 h-5 text-primary-600" />
                        Quick Starter Prompts
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-semibold">
                                    Claude Code
                                </div>
                            </div>
                            <div className="bg-neutral-900 rounded-lg p-4 relative group">
                                <pre className="text-neutral-100 text-sm font-mono whitespace-pre-wrap">
                                    {`I'm starting a new React project that MUST use the Prism Design System.

Please read this context file first:
@ai-context.md

Key requirements:
1. Use Tailwind with our preset (tailwind.preset.js)
2. Only use semantic colors (bg-primary, text-success, etc.)
3. Use components from @oppal/ui when available
4. Reference: https://hoppal.github.io/DS_Manager/

Let's start by setting up the Tailwind config.`}
                                </pre>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(`I'm starting a new React project that MUST use the Prism Design System.

Please read this context file first:
@ai-context.md

Key requirements:
1. Use Tailwind with our preset (tailwind.preset.js)
2. Only use semantic colors (bg-primary, text-success, etc.)
3. Use components from @oppal/ui when available
4. Reference: https://hoppal.github.io/DS_Manager/

Let's start by setting up the Tailwind config.`);
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                                    title="Copy prompt"
                                >
                                    <Download className="w-4 h-4 text-neutral-300" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="px-2 py-1 bg-teal-100 text-teal-700 rounded text-xs font-semibold">
                                    Gemini CLI
                                </div>
                            </div>
                            <div className="bg-neutral-900 rounded-lg p-4 relative group">
                                <pre className="text-neutral-100 text-sm font-mono whitespace-pre-wrap">
                                    {`I'm building a React app using the Prism Design System.

IMPORTANT: Read .gemini/ai-context.md first for design system rules.

All UI must follow these constraints:
- Semantic colors only (bg-primary, text-success, etc.)
- Use @oppal/ui components
- Tailwind utilities with our preset
- No hardcoded values

Confirm you've read the context, then let's set up Tailwind.`}
                                </pre>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(`I'm building a React app using the Prism Design System.

IMPORTANT: Read .gemini/ai-context.md first for design system rules.

All UI must follow these constraints:
- Semantic colors only (bg-primary, text-success, etc.)
- Use @oppal/ui components
- Tailwind utilities with our preset
- No hardcoded values

Confirm you've read the context, then let's set up Tailwind.`);
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                                    title="Copy prompt"
                                >
                                    <Download className="w-4 h-4 text-neutral-300" />
                                </button>
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="px-2 py-1 bg-success-100 text-success-700 rounded text-xs font-semibold">
                                    Compliance Check
                                </div>
                            </div>
                            <div className="bg-neutral-900 rounded-lg p-4 relative group">
                                <pre className="text-neutral-100 text-sm font-mono whitespace-pre-wrap">
                                    {`Review the last changes for Prism Design System compliance:

1. Colors: Are all using semantic names (bg-primary, text-success)?
2. Spacing: Are all using Tailwind scale (p-4, m-6)?
3. Components: Are all from @oppal/ui or using our tokens?
4. Typography: Are all using our font families?

List any violations and fix them.`}
                                </pre>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(`Review the last changes for Prism Design System compliance:

1. Colors: Are all using semantic names (bg-primary, text-success)?
2. Spacing: Are all using Tailwind scale (p-4, m-6)?
3. Components: Are all from @oppal/ui or using our tokens?
4. Typography: Are all using our font families?

List any violations and fix them.`);
                                    }}
                                    className="absolute top-2 right-2 p-2 bg-neutral-800 hover:bg-neutral-700 rounded transition-colors opacity-0 group-hover:opacity-100"
                                    title="Copy prompt"
                                >
                                    <Download className="w-4 h-4 text-neutral-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Download Guide */}
            <Card>
                <CardHeader>
                    <CardTitle>Complete Workflow Guide</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-neutral-600">
                        Get the full step-by-step guide with code examples, prompts, and best practices
                        for using Prism Design System with Claude Code and Gemini CLI.
                    </p>
                    <div className="flex gap-3">
                        <Button variant="primary" onClick={downloadGuide}>
                            <Download className="w-4 h-4 mr-2" />
                            Download Full Guide
                        </Button>
                        <Button variant="outline" onClick={openDSManager}>
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View DS Manager
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Quick Start */}
            <Alert variant="success" title="Quick Start">
                <div className="text-sm space-y-2">
                    <p>Ready to start? Here's your first prompt for any AI assistant:</p>
                    <div className="bg-white/70 p-3 rounded-lg font-mono text-xs border border-success-200">
                        "Read @ai-context.md for design system rules. All UI must use Prism Design System tokens and components only."
                    </div>
                </div>
            </Alert>
        </div>
    );
}

export default AIWorkflowPage;
