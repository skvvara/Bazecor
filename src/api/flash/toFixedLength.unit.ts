import { describe, expect, test } from "vitest";
import { toFixedLength } from "./toFixedLength";

describe(`${toFixedLength.name}()`, () => {
  test.each([
    { input: "-10000", expected: "-10000" },
    { input: "-1000", expected: "-1000" },
    { input: "-100", expected: "-100" },
    { input: "-10", expected: "-10" },
    { input: "0", expected: "0" },
    { input: "10", expected: "10" },
    { input: "100", expected: "100" },
    { input: "1000", expected: "1000" },
    { input: "10000", expected: "10000" },
  ])("No Fixed Length: $input", ({ input, expected }) => {
    expect(toFixedLength(input)).toEqual(expected);
  });

  test.each([
    { input: "-10000", pad: 3, expected: "000" },
    { input: "-1000", pad: 3, expected: "000" },
    { input: "-100", pad: 3, expected: "100" },
    { input: "-10", pad: 3, expected: "-10" },
    { input: "0", pad: 3, expected: "000" },
    { input: "10", pad: 3, expected: "010" },
    { input: "100", pad: 3, expected: "100" },
    { input: "1000", pad: 3, expected: "000" },
    { input: "10000", pad: 3, expected: "000" },
  ])("Fixed to Length 3: $input", ({ input, pad, expected }) => {
    expect(toFixedLength(input, pad)).toEqual(expected);
  });
});
