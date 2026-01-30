import React from 'react';
import {
    LayoutDashboard,
    CreditCard,
    AlertTriangle,
    CheckCircle,
    FileText,
    MessageCircle,
    Settings,
    X
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'DS Manager', href: '/manager', icon: Settings },
];

const demoNavigation = [
    { name: 'Cockpit', href: '/cockpit', icon: LayoutDashboard },
    { name: 'Spend', href: '/spend', icon: CreditCard },
    { name: 'Risks', href: '/risks', icon: AlertTriangle },
    { name: 'Quality', href: '/quality', icon: CheckCircle },
    { name: 'Contracts', href: '/contracts', icon: FileText },
    { name: 'Chat', href: '/chat', icon: MessageCircle },
];

export function Sidebar({ className = '' }) {
    const location = useLocation();
    // Default to /manager as active if root or matching
    const currentPath = location.pathname === '/' ? '/manager' : location.pathname;

    const NavLink = ({ item }) => {
        const Icon = item.icon;
        const isActive = currentPath.startsWith(item.href);

        return (
            <Link
                to={item.href}
                className={`
                    flex items-center gap-3 px-3 py-2.5 text-sm font-medium rounded-lg transition-all duration-200
                    ${isActive
                        ? 'bg-primary-500 text-white shadow-sm'
                        : 'text-neutral-700 hover:bg-neutral-100'
                    }
                `}
            >
                <Icon className="w-5 h-5 flex-shrink-0" />
                <span>{item.name}</span>
            </Link>
        );
    };

    return (
        <aside className={`fixed inset-y-0 left-0 w-60 bg-neutral-50 border-r border-neutral-200 flex flex-col ${className}`}>
            {/* Logo */}
            <div className="flex items-center h-20 px-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <span className="text-xl font-bold text-neutral-900">Oppal DS Manager</span>
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6 space-y-6 overflow-y-auto">
                <div className="space-y-1">
                    {navigation.map((item) => (
                        <NavLink key={item.name} item={item} />
                    ))}
                </div>

                <div className="space-y-3">
                    <h3 className="px-3 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                        Demos
                    </h3>
                    <div className="space-y-1">
                        {demoNavigation.map((item) => (
                            <NavLink key={item.name} item={item} />
                        ))}
                    </div>
                </div>
            </nav>

            {/* User Profile */}
            <div className="p-4 border-t border-neutral-200">
                <button className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-neutral-100 transition-colors text-left">
                    <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-500">
                        <span className="font-semibold text-sm">JD</span>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900 truncate">Jane Doe</p>
                        <p className="text-xs text-neutral-500 truncate">View settings</p>
                    </div>
                </button>
            </div>

            {/* Settings */}
            <div className="p-4 border-t border-neutral-200">
                <button className="flex items-center gap-3 w-full px-3 py-2 text-sm font-medium text-neutral-700 rounded-lg hover:bg-neutral-100 transition-colors">
                    <Settings className="w-5 h-5" />
                    <span>Settings</span>
                </button>
            </div>
        </aside>
    );
}

export function MobileSidebar({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 lg:hidden">
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-neutral-900/50 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
                <div className="flex items-center justify-between p-4 border-b border-neutral-200">
                    <span className="text-xl font-bold text-neutral-900">Oppal</span>
                    <button onClick={onClose} className="p-2 text-neutral-500 hover:bg-neutral-100 rounded-md">
                        <X className="w-6 h-6" />
                    </button>
                </div>
                <div className="h-full overflow-y-auto pb-20">
                    <Sidebar className="w-full relative border-none shadow-none static h-auto" />
                </div>
            </div>
        </div>
    );
}
