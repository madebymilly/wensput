import AudioPlayer from './AudioPlayer'

function End({ wish }) {

  return (
    <div className="End">
      <h1>This is the end!</h1>
      {wish ? <p>Wij wensen jou {wish[0].name} toe!</p> : <p>Geen spel gevonden...</p>}
      <AudioPlayer audioSrc="/audio/7-wonders-duel.mp3" play={true} volume={1} timeout={1000} />
    </div>
  )
}

export default End;
