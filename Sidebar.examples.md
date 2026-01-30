# Sidebar Navigation Component

## Overview
The Oppal sidebar provides primary navigation with a distinctive light gray background and teal active states.

## Full Sidebar Layout

```jsx
// React/Next.js Sidebar
export default function Sidebar() {
  const navigation = [
    { name: 'Cockpit', href: '/cockpit', icon: LayoutDashboard, current: false },
    { name: 'Spend', href: '/spend', icon: CreditCard, current: true },
    { name: 'Risks', href: '/risks', icon: AlertTriangle, current: false },
    { name: 'Quality', href: '/quality', icon: CheckCircle, current: false },
    { name: 'Contracts', href: '/contracts', icon: FileText, current: false },
    { name: 'Chat', href: '/chat', icon: MessageCircle, current: false },
  ];

  return (
    <aside className="fixed inset-y-0 left-0 w-60 bg-neutral-50 border-r border-neutral-200 flex flex-col">
      {/* Logo */}
      <div className="flex items-center h-20 px-6 border-b border-neutral-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-neutral-900">Oppal</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                ${item.current 
                  ? 'bg-primary-500 text-white shadow-sm' 
                  : 'text-neutral-700 hover:bg-neutral-100'
                }
              `}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span>{item.name}</span>
            </a>
          );
        })}
      </nav>

      {/* User Profile */}
      <div className="p-4 border-t border-neutral-200">
        <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors">
          <img 
            src="/api/placeholder/40/40" 
            alt="User" 
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1 text-left">
            <p className="text-sm font-medium text-neutral-900">User Profile</p>
            <p className="text-xs text-neutral-500">View settings</p>
          </div>
          <svg className="w-4 h-4 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Settings */}
      <div className="p-4 border-t border-neutral-200">
        <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>Settings</span>
        </button>
      </div>
    </aside>
  );
}
```

## HTML/CSS Version

```html
<aside class="sidebar">
  <!-- Logo -->
  <div class="sidebar-header">
    <div class="sidebar-logo">
      <div class="logo-icon">
        <svg>...</svg>
      </div>
      <span class="logo-text">Oppal</span>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="sidebar-nav">
    <a href="/cockpit" class="nav-item">
      <svg class="nav-icon">...</svg>
      <span>Cockpit</span>
    </a>
    <a href="/spend" class="nav-item active">
      <svg class="nav-icon">...</svg>
      <span>Spend</span>
    </a>
    <a href="/risks" class="nav-item">
      <svg class="nav-icon">...</svg>
      <span>Risks</span>
    </a>
    <a href="/quality" class="nav-item">
      <svg class="nav-icon">...</svg>
      <span>Quality</span>
    </a>
    <a href="/contracts" class="nav-item">
      <svg class="nav-icon">...</svg>
      <span>Contracts</span>
    </a>
    <a href="/chat" class="nav-item">
      <svg class="nav-icon">...</svg>
      <span>Chat</span>
    </a>
  </nav>

  <!-- User Profile -->
  <div class="sidebar-footer">
    <button class="user-profile">
      <img src="/avatar.jpg" alt="User" class="user-avatar" />
      <div class="user-info">
        <p class="user-name">User Profile</p>
        <p class="user-subtitle">View settings</p>
      </div>
    </button>
  </div>
</aside>

<style>
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 240px;
  background: #f8f9fa;
  border-right: 1px solid #e9ecef;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  height: 80px;
  padding: 0 24px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  align-items: center;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.logo-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00af91, #009b9b);
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo-text {
  font-size: 1.25rem;
  font-weight: 700;
  color: #212529;
}

.sidebar-nav {
  flex: 1;
  padding: 24px 12px;
  overflow-y: auto;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  margin-bottom: 4px;
  font-size: 0.875rem;
  font-weight: 500;
  color: #495057;
  text-decoration: none;
  border-radius: 8px;
  transition: all 200ms;
}

.nav-item:hover {
  background: #e9ecef;
}

.nav-item.active {
  background: #00af91;
  color: white;
  box-shadow: 0 1px 3px rgba(0, 175, 145, 0.3);
}

.nav-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.sidebar-footer {
  padding: 16px;
  border-top: 1px solid #e9ecef;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 8px 12px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 200ms;
}

