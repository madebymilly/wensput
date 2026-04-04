// export const checkAudioFile = async (slug) => {
//   const response = await fetch(`/audio/games/${slug}.mp3`);
//   if (response.ok && response.headers.get('Content-Type') === 'audio/mpeg') {
//     return true;
//   } else {
//     return false;
//   }
// };

export const checkAudioFile = async (slug) => {
  try {
    const response = await fetch(`/audio/games/${slug}.mp3`, {
      method: 'HEAD',
    });
    //console.log(`Checked audio for ${slug}:`, response.ok);
    return response.ok;
  } catch (error) {
    return false;
  }
};
