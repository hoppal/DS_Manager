# Accessibility Guidelines

## Overview
All components must meet WCAG 2.1 AA standards minimum. Accessibility is not optional.

## Core Principles

### 1. Semantic HTML
Use proper HTML elements for their intended purpose.

**Good:**
```html
<button onClick={handleClick}>Submit</button>
<nav><a href="/about">About</a></nav>
<h1>Page Title</h1>
<main>...</main>
```

**Bad:**
```html
<div onClick={handleClick}>Submit</div>
<div><div onClick={navigate}>About</div></div>
<div style="font-size: 32px; font-weight: bold">Page Title</div>
<div>...</div>
```

### 2. Keyboard Navigation
All interactive elements must be keyboard accessible.

**Requirements:**
- Tab order should be logical and follow visual flow
- `Tab` to move forward, `Shift+Tab` to move backward
- `Enter` or `Space` to activate buttons/links
- `Escape` to close modals/dropdowns
- Arrow keys for menu navigation

**Implementation:**
```jsx
// Good: Button is naturally keyboard accessible
<button onClick={handleClick}>Click me</button>

// Bad: Div requires extra work
<div onClick={handleClick}>Click me</div>

// If you must use div, add keyboard support:
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Click me
</div>
```

### 3. Focus Indicators
Always provide visible focus indicators.

**Required styling:**
```css
/* Always include focus styles */
.button:focus {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}

/* Or using Tailwind */
.focus:outline-none 
.focus:ring-2 
.focus:ring-primary-500 
.focus:ring-offset-2
```

**Never remove focus without replacement:**
```css
/* BAD - removes accessibility */
*:focus {
  outline: none;
}

/* GOOD - custom but visible */
*:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;
}
```

### 4. Color Contrast
Ensure sufficient contrast ratios.

**Requirements:**
- Normal text (< 18px): 4.5:1 minimum
- Large text (≥ 18px or ≥ 14px bold): 3:1 minimum
- UI components and graphics: 3:1 minimum

**Design System Contrast Ratios:**
```
✓ White on Primary-600 (#2563eb): 8.59:1
✓ Gray-900 (#111827) on White: 16.94:1
✓ Gray-700 (#374151) on White: 10.72:1
✓ Primary-600 on Primary-50: 9.11:1
✗ Gray-400 (#9ca3af) on White: 2.87:1 (fails for small text)
```

**Never rely on color alone:**
```jsx
// Bad: Only color indicates error
<input className="border-red-600" />

// Good: Icon + color + text
<div>
  <input className="border-red-600" aria-invalid="true" aria-describedby="error" />
  <p id="error" className="text-red-600 text-sm mt-1">
    <span className="inline-flex items-center gap-1">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
      This field is required
    </span>
  </p>
</div>
```

### 5. ARIA Labels and Roles

**When to use ARIA:**
- When semantic HTML is insufficient
- To provide additional context
- For dynamic content updates
- For custom controls

**Common ARIA Attributes:**

```jsx
// aria-label: Name for element without visible text
<button aria-label="Close dialog">
  <svg>...</svg>
</button>

// aria-labelledby: Reference to labeling element
<div role="dialog" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Action</h2>
</div>

// aria-describedby: Additional description
<input 
  id="password"
  aria-describedby="password-requirements"
/>
<p id="password-requirements">
  Must be at least 8 characters
</p>

// aria-invalid: Validation state
<input 
  aria-invalid="true"
  aria-describedby="error-message"
/>

// aria-hidden: Hide decorative elements from screen readers
<svg aria-hidden="true" focusable="false">...</svg>

// aria-live: Announce dynamic changes
<div aria-live="polite" aria-atomic="true">
  {statusMessage}
</div>

// aria-expanded: Toggle state
<button 
  aria-expanded={isOpen}
  aria-controls="menu"
>
  Menu
</button>
```

**ARIA Roles:**
```jsx
// Navigation
<nav role="navigation">

// Main content
<main role="main">

// Search
<div role="search">

// Alert
<div role="alert">Important message</div>

// Dialog/Modal
<div role="dialog" aria-modal="true">

// Button (only when not using <button>)
<div role="button" tabIndex={0}>
```

### 6. Form Accessibility

**Every input needs a label:**
```jsx
// Good: Explicit label
<label htmlFor="email">Email</label>
<input id="email" type="email" />

// Good: Implicit label
<label>
  Email
  <input type="email" />
</label>

// Bad: No label
<input type="email" placeholder="Email" />
```

