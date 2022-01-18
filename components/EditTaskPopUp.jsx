import EditTaskPopUpLogic from "./../components logics/EditTaskPopUpLogic";

function EditTaskPopUp({ editTaskPopupCloseFunc }) {
  return (
    <div className="max-w-screen-sm md:w-screen p-5 bg-white rounded-2xl shadow-lg">
      <div className="w-full pb-[24px]">
        <h1 className="mb-3 font-medium text-2xl">Edit Todo</h1>
        <span className="font-medium">
          Please write content of todo in input below!
        </span>
      </div>
      {
        <EditTaskPopUpLogic>
          {(bindEditInput, editTaskFunc) => {
            return (
              <>
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
                  <button
                    className="text-blue-500"
                    onClick={() => editTaskFunc()}
                  >
                    Edit
                  </button>
                </div>
              </>
            );
          }}
        </EditTaskPopUpLogic>
      }
    </div>
  );
}

export default EditTaskPopUp;
