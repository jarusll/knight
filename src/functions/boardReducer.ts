import BoardAction from "../types/BoardAction"
import BoardState from "../types/BoardState"
import computeKnightPositions from "./computeKnightPositions"
import make2DArray from "./make2dArray"

export default function boardReducer(state: Array<Array<any>>, action: BoardAction){
  switch(action.type){
    case "START":
      const newArray = make2DArray(8, 8, BoardState.INACTIVE)
      const {x, y} = action.payload
      newArray[x][y] = BoardState.START
      const possiblePositions = computeKnightPositions(x, y)
      possiblePositions.forEach(([x, y]) => {
        newArray[x][y] = BoardState.END
      })
      return newArray
    default:
      return state
  }
}
