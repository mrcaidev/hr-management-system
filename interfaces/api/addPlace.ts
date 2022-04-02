import { Place } from "interfaces/place";
import { CommonResponse } from "./common";

export type AddPlacePayload = Place;
export interface AddPlaceResponse extends CommonResponse {
  data: boolean | undefined;
}
