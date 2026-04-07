import { useState, useEffect, useRef, createRef } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import Header from './Header';
import Question from './Question';
import Start from './Start';
import End from './End';
import Stars from './Stars';
import AudioPlayer from './AudioPlayer';
import Intermezzo from './Intermezzo';

import { shuffle } from '../js/helpers';
import { addMediumTwinkle, addFastTwinkle, addMultiColor, turnLedOff } from '../js/led';
import { filterProducts } from '../js/filterProducts';
import { checkAudioFile } from '../js/checkAudioFile';
import { getQuestions } from '../js/getQuestions';

import { NUM_OF_Q } from '../config/settings';

function WishingWell({ allProducts }) {
  const [started, setStarted] = useState(false);
  const [intermezzoStarted, setIntermezzoStarted] = useState(false);
  const [ended, setEnded] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentQuestionId, setCurrentQuestionId] = useState(1);
  const [wish, setWish] = useState({});
  const [questions, setQuestions] = useState([]);

  //console.log('all products: ', allProducts);

  // ---- Transition refs per "scherm" (start/end/question)
  const nodeRefs = useRef(new Map());
  const getNodeRef = (key) => {
    if (!nodeRefs.current.has(key)) {
      nodeRefs.current.set(key, createRef());
    }
    return nodeRefs.current.get(key);
  };

  // ---- Einde bepaald door aantal vragen
  useEffect(() => {
    if (currentQuestionId > NUM_OF_Q) {
      setEnded(true);
      getWish();
    }
  }, [currentQuestionId]);

  // ---- Products met audio filteren + shufflen
  useEffect(() => {
    // console.log('allProducts in useEffect: ', allProducts);
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

  // ---- LED side effects netjes via effects i.p.v. in render
  useEffect(() => {
    if (!started) {
      turnLedOff();
    }
  }, [started]);

  useEffect(() => {
    if (ended) {
      addFastTwinkle();
    }
  }, [ended]);

  // ---- Transition key verandert automatisch bij state-wissel
  const transitionKey = !started ? 'start' : ended ? 'end' : `q-${currentQuestionId}`;
  const nodeRef = getNodeRef(transitionKey);

  return (
    <>
      <Header current={currentQuestionId} total={NUM_OF_Q} showProgress={started && !ended} />

      <div className="content">
        <Stars />
        <Intermezzo run={!started && intermezzoStarted} />
        <SwitchTransition mode="out-in">
          <CSSTransition
            key={transitionKey}
            nodeRef={nodeRef}
            classNames="fade"
            timeout={300}
            appear
            unmountOnExit
          >
            <div ref={nodeRef}>
              {renderContent()}
            </div>
          </CSSTransition>
        </SwitchTransition>

      </div>

      <AudioPlayer
        audioSrc="/audio/music.mp3"
        play={started}
        volume={0.5}
        loop={true}
        startFrom={60.7}
        lowerVolume={ended}
      />
    </>
  );

  function renderContent() {
    if (!started) {
      if (intermezzoStarted) {
        return <Start handleClick={handleStartClick} content='Start' />; 
      } else {
        return <Start handleClick={handleIntermezzoClick} content='Intermezzo' />; 
      }
    }
    if (ended) {
      return <End wish={wish} handleClick={handleEndClick} />;
    }
    return questions
      .filter((question) => question.id === currentQuestionId)
      .map((question) => (
        <Question
          key={question.id}
          {...question}
          handleClick={handleAnswerClick}
        />
      ));
  }

  function getWish() {
    if (products.length > 0) {
      setWish(products[Math.floor(Math.random() * products.length)]);
    } else {
      setWish(false);
    }
  }

  function handleAnswerClick(answer) {
    const filteredProducts = filterProducts(products, answer);
    setProducts(filteredProducts);
    setCurrentQuestionId((id) => id + 1);
  }

  function handleStartClick() {
    setStarted(true);
    setQuestions(getQuestions());
    addMediumTwinkle();
  }

  function handleIntermezzoClick() {
    setIntermezzoStarted(true);
  }

  function handleEndClick() {
    window.location.reload();
  }
}

export default WishingWell;
