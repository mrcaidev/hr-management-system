import { MeResponse } from "interfaces/api/me";
import { NextApiHandler } from "next";
import { getStaffService } from "services/getStaffService";
import { decodeToken } from "utils/token";

const handler: NextApiHandler<MeResponse> = async (req, res) => {
  // Allow GET only.
  if (req.method !== "GET") {
    res.setHeader("ALLOW", ["GET"]);
    res.status(405).json({
      success: false,
      message: "Method not allowed",
      data: undefined,
    });
    return;
  }

  // Ensure token exists.
  const { token } = req.cookies;
  if (!token) {
    res.status(200).json({
      success: false,
      message: "Unauthenticated",
      data: undefined,
    });
    return;
  }

  // If token has expired.
  const staffId = decodeToken(token);
  if (!staffId) {
    res.status(200).json({
      success: false,
      message: "Token expired",
      data: undefined,
    });
    return;
  }

  // Fetch staff info.
  const staff = await getStaffService(staffId);

  // If staff does not exist.
  if (!staff) {
    res.status(200).json({
      success: false,
      message: `Can't find staff ${staffId}`,
      data: undefined,
    });
    return;
  }

  // On success.
  res.status(200).json({
    success: true,
    message: "",
    data: staff,
  });
};

export default handler;
