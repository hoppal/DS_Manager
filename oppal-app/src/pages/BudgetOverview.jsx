import React from 'react';
import {
    StatCard,
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    DonutChart,
    Alert,
    Button
} from '@oppal/ui';
import { TrendingUp, Download, RefreshCw } from 'lucide-react';

/**
 * BudgetOverview - A component created using the Oppal Design System AI context
 * 
 * This demonstrates how AI assistants can generate on-brand components
 * when given the design system context.
 */
export default function BudgetOverview() {
    // Sample data - in production this would come from an API
    const budgetData = {
        totalBudget: '€250,000',
        spent: '€142,500',
        remaining: '€107,500',
        utilizationPercent: 57,
    };

    const departmentSpend = [
        { name: 'Engineering', budget: '€80,000', spent: '€52,000', percent: 65 },
        { name: 'Marketing', budget: '€45,000', spent: '€38,000', percent: 84 },
        { name: 'Operations', budget: '€60,000', spent: '€28,000', percent: 47 },
        { name: 'HR', budget: '€35,000', spent: '€12,500', percent: 36 },
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-neutral-900">Budget Overview</h1>
                    <p className="text-neutral-600">Q1 2026 Financial Summary</p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="secondary">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Refresh
                    </Button>
                    <Button>
                        <Download className="w-4 h-4 mr-2" />
                        Export Report
                    </Button>
                </div>
            </div>

            {/* Alert for budget status */}
            <Alert variant="info" title="On Track">
                Budget utilization is at {budgetData.utilizationPercent}% — within expected range for this period.
            </Alert>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard
                    title="Total Budget"
                    value={budgetData.totalBudget}
                    trend="+5%"
                    trendDirection="up"
                />
                <StatCard
                    title="Spent"
                    value={budgetData.spent}
                    trend="+12%"
                    trendDirection="neutral"
                    data={[20, 35, 45, 52, 60, 72, 85, 95, 110, 125, 138, 142]}
                />
                <StatCard
                    title="Remaining"
                    value={budgetData.remaining}
                    trend="-8%"
                    trendDirection="down"
                />
            </div>

            {/* Charts and Department Breakdown */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Budget Utilization Donut */}
                <Card>
                    <CardHeader>
                        <CardTitle>Budget Utilization</CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <DonutChart
                            percentage={budgetData.utilizationPercent}
                            label="Used"
                        />
                    </CardContent>
                </Card>

                {/* Department Breakdown */}
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <CardTitle>Department Breakdown</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {departmentSpend.map((dept) => (
                                <div key={dept.name} className="space-y-2">
                                    <div className="flex items-center justify-between text-sm">
                                        <span className="font-medium text-neutral-900">{dept.name}</span>
                                        <div className="flex items-center gap-4">
                                            <span className="text-neutral-500">
                                                {dept.spent} / {dept.budget}
                                            </span>
                                            <span className={`font-semibold ${dept.percent > 75
                                                    ? 'text-warning-600'
                                                    : 'text-primary-600'
                                                }`}>
                                                {dept.percent}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                                        <div
                                            className={`h-full rounded-full transition-all ${dept.percent > 75
                                                    ? 'bg-warning-500'
                                                    : 'bg-primary-500'
                                                }`}
                                            style={{ width: `${dept.percent}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
