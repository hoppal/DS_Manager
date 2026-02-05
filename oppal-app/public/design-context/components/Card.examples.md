# Card Component

## Overview
Cards are flexible containers for grouping related content. They provide visual hierarchy and separation.

## Basic Card

```jsx
// React/Next.js
<div className="bg-white rounded-lg shadow-md p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">
    Card Title
  </h3>
  <p className="text-gray-600">
    Card content goes here. Use cards to group related information and actions.
  </p>
</div>
```

```html
<!-- HTML/CSS -->
<div class="card">
  <h3 class="card-title">Card Title</h3>
  <p class="card-content">
    Card content goes here. Use cards to group related information and actions.
  </p>
</div>

<style>
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  padding: 24px;
}

.card-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 8px;
}

.card-content {
  color: #4b5563;
  line-height: 1.5;
}
</style>
```

## Card with Header and Footer

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  {/* Header */}
  <div className="px-6 py-4 border-b border-gray-200">
    <h3 className="text-lg font-semibold text-gray-900">
      Card Header
    </h3>
  </div>
  
  {/* Body */}
  <div className="px-6 py-4">
    <p className="text-gray-600">
      This is the main content area of the card. It can contain text, images, or other components.
    </p>
  </div>
  
  {/* Footer */}
  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
    <div className="flex justify-end gap-3">
      <button className="px-4 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100">
        Cancel
      </button>
      <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
        Save
      </button>
    </div>
  </div>
</div>
```

## Card with Image

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden max-w-sm">
  {/* Image */}
  <img 
    src="/api/placeholder/400/200" 
    alt="Card image"
    className="w-full h-48 object-cover"
  />
  
  {/* Content */}
  <div className="p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">
      Product Name
    </h3>
    <p className="text-gray-600 mb-4">
      A brief description of the product or content being displayed in this card.
    </p>
    <button className="w-full px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
      View Details
    </button>
  </div>
</div>
```

## Clickable Card

```jsx
<a 
  href="#" 
  className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 group"
>
  <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
    Interactive Card
  </h3>
  <p className="text-gray-600 mb-4">
    This entire card is clickable and provides visual feedback on hover.
  </p>
  <span className="text-primary-600 font-medium inline-flex items-center gap-1">
    Learn more
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  </span>
</a>
```

## Card with Badge

```jsx
<div className="bg-white rounded-lg shadow-md p-6 relative">
  {/* Badge */}
  <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-success-100 text-success-700 rounded-full">
    New
  </span>
  
  <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-16">
    Featured Content
  </h3>
  <p className="text-gray-600">
    This card includes a badge indicator to highlight important information.
  </p>
</div>
```

## Stats Card

```jsx
<div className="bg-white rounded-lg shadow-md p-6">
  <div className="flex items-center justify-between mb-4">
    <h3 className="text-sm font-medium text-gray-500 uppercase">
      Total Revenue
    </h3>
    <svg className="w-8 h-8 text-success-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
    </svg>
  </div>
  <div className="flex items-baseline">
    <p className="text-3xl font-bold text-gray-900">
      $45,231
    </p>
    <span className="ml-2 text-sm font-medium text-success-600">
      +12.5%
    </span>
  </div>
  <p className="mt-2 text-sm text-gray-500">
    vs last month
  </p>
</div>
```

## Profile Card

```jsx
<div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
  <div className="flex items-center gap-4 mb-4">
    <img 
      src="/api/placeholder/80/80" 
      alt="Profile"
      className="w-16 h-16 rounded-full object-cover"
    />
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Jane Doe
      </h3>
      <p className="text-sm text-gray-500">
        Product Designer
      </p>
    </div>
  </div>
  
  <p className="text-gray-600 mb-4">
    Passionate about creating intuitive and delightful user experiences.
  </p>
  
  <div className="flex gap-2">
    <button className="flex-1 px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
      Follow
    </button>
    <button className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50">
      Message
    </button>
  </div>
</div>
```

## Card Grid Layout

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card 1</h3>
    <p className="text-gray-600">Content for the first card.</p>
  </div>
  
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card 2</h3>
    <p className="text-gray-600">Content for the second card.</p>
  </div>
  
  <div className="bg-white rounded-lg shadow-md p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-2">Card 3</h3>
    <p className="text-gray-600">Content for the third card.</p>
  </div>
</div>
```

## Card Variants

### Elevated (with stronger shadow)
```jsx
<div className="bg-white rounded-lg shadow-xl p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Elevated Card</h3>
  <p className="text-gray-600">Uses a stronger shadow for more prominence.</p>
</div>
```

### Outlined
```jsx
<div className="bg-white rounded-lg border-2 border-gray-200 p-6">
  <h3 className="text-lg font-semibold text-gray-900 mb-2">Outlined Card</h3>
  <p className="text-gray-600">Uses a border instead of shadow.</p>
</div>
```

### Colored Background
```jsx
<div className="bg-primary-50 rounded-lg shadow-md p-6 border border-primary-200">
  <h3 className="text-lg font-semibold text-primary-900 mb-2">Colored Card</h3>
  <p className="text-primary-700">Uses a subtle background color for emphasis.</p>
</div>
```

## Loading State Card

```jsx
<div className="bg-white rounded-lg shadow-md p-6 animate-pulse">
  <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
  <div className="h-3 bg-gray-200 rounded w-5/6"></div>
</div>
```

## Card with Action Menu

```jsx
<div className="bg-white rounded-lg shadow-md p-6 relative">
  {/* Action Menu Button */}
  <button className="absolute top-4 right-4 p-1 text-gray-400 hover:text-gray-600">
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
    </svg>
  </button>
  
  <h3 className="text-lg font-semibold text-gray-900 mb-2 pr-8">
    Card with Menu
  </h3>
  <p className="text-gray-600">
    This card includes an action menu in the top right corner.
  </p>
</div>
```

## Accessibility Guidelines

1. **Semantic HTML**: Use appropriate heading levels (h2, h3, etc.)
2. **Clickable cards**: Use `<a>` tags for navigation, include proper focus states
3. **Images**: Always include descriptive alt text
4. **Interactive elements**: Ensure sufficient color contrast and touch targets
5. **Focus indicators**: Visible focus rings for keyboard navigation

## Usage Rules for AI

When generating cards:
- Use `bg-white` for background
- Apply `rounded-lg` for corners
- Use `shadow-md` for default elevation
- Add `p-6` for standard padding
- Include `overflow-hidden` when using images that extend to edges
- Use semantic heading tags (h2, h3) for titles
- Ensure proper spacing with margin utilities
- Add hover states for interactive cards

## Common Patterns

### Three Column Card Grid
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Items</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Cards go here */}
  </div>
</div>
```

### Card List (vertical stack)
```jsx
<div className="max-w-2xl mx-auto space-y-4">
  {/* Multiple cards stacked vertically */}
</div>
```
