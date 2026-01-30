# Data Table Component

## Overview
Clean, professional tables for displaying supplier data, transactions, and other tabular information in Oppal.

## Basic Data Table

```jsx
// React/Next.js
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <table className="min-w-full divide-y divide-neutral-200">
    <thead className="bg-neutral-50">
      <tr>
        <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
          Supplier's Class
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
          Supplier Name
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
          Spend
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
          Risk Score
        </th>
        <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
          Category
        </th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-neutral-200">
      <tr className="hover:bg-neutral-50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
          A
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          MedicaPro Systems
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
          $6,120,560
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          6.85
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          Surgical Equipment
        </td>
      </tr>
      <tr className="hover:bg-neutral-50 transition-colors">
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
          B
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          VitaPharm Logistics
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
          $2,145,980
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          3.47
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
          Pharmaceutical Distribution
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Table with Section Header

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  {/* Header */}
  <div className="px-6 py-4 border-b border-neutral-200 flex items-center justify-between">
    <h2 className="text-lg font-semibold text-neutral-900">Suppliers Management</h2>
    <select className="px-3 py-1.5 border border-neutral-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-500">
      <option>2025</option>
      <option>2024</option>
      <option>2023</option>
    </select>
  </div>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="min-w-full divide-y divide-neutral-200">
      <thead className="bg-neutral-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Supplier's Class
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Supplier Name
          </th>
          <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Spend
          </th>
          <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Risk Score
          </th>
          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Category
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-neutral-200">
        {/* Table rows */}
      </tbody>
    </table>
  </div>
</div>
```

## Sortable Table Headers

```jsx
function SortableHeader({ children, onSort, direction }) {
  return (
    <th 
      className="px-6 py-3 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider cursor-pointer hover:text-primary-600 select-none"
      onClick={onSort}
    >
      <div className="flex items-center gap-2">
        <span>{children}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {direction === 'asc' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          ) : direction === 'desc' ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          )}
        </svg>
      </div>
    </th>
  );
}
```

## Table with Actions

```jsx
<tbody className="bg-white divide-y divide-neutral-200">
  <tr className="hover:bg-neutral-50 transition-colors">
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900">
      A
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
      MedicaPro Systems
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-neutral-900 text-right">
      $6,120,560
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700 text-right">
      6.85
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-700">
      Surgical Equipment
    </td>
    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
      <button className="text-primary-600 hover:text-primary-700 font-medium mr-4">
        View
      </button>
      <button className="text-neutral-600 hover:text-neutral-700">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
        </svg>
      </button>
    </td>
  </tr>
</tbody>
```

## Table with Status Badges

```jsx
<td className="px-6 py-4 whitespace-nowrap">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success-100 text-success-800">
    Active
  </span>
</td>

<td className="px-6 py-4 whitespace-nowrap">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-warning-100 text-warning-800">
    Pending
  </span>
</td>

<td className="px-6 py-4 whitespace-nowrap">
  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-error-100 text-error-800">
    High Risk
  </span>
</td>
```

## Compact Table

```jsx
<table className="min-w-full divide-y divide-neutral-200">
  <thead className="bg-neutral-50">
    <tr>
      <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-700 uppercase">
        Name
      </th>
      <th className="px-4 py-2 text-right text-xs font-semibold text-neutral-700 uppercase">
        Amount
      </th>
    </tr>
  </thead>
  <tbody className="bg-white divide-y divide-neutral-200">
    <tr className="hover:bg-neutral-50">
      <td className="px-4 py-2 text-sm text-neutral-700">Item 1</td>
      <td className="px-4 py-2 text-sm text-neutral-900 text-right font-medium">$1,234</td>
    </tr>
  </tbody>
</table>
```

## Loading State

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <div className="animate-pulse">
    <div className="px-6 py-4 border-b border-neutral-200">
      <div className="h-6 bg-neutral-200 rounded w-48"></div>
    </div>
    <div className="px-6 py-4 space-y-3">
      <div className="h-4 bg-neutral-200 rounded"></div>
      <div className="h-4 bg-neutral-200 rounded"></div>
      <div className="h-4 bg-neutral-200 rounded"></div>
    </div>
  </div>
</div>
```

## Empty State

```jsx
<div className="bg-white rounded-lg shadow-md overflow-hidden">
  <table className="min-w-full">
    <thead className="bg-neutral-50">
      {/* Headers */}
    </thead>
    <tbody>
      <tr>
        <td colSpan="5" className="px-6 py-12 text-center">
          <svg className="mx-auto h-12 w-12 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-neutral-900">No suppliers</h3>
          <p className="mt-1 text-sm text-neutral-500">Get started by adding a new supplier.</p>
          <div className="mt-6">
            <button className="px-4 py-2 bg-primary-600 text-white font-medium rounded-md hover:bg-primary-700">
              Add Supplier
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```

## Pagination

```jsx
<div className="bg-white px-6 py-4 flex items-center justify-between border-t border-neutral-200">
  <div className="flex-1 flex justify-between sm:hidden">
    <button className="px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
      Previous
    </button>
    <button className="ml-3 px-4 py-2 border border-neutral-300 text-sm font-medium rounded-md text-neutral-700 bg-white hover:bg-neutral-50">
      Next
    </button>
  </div>
  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
    <div>
      <p className="text-sm text-neutral-700">
        Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
        <span className="font-medium">97</span> results
      </p>
    </div>
    <div>
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px">
        <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
        <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
          1
        </button>
        <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-primary-50 text-sm font-medium text-primary-600">
          2
        </button>
        <button className="relative inline-flex items-center px-4 py-2 border border-neutral-300 bg-white text-sm font-medium text-neutral-700 hover:bg-neutral-50">
          3
        </button>
        <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-neutral-300 bg-white text-sm font-medium text-neutral-500 hover:bg-neutral-50">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </nav>
    </div>
  </div>
</div>
```

## Accessibility Guidelines

1. **Table Structure**: Always use proper `<table>`, `<thead>`, `<tbody>`, `<th>`, `<tr>`, `<td>` elements
2. **Headers**: Use `<th>` with `scope="col"` for column headers
3. **Caption**: Add `<caption>` for screen readers or use `aria-label` on table
4. **Sort Indicators**: Announce sort state with ARIA
5. **Keyboard Navigation**: Ensure sortable headers are keyboard accessible

```jsx
<table aria-label="Supplier management table">
  <thead>
    <tr>
      <th scope="col" aria-sort="ascending">
        Supplier Name
      </th>
    </tr>
  </thead>
</table>
```

## Usage Rules for AI

When generating tables:
- Container: white background, rounded-lg, shadow-md
- Table: min-w-full, divide-y divide-neutral-200
- Header row: bg-neutral-50
- Header cells: px-6 py-3, text-xs, font-semibold, uppercase, tracking-wider
- Body rows: hover:bg-neutral-50 transition-colors
- Body cells: px-6 py-4, text-sm
- Numbers: text-right alignment, font-medium
- Text: text-left alignment
- Dividers: divide-y divide-neutral-200

## Responsive Table

```jsx
<div className="overflow-x-auto">
  <table className="min-w-full">
    {/* Table content */}
  </table>
</div>

{/* Or card layout on mobile */}
<div className="lg:hidden space-y-4">
  {data.map((item) => (
    <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-neutral-700">Supplier</span>
        <span className="text-sm text-neutral-900">{item.name}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-sm font-medium text-neutral-700">Spend</span>
        <span className="text-sm font-medium text-neutral-900">{item.spend}</span>
      </div>
    </div>
  ))}
</div>
```
