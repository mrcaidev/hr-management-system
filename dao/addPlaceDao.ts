import { AddPlaceInput } from "interfaces/form/addPlace";
import { gauss } from "utils/gauss";

const sql = `
INSERT INTO
  places (
    place_id,
    street_address,
    postal_code,
    city,
    state_province,
    state_id
  )
VALUES
  ($1, $2, $3, $4, $5, $6);
`;

export const addPlaceDao = async ({
  placeId,
  street,
  postalCode,
  city,
  province,
  stateId,
}: AddPlaceInput) => {
  try {
    const result = await gauss.query(sql, [
      placeId,
      street,
      postalCode,
      city,
      province,
      stateId,
    ]);
    return result.rowCount === 1;
  } catch (e) {
    console.error(e);
    return false;
  }
};
