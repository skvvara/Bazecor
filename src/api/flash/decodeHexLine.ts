function hex2byte(hex: string) {
  const bytes = [];

  for (let i = 0; i < hex.length; i += 2) bytes.push(parseInt(hex.substring(i, i + 2), 16));

  return bytes;
}

/**
 * Decodes hex line to object.
 * @param line - One line from hex file.
 * @returns Struct for use in firmware.
 */
export function decodeHexLine(line: string) {
  let offset = 0;

  const byteCount = parseInt(line.substring(offset, offset + 2), 16);
  offset += 2;
  const address = parseInt(line.substring(offset, offset + 4), 16);
  offset += 4;
  const recordtype = parseInt(line.substring(offset, offset + 2), 16);
  offset += 2;

  const byteData = hex2byte(line.substring(offset, offset + byteCount * 2));

  const bytes = new ArrayBuffer(byteData.length);
  const bytesView = new Uint8Array(bytes, 0, byteData.length);

  for (let i = 0; i < byteData.length; i += 1) {
    bytesView[i] = byteData[i];
  }

  return {
    str: line,
    len: byteCount,
    address,
    type: recordtype,
    data: bytesView,
  };
}
