import { expect, test } from "vitest";
import { rgb2w } from "./RGBtoRGBW";

test.each([
  { input: { r: 0, g: 0, b: 0 }, expected: { r: 0, g: 0, b: 0, w: 0 } },
  { input: { r: 100, g: 200, b: 250 }, expected: { r: 0, g: 100, b: 150, w: 100 } },
  { input: { r: -100, g: 100, b: 200 }, expected: { r: 0, g: 100, b: 200, w: 0 } },
])("rgb2w($input) = $expected", ({ input, expected }) => {
  expect(rgb2w(input)).toEqual(expected);
});
