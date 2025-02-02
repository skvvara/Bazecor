import { expect, test } from "vitest";
import aFN from "./arrayFillNum";

test.each([
  { start: 1, end: 1, expected: [] },
  { start: 1, end: 3, expected: [1, 2] },
  { start: 3, end: 1, expected: [] },
  { start: -1, end: -1, expected: [] },
  { start: -1, end: -3, expected: [] },
  { start: -3, end: -1, expected: [-3, -2] },
  { start: -3, end: 3, expected: [-3, -2, -1, 0, 1, 2] },
])("aFN($start, $end) = $expected", ({ start, end, expected }) => {
  expect(aFN(start, end)).toStrictEqual(expected);
});
