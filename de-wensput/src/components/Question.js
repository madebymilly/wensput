import Button from './Button'

function Question({ id, text, button1, button2, category, attribute, condition, handleClick, numberOfQuestions }) {

  return (
    <div className="Question">
      <h1>{text}</h1>
      <h2>Vraag {id} van {numberOfQuestions}</h2>
      <Button onClick={() => handleClick(true, category, attribute, condition )}>{button1}</Button>
      <Button onClick={() => handleClick(false)}>{button2}</Button>
    </div>
  )
}

export default Question;
