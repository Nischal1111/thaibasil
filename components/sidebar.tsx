"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./theme-toggle";

interface NavItem {
  name: string;
  href: string;
  count?: number;
  icon: string;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    items: [
      { name: "Reservations", href: "/reservations", count: 1711, icon: "✓" },
      { name: "Table Management", href: "/tables", icon: "▦" },
      { name: "Opening Days", href: "/opening-days", count: 6, icon: "📅" },
      { name: "Categories", href: "/categories", count: 10, icon: "📁" },
      { name: "Menu Items", href: "/menu-items", count: 61, icon: "☰" },
      { name: "Reviews", href: "/reviews", count: 14, icon: "👍" },
    ],
  },
  {
    title: "Other",
    items: [{ name: "All Messages", href: "/messages", icon: "💬" }],
  },
  {
    title: "Promotions",
    items: [{ name: "Subscribers", href: "/subscribers", icon: "⚡" }],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-[290px] h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 flex flex-col">
      {/* Logo */}
      <div className="p-6 flex items-center justify-between border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-2xl">🌿</span>
          </div>
        </div>
        <ThemeToggle />
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {section.title && (
              <div className="px-6 mb-2">
                <button className="flex items-center justify-between w-full text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                  <span>{section.title}</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            )}
            <div className="space-y-1 px-3">
              {section.items.map((item) => {
                const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "bg-amber-500 text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }
                    `}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    {item.count !== undefined && (
                      <span
                        className={`
                          px-2 py-0.5 text-xs rounded-md font-semibold
                          ${
                            isActive
                              ? "bg-amber-600 text-white"
                              : "bg-amber-100 dark:bg-amber-900/30 text-amber-900 dark:text-amber-400"
                          }
                        `}
                      >
                        {item.count}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </div>
  );
}
