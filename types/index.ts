export type AttendanceRecord = {
  id: string;
  studentName: string;
  date: string;
  status: 'present' | 'absent' | 'late';
};

export type AttendanceSummary = {
  present: number;
  absent: number;
  total: number;
};
