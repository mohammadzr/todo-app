import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/state Slices/tasksSlice";
import useInputControl from "./../hooks/useInputControl";

function EditTaskPopUp({ editTaskPopupCloseFunc }) {
  const dispatch = useDispatch();
  const tasksState = useSelector((state) => state.taskReducer);
  const popupState = useSelector((state) => state.popupReducer);

  const activeTaskDataFunc = () => {
    const activeTask = tasksState.tasks.filter((item) => {
      return item.id == popupState.taskId;
    });
    return activeTask[0].taskName;
  };

  const [editInputValue, bindEditInput, reset] = useInputControl(
    activeTaskDataFunc()
  );

  const editTaskFunc = () => {
    dispatch(editTask({ editedData: editInputValue, id: popupState.taskId }));
    reset();
  };

  return (
    <div className="max-w-screen-sm md:w-screen p-4 bg-white rounded-2xl shadow-lg">
      <div className="w-full pb-[24px]">
        <h1 className="mb-3 font-medium text-2xl">Edit Todo</h1>
        <span className="font-medium">
          Please write content of todo in input below!
        </span>
      </div>
      <div className="w-full">
        <input
          type="text"
          autoFocus
          placeholder="Do something"
          {...bindEditInput}
          className="border-b-2 w-full mb-[16px] px-2 pb-1 outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button
          className="mr-4 text-slate-700"
          onClick={() => editTaskPopupCloseFunc()}
        >
          Cancel
        </button>
        <button className="text-blue-500" onClick={() => editTaskFunc()}>
          Edit
        </button>
      </div>
    </div>
  );
}

export default EditTaskPopUp;
