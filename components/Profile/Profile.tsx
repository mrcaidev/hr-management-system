import Grid from "@mui/material/Grid";
import { Email } from "./Email";
import { ListInfo } from "./ListInfo";
import { Name } from "./Name";
import { Phone } from "./Phone";

export const Profile = () => {
  return (
    <Grid container spacing={4}>
      <Grid container item xs={12} md={6} spacing={4}>
        <Grid item xs={12}>
          <Name />
        </Grid>
        <Grid item xs={6}>
          <Phone />
        </Grid>
        <Grid item xs={6}>
          <Email />
        </Grid>
      </Grid>
      <Grid container item xs={12} md={6} spacing={4}>
        <Grid item xs={12}>
          <ListInfo />
        </Grid>
      </Grid>
    </Grid>
  );
};
