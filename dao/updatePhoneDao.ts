import { gauss } from "utils/gauss";

const sql = `
UPDATE
  staffs
SET
  phone_number = $1
WHERE
  staff_id = $2
`;

export const updatePhoneDao = async (staffId: string, phone?: string) => {
  if (!phone) {
    return true;
  }

  try {
    const result = await gauss.query(sql, [phone, staffId]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(`updatePhoneDao: ${e}`);
    return false;
  }
};
