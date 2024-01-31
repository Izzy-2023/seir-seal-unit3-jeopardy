
import React, { useState } from 'react';
import '../index.css';
import fetchTriviaForCategory from '../utils/fetchTriviaForCategory';

const categories = ['music', 'sciencenature', 'history', 'artliterature', 'language', 'general', 'fooddrink', 'peopleplaces', 'geography', 'historyholidays', 'entertainment', 'toysgames', 'mathematics',
'religionmythology', 'sportsleisure'];

const GameBoard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    fetchTriviaForCategory(category)
      .then((triviaData) => {
        console.log('Full trivia data:', triviaData);

        const firstQuestion = triviaData[0];

        if (firstQuestion) {
          setSelectedCategory({ category, question: firstQuestion, isAnswerVisible: false });
        } else {
          console.error(`No results for ${category}`);
        }
      })
      .catch((error) => {
        console.error(`Error fetching trivia for ${category}:`, error);
      });
  };

  return (
    <div>
      <h1>Trivia Game</h1>
      <div className="button-container">
        {categories.map((category) => (
          <div key={category} onClick={() => handleCategoryClick(category)}>
            {category}
          </div>
        ))}
      </div>
      {selectedCategory && (
        <div>
          <h2>{selectedCategory.category}</h2>
          <div>
            {!selectedCategory.isAnswerVisible && selectedCategory.question
              ? selectedCategory.question.question
              : 'Click to reveal question'}
          </div>
          {!selectedCategory.isAnswerVisible && (
            <div><br></br>
              <button onClick={() => setSelectedCategory({ ...selectedCategory, isAnswerVisible: true })}>
                Reveal Answer
              </button>
            </div>
          )}
          {selectedCategory.isAnswerVisible && (
            <div>
              <p>Answer: {selectedCategory.question.answer}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GameBoard;
