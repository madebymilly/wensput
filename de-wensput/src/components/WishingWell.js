import { useState, useEffect } from 'react'

import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'
import Test from './test-components/Test'

import { shuffle } from '../js/helpers'
import { filterProducts } from '../js/filterProducts'
import { checkAudioFile } from '../js/checkAudioFile'
import { getQuestions } from '../js/getQuestions'

import { APP_NAME, NUM_OF_Q } from '../config/settings';

function WishingWell({ allProducts }) {

  const [started, setStarted] = useState(false)
  const [ended, setEnded] = useState(false)
  const [products, setProducts] = useState([])
  const [currentQuestionId, setCurrentQuestionId] = useState(1)
  const [wish, setWish] = useState({})
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    if (currentQuestionId > NUM_OF_Q) {
      setEnded(true)
      getWish()
    }
  }, [currentQuestionId]);

  useEffect(() => {
    console.log('useEffect');
    const filterProductsWithAudio = async () => {
      const newProducts = await Promise.all(
        allProducts.map(async (product) => {
          const audioFileExists = await checkAudioFile(product.slug);
          return audioFileExists ? product : null;
        })
      );

      const shuffledProducts = shuffle(newProducts.filter(Boolean));

      setProducts(shuffledProducts);
    };
    filterProductsWithAudio();
  }, [allProducts]);

  return (
    <div className="Wishingwell">
      {renderContent()}
      <AudioPlayer audioSrc="/audio/bg.mp3" play={started} volume={0.3} loop={true} />
      {/* <Test products={products} /> */}
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

    console.log(answer)

  }

  function handleStartClick() {
    setStarted(true)
    setQuestions(getQuestions())

    console.log(products)
  }

  function handleEndClick() {
    window.location.reload();
  }
}

export default WishingWell;
