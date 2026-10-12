export type AudienceId = "higher-ups" | "all-employees" | "selected-employees";

export interface Recipient {
  id: string;
  name: string;
  role: string;
  initials: string;
}

export interface Employee extends Recipient {
  department: string;
}

export interface Audience {
  id: AudienceId;
  label: string;
  description: string;
}

export const audiences: Audience[] = [
  {
    id: "higher-ups",
    label: "Higher-Ups",
    description: "Leadership team (3)",
  },
  {
    id: "all-employees",
    label: "All Employees",
    description: "Company-wide (12)",
  },
  {
    id: "selected-employees",
    label: "Selected Employees",
    description: "Choose specific employees",
  },
];

export const leadershipRecipients: Recipient[] = [
  { id: "l1", name: "Alexandra Smith", role: "CEO", initials: "AS" },
  { id: "l2", name: "Robert Taylor", role: "CTO", initials: "RT" },
  { id: "l3", name: "Michelle Clark", role: "COO", initials: "MC" },
];

export const departmentOrder = [
  "Engineering",
  "Marketing",
  "Sales",
  "Finance",
  "HR",
];

export const employees: Employee[] = [
  { id: "e1", name: "Sarah Johnson", role: "Senior Engineer", initials: "SJ", department: "Engineering" },
  { id: "e2", name: "Mike Chen", role: "Team Lead", initials: "MC", department: "Engineering" },
  { id: "e3", name: "Rachel Green", role: "Software Engineer", initials: "RG", department: "Engineering" },
  { id: "e4", name: "Emily Davis", role: "Marketing Manager", initials: "ED", department: "Marketing" },
  { id: "e5", name: "Tom Martinez", role: "Content Specialist", initials: "TM", department: "Marketing" },
  { id: "e6", name: "James Wilson", role: "Sales Director", initials: "JW", department: "Sales" },
  { id: "e7", name: "Jessica Lee", role: "Account Executive", initials: "JL", department: "Sales" },
  { id: "e8", name: "Michael Scott", role: "Regional Manager", initials: "MS", department: "Sales" },
  { id: "e9", name: "Jim Halpert", role: "Sales Representative", initials: "JH", department: "Sales" },
  { id: "e10", name: "Lisa Anderson", role: "Financial Analyst", initials: "LA", department: "Finance" },
  { id: "e11", name: "David Brown", role: "HR Specialist", initials: "DB", department: "HR" },
  { id: "e12", name: "Pam Beesly", role: "HR Coordinator", initials: "PB", department: "HR" },
];