import {
  UpdateInfoPayload,
  UpdateInfoResponse,
} from "interfaces/api/updateInfo";
import { requests } from "utils/requests";

export const updateInfoHelper = async (data: UpdateInfoPayload) => {
  return await requests.post<UpdateInfoResponse>(
    "update-info",
    JSON.stringify(data)
  );
};
