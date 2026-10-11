import { Message } from "./message";

export const messages: Message[] = [
  {
    id: "1",
    sender: "Creator Admin",
    senderType: "info",
    subject: "System Update Scheduled",
    preview:
      "A system maintenance is scheduled for this weekend. Please ensure all employees are notified...",
    timestamp: "2 hours ago",
    starred: true,
    unread: true,
  },
  {
    id: "2",
    sender: "HR Department",
    senderType: "success",
    subject: "New Leave Policy Update",
    preview:
      "We are updating our leave policy effective next month. Please review the changes and communicate...",
    timestamp: "5 hours ago",
    starred: false,
    unread: false,
  },
  {
    id: "3",
    sender: "Creator Admin",
    senderType: "info",
    subject: "Monthly Report Required",
    preview:
      "Please submit your monthly attendance report by end of week. Include department-wise statistics...",
    timestamp: "1 day ago",
    starred: true,
    unread: false,
  },
  {
    id: "4",
    sender: "IT Support",
    senderType: "success",
    subject: "Password Reset Requests",
    preview:
      "Multiple employees have requested password resets. Please review and approve the requests...",
    timestamp: "2 days ago",
    starred: false,
    unread: false,
  },
  {
    id: "5",
    sender: "Creator Admin",
    senderType: "info",
    subject: "Feature Enhancement Available",
    preview:
      "New analytics features are now available in your dashboard. Check out the enhanced reporting...",
    timestamp: "3 days ago",
    starred: false,
    unread: false,
  },
];