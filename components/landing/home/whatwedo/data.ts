import { Feature } from "./type";

import {
  AnalyticsIcon,
  TeamPresenceIcon,
  AbsenceTrackingIcon,
  WorkTimelineIcon,
  RoleManagementIcon,
  DataInsightsIcon,
  TailoredOptionsIcon,
  ShiftManagementIcon,
  StrategicExecutionIcon,
} from "./icons";

export const features: Feature[] = [
  {
    title: "Real-Time Analytics",
    description:
      "Multiple verification methods including biometric, QR code, and geolocation tracking.",
    icon: AnalyticsIcon,
    hoverClassName: "hover:bg-pink-50",
  },

  {
    title: "Team Presence",
    description:
      "Ensure accurate attendance records with mobile check-ins.",
    icon: TeamPresenceIcon,
    hoverClassName: "hover:bg-pink-50",
  },

  {
    title: "Absence Tracking",
    description:
      "Streamline leave requests, monitor absences, and ensure compliance with ease.",
    icon: AbsenceTrackingIcon,
    hoverClassName: "hover:bg-pink-50",
  },

  {
    title: "Work Timeline",
    description:
      "Organise user's CVs and employment history with an interactive timeline.",
    icon: WorkTimelineIcon,
    hoverClassName: "hover:bg-yellow-50",
  },

  {
    title: "Role Management",
    description:
      "Define roles, categories in departments, and know user's status in the organization to maintain data integrity.",
    icon: RoleManagementIcon,
     hoverClassName: "hover:bg-yellow-50",
  },

  {
    title: "Data Insights",
    description:
      "Transform raw data into actionable insights, enhancing strategic decision-making.",
    icon: DataInsightsIcon,
     hoverClassName: "hover:bg-yellow-50",
  },

  {
    title: "Tailored Options",
    description:
      "Tailor attendance tracking to your unique needs with customisable options and user categorisation.",
    icon: TailoredOptionsIcon,
     hoverClassName: "hover:bg-green-50",
  },

  {
    title: "Shift Management",
    description:
      "Simplify complex work schedules with automated tools for managing shifts and optimizing staff allocation.",
    icon: ShiftManagementIcon,
    hoverClassName: "hover:bg-green-50",
  },

  {
    title: "Strategic Execution",
    description:
      "Scheduled, insightful reports that drive strategic execution and operational excellence.",
    icon: StrategicExecutionIcon,
    hoverClassName: "hover:bg-green-50",
  },
];