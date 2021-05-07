import caesar from "./caesar";
test("z to a", () => {
  expect(caesar("az", 1)).toBe("ba");
});
test("", () => {
  expect(caesar("A", 1)).toBe("B");
});
test("", () => {
  expect(caesar("B.", 1)).toBe("C.");
});
