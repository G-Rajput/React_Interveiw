import React, { useCallback, useState } from "react";
import Header from "./helper/Header";

const HuseCallback = () => {
  const [count, setCount] = useState(0);
  const newFn = () => useCallback(() => {}, []);
  return (
    <div>
      <h1>
        useCallback is a React Hook that lets you cache a function defination
        between re-renders.It means , when we use the useCallback Hook, it
        doesn't create multiple instance of same function when re-render
        happens. Instead of creating new instance of the function, it provides
        the cached function on re-render of the component.
      </h1>
      <br />
      <br />
      <Header newFn={newFn} />
      <h1>{count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Click Here</button>
    </div>
  );
};

export default React.memo(HuseCallback);
