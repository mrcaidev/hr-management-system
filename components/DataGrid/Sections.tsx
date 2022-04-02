import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { HrContext } from "contexts/HrContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "sectionId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "sectionName",
    headerName: "Section",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "managerName",
    headerName: "Manager",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "placeId",
    headerName: "Place ID",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "maxSalary",
    headerName: "Max Salary",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "minSalary",
    headerName: "Min Salary",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "averageSalary",
    headerName: "Average Salary",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
];

export const Sections = () => {
  const { sections } = useContext(HrContext);
  return (
    <Box component="section" sx={{ height: "400px", width: "100%" }}>
      <DataGrid
        rows={sections}
        columns={columns}
        getRowId={row => row.sectionId}
        autoPageSize
      />
    </Box>
  );
};
