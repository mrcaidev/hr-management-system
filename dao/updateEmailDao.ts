import { gauss } from "utils/gauss";

const sql = `
UPDATE
  staffs
SET
  email = $1
WHERE
  staff_id = $2
`;

export const updateEmailDao = async (staffId: string, email?: string) => {
  if (!email) {
    return true;
  }

  try {
    const result = await gauss.query(sql, [email, staffId]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(`updateEmailDao: ${e}`);
    return false;
  }
};
