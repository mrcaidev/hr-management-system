import { sign, verify } from "jsonwebtoken";

const jwtSecret = "CAIYUWANG";
const expiresIn = 60 * 30;

export const generateToken = (staffId: string) => {
  return sign({ staffId }, jwtSecret, { expiresIn });
};

export const decodeToken = (token: string) => {
  try {
    const { staffId } = verify(token, jwtSecret) as { staffId: string };
    return staffId;
  } catch (e) {
    return;
  }
};
