import React from 'react';
import { Card, CardContent, Button } from '@oppal/ui';
import { Copy, Code, ExternalLink } from 'lucide-react';

export default function DeployWizard() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
                <h2 className="text-xl font-bold text-neutral-900">Deploy to New Project</h2>
                <p className="text-neutral-600">Apply the Prism Design System to your existing projects using our CLI tool.</p>
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
