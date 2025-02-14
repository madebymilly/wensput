import Button from './Button'

function Question({ id, text, buttons, handleClick, numberOfQuestions }) {

  return (
    <div className="Question">
      <h2>Vraag {id} van {numberOfQuestions}</h2>
      <h1>{text}</h1>
      <div className="Question__buttons">
        {buttons.map((button, i) => (
          <Button key={i} onClick={() => handleClick(button.attributes)}>{button.name}</Button>
        ))}
      </div>
    </div>
  )
}

export default Question;
