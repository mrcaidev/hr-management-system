import LockIcon from "@mui/icons-material/Lock";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Form } from "./Form";

export const Login = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "#9ac8e2" }}>
        <LockIcon />
      </Avatar>
      <Typography component="h1">Log In</Typography>
      <Form />
    </Box>
  );
};
