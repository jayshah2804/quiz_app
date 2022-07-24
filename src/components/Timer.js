import React, { useEffect, useState } from "react";

let i = 0;
const Timer = (props) => {
  const [timer, setTimer] = useState(5);
  let timeInterval;
  useEffect(() => {
    timeInterval = setInterval(() => {
      setTimer((prev) => prev - 0.5);
    }, 1000);
  }, []);

  if (timer === -1) {
    if (!i) {
      i = 1;
    } else {
      i = 0;
      clearInterval(timeInterval);
      props.nextQue();
      setTimer(5);
      console.log("expired");
    }
  }
  return <React.Fragment>{timer}</React.Fragment>;
};

export default Timer;
