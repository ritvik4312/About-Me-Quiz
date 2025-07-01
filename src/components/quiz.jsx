import { useState } from "react";
import Results from "./results";
import { Qbank } from "./data";

export default function Quiz(){
  
const initialAnswers = [null,null,null];

const [userAnswers, setUserAnswers] = useState(initialAnswers);

const [currentQuestion, setCurrentQuestion] = useState(0);

const [quizComplete, setQuizComplete] = useState(false);

const selectedAnswer = userAnswers[currentQuestion];

function HandleSelectOption(option){
  const newUserAnswers = [...userAnswers];
  newUserAnswers[currentQuestion] = option;
  setUserAnswers(newUserAnswers)
}

function nextButton(){

  {currentQuestion === Qbank.length-1 ? setQuizComplete(true) : setCurrentQuestion(currentQuestion+1)}

}

function prevButton(){
  {currentQuestion != 0 ? setCurrentQuestion(currentQuestion - 1) : null}
}

  if (quizComplete) {
    return(<Results userAnswers={userAnswers} Qbank={Qbank} setUserAnswers={setUserAnswers} setCurrentQuestion={setCurrentQuestion} setQuizComplete={setQuizComplete} initialAnswers={initialAnswers}/>);
  }

  return(
    <>
    <div>
      <h2>Question {currentQuestion + 1}</h2>
      <p className="question">{Qbank[currentQuestion].question}</p>

        {Qbank[currentQuestion].option.map(option => (
          <button className={selectedAnswer === option ? "option selected" : "option"} onClick={() => HandleSelectOption(option)}>
            {option}
          </button>
        ))}

      <div className="nav-buttons">
          <button onClick = {prevButton} disabled={currentQuestion == 0}>Previous</button>
          <button onClick = {nextButton} disabled={!selectedAnswer}>
           {currentQuestion != Qbank.length-1 ? "Next" : "Finish Quiz"}
          </button>
      </div>

    </div>
    </>
  );
};