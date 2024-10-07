import AudioPlayer from './AudioPlayer'

function End({ wish }) {

  return (
    <div className="End">
		<h2>Jouw wens:</h2>
      {wish ? <h1>{wish[0].name}</h1> : <p>Geen spel gevonden</p>}
      <AudioPlayer audioSrc="/audio/7-wonders-duel.mp3" play={true} volume={1} timeout={1000} />
    </div>
  )
}

export default End;
