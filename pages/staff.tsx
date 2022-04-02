import Container from "@mui/material/Container";
import Profile from "components/Profile";
import Title from "components/Title";
import { StaffContext } from "contexts/StaffContext";
import { useAuth } from "hooks/useAuth";
import { Staff } from "interfaces/staff";

const StaffPage = () => {
  const { staff, isLoading } = useAuth({ redirectOnNotAuth: "/login" });

  if (isLoading || !staff) {
    return <h1>Loading...</h1>;
  }

  if (staff.role !== "staff") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <StaffContext.Provider value={{ staff, branches: [] as Staff[] }}>
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "50px",
        }}
      >
        <Title />
        <Profile />
      </Container>
    </StaffContext.Provider>
  );
};

export default StaffPage;
