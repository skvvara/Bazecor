/**
 * Pad/Truncate a string to fit to a fixed length, 0 means no adjustment.
 * @param input - String to possibly pad/truncate
 * @param expectedSize - Size of the fixed output, 0 for no adjustments.
 * @returns The input string or a string of the expected size.
 */
export function toFixedLength(input: string, expectedSize = 0): string {
  if (expectedSize === 0 || input.length === expectedSize) {
    return input;
  }

  if (input.length > expectedSize) {
    return input.slice(-expectedSize);
  }

  const neededPaddingSize = expectedSize - input.length;
  let str = "";
  for (let i = 0; i < neededPaddingSize; i += 1) {
    str += "0";
  }
  return str + input;
}
