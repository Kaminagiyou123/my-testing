import analyze from "./analyze";
console.log(analyze([2, 8, 3, 4, 1, 6]));
test("", () => {
  expect(JSON.stringify(analyze([2, 8, 3, 4, 1, 6]))).toBe(
    JSON.stringify({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    })
  );
});
test("", () => {
  expect(analyze([])).toBe(-1);
});
