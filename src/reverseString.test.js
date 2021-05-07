import reverseString from "./reverseString";
test("reverse a simple string", () => {
  expect(reverseString("abcd")).toBe("dcba");
});

test("reverse a string with space", () => {
  expect(reverseString("a b c daf")).toBe("fad c b a");
});

test("reverse a string with other symbols", () => {
  expect(reverseString("a b @")).toBe("@ b a");
});
