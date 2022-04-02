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
WHERE
  staff_id = $1
`;
type Result = Staff;

export const getStaffDao = async (staffId: string) => {
  try {
    const result = await gauss.query<Result>(sql, [staffId]);
    return result.rows[0];
  } catch (e) {
    console.error(`getStaffDao: ${e}`);
    return {} as Result;
  }
};
