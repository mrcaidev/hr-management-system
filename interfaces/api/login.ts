import { CommonResponse } from "./common";

export interface LoginPayload {
  staffId: string;
  password: string;
}

export interface LoginResponse extends CommonResponse {
  data: string | undefined;
}
