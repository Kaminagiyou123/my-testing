//npm install --dev react-test-renderer
//import the sum function for the test

import sum from "./sum";
test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("adds 1 + 3 to equal 4", () => {
  expect(sum(1, 3)).toBe(4);
});
