# Input Component

## Overview
Text inputs allow users to enter data. Support various types with consistent styling and validation states.

## Basic Text Input

```jsx
// React/Next.js
<div className="w-full">
  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
    Email Address
  </label>
  <input
    type="email"
    id="email"
    name="email"
    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
    placeholder="you@example.com"
  />
</div>
```

```html
<!-- HTML/CSS -->
<div class="input-group">
  <label for="email" class="input-label">Email Address</label>
  <input type="email" id="email" class="input" placeholder="you@example.com" />
</div>

<style>
.input-group {
  width: 100%;
}

.input-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 4px;
}

.input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 1rem;
  transition: all 200ms;
}

.input:focus {
  outline: none;
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.input::placeholder {
  color: #9ca3af;
}
</style>
```

## Input Types

### Text Input
```jsx
<input
  type="text"
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  placeholder="Enter text"
/>
```

### Password Input
```jsx
<div className="relative">
  <input
    type="password"
    className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
    placeholder="••••••••"
  />
  <button 
    type="button"
    className="absolute inset-y-0 right-0 pr-3 flex items-center"
    aria-label="Toggle password visibility"
  >
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  </button>
</div>
```

### Number Input
```jsx
<input
  type="number"
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  placeholder="0"
  min="0"
  step="1"
/>
```

### Search Input
```jsx
<div className="relative">
  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  </div>
  <input
    type="search"
    className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
    placeholder="Search..."
  />
</div>
```

### Date Input
```jsx
<input
  type="date"
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
/>
```

## Validation States

### Error State
```jsx
<div className="w-full">
  <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
    Username
  </label>
  <input
    type="text"
    id="username"
    className="w-full px-3 py-2 border-2 border-error-600 rounded-md focus:outline-none focus:ring-2 focus:ring-error-500"
    aria-invalid="true"
    aria-describedby="username-error"
  />
  <p id="username-error" className="mt-1 text-sm text-error-600">
    Username is already taken
  </p>
</div>
```

### Success State
```jsx
<div className="w-full">
  <label htmlFor="email-verified" className="block text-sm font-medium text-gray-700 mb-1">
    Email Address
  </label>
  <div className="relative">
    <input
      type="email"
      id="email-verified"
      className="w-full px-3 py-2 pr-10 border-2 border-success-600 rounded-md focus:outline-none focus:ring-2 focus:ring-success-500"
      value="user@example.com"
      readOnly
    />
    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
      <svg className="h-5 w-5 text-success-600" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    </div>
  </div>
  <p className="mt-1 text-sm text-success-600">
    Email verified successfully
  </p>
</div>
```

### Disabled State
```jsx
<input
  type="text"
  className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md text-gray-500 cursor-not-allowed"
  placeholder="Disabled input"
  disabled
/>
```

## Input Sizes

### Small
```jsx
<input
  type="text"
  className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  placeholder="Small input"
/>
```

### Medium (Default)
```jsx
<input
  type="text"
  className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  placeholder="Medium input"
/>
```

### Large
```jsx
<input
  type="text"
  className="w-full px-4 py-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  placeholder="Large input"
/>
```

## Textarea

```jsx
<div className="w-full">
  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
    Message
  </label>
  <textarea
    id="message"
    rows={4}
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 resize-none"
    placeholder="Enter your message..."
  />
  <p className="mt-1 text-sm text-gray-500">
    Maximum 500 characters
  </p>
</div>
```

## Input with Helper Text

```jsx
<div className="w-full">
  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
    Password
  </label>
  <input
    type="password"
    id="password"
    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
  />
  <p className="mt-1 text-sm text-gray-500">
    Must be at least 8 characters with one uppercase letter and one number
  </p>
</div>
```

## Input with Prefix/Suffix

### With Prefix
```jsx
<div className="w-full">
  <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">
    Website
  </label>
  <div className="flex rounded-md shadow-sm">
    <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      https://
    </span>
    <input
      type="text"
      id="website"
      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-primary-500"
      placeholder="www.example.com"
    />
  </div>
</div>
```

### With Suffix
```jsx
<div className="w-full">
  <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
    Price
  </label>
  <div className="flex rounded-md shadow-sm">
    <input
      type="number"
      id="price"
      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:ring-2 focus:ring-primary-500"
      placeholder="0.00"
    />
    <span className="inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
      USD
    </span>
  </div>
</div>
```

## Required Field Indicator

```jsx
<label htmlFor="required-field" className="block text-sm font-medium text-gray-700 mb-1">
  Email Address
  <span className="text-error-600 ml-1">*</span>
</label>
<input
  type="email"
  id="required-field"
  required
  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
/>
```

## Accessibility Guidelines

1. **Always include labels**: Every input must have an associated `<label>` with matching `htmlFor`/`id`
2. **Error messages**: Use `aria-invalid` and `aria-describedby` for validation feedback
3. **Required fields**: Use `required` attribute and visual indicator
4. **Placeholder text**: Should not replace labels, only provide examples
5. **Focus indicators**: Visible focus rings are mandatory
6. **Helper text**: Link to input using `aria-describedby` when providing instructions

## Usage Rules for AI

When generating inputs:
- Always wrap in container div for spacing
- Include label with proper `htmlFor` attribute
- Add focus ring styling (ring-2 ring-primary-500)
- Use border-gray-300 for default state
- Include transition-colors for smooth interactions
- Add placeholder text for clarity
- Ensure proper ARIA attributes for validation states

## Form Example

```jsx
<form className="space-y-4 max-w-md">
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
      Full Name <span className="text-error-600">*</span>
    </label>
    <input
      type="text"
      id="name"
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
      placeholder="John Doe"
    />
  </div>

  <div>
    <label htmlFor="email-form" className="block text-sm font-medium text-gray-700 mb-1">
      Email <span className="text-error-600">*</span>
    </label>
    <input
      type="email"
      id="email-form"
      required
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label htmlFor="message-form" className="block text-sm font-medium text-gray-700 mb-1">
      Message
    </label>
    <textarea
      id="message-form"
      rows={4}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
      placeholder="Your message here..."
    />
  </div>

  <button type="submit" className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
    Submit
  </button>
</form>
```
