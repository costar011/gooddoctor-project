import React, { useState } from "react";

const useInput = (initValue) => {
  const [value, setValue] = useState(initValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange, setValue }; // value, onChange는 textinput에 사용할 애들임.
};

export default useInput;
