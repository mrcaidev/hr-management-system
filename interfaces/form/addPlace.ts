import { Place } from "interfaces/place";

export type AddPlaceInput = Pick<
  Place,
  "placeId" | "street" | "postalCode" | "city" | "province" | "stateId"
>;
