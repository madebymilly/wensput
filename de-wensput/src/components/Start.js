import AudioList from './AudioList'
import Button from './Button'
import Led from './Led'
import TestServer from './TestServer';

function Start({ handleClick }) {

  return (
    <div className="Start">
      <h1>Klaar voor wat spelletjes-magie?</h1>
      <Button onClick={handleClick}>Start</Button>
      {/* <Led /> */}
      <TestServer />
      <AudioList />
    </div>
  )
}

export default Start;
