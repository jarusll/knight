interface BoardAction {
  type: string,
  payload: {
    x: number,
    y: number
  }
}

export default BoardAction
