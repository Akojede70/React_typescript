import React from "react";
import { useReducer } from "react";

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: "increment" | "decrement"  
  payload: number
};

type ResestAction = {
    type: "reset"
}

type CounterAction = UpdateAction | ResestAction
const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
      case "reset":
        return initialState
    default:
      return state;
  }
}

 const counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <>
    <div >

        <button style={{marginRight: "1rem" }} onClick={() => dispatch ({ type: "reset"}) }>
          reset
        </button>
       
        <button style={{marginRight: "1rem"}} onClick={() => dispatch({ type: "increment", payload: 1 })}>
          increment
        </button>
        count: {state.count}
        <button style={{marginLeft: "1rem"}} onClick={() => dispatch({ type: "decrement", payload: 1 })}>
          Decrement
        </button>
    </div>
      </>
  );
};

export default counter;
