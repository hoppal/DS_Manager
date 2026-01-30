# Oppal Dashboard Template

## Overview
Complete Spend Management dashboard matching the Oppal design system. Use this as a starting point for all dashboard pages.

## Full Dashboard Page

```jsx
// React/Next.js Complete Dashboard
import { useState } from 'react';

export default function SpendDashboard() {
  const [dateRange, setDateRange] = useState('10 Feb 25 - 10 Mar 25');
  const [theme, setTheme] = useState('light');

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Sidebar */}
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
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
            <span>Cockpit</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium bg-primary-500 text-white rounded-lg shadow-sm">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <span>Spend</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Risks</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Quality</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Contracts</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-neutral-700 hover:bg-neutral-100 rounded-lg">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span>Chat</span>
          </a>
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-neutral-200">
          <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-neutral-100">
            <div className="w-10 h-10 rounded-full bg-neutral-300"></div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-neutral-900">User Profile</p>
            </div>
          </button>
        </div>

        {/* Settings */}
        <div className="p-4 border-t border-neutral-200">
          <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-60">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-neutral-200">
          <div className="flex items-center justify-between h-20 px-8">
            <h1 className="text-2xl font-semibold text-neutral-900">Spend</h1>
            <div className="flex items-center gap-4">
              {/* Theme Toggle */}
              <button className="p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {theme === 'light' ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                  )}
                </svg>
              </button>

              {/* Date Range */}
              <div className="flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
                <svg className="w-5 h-5 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm font-medium text-neutral-700">{dateRange}</span>
                <svg className="w-4 h-4 text-neutral-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-8">
          {/* Stat Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Total Spend Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Total Spend</h3>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-success-600 font-medium">+13.93%</span>
                  <span className="text-neutral-500">that last week</span>
                </div>
              </div>
              <p className="text-4xl font-extrabold text-neutral-900 mb-4">€90,000</p>
              <div className="flex items-end justify-between h-20 gap-1">
                {[45, 38, 52, 35, 48, 42, 55, 38, 45, 50, 40, 48, 35, 58, 45, 42, 50, 48].map((height, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-primary-500 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Total Suppliers Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Total Suppliers</h3>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-error-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-error-600 font-medium">-13.93%</span>
                  <span className="text-neutral-500">that last week</span>
                </div>
              </div>
              <p className="text-4xl font-extrabold text-neutral-900 mb-4">289</p>
              <div className="flex items-end justify-between h-20 gap-1">
                {[55, 48, 42, 50, 45, 52, 48, 55, 42, 50, 58, 45, 50, 42, 38, 45, 48, 40].map((height, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-primary-500 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            {/* Average Order Value Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-medium text-neutral-600 uppercase tracking-wide">Average Order Value</h3>
                <div className="flex items-center gap-1 text-sm">
                  <svg className="w-4 h-4 text-success-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-success-600 font-medium">+18.63%</span>
                  <span className="text-neutral-500">that last week</span>
                </div>
              </div>
              <p className="text-4xl font-extrabold text-neutral-900 mb-4">€36,056</p>
              <div className="flex items-end justify-between h-20 gap-1">
                {[42, 45, 48, 50, 52, 48, 45, 50, 55, 48, 45, 50, 48, 52, 45, 48, 50, 52].map((height, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-primary-500 rounded-t-sm"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Middle Row - Charts and Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {/* Spend by Category */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold text-neutral-900 mb-6">Spend by Category</h2>
              <div className="space-y-4">
                {[
                  { name: 'Medical Equipment', percent: 27, delivered: 1150 },
                  { name: 'IT & Software', percent: 16, delivered: 1890 },
                  { name: 'Building & Infra', percent: 38, delivered: 1690 },
                  { name: 'Admin & Stationery', percent: 14, delivered: '1,750,000' },
                  { name: 'Sterilization Materials', percent: 24, delivered: '1,980,110' },
                ].map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between mb-2 text-sm">
                      <span className="font-medium text-neutral-900">{item.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="font-semibold text-neutral-900">{item.percent}%</span>
                        <span className="text-neutral-600">{item.delivered}</span>
                      </div>
                    </div>
                    <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-primary-500 rounded-full"
                        style={{ width: `${item.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Donut Charts Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { title: 'Spend Pareto', value: '20%', label: 'Top Spend' },
                { title: 'Contracted Spend', value: '60%', label: 'Contracted' },
                { title: 'Assessed Spend', value: '50%', label: 'Assessed Spend' },
              ].map((chart) => (
                <div key={chart.title} className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="text-xs font-medium text-neutral-600 uppercase tracking-wide mb-4">{chart.title}</h3>
                  <div className="relative w-32 h-32 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#e9ecef"
                        strokeWidth="16"
                      />
                      <circle
                        cx="64"
                        cy="64"
                        r="56"
                        fill="none"
                        stroke="#00af91"
                        strokeWidth="16"
                        strokeDasharray={`${parseInt(chart.value) * 3.52} 352`}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-2xl font-extrabold text-neutral-900">{chart.value}</span>
                      <span className="text-xs text-neutral-600">{chart.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Suppliers Management Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-neutral-900">Suppliers Management</h2>
              <select className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>2025</option>
                <option>2024</option>
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">Supplier's Class</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">Supplier Name</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">Spend</th>
                    <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">Risk Score</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">Category</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {[
                    { class: 'A', name: 'MedicaPro Systems', spend: '$6,120,560', risk: '6.85', category: 'Surgical Equipment' },
                    { class: 'B', name: 'VitaPharm Logistics', spend: '$2,145,980', risk: '3.47', category: 'Pharmaceutical Distribution' },
                    { class: 'C', name: 'NeoSterile Supplies', spend: '$1,785,230', risk: '7.92', category: 'Sterile Packaging' },
                    { class: 'A', name: 'FlexiMed Robotics', spend: '$3,994,120', risk: '8.31', category: 'Medical Robotics' },
                  ].map((supplier, i) => (
                    <tr key={i} className="hover:bg-neutral-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">{supplier.class}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">{supplier.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 text-right">{supplier.spend}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700 text-right">{supplier.risk}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">{supplier.category}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
```

## Usage Instructions

When creating dashboard pages:
1. Always start with the sidebar + main layout structure
2. Use sticky header with page title and controls
3. Place stat cards in first row (grid-cols-3)
4. Follow with detailed charts/tables
5. Maintain consistent spacing (p-8 for page, gap-6 for grids)
6. Apply white cards with rounded-lg and shadow-md
7. Use proper heading hierarchy (h1 for page, h2 for sections, h3 for cards)

## Responsive Behavior

- **Desktop (lg)**: Full sidebar visible, 3-column stat cards
- **Tablet (md)**: Collapsible sidebar, 2-column stat cards
- **Mobile (sm)**: Drawer sidebar, 1-column stat cards

## Color Guidelines

- **Background**: neutral-50 (#f8f9fa)
- **Cards**: white with shadow-md
- **Primary Actions**: primary-500 (#00af91)
- **Text**: neutral-900 (headings), neutral-700 (body)
- **Borders**: neutral-200

## Performance Tips

- Use `overflow-x-auto` on tables
- Implement virtualization for long lists
- Lazy load charts below fold
- Cache API responses
- Optimize chart rendering
