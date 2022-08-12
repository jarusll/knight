import React, {useReducer} from 'react';
import './App.css';
import backgroundFromState from './functions/backgroundFromState';
import boardReducer from './functions/boardReducer';
import make2DArray from './functions/make2dArray';
import BoardState from './types/BoardState';

function App() {
  const [array, dispatch] = useReducer(boardReducer, make2DArray(8, 8, BoardState.INACTIVE));
  return (
    <div style={{marginTop: "10vh"}}>
      <h2 style={{textAlign: "center"}}>KNIGHT POSITIONS</h2>
      {
        array.map((item, i) =>
          <div style={{display: "flex", flexDirection: "row", justifyContent: "center"}}>
          {item.map((item, j) => <button style={{
            height: 50,
            width: 50,
            background: backgroundFromState(array[i][j]),
            color: "white",
            border: "none",
            margin: 1,
            borderRadius: 5,
            cursor: "pointer"
          }}
          onClick={() => dispatch({type: "START", payload: {
            x: i,
            y: j
          }})}>X</button>)}
          </div>
        )
      }
    </div>
  );
}

export default App;
