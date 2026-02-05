import React, { useState } from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    Button,
    StatCard,
    DataTable,
    Input
} from '@oppal/ui';
import {
    Check,
    Clipboard
} from 'lucide-react';

export default function PatternLibrary() {
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
                                        <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4 min-h-[120px] overflow-hidden">
                                            <div className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider mb-3">Preview</div>
                                            <div className="overflow-hidden">
                                                {pattern.render()}
                                            </div>
                                        </div>
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
        </div>
    );
}
