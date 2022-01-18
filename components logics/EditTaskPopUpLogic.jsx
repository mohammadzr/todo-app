import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../redux/state Slices/tasksSlice";
import useInputControl from "./../hooks/useInputControl";

function EditTaskPopUpLogic({ children }) {
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
    if (editInputValue == "") {
      return;
    }
    dispatch(editTask({ editedData: editInputValue, id: popupState.taskId }));
    reset();
  };

  return <>{children(bindEditInput, editTaskFunc)}</>;
}

export default EditTaskPopUpLogic;
