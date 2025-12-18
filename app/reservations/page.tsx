"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/button";
import Link from "next/link";
import { useState } from "react";

type ReservationStatus = "pending" | "confirmed" | "completed" | "cancelled";
type ReservationType = "online" | "offline";

interface Reservation {
  id: number;
  name: string;
  email: string;
  phone: string;
  guests: number;
  date: string;
  time: string;
  message?: string;
  type: ReservationType;
  status: ReservationStatus;
}

const mockReservations: Reservation[] = [
  {
    id: 1,
    name: "ros keep",
    email: "roskeep@icloud.com",
    phone: "07798804788",
    guests: 3,
    date: "Friday, December 19",
    time: "12:30 pm",
    type: "online",
    status: "pending",
  },
];

const tabs = [
  { label: "All", value: "all", count: 1711 },
  { label: "Pending", value: "pending", count: 1 },
  { label: "Confirmed", value: "confirmed", count: 27 },
  { label: "Completed", value: "completed", count: 1607 },
  { label: "Cancelled", value: "cancelled", count: 76 },
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "pending":
      return "🕐";
    case "confirmed":
      return "✓";
    case "completed":
      return "✓";
    case "cancelled":
      return "✕";
    default:
      return "";
  }
};

const getStatusColor = (status: ReservationStatus) => {
  switch (status) {
    case "pending":
      return "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400";
    case "confirmed":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
    case "completed":
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
    case "cancelled":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400";
  }
};

const getTypeColor = (type: ReservationType) => {
  return type === "online"
    ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    : "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400";
};

export default function ReservationsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <AppLayout>
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <span>Reservations</span>
          <span>&gt;</span>
          <span>List</span>
        </div>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Reservations
          </h1>
          <Link href="/reservations/create">
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              + Add offline reservation
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-4 mb-8 bg-gray-800/50 dark:bg-gray-900/50 p-2 rounded-lg inline-flex">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`
                flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors
                ${
                  activeTab === tab.value
                    ? "bg-gray-700 dark:bg-gray-800 text-white"
                    : "text-gray-300 dark:text-gray-400 hover:text-white"
                }
              `}
            >
              <span className="text-lg">{getStatusIcon(tab.value)}</span>
              <span>{tab.label}</span>
              <span
                className={`
                  px-2 py-0.5 text-xs rounded-md font-semibold
                  ${
                    tab.value === "pending"
                      ? "bg-amber-600 text-white"
                      : tab.value === "confirmed"
                      ? "bg-green-600 text-white"
                      : tab.value === "completed"
                      ? "bg-green-600 text-white"
                      : tab.value === "cancelled"
                      ? "bg-red-600 text-white"
                      : "bg-gray-600 text-white"
                  }
                `}
              >
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative">
            <select className="appearance-none bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 pr-10 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <option>Group by</option>
              <option>Date</option>
              <option>Status</option>
              <option>Type</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
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
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-2.5 pl-10 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 w-80"
              />
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
            <button className="p-2.5 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800">
              <svg
                className="w-5 h-5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                />
              </svg>
            </button>
            <span className="px-3 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
              0
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-800">
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 dark:border-gray-600"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  No.
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Reserved By
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                  Guests
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
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                  Date
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
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                  Time
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
                      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
                    />
                  </svg>
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Message
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-4 text-left text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider flex items-center gap-1">
                  Status
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
                </th>
              </tr>
            </thead>
            <tbody>
              {mockReservations.map((reservation) => (
                <tr
                  key={reservation.id}
                  className="border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 dark:border-gray-600"
                    />
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {reservation.id}.
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {reservation.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {reservation.email}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {reservation.phone}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
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
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                      {reservation.guests} guests
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
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
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {reservation.date}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-md text-sm font-medium bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {reservation.time}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900 dark:text-white">
                    {reservation.message || "-"}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-md text-xs font-semibold uppercase ${getTypeColor(
                        reservation.type
                      )}`}
                    >
                      {reservation.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        reservation.status
                      )}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-current"></span>
                      {reservation.status.charAt(0).toUpperCase() +
                        reservation.status.slice(1)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-sm text-gray-700 dark:text-gray-300">
              Showing 1 result
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-700 dark:text-gray-300">
                Per page
              </span>
              <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-700 dark:text-gray-300">
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
