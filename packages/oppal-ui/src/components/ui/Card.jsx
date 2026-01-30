import React from 'react';

const Card = React.forwardRef(({ className = '', children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});
Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className = '', children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`px-6 py-4 border-b border-neutral-200 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});
CardHeader.displayName = "CardHeader";

// eslint-disable-next-line no-unused-vars
const CardTitle = React.forwardRef(({ className = '', children, as: Component = "h3", ...props }, ref) => {
    return (
        <Component
            ref={ref}
            className={`text-lg font-semibold text-neutral-900 ${className}`}
            {...props}
        >
            {children}
        </Component>
    );
});
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef(({ className = '', children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`px-6 py-4 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className = '', children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={`px-6 py-4 bg-neutral-50 border-t border-neutral-200 ${className}`}
            {...props}
        >
            {children}
        </div>
    );
});
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardTitle, CardContent, CardFooter };
