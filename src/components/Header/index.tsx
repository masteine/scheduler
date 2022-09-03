import { FC } from "react";
import { Navigation } from "./Navigation";
import { Grid, Typography } from "@mui/material";

import moment from "moment/moment";

interface iHeaderProps {}

export const Header: FC<iHeaderProps> = () => {
  return (
    <Grid container direction="row" alignItems="center" spacing={3}>
      <Grid item>
        <Navigation />
      </Grid>

      <Grid item>
        <Typography fontWeight="700">{moment().format("MMMM YYYY")}</Typography>
      </Grid>
    </Grid>
  );
};
