import type { LucideIcon } from "lucide-react";
import { KeyRound, LineChart, Smartphone, Bell, MapPin, Users } from "lucide-react";

export interface Whatwedo {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const Whatwedo: Whatwedo[] = [
  {
    icon: KeyRound,
    title: "One-time password(OTP)",
    description:
      "Seamless Integration with , QR code, One time password (OTP), and GPS rule.",
  },
  {
    icon: LineChart,
    title: "Real-Time Analytics",
    description:
      "Supports QR code, one-time passwords (OTP), and geofencing for precise attendance tracking.",
  },
  {
    icon: Smartphone,
    title: "Mobile Access",
    description:
      "Presynce is accessible on mobile devices, ensuring workforce management at your fingertips.",
  },
  {
    icon: Bell,
    title: "Notification",
    description:
      "Instant alerts and reminders ensure timely attendance updates and important announcements.",
  },
  {
    icon: MapPin,
    title: "GPS Rule",
    description:
      "Location-based permissions enabled through GPS rule for enhanced security.",
  },
  {
    icon: Users,
    title: "User Management",
    description:
      "Manage user roles and permissions with ease through an intuitive interface.",
  },
];
