import Button from './Button'

function Start({ handleClick, handleClickLed }) {

  return (
    <div className="Start">
      <h1>Klaar voor wat spelletjes-magie?</h1>
      <Button onClick={handleClick}>Start</Button>
    </div>
  )
}

export default Start;
