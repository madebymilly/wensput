import AudioList from './AudioList'
import Button from './Button'
import Led from './Led'

function Start({ handleClick }) {

  return (
    <div className="Start">
      <h1>Klaar voor wat spelletjes-magie?</h1>
      <Button onClick={handleClick}>Start</Button>
      <Led />
      <AudioList />
    </div>
  )
}

export default Start;
