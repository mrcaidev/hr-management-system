import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { StaffContext } from "contexts/StaffContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "staffId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
  {
    field: "fullName",
    headerName: "Full Name",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "email",
    headerName: "E-mail",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
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
    field: "employmentTitle",
    headerName: "Title",
    headerAlign: "center",
    align: "center",
    width: 200,
  },
  {
    field: "hireDate",
    headerName: "Hire date",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
  {
    field: "salary",
    headerName: "Salary",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
];

export const Branches = () => {
  const { branches } = useContext(StaffContext);
  return (
    <Box component="section" sx={{ height: "400px", width: "100%" }}>
      <DataGrid
        rows={branches}
        columns={columns}
        getRowId={row => row.staffId}
        autoPageSize
      />
    </Box>
  );
};
