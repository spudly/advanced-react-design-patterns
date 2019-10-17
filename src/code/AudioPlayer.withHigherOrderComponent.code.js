import React, {createRef} from 'react';
import {render} from 'react-dom';
import formatTime from '../utils/formatTime';
import {PlayIcon, StopIcon, PauseIcon} from '../widgets/MediaIcons';

// start
const mediaPlayer = MediaControls =>
  class extends React.Component {
    static displayName = `mediaPlayer(${MediaControls.displayName ||
      MediaControls.name})`;
    audioRef = createRef(null);
    state = {isPlaying: false, elapsed: 0, duration: 0};

    render() {
      const {
        props,
        state: {isPlaying, elapsed, duration},
      } = this;
      return (
        <MediaControls
          {...props}
          isPlaying={isPlaying}
          elapsed={elapsed}
          duration={duration}
          stop={() => {
            this.audioRef.current.pause();
            this.audioRef.current.currentTime = 0;
          }}
          play={() => this.audioRef.current.play()}
          pause={() => this.audioRef.current.pause()}
          seek={time => (this.audioRef.current.currentTime = time)}
          audioRef={this.audioRef}
          onDurationChange={() =>
            this.setState({duration: this.audioRef.current.duration})
          }
          onEnded={() => this.setState({isPlaying: false, elapsed: 0})}
          onPause={() => this.setState({isPlaying: false})}
          onPlay={() => this.setState({isPlaying: true})}
          onTimeUpdate={() =>
            this.setState({elapsed: this.audioRef.current.currentTime})
          }
        />
      );
    }
  };

const AudioPlayerControls = ({
  isPlaying,
  elapsed,
  duration,
  stop,
  play,
  pause,
  seek,
  audioRef,
  onDurationChange,
  onEnded,
  onPause,
  onPlay,
  onTimeUpdate,
  ...mediaProps
}) => (
  <div className="audio-player">
    <audio
      {...mediaProps}
      ref={audioRef}
      onDurationChange={onDurationChange}
      onEnded={onEnded}
      onPause={onPause}
      onPlay={onPlay}
      onTimeUpdate={onTimeUpdate}
    />
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
  </div>
);

const AudioPlayer = mediaPlayer(AudioPlayerControls);

render(<AudioPlayer src="/audio/im-gonna-be.mp3" />);
