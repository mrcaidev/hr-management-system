import { AddPlaceInput } from "interfaces/form/addPlace";
import { requests } from "utils/requests";

export const addPlaceHelper = async (data: AddPlaceInput) => {
  return await requests.post<AddPlaceInput>("add-place", JSON.stringify(data));
};
