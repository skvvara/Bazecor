import { expect, test } from "vitest";
import { sanitizeIntensity } from "./sanitizeIntensity";

test.each([
  { input: -100, expected: 0 },
  { input: 0, expected: 0 },
  { input: 100, expected: 100 },
  { input: 255, expected: 255 },
  { input: 1000, expected: 255 },
])("sanitizeIntensity($input) = $expected", ({ input, expected }) => {
  expect(sanitizeIntensity(input)).toEqual(expected);
});
