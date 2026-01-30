import React, { forwardRef } from 'react';

const Input = forwardRef(({
    label,
    error,
    success,
    helperText,
    iconLeft,
    iconRight,
    className = '',
    wrapperClassName = '',
    id,
    disabled,
    required,
    type = 'text',
    ...props
}, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    const errorId = `${inputId}-error`;
    const helperId = `${inputId}-helper`;

    const baseInputStyles = "w-full rounded-md border text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50";

    let stateStyles = "border-neutral-300 focus-visible:ring-primary-500";
    if (error) {
        stateStyles = "border-error-500 focus-visible:ring-error-500";
    } else if (success) {
        stateStyles = "border-success-500 focus-visible:ring-success-500";
    }

    const sizeStyles = "h-10 px-3 py-2"; // default md size

    // Adjust padding if icons are present
    const paddingLeft = iconLeft ? "pl-10" : "pl-3";
    const paddingRight = iconRight ? "pr-10" : "pr-3";

    const combinedInputStyles = `${baseInputStyles} ${stateStyles} ${sizeStyles} ${paddingLeft} ${paddingRight} ${className}`;

    return (
        <div className={`w-full ${wrapperClassName}`}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="mb-1.5 block text-sm font-medium text-neutral-700"
                >
                    {label}
                    {required && <span className="ml-1 text-error-500">*</span>}
                </label>
            )}

            <div className="relative">
                {iconLeft && (
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        {iconLeft}
                    </div>
                )}

                <input
                    id={inputId}
                    ref={ref}
                    type={type}
                    disabled={disabled}
                    required={required}
                    className={combinedInputStyles}
                    aria-invalid={!!error}
                    aria-describedby={
                        error ? errorId : helperText ? helperId : undefined
                    }
                    {...props}
                />

                {iconRight && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500">
                        {iconRight}
                    </div>
                )}
            </div>

            {error ? (
                <p id={errorId} className="mt-1.5 text-sm text-error-500">
                    {error}
                </p>
            ) : helperText ? (
                <p id={helperId} className="mt-1.5 text-sm text-neutral-500">
                    {helperText}
                </p>
            ) : null}
        </div>
    );
});

Input.displayName = 'Input';

export { Input };
