import Button from './Button'

function Question(props) {
  const { id, text, button1, button2, category, attribute, condition, handleClick  } = props

  return (
    <div className="Question">
      <h2>{text}</h2>
      <Button onClick={() => handleClick(true, category, attribute, condition )}>{button1}</Button>
      <Button onClick={() => handleClick(false)}>{button2}</Button>
    </div>
  )
}

export default Question;
