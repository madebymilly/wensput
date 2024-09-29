import { useState, useEffect } from 'react'
import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/get-products';

import { getRandomItems, shuffle } from '../js/helpers'

import { allQuestions } from '../data/questions'

function Products() {
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  console.log(data.products.nodes)

  return data.products.nodes.map(({ id, name, type, allPaLeeftijd }) => (
    <div key={id} style={{ padding: '20px', border: '2px solid red' }}>
      <h3>{name} | {type}</h3>
      <p>Leeftijd: {allPaLeeftijd.nodes[0].name}</p>
      <p>Thema's:</p>
    </div>
  ));
}

function WishingWell() {

  const settings = { numberOfQuestions: 6 }

  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState(false)
  const [end, setEnd] = useState(false)
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

  useEffect(() => {
    if (currentQuestionId > settings.numberOfQuestions) {
      setEnd(true)
    }
  }, [currentQuestionId]);

  return (
    <div className="Wishingwell">
      {start
        ? end
          ? <End />
          : questions.filter(question => question.id === currentQuestionId).map((question, i) =>
              <Question key={i} id={i} {...question} handleClick={handleAnswerClick} numberOfQuestions={questions.length} />
          )

        : <Start handleClick={handleStartClick} />
      }
      <AudioPlayer audioSrc="/audio/bg.mp3" play={start} volume={0.5} />
      <h2>All product names:</h2>
      <Products />
    </div>
  )
}

export default WishingWell;
