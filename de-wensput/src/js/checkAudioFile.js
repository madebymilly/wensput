export const checkAudioFile = async (slug) => {
  const response = await fetch(`/audio/games/${slug}.mp3`);
  if (response.ok && response.headers.get('Content-Type') === 'audio/mpeg') {
    return true;
  } else {
    return false;
  }
};
