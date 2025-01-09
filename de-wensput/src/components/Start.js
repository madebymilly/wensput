import Button from './Button'

function Start({ handleClick, handleClickLed }) {

  return (
    <div className="Start">
      <h1>Ik wens....</h1>
      <h2>Gooi een muntje in de wensput door op de knop hieronder te drukken</h2>
      <Button onClick={handleClick}>START</Button>
    </div>
  )
}

export default Start;
