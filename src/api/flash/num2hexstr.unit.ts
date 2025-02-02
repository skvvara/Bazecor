import { describe, expect, test } from "vitest";
import { num2hexstr } from "./num2hexstr";

describe(`${num2hexstr.name}()`, () => {
  test.each([
    { input: -10000, expected: "-2710" },
    { input: -1000, expected: "-3e8" },
    { input: -100, expected: "-64" },
    { input: -10, expected: "-a" },
    { input: 0, expected: "0" },
    { input: 10, expected: "a" },
    { input: 100, expected: "64" },
    { input: 1000, expected: "3e8" },
    { input: 10000, expected: "2710" },
  ])("No Fixed Width: $input", ({ input, expected }) => {
    expect(num2hexstr(input)).toEqual(expected);
  });

  test.each([
    { input: -10000, length: 2, expected: "10" },
    { input: -1000, length: 2, expected: "e8" },
    { input: -100, length: 2, expected: "64" },
    { input: -10, length: 2, expected: "-a" },
    { input: 0, length: 2, expected: "00" },
    { input: 10, length: 2, expected: "0a" },
    { input: 100, length: 2, expected: "64" },
    { input: 1000, length: 2, expected: "e8" },
    { input: 10000, length: 2, expected: "10" },
  ])("Fixed to Length 2: $input", ({ input, length, expected }) => {
    expect(num2hexstr(input, length)).toEqual(expected);
  });
});
