import { Section } from "interfaces/section";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  section_id    "sectionId",
  section_name  "sectionName",
  manager_id    "managerId",
  manager_name  "managerName",
  place_id      "placeId",
  max_salary    "maxSalary",
  min_salary    "minSalary",
  avg_salary    "averageSalary"
FROM
  sections_view
`;
type Result = Section;

export const getSectionsDao = async () => {
  try {
    const result = await gauss.query<Result>(sql);
    return result.rows;
  } catch (e) {
    console.error(e);
    return [] as Result[];
  }
};
