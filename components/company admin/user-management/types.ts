
export type User = {
  id: string;
  name: string;
  initials: string;
  email: string;
  phone: string;
  role: string;
  department: string;
  status: "Active" | "Inactive";
  joinDate: string;
  dateOfBirth: string;
  gender: string;
  nationality: string;
  address: string;
  localGovernment: string;
  state: string;
  city: string;
  country: string;
  nextOfKin: string;
  relationship: string;
  emergencyPhone: string;
  emergencyEmail: string;
};

export type UserField = {
  label: string;
  value: string;
};
