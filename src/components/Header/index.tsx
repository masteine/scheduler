import { FC } from "react";
import { Navigation } from "./Navigation";
import { Grid, Typography } from "@mui/material";

import moment from "moment/moment";
import { Dropdown } from "./Dropdown";

interface iHeaderProps {}

export const Header: FC<iHeaderProps> = () => {
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={3}
      height="min-content"
    >
      <Grid item alignItems="center">
        <Navigation />
        <Typography fontWeight="700">{moment().format("MMMM YYYY")}</Typography>
      </Grid>

      <Grid item justifySelf="self-end">
        <Dropdown />
      </Grid>
    </Grid>
  );
};
