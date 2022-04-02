import { Section } from "interfaces/section";
import { CommonResponse } from "./common";

export type UpdateSectionPayload = Pick<Section, "sectionId" | "sectionName">;

export interface UpdateSectionResponse extends CommonResponse {
  data: boolean | undefined;
}
