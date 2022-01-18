import { useSelector, useDispatch } from "react-redux";
import Tasks from "../components/Tasks";
import { useState } from "react";
import { updateAddTaskStatus } from "../redux/state Slices/popupSlice";

function MainLogic({ children }) {
  const dateFunc = () => {
    const date = new Date();
    const todayDate = date.getDate();
    const todayMonthNum = date.getMonth();
    const year = date.getFullYear();

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const month = monthNames[todayMonthNum];

    return { todayDate, month, year };
  };

  const [completeTab, setCompleteTab] = useState(0);

  let incompleteItemNum = 0;
  let completeItemNum = 0;

  const tasksState = useSelector((state) => state.taskReducer);
  const dispatch = useDispatch();

  const updateAddTaskStatusFunc = () => {
    dispatch(updateAddTaskStatus());
  };

  const allTasks = tasksState.tasks
    .map((item) => {
      !item.completeStatus && incompleteItemNum++;
      item.completeStatus && completeItemNum++;

      if (completeTab == 0 && !item.completeStatus)
        return <Tasks key={item.id} item={item} />;
      if (completeTab == 1 && item.completeStatus)
        return <Tasks key={item.id} item={item} />;
    })
    .filter(Boolean);

  const tabFunc = (e) => {
    const activeTabId = e.target.id;
    setCompleteTab(+activeTabId);
  };

  return (
    <>
      {children(
        dateFunc,
        completeTab,
        incompleteItemNum,
        completeItemNum,
        allTasks,
        tabFunc,
        updateAddTaskStatusFunc
      )}
    </>
  );
}

export default MainLogic;
