import React, {useRef, useState} from 'react';
import {render} from 'react-dom';
import formatTime from '../utils/formatTime';
import {PlayIcon, StopIcon, PauseIcon} from '../widgets/MediaIcons';

// start
const useMediaPlayer = props => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  return {
    isPlaying,
    elapsed,
    duration,
    stop: () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    },
    play: () => audioRef.current.play(),
    pause: () => audioRef.current.pause(),
    seek: time => (audioRef.current.currentTime = time),
    getMediaProps: () => ({
      ...props,
      ref: audioRef,
      onDurationChange: () => setDuration(audioRef.current.duration),
      onEnded: () => {
        setIsPlaying(false);
        setElapsed(0);
      },
      onPause: () => setIsPlaying(false),
      onPlay: () => setIsPlaying(true),
      onTimeUpdate: () => setElapsed(audioRef.current.currentTime),
    }),
  };
};

const MediaControls = ({
  isPlaying,
  elapsed,
  duration,
  stop,
  play,
  pause,
  seek,
}) => (
  <>
    <div>
      <button type="button" onClick={stop} disabled={!isPlaying}>
        <StopIcon />
      </button>
      <button type="button" onClick={play} disabled={isPlaying}>
        <PlayIcon />
      </button>
      <button type="button" onClick={pause} disabled={!isPlaying}>
        <PauseIcon />
      </button>
    </div>
    <div>
      {formatTime(Math.round(elapsed))} / {formatTime(Math.round(duration))}
    </div>
    <div>
      <input
        type="range"
        min="0"
        max={Math.ceil(duration)}
        value={elapsed}
        onChange={e => seek(e.currentTarget.valueAsNumber)}
      />
    </div>
  </>
);

const AudioPlayer = props => {
  const {getMediaProps, ...otherProps} = useMediaPlayer(props);
  return (
    <div className="audio-player">
      <audio {...getMediaProps()} />
      <MediaControls {...otherProps} />
    </div>
  );
};

const VideoPlayer = props => {
  const {getMediaProps, ...otherProps} = useMediaPlayer(props);
  return (
    <div className="video-player">
      <video {...getMediaProps()} />
      <MediaControls {...otherProps} />
    </div>
  );
};

render(
  <>
    <AudioPlayer src="/audio/freshprince.mp3" />
    <VideoPlayer src="/video/buddy-holly.mp4" />
  </>
);
