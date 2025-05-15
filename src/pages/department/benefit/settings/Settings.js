import React, { useState } from 'react';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: true,
    emailAlerts: true,
    autoApproval: false,
    defaultPriority: 'medium',
    language: 'en',
    theme: 'light'
  });

  const handleSaveSettings = () => {
    // Save settings logic here
    console.log('Saving settings:', settings);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Department Settings</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Notification Settings</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Push Notifications</p>
                <p className="text-sm text-gray-500">Receive notifications for new requests</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.notifications}
                  onChange={(e) => setSettings({...settings, notifications: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Email Alerts</p>
                <p className="text-sm text-gray-500">Receive email notifications</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.emailAlerts}
                  onChange={(e) => setSettings({...settings, emailAlerts: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium text-gray-700 mb-2">Default Priority</h3>
            <select
              value={settings.defaultPriority}
              onChange={(e) => setSettings({...settings, defaultPriority: e.target.value})}
              className="w-full px-3 py-2 border rounded-lg"
            >
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">System Settings</h2>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Language
              </label>
              <select
                value={settings.language}
                onChange={(e) => setSettings({...settings, language: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Theme
              </label>
              <select
                value={settings.theme}
                onChange={(e) => setSettings({...settings, theme: e.target.value})}
                className="w-full px-3 py-2 border rounded-lg"
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="system">System</option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-gray-700">Auto-Approval</p>
                <p className="text-sm text-gray-500">Enable automatic approval for low-priority requests</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={settings.autoApproval}
                  onChange={(e) => setSettings({...settings, autoApproval: e.target.checked})}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleSaveSettings}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Save Settings
        </button>
      </div>
    </div>
  );
};

export default Settings;