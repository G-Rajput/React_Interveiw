import React, { useEffect, useRef, useState } from "react";

const Test3 = ({ initialTime }: any) => {
  const [time, setTime] = useState<any>(initialTime);
  const [isRunning, setIsRunning] = useState(true);
  const timeRef = useRef<any>();

  console.log(initialTime);

  useEffect(() => {
    if (isRunning) {
      timeRef.current = setInterval(() => {
        setTime((prevTime: any) => {
          if (prevTime <= 0) {
            clearInterval(timeRef.current);
            setIsRunning(false);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else {
      clearInterval(timeRef.current);
    }

    return () => {
      clearInterval(timeRef.current);
    };
  }, [isRunning]);

  function hanlePauseResume() {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  }
  function handleReset() {
    clearInterval(timeRef.current);
    setTime(initialTime);
    setIsRunning(false);
  }
  function handleStart() {
    setIsRunning(true);
  }

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <p>
        {String(minutes).padStart(2, "0")} : {String(seconds).padStart(2, "0")}
      </p>

      <button onClick={hanlePauseResume}>
        {isRunning ? "Pause" : "Resume"}
      </button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleStart}>Start</button>
    </div>
  );
};

export default Test3;
