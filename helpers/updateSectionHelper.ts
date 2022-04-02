import { UpdateSectionResponse } from "interfaces/api/updateSection";
import { UpdateSectionInput } from "interfaces/form/updateSection";
import { requests } from "utils/requests";

export const updateSectionHelper = async (data: UpdateSectionInput) => {
  return await requests.post<UpdateSectionResponse>(
    "update-section",
    JSON.stringify(data)
  );
};
