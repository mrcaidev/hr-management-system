import { addPlaceDao } from "dao/addPlaceDao";
import { AddPlaceInput } from "interfaces/form/addPlace";

export const addPlaceService = async (data: AddPlaceInput) => {
  return await addPlaceDao(data);
};
