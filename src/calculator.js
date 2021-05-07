import React from "react";

const calculator = (cal, var1, var2) => {
  switch (cal) {
    case "+":
      return var1 + var2;

    case "-":
      return var1 - var2;

    case "*":
      return var1 * var2;
    case "/":
      if (var2 === 0) {
        return 0;
      } else {
        return var1 / var2;
      }
    default:
      return;
  }
};

export default calculator;
