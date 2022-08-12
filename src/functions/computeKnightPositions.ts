import isBetween from "./isBetween";

export default function computeKnightPositions(x: number, y: number){
  return [
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x - 1, y + 2],
    [x - 2, y + 1],
    [x - 2, y - 1],
    [x - 1, y - 2],
    [x + 1, y - 2],
    [x + 2, y - 1]
  ].filter(([x, y]) => isBetween(x, 0, 7) && isBetween(y, 0, 7))
}
