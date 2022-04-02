import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { SalaryStatisticsAction } from "components/Action";
import { Branches } from "components/DataGrid";
import Profile from "components/Profile";
import Title from "components/Title";
import { StaffContext } from "contexts/StaffContext";
import { useAuth } from "hooks/useAuth";
import { Staff } from "interfaces/staff";
import { GetServerSideProps } from "next";
import { SyntheticEvent, useState } from "react";
import { getBranchesService } from "services/getBranchesService";
import { decodeToken } from "utils/token";

interface Props {
  branches: Staff[];
}

const StaffPage = ({ branches }: Props) => {
  const { staff, isLoading } = useAuth({ redirectOnNotAuth: "/login" });
  const [index, setIndex] = useState(1);
  const changeIndex = (e: SyntheticEvent, newIndex: number) => {
    setIndex(newIndex);
  };

  if (isLoading || !staff) {
    return <h1>Loading...</h1>;
  }

  if (staff.role !== "manager") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <StaffContext.Provider value={{ staff, branches }}>
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
        <Tabs value={index} onChange={changeIndex} centered>
          <Tab label="Profile" />
          <Tab label="Branches" />
          <Tab label="Actions" />
        </Tabs>
        <Box hidden={index !== 0}>
          <Profile />
        </Box>
        <Box hidden={index !== 1}>
          <Branches />
        </Box>
        <Box hidden={index !== 2}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SalaryStatisticsAction />
          </Box>
        </Box>
      </Container>
    </StaffContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async context => {
  const { token } = context.req.cookies;
  if (!token) {
    return { props: { branches: [] } };
  }

  const id = decodeToken(token);
  if (!id) {
    return { props: { branches: [] } };
  }

  const branches = await getBranchesService(id);
  return { props: { branches } };
};

export default StaffPage;
