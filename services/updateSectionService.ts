import { updateSectionNameDao } from "dao/updateSectionNameDao";
import { UpdateSectionInput } from "interfaces/form/updateSection";

export const updateSectionService = async (data: UpdateSectionInput) => {
  const { sectionId, sectionName } = data;
  return await updateSectionNameDao(sectionId, sectionName);
};
