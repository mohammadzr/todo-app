import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./state Slices/tasksSlice";
import popupSlice from "./state Slices/popupSlice";

export const store = configureStore({
  reducer: {
    taskReducer: tasksSlice,
    popupReducer: popupSlice,
  },
});
