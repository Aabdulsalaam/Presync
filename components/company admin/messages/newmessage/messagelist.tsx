"use client";

import { Info, CheckCircle2, Star } from "lucide-react";
import { Message } from "./message"; 

interface MessageListItemProps {
  message: Message;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

export default function MessageListItem({
  message,
  isSelected,
  onSelect,
}: MessageListItemProps) {
  const SenderIcon = message.senderType === "info" ? Info : CheckCircle2;
  const senderIconColor =
    message.senderType === "info" ? "text-blue-500" : "text-emerald-500";

  return (
    <button
      type="button"
      onClick={() => onSelect(message.id)}
      className={`w-full border-b border-gray-100 px-5 py-4 text-left transition-colors last:border-b-0 hover:bg-gray-50 ${
        isSelected ? "bg-indigo-50/60" : "bg-white"
      }`}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 text-xs font-medium text-gray-500">
          <SenderIcon size={13} className={senderIconColor} />
          <span>{message.sender}</span>
        </div>
        {message.starred && (
          <Star size={14} className="fill-amber-400 text-amber-400" />
        )}
      </div>

      <p className="mt-1.5 text-sm font-semibold text-gray-900">
        {message.subject}
      </p>
      <p className="mt-0.5 line-clamp-2 text-xs leading-relaxed text-gray-500">
        {message.preview}
      </p>
      <p className="mt-2 text-[11px] text-gray-400">{message.timestamp}</p>
    </button>
  );
}
