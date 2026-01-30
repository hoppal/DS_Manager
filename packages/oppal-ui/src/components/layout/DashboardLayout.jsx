import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Sidebar, MobileSidebar } from './Sidebar';
import { Menu, Sun, Moon, Calendar, ChevronDown } from 'lucide-react';

const pageTitles = {
  '/cockpit': 'Cockpit',
  '/spend': 'Spend',
  '/risks': 'Risks',
  '/quality': 'Quality',
  '/contracts': 'Contracts',
  '/chat': 'Chat',
};

export default function DashboardLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const location = useLocation();

  const currentPath = location.pathname === '/' ? '/spend' : location.pathname;
  const pageTitle = pageTitles[currentPath] || 'Dashboard';

  return (
    <div className="flex min-h-screen bg-neutral-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar */}
      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 lg:ml-60">
        {/* Header */}
        <header className="sticky top-0 z-10 bg-white border-b border-neutral-200">
          <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="lg:hidden p-2 text-neutral-600 hover:bg-neutral-100 rounded-lg"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <h1 className="text-xl sm:text-2xl font-semibold text-neutral-900">
                {pageTitle}
              </h1>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                className="p-2 text-neutral-600 hover:text-neutral-900 rounded-lg hover:bg-neutral-100"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>

              {/* Date Range */}
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-neutral-50 rounded-lg border border-neutral-200">
                <Calendar className="w-4 h-4 text-neutral-600" />
                <span className="text-sm font-medium text-neutral-700">
                  10 Jan 26 – 10 Feb 26
                </span>
                <ChevronDown className="w-4 h-4 text-neutral-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
