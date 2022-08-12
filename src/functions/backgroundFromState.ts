import BoardState from "../types/BoardState"

export default function backgroundFromState(state: BoardState){
  switch (state){
    case BoardState.INACTIVE:
      return "#262626"
    case BoardState.START:
      return "#75240e"
    case BoardState.END:
      return "#006999"
  }
}
