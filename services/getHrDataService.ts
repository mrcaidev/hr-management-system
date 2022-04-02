import { getAllStaffsDao } from "dao/getAllStaffsDao";
import { getEmploymentHistoryDao } from "dao/getEmploymentHistory";
import { getPlacesDao } from "dao/getPlacesDao";
import { getSectionsDao } from "dao/getSectionsDao";

export const getHrDataService = async () => {
  const staffs = await getAllStaffsDao();
  const places = await getPlacesDao();
  const sections = await getSectionsDao();
  const employmentHistories = await getEmploymentHistoryDao();
  return { staffs, sections, places, employmentHistories };
};
