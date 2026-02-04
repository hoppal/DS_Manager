import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent, Button, Input, Alert } from '@prism/ui';
import { Save, User, Bell, Palette, Shield, Download } from 'lucide-react';

export default function SettingsPage() {
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        name: 'Jane Doe',
        email: 'jane.doe@example.com',
        company: 'Acme Corporation',
        notifications: true,
        emailUpdates: false,
        theme: 'light',
    });

    const handleSave = () => {
        // In a real app, this would save to a backend
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    const handleChange = (field, value) => {
        setSettings(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-neutral-900">Settings</h1>
                <p className="text-neutral-600">Manage your account preferences and design system configuration.</p>
            </div>

            {saved && (
                <Alert variant="success">
                    Settings saved successfully!
                </Alert>
            )}

            {/* Profile Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-primary-500" />
                        <CardTitle>Profile Information</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Full Name
                            </label>
                            <Input
                                value={settings.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                                placeholder="Enter your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Email Address
                            </label>
                            <Input
                                type="email"
                                value={settings.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Company
                            </label>
                            <Input
                                value={settings.company}
                                onChange={(e) => handleChange('company', e.target.value)}
                                placeholder="Enter your company name"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Bell className="w-5 h-5 text-primary-500" />
                        <CardTitle>Notifications</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-neutral-900">Push Notifications</p>
                                <p className="text-xs text-neutral-500">Receive notifications about system updates</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={settings.notifications}
                                    onChange={(e) => handleChange('notifications', e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-neutral-900">Email Updates</p>
                                <p className="text-xs text-neutral-500">Get weekly summaries via email</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={settings.emailUpdates}
                                    onChange={(e) => handleChange('emailUpdates', e.target.checked)}
                                    className="sr-only peer"
                                />
                                <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
                            </label>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Appearance Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Palette className="w-5 h-5 text-primary-500" />
                        <CardTitle>Appearance</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-neutral-700 mb-3">
                                Theme
                            </label>
                            <div className="grid grid-cols-3 gap-3">
                                {['light', 'dark', 'auto'].map((theme) => (
                                    <button
                                        key={theme}
                                        onClick={() => handleChange('theme', theme)}
                                        className={`px-4 py-3 rounded-lg border-2 transition-all ${settings.theme === theme
                                                ? 'border-primary-500 bg-primary-50'
                                                : 'border-neutral-200 hover:border-neutral-300'
                                            }`}
                                    >
                                        <p className="text-sm font-medium text-neutral-900 capitalize">{theme}</p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Security Settings */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-primary-500" />
                        <CardTitle>Security</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            Change Password
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Two-Factor Authentication
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            Active Sessions
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Data & Privacy */}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <Download className="w-5 h-5 text-primary-500" />
                        <CardTitle>Data & Privacy</CardTitle>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                            Export Your Data
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-danger-600 hover:bg-danger-50">
                            Delete Account
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Save Button */}
            <div className="flex justify-end gap-3">
                <Button variant="outline">
                    Cancel
                </Button>
                <Button onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                </Button>
            </div>
        </div>
    );
}
