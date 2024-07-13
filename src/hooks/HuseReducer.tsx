import { useReducer } from "react";

type State = {
  count: number;
};

type Action = {
  type: string;
};

const initialState: State = { count: 0 };

const reducer = (state: State, action: any): State => {
  switch (action.type) {
    case "increase":
      return { count: state.count + 1 };
    case "decrease":
      return { count: state.count - 1 };
    case "input":
      return { count: action.payload };
    default:
      return state;
  }
};

const HuseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>
        useReducer is similar to useState, but instead of providing a state &
        setter function, it provides state and dispatch function.
      </h1>
      <p>The useReducer Hook accepts two arguments:</p>
      <p>- Reducer function</p>
      <p>- Initial state</p>
      <p>and returns: Current state and Dispatch method.</p>
      <p>The Reducer function specifies how the state gets updated.</p>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "increase" })}>Increase</button>
      <button onClick={() => dispatch({ type: "decrease" })}>Decrease</button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({ type: "input", payload: Number(e.target.value) })
        }
      />
    </div>
  );
};

export default HuseReducer;
