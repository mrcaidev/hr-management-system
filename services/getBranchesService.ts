import { getBranchesDao } from "dao/getBranchesDao";

export const getBranchesService = async (staffId: string) => {
  return await getBranchesDao(staffId);
};
