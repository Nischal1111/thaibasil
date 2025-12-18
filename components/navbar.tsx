"use client";

import { Bell, User, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <nav className="h-16 bg-white dark:bg-background-dark-navbar border-b border-gray-200 dark:border-gray-800 flex items-center justify-end px-6 gap-4">
      {/* Notification Icon */}
      <button className="relative p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        <span className="absolute top-1 right-1 w-5 h-5 bg-primary-dark dark:bg-primary-dark text-xs font-bold rounded-full flex items-center justify-center text-black">
          0
        </span>
      </button>

      {/* Profile Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowProfileDropdown(!showProfileDropdown)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <User className="w-5 h-5 text-gray-700 dark:text-gray-300" />
        </button>

        {showProfileDropdown && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-10"
              onClick={() => setShowProfileDropdown(false)}
            />
            {/* Dropdown Menu */}
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-20">
              <button
                onClick={() => {
                  setTheme(theme === "dark" ? "light" : "dark");
                  setShowProfileDropdown(false);
                }}
                className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center gap-3"
              >
                {mounted && theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
