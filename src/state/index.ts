import create from "zustand";
import { devtools } from "zustand/middleware";
import { tUseAppState } from "./types";
import { createCalendarGrid } from "../utils/createCalendarGrid";
import moment from "moment";

const initialDate = moment();

export const useAppState = create<tUseAppState>()(
  devtools((set) => ({
    dates: createCalendarGrid({ date: initialDate, view: "week" }),
    view: "month",
    currentDate: initialDate,

    nextDate: () =>
      set((state) => {
        const next = state.currentDate.add(1, state.view);

        const datesGrid = createCalendarGrid({
          date: next,
          view: state.view
        });

        return { currentDate: next, dates: datesGrid };
      }),
    prevDate: () =>
      set((state) => {
        const next = state.currentDate.subtract(1, state.view);

        const datesGrid = createCalendarGrid({
          date: next,
          view: state.view
        });

        return { currentDate: next, dates: datesGrid };
      }),
    setTodayDate: () => set(() => ({ currentDate: moment() })),
    changeView: (view: tUseAppState["view"]) => set({ view })
  }))
);
