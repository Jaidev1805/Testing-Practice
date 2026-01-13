import * as index from "./index.js"

test("Capitalizes first character in string", () => {
  expect(index.capitalize("austin")).toBe("Austin");
});

test("Reverses string", () => {
  expect(index.reverseString("austin")).toBe("nitsua");
});

test("Adds two numbers", () => {
  expect(index.calculator.add(3, 7)).toBe(10);
});

test("Subtracts one number from another", () => {
  expect(index.calculator.subtract(10, 3)).toBe(7);
});

test("Multiplies two numbers", () => {
  expect(index.calculator.multiply(4, 5)).toBe(20);
});

test("Divides one number by another", () => {
  expect(index.calculator.divide(20, 4)).toBe(5);
});

test("Returns Caesar cipher of string", () => {
  expect(index.caesarCipher("xXyYzZ!", 3)).toBe("aAbBcC!");
});

test("Returns an object with array's average, min, max, and length", () => {
  expect(index.analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});