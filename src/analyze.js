import React from "react";
const avg = (arr) => {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  var avg = total / arr.length;
  return avg;
};
const analyze = (arr) => {
  if (arr.length === 0) {
    return -1;
  }

  const object = {
    average: parseInt(avg(arr).toFixed(0)),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return object;
};

export default analyze;
