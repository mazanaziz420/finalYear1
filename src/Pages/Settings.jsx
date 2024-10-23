import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bell, Lock, CreditCard, User, ChevronRight, Mail, Phone, LogOut, Trash2 } from 'lucide-react';

const Setting = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`flex flex-col p-6 min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Account Settings</h1>
      
      <div className="space-y-6 max-w-3xl w-full mx-auto">
        {/* Profile Information */}
        <Link to="/profile">
          <SettingCard
            icon={<User className="w-6 h-6" />}
            title="Profile Information"
            description="Update your personal details"
            action={<ChevronRight className="w-6 h-6" />}
          />
        </Link>

        {/* Email Verification */}
        <SettingCard
          icon={<Mail className="w-6 h-6" />}
          title="Verify Email Address"
          description="Ensure your email address is verified for account recovery"
          action={
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Verify Email
            </button>
          }
        />

        {/* Phone Verification */}
        <SettingCard
          icon={<Phone className="w-6 h-6" />}
          title="Verify Phone Number"
          description="Verify your phone number for added account security"
          action={
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
              Verify Phone
            </button>
          }
        />

        {/* Password and Security */}
        <Link to="/SecurityPage">
          <SettingCard
            icon={<Lock className="w-6 h-6" />}
            title="Password & Security"
            description="Manage your password and security settings"
            action={<ChevronRight className="w-6 h-6" />}
          />
        </Link>

        {/* Payment Methods */}
        <Link to="/AddPayment">
          <SettingCard
            icon={<CreditCard className="w-6 h-6" />}
            title="Payment Methods"
            description="Manage your payment options"
            action={<ChevronRight className="w-6 h-6" />}
          />
        </Link>

        {/* Notifications
        <Link to="/notifications">
          <SettingCard
            icon={<Bell className="w-6 h-6" />}
            title="Notifications"
            description="Manage your notification preferences"
            action={<ChevronRight className="w-6 h-6" />}
          />
        </Link> */}

        {/* Dark Mode Toggle */}
        <div className={`flex items-center justify-between p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-md`}>
          <div className="flex items-center space-x-4">
            <div className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-semibold">Dark Mode</h2>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Toggle dark mode on or off</p>
            </div>
          </div>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input type="checkbox" className="sr-only" checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <div className={`block w-14 h-8 rounded-full ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
              <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${darkMode ? 'transform translate-x-6' : ''}`}></div>
            </div>
          </label>
        </div>

        {/* Log Out */}
<SettingCard
  icon={<LogOut className="w-6 h-6 text-yellow-500" />}
  title="Log Out"
  description="Log out of your account securely"
  action={
    <Link to="/Login">
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
        Log Out
      </button>
    </Link>
  }
/>
        {/* Delete Account */}
        <SettingCard
          icon={<Trash2 className="w-6 h-6 text-red-500" />}
          title="Delete Account"
          description="Permanently delete your account. This action cannot be undone"
          action={
            <Link to="/DeleteAccount">
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-300">
              Delete Account
            </button>
            </Link>
          }
        />
      </div>
    </div>
  );
};

const SettingCard = ({ icon, title, description, action }) => (
  <div className={`flex items-center justify-between p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition duration-300`}>
    <div className="flex items-center space-x-4">
      <div className="p-2 rounded-full bg-gray-200">
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
    {action}
  </div>
);

export default Setting;