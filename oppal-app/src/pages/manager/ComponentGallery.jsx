import React from 'react';
import {
    StatCard,
    Button,
    Card,
    CardContent,
    Alert,
    DataTable
} from '@oppal/ui';

export default function ComponentGallery() {
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
