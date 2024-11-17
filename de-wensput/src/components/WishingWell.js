import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { GET_PRODUCTS } from '../queries/get-products';

import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'
import Products from './Products'

import { getRandomItems } from '../js/helpers'

import { allQuestions } from '../data/questions'
import LedController from './LedController';

function WishingWell() {

  const settings = { numberOfQuestions: 5 }

  const [start, setStart] = useState(false)
  const [questions, setQuestions] = useState(false)
  const [end, setEnd] = useState(false)
  const [answers, setAnswers] = useState({})
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [wish, setWish] = useState({})


  useEffect(() => {
    console.log('all Questions: ', allQuestions)
  }, [allQuestions]);

  useEffect(() => {
    if (currentQuestionId > settings.numberOfQuestions) {
      setEnd(true)
      getWish()
    }
  }, [currentQuestionId]);

  // Get (in stock) products or show loading or error message
  const { loading, error, data } = useQuery(GET_PRODUCTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data.products.nodes;

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
      <LedController />

      {/* <div className="test">
         <Products />
      </div> */}

    </div>
  )

  function getWish() {

    console.log('all answers: ', answers)

    // Filter on products
    const filteredProducts = products.filter(product => {

      // TODO: ook checken of audio file beschikbaar is!!!
      const hasAudio = product.metaData && product.metaData[0].value; // Controleer of er audio in metaData is
      if (!hasAudio) return false; // Als er geen audio is, stop dan meteen met filteren

      const ageFilter = answers.age && product.allPaLeeftijd.nodes.find(node => parseInt(node.slug) >= answers.age);
      const playersFilter = answers.players && product.allPaMinAantalSpelers.nodes.find(node => parseInt(node.slug) >= answers.players);
      const categoryFilter = answers.category && product.productCategories.nodes.some(node => node.slug === answers.category); // TODO: zijn er meer vragen met category?
      const themaFilter = answers.theme && product.allPaThema.nodes.some(node => node.slug === answers.theme);
      const tagFilter = answers.tag && product.productTags.nodes.some(node => node.slug === answers.tag);
		  const durationFilter = answers.duration.some(item =>
        product.allPaSpeelduur.nodes.some(obj => obj.name === item)
      );

      return ageFilter !== undefined && playersFilter !== undefined && categoryFilter && themaFilter && tagFilter && durationFilter;
    });


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
}

export default WishingWell;
