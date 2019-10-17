/* eslint-disable no-unused-vars */
import React, {createRef} from 'react';
import {render} from 'react-dom';
import formatTime from '../utils/formatTime';
import {PlayIcon, StopIcon, PauseIcon} from '../widgets/MediaIcons';

// start
class AudioPlayerContainer extends React.Component {
  audioRef = createRef(null);
  state = {isPlaying: false, elapsed: 0, duration: 0};

  render() {
    const {
      props,
      state: {isPlaying, elapsed, duration},
    } = this;
    return (
      <div className="audio-player">
        <AudioPlayerControls
          {...props}
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
        <div>
          {formatTime(Math.round(elapsed))} / {formatTime(Math.round(duration))}
        </div>
        <div>
          <input
            type="range"
            min="0"
            max={Math.ceil(duration)}
            value={elapsed}
            onChange={e =>
              (this.audioRef.current.currentTime =
                e.currentTarget.valueAsNumber)
            }
          />
        </div>
      </div>
    );
  }
}

const AudioPlayerControls = ({
  audioRef,
  onDurationChange,
  onEnded,
  onPause,
  onPlay,
  onTimeUpdate,
  ...mediaProps
}) => (
  <audio
    {...mediaProps}
    ref={audioRef}
    onDurationChange={onDurationChange}
    onEnded={onEnded}
    onPause={onPause}
    onPlay={onPlay}
    onTimeUpdate={onTimeUpdate}
  />
);

render(<AudioPlayerContainer src="/audio/bittersweet-symphony.mp3" />);
