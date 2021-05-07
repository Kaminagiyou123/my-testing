import capitalize from "./capitalize";

test("abc capitalize", () => {
  expect(capitalize("abc")).toBe("ABC");
});

test("a b c capitalize", () => {
  expect(capitalize("a b c")).toBe("A B C");
});

test("a 2 3 capitalize", () => {
  expect(capitalize("a 2 3")).toBe("A 2 3");
});
