import { useState } from "react";

const useCounter = (number = ".first") => {
  let [value, setValue] = useState("Zero");

  const plusValue = () => {
    if (value === "Zero") {
      console.log("work1");
      setValue(1);
    } else {
      console.log("work2");
      console.log(value);
      setValue(value + 1);
    }
  };

  const refreshAllAmount = () => {
    setValue("Zero");
  };

  const minusValue = () => {
    if (value === "Zero") {
    } else if (value === 1) {
      setValue("Zero");
    } else {
      setValue(value - 1);
    }
  };

  const deleteValue = () => {
    document.querySelector(number).textContent = "";
  };

  return { refreshAllAmount, value, plusValue, minusValue, deleteValue };
};

export default useCounter;
