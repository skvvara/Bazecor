import { describe, test, expect } from "vitest";
import iHexDecode from "./ihexDecode";

describe(`${iHexDecode.name}()`, () => {
  test.each([
    {
      line: "03123401AB1234",
      expected: {
        str: "03123401AB1234",
        len: 3,
        address: 0x1234,
        type: 1,
        data: Uint8Array.from([0xab, 0x12, 0x34]),
      },
    },
    {
      line: "",
      expected: {
        str: "",
        len: NaN,
        address: NaN,
        type: NaN,
        data: Uint8Array.from([]),
      },
    },
    {
      line: "03",
      expected: {
        str: "03",
        len: 3,
        address: NaN,
        type: NaN,
        data: Uint8Array.from([]),
      },
    },
    {
      line: "031234",
      expected: {
        str: "031234",
        len: 3,
        address: 0x1234,
        type: NaN,
        data: Uint8Array.from([]),
      },
    },
    {
      line: "03123401",
      expected: {
        str: "03123401",
        len: 3,
        address: 0x1234,
        type: 1,
        data: Uint8Array.from([]),
      },
    },
    {
      line: "03123401AB",
      expected: {
        str: "03123401AB",
        len: 3,
        address: 0x1234,
        type: 1,
        data: Uint8Array.from([0xab]),
      },
    },
  ])(`input: $line`, ({ line, expected }) => {
    expect(iHexDecode(line)).toStrictEqual(expected);
  });
});