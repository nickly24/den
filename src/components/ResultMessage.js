import React from 'react';

const ResultMessage = ({ isCorrect }) => {
    return (
        <div>
        {isCorrect ? <p>Правильно!</p> : <p>Неправильно, Вы грязный обоссыш!</p>}
    </div>
    );
};

export default ResultMessage;