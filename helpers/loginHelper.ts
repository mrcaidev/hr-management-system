import { LoginResponse } from "interfaces/api/login";
import { LoginInput } from "interfaces/form/login";
import { requests } from "utils/requests";

export const loginHelper = async ({ staffId, password }: LoginInput) => {
  console.log(staffId);
  return await requests.post<LoginResponse>(
    "login",
    JSON.stringify({ staffId, password })
  );
};
