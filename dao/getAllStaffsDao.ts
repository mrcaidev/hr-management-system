import { Staff } from "interfaces/staff";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  staff_id          "staffId",
  full_name         "fullName",
  email             "email",
  phone_number      "phone",
  section_id        "sectionId",
  section_name      "sectionName",
  employment_title  "employmentTitle",
  hire_date         "hireDate",
  salary            "salary",
  manager_id        "managerId",
  manager_name      "managerName",
  role              "role"
FROM
  staffs_view
`;
type Result = Staff;

export const getAllStaffsDao = async () => {
  try {
    const result = await gauss.query<Result>(sql);
    return result.rows;
  } catch (e) {
    console.error(`getAllStaffsDao: ${e}`);
    return [] as Result[];
  }
};
