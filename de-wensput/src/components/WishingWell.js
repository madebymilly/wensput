import { useState } from 'react'
import Question from './Question'
// import Wish from './Wish'

import { questions } from '../data/questions'

function WishingWell() {

  const [answers, setAnswers] = useState([])
  const [activeQuestionId, setActiveQuestionId] = useState(4) // weet niet zeker of ik dit nodig heb in state, kan ik dit uitrekenen, dan niet!

  function handleAnswerClick(firstButton, category, attribute, condition) {
    // only first button (true) counts
    if (firstButton) {

      // If category:
      if (category) {
        setAnswers([
          ...answers,
          { category: category }
        ])

      // If attribute:
      } else if (attribute) {
        setAnswers([
          ...answers,
          { attribute: attribute, condition: condition }
        ])
      }

    }
    console.log(answers)
  }

  return (
    <div className="Wishingwell">
      <div>{answers.map((answer, i) => <div key={i}>{answer.category}</div>)}</div>
      {questions.map(question =>
        <Question key={question.id} {...question} handleClick={handleAnswerClick} />
      )}
    </div>
  )
}

export default WishingWell;
