import BoardState from "../types/BoardState"

export default function make2DArray(x: number, y: number, init: BoardState) {
  let array: Array<Array<any>> = []
  for (let i = 0; i < x; i++) {
    array[i] = []
    for (let j = 0; j < y; j++) {
      array[i][j] = init
    }
  }
  return array
}
