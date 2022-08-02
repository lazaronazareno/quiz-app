import React, { useEffect, useState } from 'react';
import QuestionForm from '../questionForm';
import { questions } from '../questions';

const Game = () => {
  const [questionsList, setQuestionsList] = useState(questions)

  useEffect(() => {
    let shuffled = questionsList.map(value => ({ value, sort: Math.random() }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(({ value }) => value)
    let newList = shuffled.slice(0,10)
    setQuestionsList(newList)
  },[])

  return (
    <div>
      {questionsList.map((q, index) => (
        <QuestionForm qa={q} key={index} />
      ))}
    </div>
  );
};

export default Game;