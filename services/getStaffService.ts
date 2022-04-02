import { getStaffDao } from "dao/getStaffDao";

export const getStaffService = async (staffId: string) => {
  return await getStaffDao(staffId);
};
