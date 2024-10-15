const AudioList = () => {

  const audio = require.context('../../public/audio', true);

  return (
    <>
      <h2>Audio files:</h2>
      <ul>
      {audio.keys().map((file, i) => (
        <li key={i}>{file.substring(2)}</li>
      ))}
      </ul>
    </>
  );
}

export default AudioList;
