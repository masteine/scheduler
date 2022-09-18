import moment from "moment";

type tView = "day" | "week" | "month" | "year";

export type tDates = {
  date: moment.Moment;
  events?: any[];
};

export type tUseAppState = {
  dates: tDates[];
  view: tView;
  changeView: (view: tView) => void;
};
