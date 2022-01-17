import { createSlice } from "@reduxjs/toolkit";

const initialState = { addTaskStatus: false, editTaskStatus: false, taskId: 0 };

export const popupSlice = createSlice({
  name: "popupReducer",
  initialState,
  reducers: {
    updateAddTaskStatus: (state, action) => {
      typeof action.payload == Boolean
        ? (state.addTaskStatus = action.payload)
        : (state.addTaskStatus = !state.addTaskStatus);
    },
    updateEditTaskStatus: (state, action) => {
      action.payload
        ? (state.editTaskStatus = action.payload)
        : (state.editTaskStatus = !state.editTaskStatus);
    },
    getEditTaskId: (state, action) => {
      state.taskId = action.payload;
    },
  },
});

export const { updateAddTaskStatus, updateEditTaskStatus, getEditTaskId } =
  popupSlice.actions;

export default popupSlice.reducer;
