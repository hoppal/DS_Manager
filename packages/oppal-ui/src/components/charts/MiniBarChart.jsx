import React from 'react';

const MiniBarChart = ({ data = [], height = 80, className = '' }) => {
    // Normalize data if needed, but assuming 0-100 for now or raw values
    // Design system example uses percentage directly

    return (
        <div
            className={`flex items-end justify-between gap-1 ${className}`}
            style={{ height: `${height}px` }}
        >
            {data.map((value, i) => (
                <div
                    key={i}
                    className="flex-1 bg-primary-500 rounded-t-sm transition-all hover:bg-primary-600"
                    style={{ height: `${value}%` }}
                />
            ))}
        </div>
    );
};

export default MiniBarChart;
