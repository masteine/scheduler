import { FC } from "react";
import { Cell } from "components/Cell";
import { Grid } from "@mui/material";
import { createCalendarGrid } from "utils/createCalendarGrid";
import { useAppState } from "state";

interface iBodyProps {}

export const Body: FC<iBodyProps> = () => {
  const dates = useAppState((state) => state.dates);

  return (
    <Grid
      display="grid"
      xs={12}
      gridTemplateColumns="repeat(7, 1fr)"
      gridTemplateRows="repeat(5, auto)"
      height="100%"
    >
      {dates.map(({ date }, index) => (
        <Cell key={index} data={date} />
      ))}
    </Grid>
  );
};
