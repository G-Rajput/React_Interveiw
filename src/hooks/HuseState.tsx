import { useState } from "react";

const HuseState = () => {
  return (
    <div>
      <h3>
        useStae is a react hook, which creates an "state variable" . Which helps
        us to track state in components & updates the user interface when state
        changes.
      </h3>
      <h1>Example : 1</h1>
      <Example1 />
      <h1>Example : 2</h1>
      <Example2 />
      <h1>Example : 3</h1>
      <Example3 />
    </div>
  );
};

export default HuseState;

function Example1() {
  // Problem
  //   let color = "Red";
  //   const changeColor = () => {
  //     color = "Blue";
  //     console.log(color);
  //   };

  // Solution
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };

  return (
    <>
      <h1>My favourite color is {color} !</h1>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

function Example2() {
  const [car, setCar] = useState({
    brand: "Ferrari",
    model: "Roma",
    year: "2023",
    color: "red",
  });

  const changeColor = () => {
    setCar((prev) => {
      return { ...prev, color: "blue" };
    });
  };
  return (
    <>
      <h1>My {car.brand}</h1>
      <h2>
        It is a {car.color} {car.model} from {car.year}.
      </h2>
      <button onClick={changeColor}>Blue</button>
    </>
  );
}

function Example3() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={increaseCount}>Increase by 4</button>
    </>
  );
}
