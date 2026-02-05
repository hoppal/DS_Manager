import React, { useState } from 'react';
import {
    Search,
    Home,
    Menu,
    ExternalLink,
    Plus,
    Minus,
    X,
    Check,
    Edit,
    Trash2,
    Copy,
    Mail,
    MessageSquare,
    Bell
} from 'lucide-react';

export default function IconBrowser() {
    const [searchQuery, setSearchQuery] = useState('');
    const [copiedIcon, setCopiedIcon] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('all');

    const iconCategories = {
        'Navigation': [
            { name: 'Home', component: Home },
            { name: 'Menu', component: Menu },
            { name: 'Search', component: Search },
            { name: 'ExternalLink', component: ExternalLink },
        ],
        'Actions': [
            { name: 'Plus', component: Plus },
            { name: 'Minus', component: Minus },
            { name: 'X', component: X },
            { name: 'Check', component: Check },
            { name: 'Edit', component: Edit },
            { name: 'Trash2', component: Trash2 },
            { name: 'Copy', component: Copy },
        ],
        'Communication': [
            { name: 'Mail', component: Mail },
            { name: 'MessageSquare', component: MessageSquare },
            { name: 'Bell', component: Bell },
        ]
    };

    const allIcons = Object.values(iconCategories).flat();

    const filteredIcons = selectedCategory === 'all'
        ? allIcons.filter(icon => icon.name.toLowerCase().includes(searchQuery.toLowerCase()))
        : iconCategories[selectedCategory]?.filter(icon =>
            icon.name.toLowerCase().includes(searchQuery.toLowerCase())
        ) || [];

    const copyImport = (iconName) => {
        const importStatement = `import { ${iconName} } from 'lucide-react';`;
        navigator.clipboard.writeText(importStatement);
        setCopiedIcon(iconName);
        setTimeout(() => setCopiedIcon(null), 2000);
    };

    const categories = ['all', ...Object.keys(iconCategories)];

    return (
        <div className="space-y-6">
            <section className="space-y-4">
                <h2 className="text-xl font-bold text-neutral-900">Icon Browser</h2>
                <p className="text-neutral-600">
                    Browse components. Click any icon to copy its import statement.
                </p>
            </section>

            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
                    <input
                        type="text"
                        placeholder="Search icons..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                </div>
                <div className="flex gap-2 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedCategory === cat
                                ? 'bg-primary-500 text-white'
                                : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                                }`}
                        >
                            {cat === 'all' ? 'All' : cat}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {filteredIcons.map((icon) => {
                    const IconComponent = icon.component;
                    return (
                        <button
                            key={icon.name}
                            onClick={() => copyImport(icon.name)}
                            className={`group flex flex-col items-center justify-center p-3 rounded-lg border transition-all ${copiedIcon === icon.name
                                ? 'border-primary-500 bg-primary-50'
                                : 'border-neutral-200 hover:border-primary-300 hover:bg-neutral-50'
                                }`}
                        >
                            <IconComponent className={`w-5 h-5 ${copiedIcon === icon.name ? 'text-primary-600' : 'text-neutral-600'
                                }`} />
                            <span className={`mt-1.5 text-[10px] truncate max-w-full ${copiedIcon === icon.name ? 'text-primary-600 font-medium' : 'text-neutral-500'
                                }`}>
                                {copiedIcon === icon.name ? 'Copied!' : icon.name}
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
