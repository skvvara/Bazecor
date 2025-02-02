import { sanitizeIntensity } from "./sanitizeIntensity";
import { RGB, RGBW } from "./types";

/**
 * Convert a RGB color to RGBW
 * @param {RGB} color - A RGB color
 * @returns {RGBW} - The color converted to RGBW
 */
export function rgb2w(color: RGB): RGBW {
  const sanitizedR = sanitizeIntensity(color.r);
  const sanitizedG = sanitizeIntensity(color.g);
  const sanitizedB = sanitizeIntensity(color.b);

  const minVal = Math.min(sanitizedR, Math.min(sanitizedG, sanitizedB));

  return {
    r: sanitizedR - minVal,
    b: sanitizedB - minVal,
    g: sanitizedG - minVal,
    w: minVal,
  };
}
