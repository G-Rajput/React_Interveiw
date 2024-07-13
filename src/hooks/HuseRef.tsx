import { useEffect, useRef, useState } from "react";

const HuseRef = () => {
  return (
    <>
      <h1>Example:1</h1>
      <Example1 />
      <br />
      <h1>Example:2</h1>
      <Example2 />
    </>
  );
};

export default HuseRef;

function Example1() {
  const [value, setValue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div>
      <h2>
        useRef is a react Hook that allow us to create mutable variables, which
        will not re-render the component.
        <br />
        useRef Hook is also used for accessing DOM elements.
      </h2>
      <button
        onClick={() => {
          setValue((prev) => prev - 1);
        }}
      >
        -1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          setValue((prev) => prev + 1);
        }}
      >
        +1
      </button>
      <h1>Count: {count.current} </h1>
    </div>
  );
}

function Example2() {
  const inputElem = useRef<any>();
  const btnClicked = () => {
    console.log(inputElem.current);
    inputElem.current.style.background = "#015659";
  };
  return (
    <>
      <input type="text" ref={inputElem} />
      <button onClick={btnClicked}>Click Here</button>
    </>
  );
}
