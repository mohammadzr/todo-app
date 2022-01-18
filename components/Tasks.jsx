import { FiTrash2 } from "react-icons/fi";
import { FaPencilAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { completeStatus, deleteTask } from "../redux/state Slices/tasksSlice";
import {
  getEditTaskId,
  updateEditTaskStatus,
} from "../redux/state Slices/popupSlice";

function Tasks({ item }) {

  const dispatch = useDispatch();

  const deleteFunc = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div
      className={`container-content-main-item flex flex-row flex-wrap justify-between items-center w-full pl-3 pr-8 md:pl-6 md:pr-16 pb-3 pt-[22px] border-b border-slate-200	`}
    >
      <div
        className={`container-content-main-item-left flex flex-row flex-shrink flex-1 items-center mr-8`}
      >
        <div>
          <input
            type="checkbox"
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-full bg-white checked:bg-emerald-400 checked:border-emerald-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            checked={item.completeStatus}
            onChange={() => {
              dispatch(completeStatus(item.id));
            }}
          />
        </div>
        <div
          className={`${
            item.completeStatus && "line-through	"
          } flex w-full max-w-[12rem] sm:max-w-lg sm:w-full`}
        >
          {item.taskName}
        </div>
      </div>
      <div
        className={`container-content-main-right flex flex-row items-center ml-auto`}
      >
        {!item.completeStatus ? (
          <FaPencilAlt
          className=" m-4 md:mr-6 fill-blue-500 cursor-pointer"
          onClick={() => {
            dispatch(updateEditTaskStatus());
            dispatch(getEditTaskId(item.id));
          }}
          />
          ) : (
            ""
            )}
            <FiTrash2
              className="stroke-red-600 cursor-pointer"
              onClick={() => deleteFunc(item.id)}
            />
      </div>
    </div>
  );
}

export default Tasks;
