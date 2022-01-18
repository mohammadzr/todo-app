import style from "../styles/app.module.css";
import { FiPlus } from "react-icons/fi";
import MainLogic from "./../components logics/MainLogic";

function Main() {
  return (
    <main className="bg-[url('/patternBg/bg.svg')] h-screen bg-no-repeat bg-cover bg-center">
      <MainLogic>
        {(
          dateFunc,
          completeTab,
          incompleteItemNum,
          completeItemNum,
          allTasks,
          tabFunc,
          updateAddTaskStatusFunc
        ) => {
          return (
            <>
              <div className={`w-full flex pt-[80px] justify-center `}>
                <div
                  className={`max-w-screen-lg w-full mx-4 md:mx-10 bg-white p-5 md:p-8 rounded-3xl shadow-lg shadow-slate-100`}
                >
                  <div
                    className={` flex flex-col md:flex-row items-center justify-between pb-4 `}
                  >
                    <div
                      className={`${style["container-content-header-left"]} flex flex-row max-w-max`}
                    >
                      <h2 className="mr-1 text-slate-800">
                        {dateFunc()["todayDate"]}
                      </h2>
                      <div className="flex flex-col">
                        <span className="font-medium text-slate-800">
                          {dateFunc().month}
                        </span>
                        <span className="text-slate-400">
                          {dateFunc().year}
                        </span>
                      </div>
                    </div>
                    <div className="mt-5 md:mt-0">
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
                        className={` m-4 md:ml-6 ${
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
                    className={`${style["container-content-main"]} flex-col w-full flex`}
                  >
                    {allTasks.length < 1 ? (
                      <p className="text-center pb-3	pt-[22px]">
                        There is nothing to show add new item...
                      </p>
                    ) : (
                      allTasks
                    )}
                  </div>
                </div>
              </div>
              <button
                className={` fixed bottom-10 right-10 lg:right-20  p-[16px] rounded-full bg-sky-600`}
                onClick={() => {
                  updateAddTaskStatusFunc();
                }}
              >
                <FiPlus className="stroke-white w-[24px] h-[24px] pointer-events-none	" />
              </button>
            </>
          );
        }}
      </MainLogic>
    </main>
  );
}

export default Main;
