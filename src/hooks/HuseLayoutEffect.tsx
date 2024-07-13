import { useEffect, useLayoutEffect } from "react";

const HuseLayoutEffect = () => {
  useEffect(() => {
    console.log("Message from useEffect !");
  }, []);

  useLayoutEffect(() => {
    console.log("Message from useLayoutEffect !");
  }, []);
  return (
    <div>
      <h1>
        useLayoutEffect works similarly to useEffect, but it is called before
        the User Interface gets mounted.
      </h1>
      <p>UseEffect gets called after printing the DOM elements.</p>
      <p>useLayoutEffect gets called before printing the DOM elements.</p>
      {Array(40000)
        .fill("")
        .map((item, index) => (
          <li key={index}>{Math.pow(Math.random(), 10)}</li>
        ))}
    </div>
  );
};

export default HuseLayoutEffect;
