import React, { useState } from 'react';

const questions = [
  {
    question: "What is the Hiragana character for 'a'?",
    options: ['あ', 'い', 'う', 'え'],
    answer: 'あ'
  },
  {
    question: "What is the Katakana character for 'ka'?",
    options: ['カ', 'ケ', 'キ', 'ク'],
    answer: 'カ'
  },
  {
    question: "What is the Hiragana character for 'ka'?",
    options: ['か', 'き', 'く', 'け'],
    answer: 'か'
  },
  {
    question: "What is the Katakana character for 'ko'?",
    options: ['コ', 'ケ', 'キ', 'ク'],
    answer: 'コ'
  }
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      {isQuizFinished ? (
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title">Quiz Finished!</h2>
            <p className="text-xl">Your Score: {score}/{questions.length}</p>
            <button 
              className="btn btn-primary mt-4"
              onClick={() => {
                setScore(0);
                setCurrentQuestion(0);
                setIsQuizFinished(false);
              }}
            >
              Retry Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="card w-96 bg-base-200 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">{questions[currentQuestion].question}</h2>
            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <label key={index} className="btn btn-ghost w-full">
                  <input 
                    type="radio" 
                    name="quiz" 
                    className="mr-2" 
                    checked={selectedOption === option} 
                    onChange={() => handleOptionChange(option)} 
                  />
                  {option}
                </label>
              ))}
            </div>
            <button 
              className="btn btn-primary mt-4 w-full"
              onClick={handleSubmitAnswer}
              disabled={!selectedOption}
            >
              {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Quiz;