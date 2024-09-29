import AudioPlayer from './AudioPlayer'

function End() {

  return (
    <div className="End">
      <h1>This is the end!</h1>
      <p>Wij wensen jou ..... toe!</p>
      <AudioPlayer audioSrc="/audio/7-wonders-duel.mp3" play={true} volume={1} timeout={1000} />
    </div>
  )
}

export default End;
