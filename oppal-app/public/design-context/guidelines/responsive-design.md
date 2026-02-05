# Responsive Design Guidelines

## Mobile-First Approach

Always design for mobile first, then enhance for larger screens.

## Breakpoints

```
sm:   640px   - Landscape phones
md:   768px   - Tablets
lg:   1024px  - Laptops
xl:   1280px  - Desktops
2xl:  1536px  - Large desktops
```

## Common Responsive Patterns

### 1. Container Widths

```jsx
// Responsive container with max-width
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  {/* Content */}
</div>
```

### 2. Grid Layouts

```jsx
// Single column on mobile, 2 on tablet, 3 on desktop
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Cards */}
</div>

// Single column on mobile, 4 on desktop (skip tablet breakpoint)
<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
  {/* Stat cards */}
</div>
```

### 3. Flexbox Layouts

```jsx
// Stack on mobile, row on desktop
<div className="flex flex-col lg:flex-row gap-6">
  <div className="lg:w-2/3">{/* Main content */}</div>
  <div className="lg:w-1/3">{/* Sidebar */}</div>
</div>
```

### 4. Typography Scaling

```jsx
// Responsive text sizes
<h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
  Responsive Heading
</h1>

<p className="text-sm sm:text-base lg:text-lg">
  Responsive body text
</p>
```

### 5. Spacing Adjustments

```jsx
// Different padding at different breakpoints
<div className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
  {/* Content with responsive spacing */}
</div>

// Responsive gaps
<div className="space-y-4 sm:space-y-6 lg:space-y-8">
  {/* Vertically stacked items */}
</div>
```

### 6. Show/Hide Elements

```jsx
// Hide on mobile, show on desktop
<div className="hidden lg:block">
  {/* Desktop-only content */}
</div>

// Show on mobile, hide on desktop
<div className="lg:hidden">
  {/* Mobile-only content */}
</div>

// Conditional rendering example: Mobile menu
<button className="lg:hidden">
  <svg>...</svg> {/* Hamburger menu */}
</button>

<nav className="hidden lg:flex lg:gap-6">
  {/* Desktop navigation */}
</nav>
```

### 7. Image Responsiveness

```jsx
// Responsive image sizing
<img 
  src="/image.jpg"
  alt="Description"
  className="w-full h-auto"
/>

// Object fit for consistent aspect ratios
<div className="aspect-video bg-gray-200">
  <img 
    src="/image.jpg"
    alt="Description"
    className="w-full h-full object-cover"
  />
</div>

// Different images for different screens
<picture>
  <source media="(min-width: 1024px)" srcSet="large.jpg" />
  <source media="(min-width: 768px)" srcSet="medium.jpg" />
  <img src="small.jpg" alt="Description" />
</picture>
```

### 8. Button Sizes

```jsx
// Full width on mobile, auto on desktop
<button className="w-full sm:w-auto px-4 py-2 bg-primary-600 text-white rounded-md">
  Responsive Button
</button>
```

### 9. Modal/Dialog Responsiveness

```jsx
// Full screen on mobile, centered with max-width on desktop
<div className="fixed inset-0 lg:inset-4 lg:flex lg:items-center lg:justify-center">
  <div className="bg-white h-full w-full lg:h-auto lg:max-w-2xl lg:rounded-lg">
    {/* Modal content */}
  </div>
</div>
```

### 10. Form Layouts

```jsx
// Stack on mobile, side-by-side on desktop
<form>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <label htmlFor="firstName">First Name</label>
      <input id="firstName" type="text" className="w-full" />
    </div>
    
    <div>
      <label htmlFor="lastName">Last Name</label>
      <input id="lastName" type="text" className="w-full" />
    </div>
  </div>
  
  <div>
    <label htmlFor="email-responsive">Email</label>
    <input id="email-responsive" type="email" className="w-full" />
  </div>
</form>
```

## Touch Target Sizes

Minimum touch target: 44x44px (Apple) or 48x48px (Android)

```jsx
// Good: Large enough touch target
<button className="p-3 min-w-[44px] min-h-[44px]">
  <svg className="w-6 h-6">...</svg>
</button>

// Bad: Too small
<button className="p-1">
  <svg className="w-4 h-4">...</svg>
</button>
```

## Navigation Patterns

### Hamburger Menu (Mobile)

```jsx
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      {/* Mobile menu button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2"
        aria-label="Toggle menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Home</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">About</a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
          </nav>
        </div>
      )}
      
      {/* Desktop menu */}
      <nav className="hidden lg:flex lg:gap-6">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
    </>
  );
}
```

## Performance Considerations

### Lazy Loading Images

```jsx
<img 
  src="image.jpg"
  alt="Description"
  loading="lazy"
  className="w-full h-auto"
/>
```

### Responsive Media Queries in CSS

```css
/* Mobile first */
.container {
  padding: 16px;
}

/* Tablet and up */
@media (min-width: 768px) {
  .container {
    padding: 24px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .container {
    padding: 32px;
  }
}
```

## Testing Checklist

- [ ] Test at 320px width (small mobile)
- [ ] Test at 375px width (iPhone SE)
- [ ] Test at 768px width (tablet portrait)
- [ ] Test at 1024px width (tablet landscape / small laptop)
- [ ] Test at 1440px width (desktop)
- [ ] Test touch interactions on mobile
- [ ] Test orientation changes (portrait/landscape)
- [ ] Verify no horizontal scrolling at any breakpoint
- [ ] Check that text is readable without zooming
- [ ] Verify form inputs are easy to tap

## Common Responsive Patterns

### Hero Section
```jsx
<section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
      Hero Heading
    </h1>
    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-8">
      Subheading text
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <button className="w-full sm:w-auto">Primary CTA</button>
      <button className="w-full sm:w-auto">Secondary CTA</button>
    </div>
  </div>
</section>
```

### Card Grid
```jsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
  {cards.map(card => (
    <div key={card.id} className="bg-white rounded-lg shadow-md p-4 sm:p-6">
      {/* Card content */}
    </div>
  ))}
</div>
```

### Sidebar Layout
```jsx
<div className="flex flex-col lg:flex-row gap-6">
  {/* Main content */}
  <main className="lg:flex-1 order-2 lg:order-1">
    {/* Main content */}
  </main>
  
  {/* Sidebar */}
  <aside className="lg:w-80 order-1 lg:order-2">
    {/* Sidebar content */}
  </aside>
</div>
```

## AI Usage Rules

When generating responsive layouts:
- Always start with mobile styles (no breakpoint prefix)
- Add `sm:`, `md:`, `lg:` prefixes progressively
- Use grid for card layouts with responsive columns
- Use flexbox for navigation and content sections
- Include `max-w-7xl mx-auto` for content containers
- Add responsive padding: `px-4 sm:px-6 lg:px-8`
- Make buttons full-width on mobile: `w-full sm:w-auto`
- Hide/show elements appropriately: `hidden lg:block`
- Ensure touch targets are at least 44x44px
- Test at minimum 320px width
