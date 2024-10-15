import AudioList from './AudioList'
import Button from './Button'

function Start({ handleClick }) {

  return (
    <div className="Start">
      <h1>Klaar voor wat spelletjes-magie?</h1>
      <Button onClick={handleClick}>Start</Button>
      <AudioList />
    </div>
  )
}

export default Start;
