import { StaffMutable } from "interfaces/staff";
import { CommonResponse } from "./common";

export type UpdateInfoPayload = Partial<StaffMutable>;

export interface UpdateInfoResponse extends CommonResponse {
  data: boolean | undefined;
}
