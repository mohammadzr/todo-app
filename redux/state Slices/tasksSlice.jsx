import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "taskReducer",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
    editTask: (state, action) => {
      const selectedItemIndex = state.tasks.findIndex((item) => {
        return item.id == action.payload.id;
      });

      state.tasks[selectedItemIndex].taskName = action.payload.editedData
    },
    deleteTask: (state, action) => {
      const newTasks = state.tasks.filter((item) => item.id != action.payload);
      state.tasks = newTasks;
    },
    completeStatus: (state, action) => {
      const item = state.tasks.find((item) => {
        return action.payload == item.id;
      });

      item.completeStatus = !item.completeStatus;
    },
  },
});

export const { addTask, editTask, completeStatus, deleteTask } =
  tasksSlice.actions;

export default tasksSlice.reducer;
