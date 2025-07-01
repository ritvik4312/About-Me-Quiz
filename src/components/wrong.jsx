export default function WrongAnswers( {userAnswers, Qbank}){
  return(
    <div>
      {userAnswers.map((answer,index) => {
        if (answer != Qbank[index].answer){
          return(
              <div>
                <p className="answer">your answer: {answer}</p>
                <p className="correct">right answer: {Qbank[index].answer}</p>
              </div>
          )
        }else{
          return(<div><p>{Qbank[index].question} {answer}</p></div>);
        }
      })}
    </div>
  );
}