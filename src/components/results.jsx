import { useState } from "react";
import WrongAnswers from "./wrong";

export default function Results({ Qbank, userAnswers, setCurrentQuestion, setQuizComplete, setUserAnswers, initialAnswers}){
  
  function getScore(){
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer == Qbank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  }

  const [seeAnswers,setSeeAnswers] = useState(false);

  function seeCorrect(){
    setSeeAnswers(prev => !prev);
  }

  function restartQuiz(){
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setQuizComplete(false);
  }

  const score = getScore()

  return(<div>
    <h1>Quiz Results</h1>
    <p>Your Score is: {score}/{Qbank.length}</p>
    <button className="restart-button" onClick={restartQuiz}>Restart Quiz</button>
    <button className="restart-button" onClick={seeCorrect}>See Correct Answers</button>
    {seeAnswers ? <WrongAnswers userAnswers={userAnswers} Qbank={Qbank}/> : null}
  </div>);
}