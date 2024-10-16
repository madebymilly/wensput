import Button from './Button'

function Question({ id, text, button1, button2, button3, handleClick, numberOfQuestions }) {

  return (
    <div className="Question">
      <h2>Vraag {id} van {numberOfQuestions}</h2>
      <h1>{text}</h1>

      <Button onClick={() => handleClick(button1.attributes)}>{button1.name}</Button>
      <Button onClick={() => handleClick(button2.attributes)}>{button2.name}</Button>
		{button3 && <Button onClick={() => handleClick(button3.attributes)}>{button3.name}</Button>}
    </div>
  )
}

export default Question;