**Required fields:**
```jsx
<label htmlFor="name">
  Name <span className="text-error-600">*</span>
</label>
<input 
  id="name"
  required
  aria-required="true"
/>
```

**Error messages:**
```jsx
<label htmlFor="username">Username</label>
<input 
  id="username"
  aria-invalid="true"
  aria-describedby="username-error"
/>
<p id="username-error" role="alert" className="text-error-600">
  Username is already taken
</p>
```

**Grouping related inputs:**
```jsx
<fieldset>
  <legend>Contact Information</legend>
  <label htmlFor="phone">Phone</label>
  <input id="phone" type="tel" />
  
  <label htmlFor="email-fieldset">Email</label>
  <input id="email-fieldset" type="email" />
</fieldset>
```

### 7. Images and Media

**All images need alt text:**
```jsx
// Informative image
<img src="chart.png" alt="Sales increased 25% in Q4" />

// Decorative image
<img src="decoration.png" alt="" />
// or
<img src="decoration.png" role="presentation" />

// Complex image
<img 
  src="complex-chart.png" 
  alt="Quarterly sales data" 
  aria-describedby="chart-description"
/>
<div id="chart-description">
  Detailed description of the chart data...
</div>
```

**Video and audio:**
```jsx
// Video with captions
<video controls>
  <source src="video.mp4" type="video/mp4" />
  <track kind="captions" src="captions.vtt" srclang="en" label="English" />
</video>

// Audio with transcript
<audio controls>
  <source src="podcast.mp3" type="audio/mpeg" />
</audio>
<details>
  <summary>View transcript</summary>
  <p>Transcript text...</p>
</details>
```

### 8. Modal/Dialog Accessibility

```jsx
function Modal({ isOpen, onClose, title, children }) {
  // Focus trap and escape key handling
  useEffect(() => {
    if (!isOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
      >
        <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
          <h2 id="modal-title" className="text-xl font-semibold mb-4">
            {title}
          </h2>
          
          {children}
          
          <div className="flex justify-end gap-3 mt-6">
            <button 
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
```

### 9. Loading States

```jsx
// Screen reader announcement
<div 
  role="status" 
  aria-live="polite"
  className="sr-only"
>
  Loading data...
</div>

// Visual loading indicator
<button disabled aria-busy="true">
  <svg className="animate-spin h-4 w-4" aria-hidden="true">...</svg>
  <span>Loading...</span>
</button>
```

### 10. Skip Links

```jsx
// Add at the very top of your page
<a 
  href="#main-content"
  className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-primary-600"
>
  Skip to main content
</a>

{/* ... header/navigation ... */}

<main id="main-content">
  {/* page content */}
</main>
```

## Screen Reader Only Class

Add this utility class to your CSS:

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only:focus,
.sr-only:active {
  position: static;
  width: auto;
  height: auto;
  overflow: visible;
  clip: auto;
  white-space: normal;
}
```

## Testing Checklist

- [ ] Can navigate entire interface with keyboard only
- [ ] All interactive elements have visible focus indicators
- [ ] All images have appropriate alt text
- [ ] Color contrast meets WCAG AA standards
- [ ] Forms have proper labels and error messages
- [ ] Modals trap focus and close with Escape
- [ ] Dynamic content announces to screen readers
- [ ] Page has logical heading hierarchy (h1, h2, h3...)
- [ ] Skip links are present and functional
- [ ] Tested with screen reader (NVDA, JAWS, VoiceOver)

## Tools for Testing

- **axe DevTools**: Browser extension for automated testing
- **WAVE**: Web accessibility evaluation tool
- **Lighthouse**: Built into Chrome DevTools
- **Screen Readers**: NVDA (Windows), JAWS (Windows), VoiceOver (Mac/iOS)
- **Keyboard Only**: Unplug mouse and navigate site

## Common Mistakes to Avoid

1. Removing focus indicators
2. Using divs/spans as buttons
3. Missing alt text on images
4. Color as only indicator
5. Insufficient contrast
6. Missing form labels
7. Non-descriptive link text ("click here")
8. Auto-playing media
9. Time limits without extensions
10. No keyboard access to functionality

## AI Usage Rules

When generating components:
- Always include proper ARIA attributes
- Ensure keyboard navigation support
- Add focus indicators by default
- Use semantic HTML elements
- Include alt text for images
- Link inputs to labels
- Add proper heading hierarchy
- Test with keyboard navigation in mind
