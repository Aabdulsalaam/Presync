"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Inbox,
  MessageCirclePlus,
  Search,
} from "lucide-react";

import Link from "next/link";

import { messages } from "./messages";
import MessageListItem from "./messagelist";

type Tab = "All" | "Starred" | "Unread";

const tabs: Tab[] = ["All", "Starred", "Unread"];

export default function MessagesPanel() {
  const [activeTab, setActiveTab] =
    useState<Tab>("All");

  const [query, setQuery] = useState("");

  const [selectedId, setSelectedId] =
    useState<string | null>(null);

  const filteredMessages = messages.filter(
    (message) => {
      const matchesTab =
        activeTab === "All" ||
        (activeTab === "Starred" &&
          message.starred) ||
        (activeTab === "Unread" &&
          message.unread);

      const matchesQuery =
        query.trim() === "" ||
        message.subject
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        message.preview
          .toLowerCase()
          .includes(query.toLowerCase()) ||
        message.sender
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesTab && matchesQuery;
    },
  );

  const selectedMessage =
    messages.find(
      (message) =>
        message.id === selectedId,
    ) ?? null;

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-[#f4f5fb] px-4 py-6 pl-[90px] sm:px-6 sm:py-8 sm:pl-[100px] lg:px-8 lg:pl-[120px]">
      {/* Page Heading */}

      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">
          Messages
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Communications from Creator Admin and
          internal messages
        </p>
      </div>

      {/* Messages Container */}

      <div className="flex min-h-0 flex-1 gap-6 overflow-hidden">
        {/* Message List */}

        <div
          className={`w-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:flex lg:max-w-sm ${
            selectedMessage
              ? "hidden"
              : "flex"
          }`}
        >
          {/* Search and Tabs */}

          <div className="shrink-0 p-4">
            {/* Search */}

            <div className="relative">
              <Search
                size={16}
                className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                value={query}
                onChange={(event) =>
                  setQuery(
                    event.target.value,
                  )
                }
                placeholder="Search messages..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-2 pl-9 pr-3 text-sm text-gray-700 placeholder:text-gray-400 focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Tabs */}

            <div className="mt-4 flex items-center gap-6 border-b border-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() =>
                    setActiveTab(tab)
                  }
                  className={`relative pb-3 text-sm transition-colors ${
                    activeTab === tab
                      ? "font-medium text-gray-900"
                      : "text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <span className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-indigo-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Messages */}

          <div className="min-h-0 flex-1 overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {filteredMessages.length >
            0 ? (
              filteredMessages.map(
                (message) => (
                  <MessageListItem
                    key={message.id}
                    message={message}
                    isSelected={
                      selectedId ===
                      message.id
                    }
                    onSelect={
                      setSelectedId
                    }
                  />
                ),
              )
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 px-6 py-16 text-center">
                <Inbox
                  size={28}
                  className="text-gray-300"
                />

                <p className="text-sm text-gray-400">
                  No messages found
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Message Details */}

        <div
          className={`relative min-h-[500px] flex-1 items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm lg:flex ${
            selectedMessage
              ? "flex"
              : "hidden"
          }`}
        >
          {selectedMessage ? (
            <div className="flex h-full w-full flex-col p-5 sm:p-8">
              {/* Mobile Back Button */}

              <button
                type="button"
                onClick={() =>
                  setSelectedId(null)
                }
                className="mb-6 flex w-fit items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-700 lg:hidden"
              >
                <ArrowLeft size={18} />

                Back to messages
              </button>

              {/* Sender Information */}

              <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-gray-500">
                <span>
                  {
                    selectedMessage.sender
                  }
                </span>

                <span className="text-gray-300">
                  &middot;
                </span>

                <span>
                  {
                    selectedMessage.timestamp
                  }
                </span>
              </div>

              {/* Message Subject */}

              <h2 className="mt-3 text-lg font-semibold text-gray-900">
                {
                  selectedMessage.subject
                }
              </h2>

              {/* Message Content */}

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                {
                  selectedMessage.preview
                }
              </p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <Inbox
                size={40}
                strokeWidth={1.5}
                className="text-gray-300"
              />

              <p className="text-sm text-gray-400">
                Select a message to view
              </p>
            </div>
          )}

          {/* Compose Button */}

          <Link
            href="/company-dashboard/messages/new-message"
            aria-label="Compose message"
            className="fixed bottom-6 right-12 flex size-8 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-105 hover:bg-indigo-700"
          >
            <MessageCirclePlus
              size={20}
            />
          </Link>
        </div>
      </div>

      {/* Mobile Compose Button */}

      {!selectedMessage && (
        <Link
          href="/company-dashboard/messages/new-message"
          aria-label="Compose message"
          className="fixed bottom-6 right-5 z-40 flex size-12 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 transition-transform hover:scale-105 hover:bg-indigo-700 lg:hidden"
        >
          <MessageCirclePlus
            size={22}
          />
        </Link>
      )}
    </div>
  );
}