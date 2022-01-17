import Background from "./../Layout/background";
import AddTaskPopUp from "./AddTaskPopUp";
import EditTaskPopUp from "./EditTaskPopUp";
import { useDispatch } from "react-redux";
import {
  updateAddTaskStatus,
  updateEditTaskStatus,
} from "../redux/state Slices/popupSlice";
import OutsideClickHandler from "react-outside-click-handler";

function PopUp({ popupName }) {
  const dispatch = useDispatch();

  const addTaskPopupCloseFunc = () => {
    dispatch(updateAddTaskStatus(false));
  };
  const editTaskPopupCloseFunc = () => {
    dispatch(updateEditTaskStatus(false));
  };

  const activeComponentFunc = () => {
    if (popupName === "addTask")
      return (
        <OutsideClickHandler onOutsideClick={() => addTaskPopupCloseFunc()}>
          <AddTaskPopUp
            addTaskPopupCloseFunc={addTaskPopupCloseFunc}
          />
        </OutsideClickHandler>
      );
    if (popupName === "editTask")
      return (
        <OutsideClickHandler onOutsideClick={() => editTaskPopupCloseFunc()}>
          <EditTaskPopUp
            editTaskPopupCloseFunc={editTaskPopupCloseFunc}
          />
        </OutsideClickHandler>
      );
  };

  return <Background>{activeComponentFunc()}</Background>;
}

export default PopUp;
