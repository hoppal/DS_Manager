# Dashboard Layout Template

## Overview
Standard dashboard layout with sidebar navigation and main content area.

## Full Layout Structure

```jsx
// React/Next.js Dashboard Layout
export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
        {/* Logo */}
        <div className="flex items-center h-16 px-6 border-b border-gray-200">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
        </div>
        
        {/* Navigation */}
        <nav className="px-3 py-4 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Dashboard
          </a>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Analytics
          </a>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            Users
          </a>
          
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </a>
        </nav>
        
        {/* User Profile (bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
          <div className="flex items-center gap-3">
            <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">John Doe</p>
              <p className="text-xs text-gray-500 truncate">john@example.com</p>
            </div>
          </div>
        </div>
      </aside>
      
      {/* Main Content */}
      <div className="pl-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between h-16 px-6">
            <h2 className="text-2xl font-semibold text-gray-900">Overview</h2>
            
            <div className="flex items-center gap-4">
              {/* Search */}
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-64 pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              
              {/* Notifications */}
              <button className="relative p-2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <span className="absolute top-1 right-1 w-2 h-2 bg-error-600 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>
        
        {/* Page Content */}
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
```

## Using the Layout

```jsx
// In your dashboard pages
import DashboardLayout from './DashboardLayout';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-sm font-medium text-gray-500 uppercase">Total Users</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">2,543</p>
        </div>
        {/* More stat cards... */}
      </div>
      
      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Chart or table */}
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          {/* Recent activity */}
        </div>
      </div>
    </DashboardLayout>
  );
}
```

## Mobile Responsive Version

```jsx
// Add mobile menu toggle
const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// Mobile menu button (add to header)
<button 
  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  className="lg:hidden p-2 text-gray-400 hover:text-gray-600"
>
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

// Responsive sidebar classes
<aside className={`
  fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 z-20
  transform transition-transform duration-200 ease-in-out
  lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
`}>
```

## Variations

### Collapsed Sidebar
```jsx
// Add icon-only sidebar for collapsed state
<aside className="fixed inset-y-0 left-0 w-16 bg-white border-r border-gray-200">
  <nav className="px-2 py-4 space-y-2">
    <a href="#" className="flex justify-center p-3 text-white bg-primary-600 rounded-md" title="Dashboard">
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    </a>
  </nav>
</aside>
<div className="pl-16">
  {/* Main content */}
</div>
```

### Top Navigation Layout
```jsx
<div className="min-h-screen bg-gray-50">
  {/* Top Navigation */}
  <header className="bg-white border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <div className="flex items-center gap-8">
          <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
          <nav className="hidden md:flex gap-1">
            <a href="#" className="px-3 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-md">
              Dashboard
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Analytics
            </a>
            <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Users
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          {/* User menu */}
        </div>
      </div>
    </div>
  </header>
  
  {/* Main Content */}
  <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {children}
  </main>
</div>
```

## Usage Notes for AI

When creating dashboard layouts:
- Use `min-h-screen` to ensure full viewport height
- Sidebar width: `w-64` (256px) is standard
- Apply `pl-64` to main content to account for fixed sidebar
- Use `sticky top-0` for persistent header
- Grid layouts for stat cards: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- Consistent padding: `p-6` for page content
- Always include mobile responsive behavior
