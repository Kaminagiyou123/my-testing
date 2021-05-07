import calculator from "./calculator";
test("plus function", () => {
  expect(calculator("+", 1, 2)).toBe(3);
});
test("minus", () => {
  expect(calculator("-", 3, 2)).toBe(1);
});

test("multiply", () => {
  expect(calculator("*", 3, 1)).toBe(3);
});

test("divison", () => {
  expect(calculator("/", 3, 3)).toBe(1);
});
test("", () => {
  expect(calculator("/", 3, 0)).toBe(0);
});
