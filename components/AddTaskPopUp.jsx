import { useState } from "react";
import { addTask } from "../redux/state Slices/tasksSlice";
import { useDispatch } from "react-redux";
import useInputControl from "./../hooks/useInputControl";

function AddTaskPopUp({ addTaskPopupCloseFunc }) {
  const dispatch = useDispatch();
  const [addInputValue, bindAddInput, reset] = useInputControl("");

  const addTaskFunc = () => {
    if (addInputValue == "") return;

    var id = "id" + new Date().getTime();

    dispatch(addTask({ id, taskName: addInputValue, completeStatus: false }));

    reset();
  };

  return (
    <div className="max-w-screen-sm md:w-screen p-5 bg-white rounded-2xl shadow-lg">
      <div className="w-full pb-[24px]">
        <h1 className="mb-3 font-medium text-2xl">New Todo</h1>
        <span className="font-medium">
          Please write content of todo in input below!
        </span>
      </div>
      <div className="w-full">
        <input
          type="text"
          autoFocus
          placeholder="Do something"
          {...bindAddInput}
          className="border-b-2 w-full mb-[16px] px-2 pb-1 outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="mr-4 text-slate-700"
          onClick={() => addTaskPopupCloseFunc()}
        >
          Cancel
        </button>
        <button className="text-blue-500" onClick={() => addTaskFunc()}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTaskPopUp;
