import React from 'react';

const AnswerButton = ({ answer, onClick }) => {
  return (
    <button onClick={onClick}>
      {answer}
    </button>
  );
};

export default AnswerButton;