import { LoginPayload, LoginResponse } from "interfaces/api/login";
import Cookies from "js-cookie";
import { NextApiHandler } from "next";
import { getPasswordService } from "services/getPasswordService";
import { generateToken } from "utils/token";

const handler: NextApiHandler<LoginResponse> = async (req, res) => {
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

  // If token exists, remove it.
  Cookies.remove("token");

  // Fetch password.
  const { staffId, password }: LoginPayload = req.body;
  const storedPassword = await getPasswordService(staffId);

  // If staff does not exist.
  if (!storedPassword) {
    res.status(200).json({
      success: false,
      message: "Incorrect ID",
      data: undefined,
    });
    return;
  }

  // If password is incorrect.
  if (password !== storedPassword) {
    res.status(200).json({
      success: false,
      message: "Incorrect password",
      data: undefined,
    });
    return;
  }

  // On success.
  res.status(200).json({
    success: true,
    message: "",
    data: generateToken(staffId),
  });
};

export default handler;
