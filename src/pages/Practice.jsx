import React, { useState } from 'react';
import katakana from '../components/Practiceinfo'; // Import the default export directly

function Practice() {
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  // Function to get a random katakana character
  const getRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * katakana.length);
    setCurrentCharacter(katakana[randomIndex]);
    setShowAnswer(false); // Reset answer visibility when new character appears
  };

  // Function to handle correct answer
  const handleCorrectAnswer = () => {
    setScore(score + 1);
    getRandomCharacter(); // Get a new character after correct answer
  };

  // Function to handle incorrect answer
  const handleIncorrectAnswer = () => {
    setScore(score > 0 ? score - 1 : 0); // Decrease score but not below 0
    setShowAnswer(true); // Show the correct answer
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-base-200">
      <h2 className="text-3xl font-bold">Practice Writing and Recognition</h2>
      <p className="py-6 text-lg">Test your skills with tracing, flashcards, and more!</p>

      {/* Button to start practicing and show a random character */}
      <button
        className="btn btn-primary mb-4"
        onClick={getRandomCharacter}
      >
        Start Practicing
      </button>

      {/* Display random character to recognize */}
      {currentCharacter && (
        <div className="text-center">
          <div className="text-6xl font-bold mb-4">{currentCharacter.character}</div>
          <p className="text-lg">What is the pronunciation?</p>
          <div className="flex space-x-4 mt-4">
            {/* Answer buttons */}
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (currentCharacter.pronunciation === 'a') {
                  handleCorrectAnswer();
                } else {
                  handleIncorrectAnswer();
                }
              }}
            >
              A
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (currentCharacter.pronunciation === 'i') {
                  handleCorrectAnswer();
                } else {
                  handleIncorrectAnswer();
                }
              }}
            >
              I
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => {
                if (currentCharacter.pronunciation === 'u') {
                  handleCorrectAnswer();
                } else {
                  handleIncorrectAnswer();
                }
              }}
            >
              U
            </button>
          </div>

          {/* Show the correct answer if the user was incorrect */}
          {showAnswer && (
            <div className="mt-4 text-lg font-semibold text-red-600">
              Correct answer: {currentCharacter.pronunciation}
            </div>
          )}
        </div>
      )}

      {/* Display the current score */}
      <div className="mt-6 text-xl">
        <p>Score: {score}</p>
      </div>
    </div>
  );
}

export default Practice;