# Alert Component

## Overview
Alerts provide contextual feedback messages for typical user actions with severity levels.

## Variants

### Info Alert
```jsx
<div className="flex items-start gap-3 p-4 bg-info-50 border border-info-200 rounded-md">
  <svg className="w-5 h-5 text-info-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
  </svg>
  <div className="flex-1">
    <h3 className="text-sm font-medium text-info-900">Information</h3>
    <p className="text-sm text-info-700 mt-1">
      This is an informational message to help guide the user.
    </p>
  </div>
</div>
```

### Success Alert
```jsx
<div className="flex items-start gap-3 p-4 bg-success-50 border border-success-200 rounded-md">
  <svg className="w-5 h-5 text-success-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
  <div className="flex-1">
    <h3 className="text-sm font-medium text-success-900">Success</h3>
    <p className="text-sm text-success-700 mt-1">
      Your changes have been saved successfully.
    </p>
  </div>
</div>
```

### Warning Alert
```jsx
<div className="flex items-start gap-3 p-4 bg-warning-50 border border-warning-200 rounded-md">
  <svg className="w-5 h-5 text-warning-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
  <div className="flex-1">
    <h3 className="text-sm font-medium text-warning-900">Warning</h3>
    <p className="text-sm text-warning-700 mt-1">
      Your subscription will expire in 3 days. Please renew to continue service.
    </p>
  </div>
</div>
```

### Error Alert
```jsx
<div className="flex items-start gap-3 p-4 bg-error-50 border border-error-200 rounded-md">
  <svg className="w-5 h-5 text-error-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
  </svg>
  <div className="flex-1">
    <h3 className="text-sm font-medium text-error-900">Error</h3>
    <p className="text-sm text-error-700 mt-1">
      There was an error processing your request. Please try again.
    </p>
  </div>
</div>
```

## With Dismiss Button

```jsx
function DismissibleAlert() {
  const [isVisible, setIsVisible] = useState(true);
  
  if (!isVisible) return null;
  
  return (
    <div className="flex items-start gap-3 p-4 bg-info-50 border border-info-200 rounded-md">
      <svg className="w-5 h-5 text-info-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
      </svg>
      <div className="flex-1">
        <h3 className="text-sm font-medium text-info-900">Notice</h3>
        <p className="text-sm text-info-700 mt-1">
          We've updated our privacy policy. Please review the changes.
        </p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="flex-shrink-0 text-info-600 hover:text-info-800 focus:outline-none focus:ring-2 focus:ring-info-500 rounded"
        aria-label="Dismiss alert"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
```

## With Actions

```jsx
<div className="p-4 bg-warning-50 border border-warning-200 rounded-md">
  <div className="flex items-start gap-3">
    <svg className="w-5 h-5 text-warning-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <div className="flex-1">
      <h3 className="text-sm font-medium text-warning-900">Action Required</h3>
      <p className="text-sm text-warning-700 mt-1 mb-3">
        Your payment method is about to expire. Update it to avoid service interruption.
      </p>
      <div className="flex gap-3">
        <button className="px-3 py-1.5 text-sm font-medium bg-warning-600 text-white rounded-md hover:bg-warning-700">
          Update Now
        </button>
        <button className="px-3 py-1.5 text-sm font-medium text-warning-700 hover:text-warning-900">
          Remind Me Later
        </button>
      </div>
    </div>
  </div>
</div>
```

## Compact Version (No Title)

```jsx
<div className="flex items-center gap-2 p-3 bg-success-50 border border-success-200 rounded-md">
  <svg className="w-5 h-5 text-success-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
  </svg>
  <p className="text-sm text-success-700">
    Profile updated successfully
  </p>
</div>
```

## Banner Style (Full Width)

```jsx
<div className="bg-primary-600 text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
    <div className="flex items-center justify-between flex-wrap gap-2">
      <div className="flex items-center gap-3">
        <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        <p className="text-sm font-medium">
          New feature available! Check out our updated dashboard.
        </p>
      </div>
      <button className="text-sm font-medium underline hover:no-underline">
        Learn more
      </button>
    </div>
  </div>
</div>
```

## With List

```jsx
<div className="p-4 bg-error-50 border border-error-200 rounded-md">
  <div className="flex items-start gap-3">
    <svg className="w-5 h-5 text-error-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
    <div className="flex-1">
      <h3 className="text-sm font-medium text-error-900">There were errors with your submission</h3>
      <ul className="mt-2 text-sm text-error-700 space-y-1 list-disc list-inside">
        <li>Email address is required</li>
        <li>Password must be at least 8 characters</li>
        <li>Terms and conditions must be accepted</li>
      </ul>
    </div>
  </div>
</div>
```

## Toast Notification (Temporary)

```jsx
function Toast({ type = 'info', message, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);
  
  const styles = {
    info: 'bg-gray-900 text-white',
    success: 'bg-success-600 text-white',
    error: 'bg-error-600 text-white',
    warning: 'bg-warning-600 text-white',
  };
  
  return (
    <div className={`fixed bottom-4 right-4 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${styles[type]} animate-slide-up`}>
      <p className="text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="ml-2 text-white/80 hover:text-white"
        aria-label="Close"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
```

## Accessibility Guidelines

1. **Role attribute**: Use `role="alert"` for important messages that need immediate attention
2. **Color + Icon**: Never rely on color alone - always include an icon
3. **Dismiss buttons**: Include `aria-label="Dismiss alert"` or `aria-label="Close"`
4. **Focus management**: For toast notifications, avoid stealing focus unless critical
5. **Live regions**: Use `aria-live="polite"` or `aria-live="assertive"` for dynamic alerts

### Proper ARIA Usage

```jsx
// For critical errors
<div role="alert" aria-live="assertive" className="...">
  {/* Alert content */}
</div>

// For informational messages
<div role="status" aria-live="polite" className="...">
  {/* Alert content */}
</div>

// For dismissible alerts
<div role="alertdialog" aria-labelledby="alert-title" aria-describedby="alert-description">
  <h3 id="alert-title">Alert Title</h3>
  <p id="alert-description">Alert description</p>
  <button>Dismiss</button>
</div>
```

## Usage Rules for AI

When generating alerts:
- Always include an icon matching the severity level
- Use semantic colors: info (blue), success (green), warning (orange), error (red)
- Include proper spacing: `p-4` for content, `gap-3` between icon and text
- Add border and background from same color family
- Ensure text contrast meets WCAG standards
- Include proper ARIA attributes for screen readers
- Make dismiss buttons keyboard accessible
- For toast notifications, position `fixed bottom-4 right-4`

## Animation for Toasts

```css
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
```

## Common Patterns

### Form Validation Alert
```jsx
{errors.length > 0 && (
  <div role="alert" className="mb-4 p-4 bg-error-50 border border-error-200 rounded-md">
    <div className="flex items-start gap-3">
      <svg className="w-5 h-5 text-error-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
      </svg>
      <div>
        <h3 className="text-sm font-medium text-error-900">Please fix the following errors:</h3>
        <ul className="mt-2 text-sm text-error-700 space-y-1">
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      </div>
    </div>
  </div>
)}
```
