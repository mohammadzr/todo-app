import style from "../styles/app.module.css";
import { FiPlus } from "react-icons/fi";
import { useSelector, useDispatch } from "react-redux";
import Tasks from "../components/Tasks";
import { updateAddTaskStatus } from "../redux/state Slices/popupSlice";
import { useState } from "react";

function Main() {
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
    <main className="bg-[url('/patternBg/bg.svg')] h-screen bg-no-repeat bg-cover bg-center">
      <div
        className={`w-full flex pt-[80px] justify-center `}
      >
        <div
          className={`max-w-screen-lg w-full bg-white p-8 rounded-3xl shadow-lg shadow-slate-100`}
        >
          <div
            className={`h-16 flex flex-row justify-between `}
          >
            <div
              className={`${style["container-content-header-left"]} flex flex-row max-w-max`}
            >
              <h2 className="mr-1 text-slate-800">{dateFunc()["todayDate"]}</h2>
              <div className="flex flex-col">
                <span className="font-medium text-slate-800">
                  {dateFunc().month}
                </span>
                <span className="text-slate-400">{dateFunc().year}</span>
              </div>
            </div>
            <div>
              <button
                id={0}
                className={` ${
                  completeTab === 0
                    ? "text-blue-600 font-medium"
                    : "text-slate-800 "
                }`}
                onClick={(e) => tabFunc(e)}
              >
                {`incomplete task${incompleteItemNum > 1 ? "s" : ""}`}
              </button>
              <button
                id={1}
                className={` ml-6 ${
                  completeTab === 1
                    ? "text-blue-600 font-medium"
                    : "text-slate-800 "
                }  `}
                onClick={(e) => tabFunc(e)}
              >
                {`complete task${completeItemNum > 1 ? "s" : ""}`}
              </button>
            </div>
          </div>
          <div
            className={`${style['container-content-main']} flex-col w-full flex`}
          >
            {allTasks.length < 1 ? (
              <p className="text-center	py-[16px]">
                There is nothing to show add new item...
              </p>
            ) : (
              allTasks
            )}
          </div>
        </div>
      </div>
      <button
        className={` fixed bottom-8 right-8  p-[16px] rounded-full bg-sky-600`}
        onClick={() => {
          dispatch(updateAddTaskStatus());
        }}
      >
        <FiPlus className="stroke-white w-[24px] h-[24px] pointer-events-none	" />
      </button>
    </main>
  );
}

export default Main;
