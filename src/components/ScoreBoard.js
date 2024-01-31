// src/components/ScoreBoard.js
import React from 'react';

const ScoreBoard = ({ scores }) => {
  return (
    <div>
      <h2>Score Board</h2>
      <ul>
        {scores.map((score, index) => (
          <li key={index}>{`${score.player}: ${score.points} points`}</li>
        ))}
      </ul>
      {/* Add any additional styling or components as needed */}
    </div>
  );
};

export default ScoreBoard;


