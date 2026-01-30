import React, { useState } from 'react';
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react';

const Alert = React.forwardRef(({
    className = '',
    variant = 'info',
    title,
    children,
    onDismiss,
    ...props
}, ref) => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    const handleDismiss = () => {
        setIsVisible(false);
        if (onDismiss) onDismiss();
    };

    const styles = {
        info: {
            container: "bg-teal-50 border-teal-200",
            icon: "text-teal-600",
            title: "text-teal-900",
            text: "text-teal-700",
            Icon: Info
        },
        success: {
            container: "bg-success-50 border-success-200",
            icon: "text-success-600",
            title: "text-success-900",
            text: "text-success-700",
            Icon: CheckCircle
        },
        warning: {
            container: "bg-warning-50 border-warning-200",
            icon: "text-warning-600",
            title: "text-warning-900",
            text: "text-warning-700",
            Icon: AlertTriangle
        },
        error: {
            container: "bg-error-50 border-error-200",
            icon: "text-error-600",
            title: "text-error-900",
            text: "text-error-700",
            Icon: XCircle
        }
    };

    const currentStyle = styles[variant] || styles.info;
    const IconComponent = currentStyle.Icon;

    return (
        <div
            ref={ref}
            role="alert"
            className={`flex items-start gap-3 p-4 border rounded-md ${currentStyle.container} ${className}`}
            {...props}
        >
            <IconComponent className={`w-5 h-5 flex-shrink-0 mt-0.5 ${currentStyle.icon}`} />

            <div className="flex-1">
                {title && (
                    <h3 className={`text-sm font-medium ${currentStyle.title}`}>
                        {title}
                    </h3>
                )}
                <div className={`text-sm ${currentStyle.text} ${title ? 'mt-1' : ''}`}>
                    {children}
                </div>
            </div>

            {onDismiss && (
                <button
                    onClick={handleDismiss}
                    className={`flex-shrink-0 -mr-1 p-1 rounded hover:bg-black/5 transition-colors ${currentStyle.icon}`}
                    aria-label="Dismiss alert"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
        </div>
    );
});

Alert.displayName = "Alert";

export { Alert };
