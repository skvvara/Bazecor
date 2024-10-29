import { test, expect, it, vi } from 'vitest'
import hex2byte from './hex2byte'

test.each([
  { input: "00", expected: [0x00] },
  { input: "01", expected: [0x01] },
  { input: "aa", expected: [0xaa] },
  { input: "AA", expected: [0xaa] },
  { input: "GG", expected: [NaN] },
  { input: "-1234", expected: [-0x01, 0x23, 0x04] },
  { input: "12345", expected: [0x12, 0x34, 0x05] },
])("hex2byte($input) returns $expected", ({ input, expected }) => {
  expect(hex2byte(input)).toEqual(expected);
});
