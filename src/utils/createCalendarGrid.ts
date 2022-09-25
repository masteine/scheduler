import moment from "moment";
import { tView } from "../state/types";

type tCreateCalendarGrid = {
  date: moment.Moment;
  view: tView;
  year?: number;
  month?: number;
};
export const createCalendarGrid = ({
  date,
  view,
  year,
  month
}: tCreateCalendarGrid) => {
  //
  //
  //
  return [...Array(35).keys()].map((day) => ({
    date: moment().date(day + 1)
  }));
};
