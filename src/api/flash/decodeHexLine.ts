export interface DecodedHexLine {
  str: string;
  len: number;
  address: number;
  type: number;
  data: Uint8Array;
}

/**
 * Decodes hex line to object.
 * Format of hex line string input:
 *  [0,1] = uint8 - Data length (in bytes)
 *  [2,5] = uint16 - Address
 *  [6,7] = uint8 - Record Type
 *  [8, (n*2)+8] = uint8[] - Data
 * @param line - One line from hex file.
 * @returns Struct for use in firmware.
 */
export function decodeHexLine(line: string): DecodedHexLine {
  if (line.length < 8) {
    // Input not long enough to cover zero length with address and record type.
    // TODO: Probably should exit early with undefined/error
    // return undefined;
  }

  const len = parseInt(line.substring(0, 2), 16);

  // Can remove this if exiting early due to invalid length
  let lengthOfData = len;

  if (len * 2 + 8 !== line.length) {
    // Input of incorrect size
    // TODO: Probably should exit early with undefined/error
    // return undefined;

    // To preserve existing logic, hack the length to the remainder of the input/2
    lengthOfData = line.length <= 8 ? 0 : Math.floor((line.length - 8) / 2);
  }

  const address = parseInt(line.substring(2, 6), 16);
  const type = parseInt(line.substring(6, 8), 16);

  const data = new Uint8Array(lengthOfData);
  let index = 0;
  for (let offset = 8; offset < line.length; offset += 2) {
    data[index] = parseInt(line.substring(offset, offset + 2), 16);
    index += 1;
  }

  return {
    str: line,
    len,
    address,
    type,
    data,
  };
}
