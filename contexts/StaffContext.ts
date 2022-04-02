import { Staff } from "interfaces/staff";
import { createContext } from "react";

export interface StaffContextProps {
  staff: Staff;
  branches: Staff[];
}

export const StaffContext = createContext<StaffContextProps>({
  staff: {} as Staff,
  branches: [] as Staff[],
});
