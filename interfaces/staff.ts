export type StaffRole = "staff" | "manager" | "hr";

export interface Staff {
  staffId: string;
  fullName: string;
  email: string;
  phone: string;
  sectionId: string;
  sectionName: string;
  employmentTitle: string;
  hireDate: string;
  salary: string;
  managerId: string;
  managerName: string;
  role: StaffRole;
}

export type StaffMutable = Pick<Staff, "email" | "phone">;
