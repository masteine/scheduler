import create from "zustand";
import { devtools } from "zustand/middleware";
import { tUseAppState } from "./types";
import { createCalendarGrid } from "../utils/createCalendarGrid";
import moment from "moment";

export const useAppState = create<tUseAppState>()(
  devtools((set, get) => ({
    dates: createCalendarGrid(),
    view: "week",
    currentDate: moment(),

    nextDate: () =>
      set((state) => ({
        currentDate: state.currentDate.add(1, state.view)
      })),
    prevDate: () =>
      set((state) => ({
        currentDate: state.currentDate.subtract(1, state.view)
      })),
    setTodayDate: () => set(() => ({ currentDate: moment() })),
    changeView: (view: tUseAppState["view"]) => set({ view })
  }))
);
