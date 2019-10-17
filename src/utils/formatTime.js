const formatTime = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const paddedSeconds = `${seconds < 10 ? '0' : ''}${seconds}`;
  return `${minutes}:${paddedSeconds}`;
};

export default formatTime;
