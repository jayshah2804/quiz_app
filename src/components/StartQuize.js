import React, { useState } from "react";
import Questions from "./Questions";
import classes from "./StartQuiz.module.css";

let flag = true;
let flag2 = true;
const StartQuize = () => {
  const [start, setStart] = useState();
  const [start2, setStart2] = useState();
  const startQuizHandler = () => {
    flag = false;
    setStart(true);
  };
  const startQuizHandler2 = () => {
    flag2 = false;
    setStart2(true);
  };
  const resetQuizHandler = () => {
    flag = true;
    setStart(false);
  };
  const resetQuizHandler2 = () => {
    flag2 = true;
    setStart2(false);
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="quizOne">
        {!flag && <button onClick={resetQuizHandler}>Reset Quiz1</button>}
        {flag && <button onClick={startQuizHandler} className={classes.quizStart}>StartQuiz1</button>}
        {start && <Questions questionSet={1} />}
      </div>
      <div className={classes.va}></div>
      <div className="quizTwo" style={{marginLeft: "40rem"}}>
        {!flag2 && <button onClick={resetQuizHandler2}>Reset Quiz2</button>}
        {flag2 && <button onClick={startQuizHandler2} className={classes.quizStart}>StartQuiz2</button>}
        {start2 && <Questions questionSet={2} />}
      </div>
    </div>
  );
};

export default StartQuize;
