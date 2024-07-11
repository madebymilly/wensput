import Button from './Button'

function Question(props) {
  const { id, text, button1, button2, handleClick } = props

  return (
    <div className="question">
      <h2>{text}</h2>
      <Button onClick={handleClick}>{button1}</Button>
      <Button onClick={handleClick}>{button2}</Button>
    </div>
  )
}

export default Question;
