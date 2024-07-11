import Question from './Question'
import Wish from './Wish'

import { questions } from '../data/questions'

function WishingWell() {

  function handleAnswerClick(e) {
    console.log(e.target, 'click')
  }

  return (
    <>
      {questions.map(question =>
        <Question key={question.id} {...question} handleClick={handleAnswerClick}  />
      )}
      {/* <Wish /> */}
    </>
  )
}

export default WishingWell;
