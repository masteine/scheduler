import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import moment from "moment";

interface iCellProps {
  data: moment.Moment;
  events?: any[];
}

export const Cell: FC<iCellProps> = ({ data, events }) => {
  const day = moment(data).format("D");
  const date = moment(data).format("DD");

  return (
    <Grid container>
      <Grid alignContent="center" xs={12}>
        <Typography textAlign="center" fontSize={12} fontWeight={600}>
          {date}
        </Typography>
        {/*<Typography textAlign="center">{day}</Typography>*/}
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};
