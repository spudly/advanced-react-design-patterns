import React, {createRef} from 'react';
import {render} from 'react-dom';
import formatTime from '../utils/formatTime';
import {PlayIcon, StopIcon, PauseIcon} from '../widgets/MediaIcons';

// start
class MediaPlayer extends React.Component {
  audioRef = createRef(null);
  state = {isPlaying: false, elapsed: 0, duration: 0};

  render() {
    const {
      props: {children, ...otherProps},
      state: {isPlaying, elapsed, duration},
    } = this;
    return children({
      ...otherProps,
      isPlaying,
      elapsed,
      duration,
      stop: () => {
        this.audioRef.current.pause();
        this.audioRef.current.currentTime = 0;
      },
      play: () => this.audioRef.current.play(),
      pause: () => this.audioRef.current.pause(),
      seek: time => (this.audioRef.current.currentTime = time),
      ref: this.audioRef,
      onDurationChange: () =>
        this.setState({duration: this.audioRef.current.duration}),
      onEnded: () => this.setState({isPlaying: false, elapsed: 0}),
      onPause: () => this.setState({isPlaying: false}),
      onPlay: () => this.setState({isPlaying: true}),
      onTimeUpdate: () =>
        this.setState({elapsed: this.audioRef.current.currentTime}),
    });
  }
}

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

const AudioPlayer = props => (
  <MediaPlayer {...props}>
    {({
      isPlaying,
      elapsed,
      duration,
      stop,
      play,
      pause,
      seek,
      ...mediaProps
    }) => (
      <div className="audio-player">
        <audio {...mediaProps} />
        <MediaControls
          isPlaying={isPlaying}
          elapsed={elapsed}
          duration={duration}
          stop={stop}
          play={play}
          pause={pause}
          seek={seek}
        />
      </div>
    )}
  </MediaPlayer>
);

render(
  <>
    <AudioPlayer src="/audio/walking-on-the-sun.mp3" />
  </>
);
