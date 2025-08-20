import Button from './Button'

function Question({ id, text, buttons, handleClick, numberOfQuestions }) {

  return (
    <div className="Question">
      <div className="Question__header">
        <h4>{text}</h4>
      </div>
      <div className="Question__buttons">
        {buttons.map((button, i) => (
          <Button key={i} onClick={() => handleClick(button.attributes)}>{button.name}</Button>
        ))}
      </div>
    </div>
  )
}

export default Question;
