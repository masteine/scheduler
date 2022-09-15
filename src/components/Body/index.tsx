import { FC } from "react";
import { Cell } from "components/Cell";
import moment from "moment";
import { Grid } from "@mui/material";

interface iBodyProps {}

export const Body: FC<iBodyProps> = () => {
  const days = [...Array(35).keys()].map((day) => ({
    date: moment().date(day + 1)
  }));

  return (
    <Grid
      display="grid"
      xs={12}
      gridTemplateColumns="repeat(7, 1fr)"
      gridTemplateRows="repeat(5, auto)"
      height="100%"
    >
      {days.map(({ date }, index) => (
        <Cell key={index} data={date} />
      ))}
    </Grid>
  );
};
