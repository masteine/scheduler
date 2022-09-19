import { tView } from "state/types";
import moment from "moment";

type tDateFormatByView = {
  view: tView;
  date: moment.Moment;
};
export const dateFormatByView = ({ view, date }: tDateFormatByView) => {
  const formats = {
    day: "dddd, MMMM Do YYYY",
    week: "MMMM Do YYYY",
    month: "MMMM YYYY",
    year: "YYYY"
  };

  return moment(date).format(formats[view]);
};
