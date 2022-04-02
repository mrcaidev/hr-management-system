import { Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { HrContext } from "contexts/HrContext";
import { useContext } from "react";

const columns: GridColDef[] = [
  {
    field: "placeId",
    headerName: "ID",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "street",
    headerName: "Street",
    headerAlign: "center",
    align: "center",
    width: 250,
  },
  {
    field: "postalCode",
    headerName: "Postal Code",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "city",
    headerName: "City",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "province",
    headerName: "Province",
    headerAlign: "center",
    align: "center",
    width: 150,
  },
  {
    field: "stateName",
    headerName: "State",
    headerAlign: "center",
    align: "center",
    width: 200,
  },
  {
    field: "areaName",
    headerName: "Area",
    headerAlign: "center",
    align: "center",
    width: 100,
  },
];

export const Places = () => {
  const { places } = useContext(HrContext);
  return (
    <Box component="section" sx={{ height: "400px", width: "100%" }}>
      <DataGrid
        rows={places}
        columns={columns}
        getRowId={row => row.placeId}
        autoPageSize
      />
    </Box>
  );
};
