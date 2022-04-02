import {
  UpdateInfoPayload,
  UpdateInfoResponse,
} from "interfaces/api/updateInfo";
import { NextApiHandler } from "next";
import { updateInfoService } from "services/updateInfoService";
import { decodeToken } from "utils/token";

const handler: NextApiHandler<UpdateInfoResponse> = async (req, res) => {
  // Allow POST only.
  if (req.method !== "POST") {
    res.setHeader("ALLOW", ["POST"]);
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
  const id = decodeToken(token);
  if (!id) {
    res.status(200).json({
      success: false,
      message: "Token expired",
      data: undefined,
    });
    return;
  }

  // Update info.
  const info: UpdateInfoPayload = req.body;
  const updated = await updateInfoService(id, info);

  // On failure.
  if (!updated) {
    res.status(200).json({
      success: false,
      message: "Try again later",
      data: false,
    });
    return;
  }

  // On success.
  res.status(200).json({
    success: true,
    message: "",
    data: true,
  });
};

export default handler;
