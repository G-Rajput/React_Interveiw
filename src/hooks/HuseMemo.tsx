import { useMemo, useState } from "react";

const HuseMemo = () => {
  const [number, setNumber] = useState(0);
  const [counter, setCounter] = useState(0);

  function cubeNum(num: number) {
    console.log("Calculation Done !");
    return Math.pow(num, 3);
  }

  const result = useMemo(() => cubeNum(number), [number]);
  return (
    <div>
      <h2>
        The React useMemo Hook returns a memomized value. (it's like caching a
        value so that it doesn't need to be recalculated.)
      </h2>
      <br />
      <h2>
        The useMemo Hook only runs when one of its dependencies gets updated
      </h2>
      <p>
        This can improve the performance of the application. There is one more
        hook in react to improve performance, that is useCallback hook.
      </p>
      <p>
        The useMemo and useCallback Hooks are similar. The main difference is:
      </p>
      <p>-useMemo returns a memomized value.</p>
      <p>-useCallback returns a memomized function.</p>
      <br />
      <input
        type="text"
        value={number}
        onChange={(e: any) => {
          setNumber(e.target.value);
        }}
      />
      <h1>Cube of the number: {result}</h1>
      <button
        onClick={() => {
          setCounter((prev) => prev + 1);
        }}
      >
        Counter++
      </button>
      <h1>Counter : {counter}</h1>
    </div>
  );
};

export default HuseMemo;
