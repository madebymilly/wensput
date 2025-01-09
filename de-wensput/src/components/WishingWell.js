import { useState, useEffect } from 'react'

import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'

import Test from './test-components/Test'

import { shuffle } from '../js/helpers'
import { filterProducts } from '../js/filterProducts'

import { APP_NAME, NUM_OF_Q } from '../config/settings';

function WishingWell({ allProducts, questions }) {

  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [products, setProducts] = useState([])
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [wish, setWish] = useState({})

  useEffect(() => {
    if (currentQuestionId > NUM_OF_Q) {
      setEnded(true)
      getWish()
    }
  }, [currentQuestionId]);

  useEffect(() => {
    // Shuffle and filter products on audio file:
    const newProducts = shuffle([...allProducts]).filter(product => {
      const audioFile = true; // TODO
      return audioFile;
    });
    setProducts(newProducts);
  }, [allProducts]);


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
      return <End wish={wish} handleClick={handleEndClick} />;
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
    if (products.length > 0) {
      setWish(products[0]); // Get the first item of products, because is sorted and shuffled
    } else {
      setWish(false);
    }
  }

  function handleAnswerClick(answer) {

    // Filter products based on answer:
    const filteredProducts = filterProducts(products, answer);

    // Set state of products:
    setProducts(filteredProducts);

    // Go to next question:
    setCurrentQuestionId(currentQuestionId + 1);

  }

  function handleStartClick() {
    setStarted(true)
  }

  function handleEndClick() {
    setStarted(false)
  }
}

export default WishingWell;
