import { Place } from "interfaces/place";
import { gauss } from "utils/gauss";

const sql = `
SELECT
  place_id        "placeId",
  street_address  "street",
  postal_code     "postalCode",
  city            "city",
  state_province  "province",
  state_id        "stateId",
  state_name      "stateName",
  area_id         "areaId",
  area_name       "areaName"
FROM
  places_view
`;
type Result = Place;

export const getPlacesDao = async () => {
  try {
    const result = await gauss.query<Result>(sql);
    return result.rows;
  } catch (e) {
    console.error(e);
    return [] as Result[];
  }
};
