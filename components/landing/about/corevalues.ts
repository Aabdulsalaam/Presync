import {
  Heart,
  LockKeyhole,
  UsersRound,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface CoreValue {
  icon: LucideIcon;
  title: string;
  description: string;
  iconWrapperClassName: string;
  hoverClassName: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: Heart,
    title: "Customer First",
    description:
      "We prioritize our customers' needs, building solutions that genuinely solve their challenges and exceed expectations.",
    iconWrapperClassName:
      "bg-gradient-to-br from-[#FF3D5F] to-[#F72585]",
    hoverClassName: "hover:bg-pink-50",
  },
  {
    icon: Zap,
    title: "Innovation",
    description:
      "We continuously push boundaries, embracing new technologies to deliver cutting-edge workforce management solutions.",
    iconWrapperClassName:
      "bg-gradient-to-br from-[#FFB000] to-[#FF7900]",
    hoverClassName: "hover:bg-yellow-50",
  },
  {
    icon: LockKeyhole,
    title: "Trust & Security",
    description:
      "We maintain the highest standards of data security and privacy, earning the trust of organizations worldwide.",
    iconWrapperClassName:
      "bg-gradient-to-br from-[#168BFF] to-[#00A7CC]",
    hoverClassName: "hover:bg-blue-50",
  },
  {
    icon: UsersRound,
    title: "Collaboration",
    description:
      "We believe in teamwork and partnership, working closely with clients to create solutions that truly fit their needs.",
    iconWrapperClassName:
      "bg-gradient-to-br from-[#00C96B] to-[#00B85B]",
    hoverClassName: "hover:bg-green-50",
  },
];