.user-profile:hover {
  background: #e9ecef;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.user-info {
  flex: 1;
  text-align: left;
}

.user-name {
  font-size: 0.875rem;
  font-weight: 500;
  color: #212529;
  margin: 0;
}

.user-subtitle {
  font-size: 0.75rem;
  color: #6c757d;
  margin: 0;
}
</style>
```

## Collapsed Sidebar

```jsx
// Collapsed state (icon-only)
<aside className="fixed inset-y-0 left-0 w-18 bg-neutral-50 border-r border-neutral-200 flex flex-col">
  {/* Logo - icon only */}
  <div className="flex items-center justify-center h-20 border-b border-neutral-200">
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    </div>
  </div>

  {/* Navigation - icons only */}
  <nav className="flex-1 px-2 py-6 space-y-2">
    <a
      href="/spend"
      className="flex items-center justify-center p-3 bg-primary-500 text-white rounded-lg"
      title="Spend"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    </a>
    {/* More nav items */}
  </nav>
</aside>
```

## Mobile Sidebar (Drawer)

```jsx
function MobileSidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 w-60 bg-neutral-50 border-r border-neutral-200 z-50
        transform transition-transform duration-300 lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Same content as desktop sidebar */}
        <div className="flex items-center justify-between h-20 px-6 border-b border-neutral-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-neutral-900">Oppal</span>
          </div>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-neutral-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Navigation */}
        <nav className="px-3 py-6 space-y-1">
          {/* Nav items */}
        </nav>
      </aside>
    </>
  );
}
```

## Navigation Badge

```jsx
// With notification badge
<a href="/chat" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg relative">
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
  <span>Chat</span>
  <span className="absolute top-1.5 left-8 w-2 h-2 bg-error-600 rounded-full"></span>
</a>
```

## Dropdown Menu in Sidebar

```jsx
// Expandable section
function SidebarDropdown({ title, items, icon: Icon }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5" />
          <span>{title}</span>
        </div>
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="ml-8 mt-1 space-y-1">
          {items.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block px-3 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
```

## Accessibility Guidelines

1. **Keyboard Navigation**: All nav items must be keyboard accessible with Tab
2. **Active State**: Clear visual indicator for current page
3. **Focus States**: Visible focus ring on all interactive elements
4. **Skip Link**: Provide skip navigation link
5. **ARIA Labels**: Use `aria-current="page"` for active items
6. **Mobile Menu**: Proper focus management when opening/closing

```jsx
// Accessible sidebar
<aside 
  className="sidebar"
  role="navigation"
  aria-label="Main navigation"
>
  <nav>
    <a
      href="/spend"
      className="nav-item active"
      aria-current="page"
    >
      <svg aria-hidden="true">...</svg>
      <span>Spend</span>
    </a>
  </nav>
</aside>
```

## Usage Rules for AI

When generating sidebars:
- Width: 240px (60 = w-60) desktop, full width mobile
- Background: neutral-50 (#f8f9fa)
- Border: 1px right border, neutral-200
- Active item: primary-500 background, white text, rounded-lg
- Inactive items: neutral-700 text, hover neutral-100 background
- Logo area: 80px height, bottom border
- Nav padding: px-3 py-6
- Nav item spacing: space-y-1 (4px between items)
- Nav item padding: px-3 py-2.5
- Icon size: w-5 h-5 (20px)
- Font: text-sm font-medium
- Transitions: duration-200

## Responsive Layout

```jsx
// Page layout with sidebar
<div className="flex min-h-screen">
  {/* Sidebar */}
  <Sidebar />
  
  {/* Main content */}
  <main className="flex-1 ml-60 lg:ml-60 bg-white">
    <div className="p-8">
      {/* Page content */}
    </div>
  </main>
</div>
```

## Common Patterns

### Sidebar with Sections
```jsx
<nav className="flex-1 px-3 py-6 space-y-6">
  <div>
    <h3 className="px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
      Main
    </h3>
    {/* Main nav items */}
  </div>
  
  <div>
    <h3 className="px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
      Tools
    </h3>
    {/* Tool nav items */}
  </div>
</nav>
```
