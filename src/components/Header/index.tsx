import { FC } from "react";
import { Navigation } from "./Navigation";
import { Grid, Typography } from "@mui/material";
import { Dropdown } from "./Dropdown";
import { useAppState } from "state";
import { dateFormatByView } from "utils/dateFormatByView";

interface iHeaderProps {}

export const Header: FC<iHeaderProps> = () => {
  const { currentDate, view } = useAppState((state) => state);

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      height="min-content"
      padding={1}
    >
      <Grid container alignItems="center" xs={10}>
        <Navigation />
        <Typography fontWeight="700" marginLeft={1}>
          {dateFormatByView({ date: currentDate, view })}
        </Typography>
      </Grid>
      <Grid container xs={2} justifyContent="flex-end">
        <Dropdown />
      </Grid>
    </Grid>
  );
};
