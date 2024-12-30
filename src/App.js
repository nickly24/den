import React, { useState } from 'react';
import { quizData } from './data';
import Question from './components/Question';
import ScoreCounter from './components/ScoreCounter';
import ResultMessage from './components/ResultMessage';

function App() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [userAnswered, setUserAnswered] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false)
    const currentQuestion = quizData[currentQuestionIndex];



    const shuffleAnswers = () => {
        const allAnswers = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
        for (let i = allAnswers.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
        }
        return allAnswers;
    };

    const [shuffledAnswers, setShuffledAnswers] = useState(shuffleAnswers())

    const handleAnswer = (answer) => {
        if (userAnswered) {
            return;
        }
        setUserAnswered(true);
        if (answer === currentQuestion.correctAnswer) {
            setCorrectAnswers(correctAnswers + 1);
            setIsCorrect(true)
        } else {
            setIncorrectAnswers(incorrectAnswers + 1);
           setIsCorrect(false)
        }
    };

  const handleNextQuestion = () => {
      setUserAnswered(false);
        const nextIndex = (currentQuestionIndex + 1) % quizData.length;
        setCurrentQuestionIndex(nextIndex);
        setShuffledAnswers(shuffleAnswers());
    }


  return (
    <div className="App">
      <ScoreCounter correct={correctAnswers} incorrect={incorrectAnswers} />
      <Question
        question={currentQuestion.question}
        answers={shuffledAnswers}
        onAnswer={handleAnswer}
      />
        {userAnswered && <ResultMessage isCorrect={isCorrect} />}
      {userAnswered && <button onClick={handleNextQuestion}>Следующий вопрос</button>}
    </div>
  );
}

export default App;