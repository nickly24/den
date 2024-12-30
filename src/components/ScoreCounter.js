import React from 'react';

const ScoreCounter = ({ correct, incorrect }) => {
    return (
      <div>
          <p>Баллы репутации: {correct}</p>
          <p>Баллы обоссывания трусов: {incorrect}</p>
      </div>
    );
};

export default ScoreCounter;