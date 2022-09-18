import create from "zustand";
import { devtools } from "zustand/middleware";
import { tUseAppState } from "./types";
import { createCalendarGrid } from "../utils/createCalendarGrid";

export const useAppState = create<tUseAppState>()(
  devtools((set, get) => ({
    dates: createCalendarGrid(),
    view: "week",
    changeView: (view: tUseAppState["view"]) => set({ view }),
    nextDate: () => set((state) => ({ dates: createCalendarGrid() }))
  }))
);
