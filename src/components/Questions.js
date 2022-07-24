import React, { useRef, useState } from "react";
import Result from "./Result";
import Timer from "./Timer";

const OPERATORS = ["+", "-", "*", "/"];
const arrayOfQuestionSet1 = [];
const arrayOfQuestionSet2 = [];

const Questions = (props) => {
  const [queNumber, setQueNumber] = useState(1);
  const [score, setScore] = useState(0);
  const inputRef = useRef();
  const [submit, isSubmit] = useState();
  const [triggeredResult, setTriggeredResult] = useState();
  
  let cls = "";
  if(props.questionSet === 1){
    cls = "que1";
  } else {
    cls = "que2";
  }
  const nextQuestionHandler = () => {
    let status = false;
    let enteredAnswer = null;
    if (inputRef.current) {
      if(props.questionSet === 1){
        status =
          eval(document.getElementsByClassName("myQuestions")[0].innerText) ===
          parseInt(inputRef.current.value);
      }else{
        if(document.getElementsByClassName("myQuestions")[1]){
          status =
          eval(document.getElementsByClassName("myQuestions")[1].innerText) ===
          parseInt(inputRef.current.value);
        } else {
          status =
          eval(document.getElementsByClassName("myQuestions")[0].innerText) ===
          parseInt(inputRef.current.value);
        }
      }
      enteredAnswer = inputRef.current.value;
    }
    if (props.questionSet === 1) {
      arrayOfQuestionSet1.push({
        question: document.getElementsByClassName("myQuestions")[0].innerText,
        enteredAnswer: enteredAnswer,
        actualAnswer: eval(
          document.getElementsByClassName("myQuestions")[0].innerText
        ),
        answerStatus: status,
      });
    }
    else if (props.questionSet === 2) {
      if(document.getElementsByClassName("myQuestions")[1]){
        arrayOfQuestionSet2.push({
          question: document.getElementsByClassName("myQuestions")[1].innerText,
          enteredAnswer: enteredAnswer,
          actualAnswer: eval(
            document.getElementsByClassName("myQuestions")[1].innerText
          ),
          answerStatus: status,
        });
      } else {
        arrayOfQuestionSet2.push({
          question: document.getElementsByClassName("myQuestions")[0].innerText,
          enteredAnswer: enteredAnswer,
          actualAnswer: eval(
            document.getElementsByClassName("myQuestions")[0].innerText
          ),
          answerStatus: status,
        });
      }
    }
    setQueNumber((prev) => ++prev);
    if (status) setScore((prev) => ++prev);
  };

  const submitQuestionHandler = () => {
    isSubmit(true);
    setTriggeredResult(cls);
  };

  return (
    <div>
      {/* {console.log("here first")} */}
      {!submit && (
        <div>
          <label id="questionNumber">
            Question <span>{queNumber} : </span>
            <span id="generatedQuetion" className="myQuestions">
              {Math.floor(Math.random() * 10)}
              {
                OPERATORS[
                  Math.round(Math.floor(Math.random() * 10) / OPERATORS.length)
                ]
              }
              {Math.floor(Math.random() * 10)}
            </span>
          </label>
          <span>
            <b>Time Left: </b>
            <Timer nextQue={nextQuestionHandler} />
          </span>
          <br></br>
          <label>Answer : </label>
          <input type="text" ref={inputRef}></input>
          {queNumber === 20 ? (
            <button onClick={submitQuestionHandler} className={cls}>Submit</button>
          ) : (
            <button onClick={nextQuestionHandler}>next</button>
          )}
          <p>Score: {score}/20</p>
        </div>
      )}
      {(submit && triggeredResult === "que1") && <Result result1={arrayOfQuestionSet1} totalScore={score} />}
      {(submit && triggeredResult === "que2") && <Result result2={arrayOfQuestionSet2} totalScore={score} />}
    </div>
  );
};

export default Questions;
