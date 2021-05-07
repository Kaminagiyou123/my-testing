import React from "react";

const analyze = (arr) => {
  if (arr.length === 0) {
    return -1;
  }
  const object = {
    average: Math.average(...arr),
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length,
  };
  return object;
};

export default analyze;
