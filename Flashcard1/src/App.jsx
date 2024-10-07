import React, { useState } from "react";
import "./App.css"; // Link to your CSS file

// Flashcard Component
const Flashcard = ({ card, isFlipped, handleFlip }) => {
  return (
    <div className="flashcard">
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="front" onClick={handleFlip}>
          <p>{card.question}</p>
        </div>
        <div className="back" onClick={handleFlip}>
          <p>{card.answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main App Component
function FlashcardApp() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState(""); // User input for the answer
  const [feedback, setFeedback] = useState(""); // Feedback for the answer

  // Sample flashcards array (soccer-related questions)
  const flashcards = [
    { question: "Who won the FIFA World Cup in 2018?", answer: "France" },
    { question: "Which player has won the most Ballon d'Or awards?", answer: "Lionel Messi" },
    { question: "Which country has won the most FIFA World Cups?", answer: "Brazil" },
    { question: "Who is known as the 'King of Soccer'?", answer: "Pelé" },
    { question: "Which club has won the most UEFA Champions League titles?", answer: "Real Madrid" },
    { question: "Who scored the 'Hand of God' goal?", answer: "Diego Maradona" },
    { question: "Which player is known as 'CR7'?", answer: "Cristiano Ronaldo" },
    { question: "Which country hosted the first FIFA World Cup?", answer: "Uruguay" },
    { question: "Who is the all-time top scorer in the English Premier League?", answer: "Alan Shearer" },
    { question: "Which team is known as 'The Red Devils'?", answer: "Manchester United" },
  ];

  // Handle card flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Handle next button click
  const handleNextCard = () => {
    const newIndex = (currentIndex + 1) % flashcards.length; // Move to next card in sequence
    setCurrentIndex(newIndex);
    setIsFlipped(false); // Reset flip state when switching cards
    setUserAnswer(""); // Clear user input
    setFeedback(""); // Clear feedback
  };

  // Handle back button click
  const handlePrevCard = () => {
    const newIndex = (currentIndex - 1 + flashcards.length) % flashcards.length; // Move to previous card
    setCurrentIndex(newIndex);
    setIsFlipped(false);
    setUserAnswer(""); // Clear user input
    setFeedback(""); // Clear feedback
  };

  // Handle user input change
  const handleInputChange = (event) => {
    setUserAnswer(event.target.value);
  };

  // Handle submit button click
  const handleSubmitAnswer = () => {
    if (userAnswer.trim().toLowerCase() === flashcards[currentIndex].answer.toLowerCase()) {
      setFeedback("Correct!");
    } else {
      setFeedback("Incorrect. Try again!");
    }
  };

  return (
    <div className="app">
      <h1>Welcome to the Soccer Flashcard App</h1>
      <p className="description">Test your soccer knowledge here!</p>
      <p className="description">Total Cards: {flashcards.length}</p>
      
      <Flashcard
        card={flashcards[currentIndex]}
        isFlipped={isFlipped}
        handleFlip={handleFlip}
      />

      {/* User input for guessing the answer */}
      <input 
        type="text" 
        placeholder="Your answer..." 
        value={userAnswer} 
        onChange={handleInputChange} 
      />
      <button onClick={handleSubmitAnswer}>Submit</button>

      {/* Display feedback on whether the answer was correct */}
      {feedback && <p className="feedback">{feedback}</p>}

      {/* Navigation buttons */}
      <button onClick={handlePrevCard}>Previous Card</button>
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

export default FlashcardApp;
