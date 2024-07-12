import { useEffect, useState } from "react";

const HuseEffect = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 2000);
  }, [count]); // if you leave an empty array then it re-render once. without dependency array it works if any state value change then it re-renders.
  return (
    <div>
      <h2>
        The useEffect Hook allows you to perform side effects in your
        components. Some examples of side effects are :-
      </h2>
      <ul>
        <li>Fetching data from API.</li>
        <li>Directly updating the DOM.</li>
        <li>Timers like SetTimeOut and SetInterval.</li>
      </ul>
      <h2>Component Re-render {count} times.</h2>
    </div>
  );
};

export default HuseEffect;
