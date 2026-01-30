import React from 'react';
import { Loader2 } from 'lucide-react';

const Button = React.forwardRef(({
    className = '',
    variant = 'primary',
    size = 'md',
    isLoading = false,
    disabled,
    children,
    ...props
}, ref) => {

    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-600 shadow-sm",
        secondary: "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-50 shadow-sm",
        outline: "border border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-900",
        ghost: "text-neutral-700 hover:bg-neutral-100 hover:text-neutral-900",
        danger: "bg-error text-white hover:bg-error-600 shadow-sm",
        link: "text-primary underline-offset-4 hover:underline"
    };

    const sizes = {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4 py-2 text-sm",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10"
    };

    const variantStyles = variants[variant] || variants.primary;
    const sizeStyles = sizes[size] || sizes.md;

    const combinedClassName = `${baseStyles} ${variantStyles} ${sizeStyles} ${className}`;

    return (
        <button
            className={combinedClassName}
            ref={ref}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button };
