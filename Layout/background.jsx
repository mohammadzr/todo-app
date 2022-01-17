import style from "../styles/app.module.css";
import { useDispatch } from "react-redux";
import { updateAddTaskStatus } from "../redux/state Slices/popupSlice";

function Background({ children }) {
  const dispatch = useDispatch();

  return (
    <div
      className={`${style["bg"]} flex justify-center items-center fixed`}
    >
      {children}
    </div>
  );
}

export default Background;
