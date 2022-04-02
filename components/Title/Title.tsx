import LogoutIcon from "@mui/icons-material/Logout";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useAuth } from "hooks/useAuth";

export const Title = () => {
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        component="h1"
        align="center"
        gutterBottom
        sx={{ pt: 10, fontSize: "50px", fontWeight: "bolder" }}
      >
        Human Resource Management System
      </Typography>
      <Button
        onClick={logout}
        color="inherit"
        size="large"
        startIcon={<LogoutIcon />}
      >
        Log Out
      </Button>
    </Box>
  );
};
