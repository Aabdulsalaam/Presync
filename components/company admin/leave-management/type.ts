
export type LeaveStatus =
  | "Pending"
  | "Approved"
  | "Rejected";

export type LeaveRequest = {
  id: string;
  employeeId: string;
  employeeName: string;
  initials: string;
  role: string;
  department: string;
  leaveType: string;
  startDate: string;
  endDate: string;
  days: number;
  reason: string;
  operationalImpact: string;
  pendingResponsibilities: string;
  status: LeaveStatus;
  annualLeaveAllowance: number;
  annualLeaveUsed: number;
  medicalLeaveAllowance: number;
  medicalLeaveUsed: number;
  emergencyContact: string;
  emergencyPhone: string;
  responsibilities: {
    title: string;
    description: string;
    dueDate: string;
    status: string;
  }[];
  history: {
    type: string;
    dates: string;
    days: number;
  }[];
};

export type LeaveConflict = {
  id: string;
  title: string;
  description: string;
  dates: string;
  severity: "High" | "Medium";
  department: string;
};
