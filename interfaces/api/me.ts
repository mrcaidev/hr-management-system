import { Staff } from "interfaces/staff";
import { CommonResponse } from "./common";

export interface MeResponse extends CommonResponse {
  data: Staff | undefined;
}
