import { getPasswordDao } from "dao/getPasswordDao";

export const getPasswordService = async (staffId: string) => {
  return await getPasswordDao(staffId);
};
