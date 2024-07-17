import React, { useMemo, useState } from "react";

const Test = () => {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(0);
  function cubNum(num: number) {
    console.log("Calculation Done !");
    return Math.pow(num, 3);
  }
  const result = useMemo(() => cubNum(number), [number]);
  return (
    <div>
      <input
        type="text"
        value={number}
        onChange={(e: any) => {
          setNumber(e.target.value);
        }}
      />
      <p>Cube of number is : {result}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>++</button>
      <p>Count is :{count}</p>
    </div>
  );
};

export default Test;
