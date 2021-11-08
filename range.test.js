const range = require("./lib/index");

test("should range be", () => {
  expect(range(0, 4)).toStrictEqual([0, 1, 2, 3]);
});

test("should range be", () => {
  expect(range(4)).toStrictEqual([0, 1, 2, 3]);
});

test("range w/ start- end - step", () => {
  expect(range(1, 8, 2)).toStrictEqual([1, 3, 5, 7]);
});

test("range w/ negative step count", () => {
  expect(range(10, 0, -2)).toStrictEqual([10, 8, 6, 4, 2]);
});
