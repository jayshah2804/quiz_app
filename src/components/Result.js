import React from "react";

const Result = (props) => {
  return (
    <div>
      <h2>Score: {props.totalScore}</h2>
      {props.result1 && props.result1.map((que, index) => (
        <div>
          <p>
            Question {++index}: {que.question}
          </p>
          <p>
            Your Answer: <span>{que.enteredAnswer}</span>
          </p>
          <p>
            Actual Answer: <span>{que.actualAnswer}</span>
          </p>
        </div>
      ))}
      {props.result2 && props.result2.map((que, index) => (
        <div>
          <p>
            Question {++index}: {que.question}
          </p>
          <p>
            Your Answer: <span>{que.enteredAnswer}</span>
          </p>
          <p>
            Actual Answer: <span>{que.actualAnswer}</span>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Result;
