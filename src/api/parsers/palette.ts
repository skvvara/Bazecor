import { rgbw2b } from "../color";

export const parsePaletteRaw = (palette: string, isRGBW: boolean) =>
  isRGBW
    ? palette
        .split(" ")
        .filter(v => v.length > 0)
        .map((k: string) => parseInt(k, 10))
        .reduce((resultArray, item, index) => {
          const localResult = resultArray;
          const chunkIndex = Math.floor(index / 4);

          if (!localResult[chunkIndex]) {
            localResult[chunkIndex] = []; // start a new chunk
          }
          localResult[chunkIndex].push(item);
          return localResult;
        }, [])
        .map(color => {
          const coloraux = rgbw2b({ r: color[0], g: color[1], b: color[2], w: color[3] });
          return {
            r: coloraux.r,
            g: coloraux.g,
            b: coloraux.b,
            rgb: coloraux.rgb,
          };
        })
    : palette
        .split(" ")
        .filter(v => v.length > 0)
        .map((k: string) => parseInt(k, 10))
        .reduce((resultArray, item, index) => {
          const localResult = resultArray;
          const chunkIndex = Math.floor(index / 3);

          if (!localResult[chunkIndex]) {
            localResult[chunkIndex] = []; // start a new chunk
          }
          localResult[chunkIndex].push(item);
          return localResult;
        }, [])
        .map(color => ({
          r: color[0],
          g: color[1],
          b: color[2],
          rgb: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
        }));
