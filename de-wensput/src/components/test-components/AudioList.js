const AudioList = () => {

  const audio = require.context('../../../public/audio/games', true);

  return (
    <div className="AudioList">
      <ul style={{listStyle: 'none'}}>
      {audio.keys().map((file, i) => (
        <li key={i}>{file.substring(2)}</li>
      ))}
      </ul>
    </div>
  );
}

export default AudioList;
