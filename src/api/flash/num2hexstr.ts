import { toFixedLength } from "./toFixedLength";

/**
 * Converts a number to it's hex representation padding/truncating to an optional fixed length.
 * @param number - Number to convert to hex
 * @param expectedSize - Size of the fixed output, 0 for no adjustments.
 * Note: Could trim if set to a value smaller than the number of hex characters the number needs.
 * @returns The number converted to a hex string optionally padded/truncated
 */
export function num2hexstr(number: number, expectedSize?: number | undefined): string {
  return toFixedLength(number.toString(16), expectedSize);
}
