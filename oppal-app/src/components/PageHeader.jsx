import React from 'react';
import { Button } from '@prism/ui';

/**
 * PageHeader - A reusable page header component for consistent page layouts
 */
export function PageHeader({
    title,
    description,
    actions = [],
    children
}) {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
                <h1 className="text-2xl font-bold text-neutral-900">{title}</h1>
                {description && (
                    <p className="text-neutral-600 mt-1">{description}</p>
                )}
            </div>
            {(actions.length > 0 || children) && (
                <div className="flex items-center gap-3">
                    {actions.map((action, index) => (
                        <Button
                            key={index}
                            variant={action.variant || 'primary'}
                            onClick={action.onClick}
                        >
                            {action.icon && <action.icon className="w-4 h-4 mr-2" />}
                            {action.label}
                        </Button>
                    ))}
                    {children}
                </div>
            )}
        </div>
    );
}

export default PageHeader;
