import React from 'react';

const DataTable = ({
    columns = [],
    data = [],
    title,
    headerAction,
    className = ''
}) => {
    return (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {/* Header */}
            {(title || headerAction) && (
                <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
                    {title && (
                        <h2 className="text-lg font-semibold text-neutral-900">{title}</h2>
                    )}
                    {headerAction && (
                        <div>{headerAction}</div>
                    )}
                </div>
            )}

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full divide-y divide-neutral-200">
                    <thead className="bg-neutral-50">
                        <tr>
                            {columns.map((col, index) => (
                                <th
                                    key={index}
                                    className={`px-6 py-3 text-xs font-semibold text-neutral-700 uppercase tracking-wider ${col.align === 'right' ? 'text-right' : 'text-left'
                                        }`}
                                >
                                    {col.header}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                                {columns.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={`px-6 py-4 whitespace-nowrap text-sm ${col.align === 'right' ? 'text-right' : 'text-left'
                                            } ${col.fontWeight === 'medium' ? 'font-medium text-neutral-900' : 'text-neutral-700'
                                            }`}
                                    >
                                        {col.render ? col.render(row) : row[col.accessor || col.key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {data.length === 0 && (
                            <tr>
                                <td colSpan={columns.length} className="px-6 py-12 text-center text-neutral-500 text-sm">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4 p-4 bg-neutral-50">
                {data.map((row, rowIndex) => (
                    <div key={rowIndex} className="bg-white rounded-lg shadow-sm p-4 border border-neutral-100">
                        {columns.map((col, colIndex) => (
                            <div key={colIndex} className="flex justify-between py-2 border-b border-neutral-50 last:border-0">
                                <span className="text-sm font-medium text-neutral-500">{col.header}</span>
                                <span className={`text-sm ${col.fontWeight === 'medium' ? 'font-medium text-neutral-900' : 'text-neutral-900'
                                    }`}>
                                    {col.render ? col.render(row) : row[col.accessor || col.key]}
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
                {data.length === 0 && (
                    <div className="text-center text-neutral-500 text-sm py-8">
                        No data available
                    </div>
                )}
            </div>
        </div>
    );
};

export { DataTable };
