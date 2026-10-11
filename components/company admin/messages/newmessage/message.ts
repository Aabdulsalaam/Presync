export type MessageSenderType = "info" | "success";

export interface Message {
  id: string;
  sender: string;
  senderType: MessageSenderType;
  subject: string;
  preview: string;
  timestamp: string;
  starred: boolean;
  unread: boolean;
}