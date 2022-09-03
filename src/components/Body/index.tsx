import { FC } from "react";
import { Cell } from "ui/Cell";
import moment from "moment";
import { Grid } from "@mui/material";

interface iBodyProps {}

export const Body: FC<iBodyProps> = () => {
  const days = getDaysOfMonth(2022, 1);

  return (
    <Grid
      display="grid"
      xs={12}
      gridTemplateColumns="repeat(7, 1fr)"
      gridTemplateRows="repeat(5, 1fr)"
    >
      {days.map((day, index) => (
        <Cell key={index} data={day} />
      ))}
    </Grid>
  );
};

const getDaysOfMonth = (year: number, month: number) => {
  let monthDate = moment(year + "-" + month, "YYYY-MM");
  let daysInMonth = monthDate.daysInMonth();
  let arrDays = [];

  while (daysInMonth) {
    let current = moment().date(daysInMonth);
    arrDays.push(current);
    daysInMonth--;
  }

  return arrDays.reverse();
};
