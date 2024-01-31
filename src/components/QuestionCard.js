// src/components/QuestionCard.js
import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div>
      <h3>{question.category}</h3>
      <p>Question: {question.question}</p>
      <p>Answer: {question.answer}</p>
      {/* Add any additional styling or components as needed */}
    </div>
  );
};

export default QuestionCard;
