import { useState } from "react";

function useInputControl(initialValue) {
  const [inputVal, setInputVal] = useState(initialValue);

  const reset = () => {
    initialValue == "" ? setInputVal("") : setInputVal(inputVal);
  };

  const bind = {
    value: inputVal,
    onChange: (e) => {
      setInputVal(e.target.value);
    },
  };
  return [inputVal, bind, reset];
}

export default useInputControl;
