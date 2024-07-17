import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "inc":
      return { count: state.count + 1 };
    case "dec":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Test2 = () => {
  const [state, dispatch] = useReducer<any>(reducer, initialState);
  return (
    <div>
      <h1>Count is :{state.count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>++</button>
      <button onClick={() => dispatch({ type: "dec" })}>--</button>
    </div>
  );
};

export default Test2;
