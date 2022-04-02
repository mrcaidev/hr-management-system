import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import { UpdateSectionAction } from "components/Action";
import { AddPlaceAction } from "components/Action/AddPlaceAction";
import {
  AllStaffs,
  EmploymentHistory,
  Places,
  Sections,
} from "components/DataGrid";
import Title from "components/Title";
import { HrContext, HrContextProps } from "contexts/HrContext";
import { useAuth } from "hooks/useAuth";
import { GetServerSideProps } from "next";
import { SyntheticEvent, useState } from "react";
import { getHrDataService } from "services/getHrDataService";

type Props = HrContextProps;

const HrPage = (props: Props) => {
  const { staff, isLoading } = useAuth({ redirectOnNotAuth: "/login" });
  const [index, setIndex] = useState(1);
  const changeIndex = (e: SyntheticEvent, newIndex: number) => {
    setIndex(newIndex);
  };

  if (isLoading || !staff) {
    return <h1>Loading...</h1>;
  }

  if (staff.role !== "hr") {
    return <h1>Unauthorized</h1>;
  }

  return (
    <HrContext.Provider value={props}>
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
          <Tab label="Staffs" />
          <Tab label="Sections" />
          <Tab label="Places" />
          <Tab label="Employment history" />
          <Tab label="Actions" />
        </Tabs>
        <Box hidden={index !== 0}>
          <AllStaffs />
        </Box>
        <Box hidden={index !== 1}>
          <Sections />
        </Box>
        <Box hidden={index !== 2}>
          <Places />
        </Box>
        <Box hidden={index !== 3}>
          <EmploymentHistory />
        </Box>
        <Box hidden={index !== 4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: "30px",
            }}
          >
            <UpdateSectionAction />
            <AddPlaceAction />
          </Box>
        </Box>
      </Container>
    </HrContext.Provider>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const data = await getHrDataService();
  return { props: data };
};

export default HrPage;
