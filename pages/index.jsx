import Main from "./../components/Main";
import Header from "./../components/Header";
import Head from "./../components/Head";
import PopUp from "./../components/PopUp";
import { useSelector, useDispatch } from "react-redux";

function TodoApp() {
  const popUpStatus = useSelector((state) => state.popupReducer);

  return (
    <>
      <Head />
      <Header />
      <Main  />
      {/* we can create pop up using modalbut because of the time limit i prefer to build it with normal component  */}
      {/* also if we want to pop the component up with animation we can add and remove class instead */}
      {popUpStatus.addTaskStatus ? <PopUp popupName={'addTask'} /> : ""}
      {popUpStatus.editTaskStatus ? <PopUp popupName={'editTask'} /> : ""}
    </>
  );
}

export default TodoApp;
