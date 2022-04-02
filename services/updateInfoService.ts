import { updateEmailDao } from "dao/updateEmailDao";
import { updatePhoneDao } from "dao/updatePhoneDao";
import { StaffMutable } from "interfaces/staff";

export const updateInfoService = async (
  staffId: string,
  info: Partial<StaffMutable>
) => {
  const { email, phone } = info;
  const updateResults = await Promise.all([
    updateEmailDao(staffId, email),
    updatePhoneDao(staffId, phone),
  ]);
  return updateResults.every(Boolean);
};
