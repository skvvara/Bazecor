import { expect, test } from "vitest";
import { rgbw2b } from "./RGBWtoRGB";

test.each([
  { input: { r: 10, g: 20, b: 30, w: 40 }, expected: { r: 50, g: 60, b: 70, rgb: "rgb(50, 60, 70)" } },
  { input: { r: 10, g: 20, b: 30, w: -40 }, expected: { r: 10, g: 20, b: 30, rgb: "rgb(10, 20, 30)" } },
  { input: { r: 10, g: 20, b: 30, w: 1000 }, expected: { r: 255, g: 255, b: 255, rgb: "rgb(255, 255, 255)" } },
  { input: { r: 100, g: 20, b: 30, w: 200 }, expected: { r: 255, g: 220, b: 230, rgb: "rgb(255, 220, 230)" } },
])("rgbw2b($input) = $expected", ({ input, expected }) => {
  expect(rgbw2b(input)).toEqual(expected);
});
