import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { StaffContext } from "contexts/StaffContext";
import { useContext } from "react";

export const Name = () => {
  const {
    staff: { staffId, fullName },
  } = useContext(StaffContext);
  return (
    <Box
      component="section"
      sx={{
        py: 2,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography
        component="p"
        align="center"
        gutterBottom
        sx={{ color: "GrayText", fontSize: "30px" }}
      >
        {staffId}
      </Typography>
      <Typography
        component="h3"
        align="center"
        sx={{ fontSize: "50px", fontWeight: "bolder" }}
      >
        {fullName}
      </Typography>
    </Box>
  );
};
