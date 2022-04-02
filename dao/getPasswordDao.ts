import { gauss } from "utils/gauss";

const sql = `
SELECT
  password
FROM
  staffs_view
WHERE
  staff_id = $1
`;
type Result = { password: string };

export const getPasswordDao = async (staffId: string) => {
  try {
    const result = await gauss.query<Result>(sql, [staffId]);
    return result.rows[0].password;
  } catch (e) {
    console.error(`getPasswordDao: ${e}`);
    return "";
  }
};
