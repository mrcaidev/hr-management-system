import { EmploymentHistory } from "interfaces/employmentHistory";
import { Place } from "interfaces/place";
import { Section } from "interfaces/section";
import { Staff } from "interfaces/staff";
import { createContext } from "react";

export interface HrContextProps {
  staffs: Staff[];
  sections: Section[];
  places: Place[];
  employmentHistories: EmploymentHistory[];
}

export const HrContext = createContext<HrContextProps>({
  staffs: [] as Staff[],
  sections: [] as Section[],
  places: [] as Place[],
  employmentHistories: [] as EmploymentHistory[],
});
