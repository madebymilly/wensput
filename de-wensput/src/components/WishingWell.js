import { useState, useEffect } from 'react'

import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'

import Test from './test-components/Test'

import { getRandomItems } from '../js/helpers'
import { filterProducts } from '../js/filterProducts'

import useGetProducts from '../hooks/useGetProducts';
import useGetQuestions from '../hooks/useGetQuestions';

import { APP_NAME, NUM_OF_Q } from '../config/settings';

function WishingWell() {

  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [answers, setAnswers] = useState({})
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [wish, setWish] = useState({})

  useEffect(() => {
    if (currentQuestionId > NUM_OF_Q) {
      setEnded(true)
      getWish()
    }
  }, [currentQuestionId]);


  //const products = useGetProducts();
  const { loading, error, products } = useGetProducts();
  const questions = useGetQuestions();

  if (loading) {
      return <p>Loading...</p>; // Show a loading message or spinner
  }

  if (error) {
      return <p>Error: {error.message}</p>; // Show an error message
  }

  if (products.length === 0) {
      return <p>No products found.</p>; // Handle empty product list
  }

  return (
    <div className="Wishingwell">
      <h1>{APP_NAME}</h1>
      {renderContent()}
      <AudioPlayer audioSrc="/audio/bg.mp3" play={started} volume={0.5} loop={true} />
      <Test products={products} />
    </div>
  )

  function renderContent() {
    if (!started) {
      return <Start handleClick={handleStartClick} />;
    }
    if (ended) {
      return <End wish={wish} />;
    }
    return questions
      .filter(question => question.id === currentQuestionId)
      .map((question, i) => (
        <Question
          key={i}
          id={i}
          {...question}
          handleClick={handleAnswerClick}
          numberOfQuestions={questions.length}
        />
      ));
  };

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
    setStarted(true)
  }
}

export default WishingWell;
