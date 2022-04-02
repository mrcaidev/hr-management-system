import { gauss } from "utils/gauss";

const sql = `
UPDATE
  sections
SET
  section_name = $2
WHERE
  section_id = $1
`;

export const updateSectionNameDao = async (
  sectionId: string,
  sectionName: string
) => {
  try {
    const result = await gauss.query(sql, [sectionId, sectionName]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(e);
    return false;
  }
};
