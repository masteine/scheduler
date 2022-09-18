import moment from "moment";

export const createCalendarGrid = (year?: number, month?: number) => {
  return [...Array(35).keys()].map((day) => ({
    date: moment().date(day + 1)
  }));
};
