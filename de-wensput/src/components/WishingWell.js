import { useState, useEffect } from 'react'

import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'

import Test from './test-components/Test'

import { getRandomItems } from '../js/helpers'
import { filterProducts } from '../js/filterProducts'

import { allQuestions } from '../data/questions'

import useGetProducts from '../hooks/useGetProducts';
import useGetQuestions from '../hooks/useGetQuestions';

function WishingWell() {

  const settings = { numberOfQuestions: 5 }

  const [start, setStart] = useState(false)
  const [end, setEnd] = useState(false)
  const [answers, setAnswers] = useState({})
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [wish, setWish] = useState({})

  useEffect(() => {
    if (currentQuestionId > settings.numberOfQuestions) {
      setEnd(true)
      getWish()
    }
  }, [currentQuestionId]);

  const products = useGetProducts();
  const questions = useGetQuestions(allQuestions, settings.numberOfQuestions);

  return (
    <div className="Wishingwell">
      {start
        ? end
          ? <End wish={wish} />
          : questions.filter(question => question.id === currentQuestionId).map((question, i) =>
              <Question key={i} id={i} {...question} handleClick={handleAnswerClick} numberOfQuestions={questions.length} />
          )

        : <Start handleClick={handleStartClick} />
      }

      <AudioPlayer audioSrc="/audio/bg.mp3" play={start} volume={0.5} loop={true} />

      <Test />
    </div>
  )

  function getWish() {

    console.log('all answers: ', answers)

    const filteredProducts = filterProducts(products, answers);

    if (filteredProducts.length === 0) {
      setWish(false);
    } else {
      setWish(getRandomItems(filteredProducts, 1));
    }
  }

  function handleAnswerClick(attributes) {

		setAnswers(prevState => {
			// Create a copy of the current state
			const newState = { ...prevState };

			// Iterate over the keys in attributes
			for (const key in attributes) {
          if (attributes.hasOwnProperty(key)) {
          // Check if the key already exists in the state
          if (newState[key]) {
            // Combine the arrays and remove duplicates
            newState[key] = [...new Set([...newState[key], ...attributes[key]])];
          } else {
            // Add the new key-value pair
            newState[key] = attributes[key];
          }
        }
      }

      return newState;
    });

    // Go to next question
    setCurrentQuestionId(currentQuestionId + 1);
  }

  function handleStartClick() {
    setStart(true)
  }
}

export default WishingWell;
