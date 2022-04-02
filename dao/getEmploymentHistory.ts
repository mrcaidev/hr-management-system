import { EmploymentHistory } from "interfaces/employmentHistory";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  staff_id "staffId",
  full_name "fullName",
  start_date "startDate",
  end_date "endDate",
  employment_id "employmentId",
  employment_title "employmentTitle",
  section_id "sectionId",
  section_name "sectionName"
FROM
  employment_history_view;
`;
type Result = EmploymentHistory;

export const getEmploymentHistoryDao = async () => {
  try {
    const result = await gauss.query<Result>(sql);
    return result.rows;
  } catch (e) {
    console.error(e);
    return [] as Result[];
  }
};
