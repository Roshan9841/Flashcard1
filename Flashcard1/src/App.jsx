import React, { useState } from "react";
import "./App.css"; // Link to your CSS file

// Flashcard Component
const Flashcard = ({ card, isFlipped, handleFlip }) => {
  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`flashcard-inner ${isFlipped ? 'flipped' : ''}`}>
        <div className="front">
          <p>{card.question}</p>
        </div>
        <div className="back">
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

  // Handle next button click (randomly selects a new card)
  const handleNextCard = () => {
    const newIndex = Math.floor(Math.random() * flashcards.length);
    setCurrentIndex(newIndex);
    setIsFlipped(false); // Reset flip state when switching cards
  };

  return (
    <div className="app">
      <h1>Welcome to the Soccer Flashcard App</h1>
      <p className="description">How good of a soccer fan are you? Test all of your soccer knowledge here!</p>
      <p className="description">Number of cards: {flashcards.length}</p>
      <Flashcard
        card={flashcards[currentIndex]}
        isFlipped={isFlipped}
        handleFlip={handleFlip}
      />
      <button onClick={handleNextCard}>Next Card</button>
    </div>
  );
}

export default FlashcardApp;