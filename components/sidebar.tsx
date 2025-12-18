"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  CheckCircle,
  LayoutGrid,
  Calendar,
  FolderOpen,
  Menu as MenuIcon,
  ThumbsUp,
  MessageCircle,
  Zap,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  count?: number;
  icon: any;
}

interface NavSection {
  title?: string;
  items: NavItem[];
}

const navSections: NavSection[] = [
  {
    items: [
      { name: "Reservations", href: "/reservations", count: 1711, icon: CheckCircle },
      { name: "Table Management", href: "/tables", icon: LayoutGrid },
      { name: "Opening Days", href: "/opening-days", count: 6, icon: Calendar },
      { name: "Categories", href: "/categories", count: 10, icon: FolderOpen },
      { name: "Menu Items", href: "/menu-items", count: 61, icon: MenuIcon },
      { name: "Reviews", href: "/reviews", count: 14, icon: ThumbsUp },
    ],
  },
  {
    title: "Other",
    items: [{ name: "All Messages", href: "/messages", icon: MessageCircle }],
  },
  {
    title: "Promotions",
    items: [{ name: "Subscribers", href: "/subscribers", icon: Zap }],
  },
];

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ isCollapsed, onToggle }: SidebarProps) {
  const pathname = usePathname();
  const [collapsedSections, setCollapsedSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    if (isCollapsed) return;
    setCollapsedSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <div
      className={`${
        isCollapsed ? "w-20" : "w-[290px]"
      } h-screen bg-white dark:bg-background-dark-navbar border-r border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-200 dark:border-gray-800">
        {!isCollapsed && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-dark dark:bg-primary-dark rounded-lg flex items-center justify-center">
              <span className="text-xl font-bold text-black">TB</span>
            </div>
          </div>
        )}
        <button
          onClick={onToggle}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <div className="flex flex-col gap-1">
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
            <div className="w-5 h-0.5 bg-gray-700 dark:bg-gray-300"></div>
          </div>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        {navSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {section.title && !isCollapsed && (
              <div className="px-6 mb-2">
                <button
                  onClick={() => toggleSection(section.title!)}
                  className="flex items-center justify-between w-full text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <span>{section.title}</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${
                      collapsedSections.includes(section.title!) ? "-rotate-90" : ""
                    }`}
                  />
                </button>
              </div>
            )}
            {(!section.title || !collapsedSections.includes(section.title!)) && (
              <div className="space-y-1 px-3">
                {section.items.map((item) => {
                  const isActive = pathname === item.href || pathname?.startsWith(item.href + "/");
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                      flex items-center ${isCollapsed ? "justify-center" : "justify-between"} px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                      ${
                        isActive
                          ? "bg-primary-dark-active text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }
                    `}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`${isCollapsed ? "w-5 h-5" : "w-5 h-5"}`} />
                        {!isCollapsed && <span>{item.name}</span>}
                      </div>
                      {item.count !== undefined && !isCollapsed && (
                        <span
                          className={`
                          px-2 py-0.5 text-xs rounded-md font-semibold
                          ${
                            isActive
                              ? "bg-amber-900 text-white"
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
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}
