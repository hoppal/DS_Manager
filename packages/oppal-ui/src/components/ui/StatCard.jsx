import React from 'react';
import MiniBarChart from '../charts/MiniBarChart';
import { Card } from './Card';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';

const StatCard = ({
    title,
    value,
    trend,
    trendLabel,
    trendDirection = 'neutral', // 'up' | 'down' | 'neutral'
    data,
    icon: Icon,
    className = ''
}) => {

    const getTrendColor = (direction) => {
        switch (direction) {
            case 'up': return 'text-success-600';
            case 'down': return 'text-error-600';
            default: return 'text-neutral-500';
        }
    };

    const getTrendIcon = (direction) => {
        switch (direction) {
            case 'up': return <ArrowUpRight className="w-4 h-4" />;
            case 'down': return <ArrowDownRight className="w-4 h-4" />;
            default: return <Minus className="w-4 h-4" />;
        }
    };

    const trendColorClass = getTrendColor(trendDirection);

    return (
        <Card className={`p-6 ${className}`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
                    {title}
                </h3>

                {(trend || trendLabel) && (
                    <div className="flex items-center gap-1 text-sm">
                        {trend && (
                            <span className={`flex items-center font-medium ${trendColorClass}`}>
                                {getTrendIcon(trendDirection)}
                                {trend}
                            </span>
                        )}
                        {trendLabel && (
                            <span className="text-neutral-500 ml-1">{trendLabel}</span>
                        )}
                    </div>
                )}
            </div>

            <div className="flex items-start justify-between">
                <div>
                    <p className="text-4xl font-extrabold text-neutral-900 mb-4">
                        {value}
                    </p>
                </div>

                {Icon && (
                    <div className="p-3 bg-primary-50 rounded-lg">
                        <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                )}
            </div>

            {data && data.length > 0 && (
                <div className="mt-2">
                    <MiniBarChart data={data} height={60} />
                </div>
            )}
        </Card>
    );
};

export { StatCard };
