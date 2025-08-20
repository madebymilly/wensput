import { useState, useEffect } from 'react'

import Header from './Header'
import Question from './Question'
import Start from './Start'
import End from './End'
import AudioPlayer from './AudioPlayer'

// import Test from './test-components/Test'

import { shuffle } from '../js/helpers'
import { addMediumTwinkle, addFastTwinkle, addMultiColor, turnLedOff } from '../js/led'
import { filterProducts } from '../js/filterProducts'
import { checkAudioFile } from '../js/checkAudioFile'
import { getQuestions } from '../js/getQuestions'

import { NUM_OF_Q } from '../config/settings';

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
    <>
      <Header current={currentQuestionId} total={NUM_OF_Q} showProgress={started && !ended} />
      <div className="content">
        {renderContent()}
      </div>
      <AudioPlayer audioSrc="/audio/music.mp3" play={started} volume={0.4} loop={true} startFrom={60.7} lowerVolume={ended} />
      {/* <Test products={products} /> */}
    </>
  )

  function renderContent() {
    if (!started) {
      // turn off leds:
      turnLedOff();
      return <Start handleClick={handleStartClick} />;
    }
    if (ended) {
      //addFastTwinkle()
      addMultiColor() // this is just for testing to see a bigger difference in leds
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

    addMediumTwinkle()

    console.log(products)
  }

  function handleEndClick() {
    window.location.reload();
  }
}

export default WishingWell;
