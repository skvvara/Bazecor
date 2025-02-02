/**
 * Ensure that a given number is within [0,255]. If lower, coerce to 0. If higher, coerce to 255.
 * @param {number} value - An intensity value to sanitize
 * @returns {number} - If value is < 0, then 0. If value is > 255, then 255. Otherwise value.
 */
export function sanitizeIntensity(value: number): number {
  return Math.max(0, Math.min(255, value));
}
