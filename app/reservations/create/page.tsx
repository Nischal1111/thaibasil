"use client";

import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateReservationPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent, createAnother = false) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form data:", formData);

    if (createAnother) {
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        guests: "",
        date: "",
        time: "",
        message: "",
      });
    } else {
      // Navigate back to list
      router.push("/reservations");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <AppLayout>
      <div className="p-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <Link href="/reservations" className="hover:text-gray-700 dark:hover:text-gray-300">
            Reservations
          </Link>
          <span>&gt;</span>
          <span>Create</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Create Reservation
          </h1>
        </div>

        {/* Form */}
        <div className="max-w-4xl">
          <form onSubmit={(e) => handleSubmit(e, false)}>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Email<span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                      />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              {/* Phone and Guests Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Guests Field */}
                <div>
                  <label
                    htmlFor="guests"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Guests<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                    <input
                      type="number"
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="Guests"
                      required
                      min="1"
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Date and Time Row */}
              <div className="grid grid-cols-2 gap-6">
                {/* Date Field */}
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Date<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      placeholder="Date"
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Time Field */}
                <div>
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Time<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                      <svg
                        className="w-5 h-5 text-gray-400"
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
                    </div>
                    <input
                      type="time"
                      id="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg pl-12 pr-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message"
                  rows={4}
                  className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4 pt-4">
                <Button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6"
                >
                  Create
                </Button>
                <Button
                  type="button"
                  onClick={(e) => handleSubmit(e as React.FormEvent, true)}
                  variant="secondary"
                  className="px-6"
                >
                  Create & create another
                </Button>
                <Link href="/reservations">
                  <Button variant="tertiary" className="px-6">
                    Cancel
                  </Button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </AppLayout>
  );
}
