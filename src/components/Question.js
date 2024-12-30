import React from 'react';
import AnswerButton from './AnswerButton';

const Question = ({ question, answers, onAnswer }) => {
  return (
    <div>
      <h2>{question}</h2>
      <div>
        {answers.map((answer, index) => (
          <AnswerButton key={index} answer={answer} onClick={() => onAnswer(answer)} />
        ))}
      </div>
    </div>
  );
};

export default Question;