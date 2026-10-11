
import type {
  LeaveConflict,
  LeaveRequest,
} from "./type";

export const leaveRequests: LeaveRequest[] = [
  {
    id: "LR-001",
    employeeId: "EMP000001",
    employeeName: "Sarah Johnson",
    initials: "SJ",
    role: "Frontend Developer",
    department: "Engineering",
    leaveType: "Annual Leave",
    startDate: "2026-10-12",
    endDate: "2026-10-16",
    days: 5,
    reason:
      "I would like to take a short break to rest and attend to personal matters.",
    operationalImpact:
      "High-priority development tasks may require temporary reassignment.",
    pendingResponsibilities:
      "Finalize the dashboard redesign and hand over the pending pull requests.",
    status: "Pending",
    annualLeaveAllowance: 24,
    annualLeaveUsed: 12,
    medicalLeaveAllowance: 30,
    medicalLeaveUsed: 7,
    emergencyContact: "James Johnson",
    emergencyPhone: "+234 800 123 4567",
    responsibilities: [
      {
        title: "Finalize dashboard redesign",
        description: "Complete the UI implementation and testing.",
        dueDate: "2026-10-10",
        status: "In progress",
      },
      {
        title: "Prepare handover",
        description: "Document pending tasks for the team.",
        dueDate: "2026-10-11",
        status: "Pending",
      },
      {
        title: "Review pull requests",
        description: "Review and merge outstanding contributions.",
        dueDate: "2026-10-11",
        status: "Pending",
      },
    ],
    history: [
      {
        type: "Annual Vacation",
        dates: "May 12 – May 16, 2026",
        days: 5,
      },
      {
        type: "Personal Day",
        dates: "Feb 10, 2026",
        days: 1,
      },
      {
        type: "Casual Leave",
        dates: "Jan 20 – Jan 21, 2026",
        days: 2,
      },
    ],
  },
  {
    id: "LR-002",
    employeeId: "EMP000002",
    employeeName: "John Adewale",
    initials: "JA",
    role: "Backend Developer",
    department: "Engineering",
    leaveType: "Sick Leave",
    startDate: "2026-10-14",
    endDate: "2026-10-15",
    days: 2,
    reason: "I need time off to recover from an illness.",
    operationalImpact:
      "Some backend maintenance tasks may need reassignment.",
    pendingResponsibilities:
      "Hand over the API deployment checklist to another developer.",
    status: "Pending",
    annualLeaveAllowance: 24,
    annualLeaveUsed: 8,
    medicalLeaveAllowance: 30,
    medicalLeaveUsed: 5,
    emergencyContact: "Mary Adewale",
    emergencyPhone: "+234 801 234 5678",
    responsibilities: [],
    history: [],
  },
  {
    id: "LR-003",
    employeeId: "EMP000003",
    employeeName: "Michael Bello",
    initials: "MB",
    role: "Product Designer",
    department: "Design",
    leaveType: "Annual Leave",
    startDate: "2026-10-19",
    endDate: "2026-10-23",
    days: 5,
    reason: "Family vacation.",
    operationalImpact:
      "Design reviews may need to be covered by another designer.",
    pendingResponsibilities:
      "Complete the current design handover.",
    status: "Pending",
    annualLeaveAllowance: 24,
    annualLeaveUsed: 10,
    medicalLeaveAllowance: 30,
    medicalLeaveUsed: 3,
    emergencyContact: "Aisha Bello",
    emergencyPhone: "+234 802 345 6789",
    responsibilities: [],
    history: [],
  },
  {
    id: "LR-004",
    employeeId: "EMP000004",
    employeeName: "Fatima Yusuf",
    initials: "FY",
    role: "HR Officer",
    department: "Human Resources",
    leaveType: "Maternity Leave",
    startDate: "2026-11-02",
    endDate: "2027-01-24",
    days: 60,
    reason: "Maternity leave.",
    operationalImpact:
      "HR administrative duties will need temporary coverage.",
    pendingResponsibilities:
      "Complete handover of recruitment and onboarding activities.",
    status: "Pending",
    annualLeaveAllowance: 24,
    annualLeaveUsed: 6,
    medicalLeaveAllowance: 30,
    medicalLeaveUsed: 0,
    emergencyContact: "Ibrahim Yusuf",
    emergencyPhone: "+234 803 456 7890",
    responsibilities: [],
    history: [],
  },
];

export const upcomingConflicts: LeaveConflict[] = [
  {
    id: "CF-001",
    title: "Engineering Capacity",
    description:
      "Two engineering team members have overlapping leave requests.",
    dates: "Oct 12 – Oct 16, 2026",
    severity: "High",
    department: "Engineering",
  },
  {
    id: "CF-002",
    title: "HR Planning Phase",
    description:
      "Review staffing coverage before approving upcoming leave.",
    dates: "Nov 2 – Nov 6, 2026",
    severity: "Medium",
    department: "Human Resources",
  },
];
