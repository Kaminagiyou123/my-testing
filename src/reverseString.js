const reverseString = (str) => {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  return reverseArray.join("");
};

export default reverseString;
