import { getAllStaffsDao } from "dao/getAllStaffsDao";

export const getAllStaffsService = async () => {
  return await getAllStaffsDao();
};
