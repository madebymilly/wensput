import { useState, useEffect } from 'react'
import Question from './Question'
import Start from './Start'

import { getRandomItems, shuffle } from '../js/helpers'

import { allQuestions } from '../data/questions'


function WishingWell() {

  const settings = { numberOfQuestions: 6 }

  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState(false)
  const [answers, setAnswers] = useState([])
  const [currentQuestionId, setCurrentQuestionId] = useState(1)

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

    // Go to next question
    setCurrentQuestionId(currentQuestionId + 1)

    console.log(answers)
    console.log(questions)
  }

  function handleStartClick() {

    function getQuestions() {

      // Filter required questions:
      const requiredQuestions = allQuestions.filter(question => question.required)

      // Filter unrequired questions, get as many as settings.numberOfQuestions minus number of required questions:
      const randomQuestions = getRandomItems(allQuestions.filter(question => !question.required), settings.numberOfQuestions - requiredQuestions.length)

      // Combine required and unrequired questions + shuffle:
      const questions = requiredQuestions.concat(randomQuestions)

      // Give all questions an id
      questions.map((question, i) => question.id = i + 1)

      return questions
    }

    setQuestions(getQuestions())
    setStart(true)
  }

  return (
    <div className="Wishingwell">
      {start
        ? questions.filter(question => question.id === currentQuestionId).map((question, i) =>
          <Question key={i} id={i} {...question} handleClick={handleAnswerClick} numberOfQuestions={questions.length} />
        )
        : <Start handleClick={handleStartClick} />
      }
    </div>
  )
}

export default WishingWell;
