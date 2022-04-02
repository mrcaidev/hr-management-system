import ApartmentIcon from "@mui/icons-material/Apartment";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PaidIcon from "@mui/icons-material/Paid";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import WorkIcon from "@mui/icons-material/Work";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { StaffContext } from "contexts/StaffContext";
import { useContext } from "react";

export const ListInfo = () => {
  const {
    staff: { sectionName, employmentTitle, salary, hireDate, managerName },
  } = useContext(StaffContext);
  return (
    <List
      sx={{
        px: 2,
        backgroundColor: "rgba(255, 255, 255, 0.08)",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
      }}
    >
      <ListItem>
        <ListItemIcon>
          <ApartmentIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Section" secondary={sectionName} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <WorkIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Title" secondary={employmentTitle} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PaidIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Salary" secondary={salary} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <CalendarTodayIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Hire date" secondary={hireDate} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <SupervisorAccountIcon fontSize="large" />
        </ListItemIcon>
        <ListItemText primary="Manager" secondary={managerName} />
      </ListItem>
    </List>
  );
};
