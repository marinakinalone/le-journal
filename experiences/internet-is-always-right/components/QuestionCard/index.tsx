import React from 'react'

interface IQuestionCard {
  question: string
  option1: string
  option2: string
}

const QuestionCard = ({ question, option1, option2 }: IQuestionCard) => {
  return (
    <div>
      <h1>{question}</h1>
      <div>
        <h2>{option1}</h2>
        <h2>{option2}</h2>
      </div>
    </div>
  )
}

export default QuestionCard
