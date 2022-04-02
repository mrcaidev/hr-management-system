import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { HrContext } from "contexts/HrContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "staffId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "fullName",
    headerName: "Name",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "startDate",
    headerName: "Start date",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "endDate",
    headerName: "End date",
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
    field: "sectionName",
    headerName: "Section",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
];

export const EmploymentHistory = () => {
  const { employmentHistories } = useContext(HrContext);
  return (
    <Box component="section" sx={{ height: "400px", width: "100%" }}>
      <DataGrid
        rows={employmentHistories}
        columns={columns}
        getRowId={row => row.staffId + row.employmentId}
        autoPageSize
      />
    </Box>
  );
};
