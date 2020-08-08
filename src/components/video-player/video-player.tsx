import * as React from 'react';
import history from '../../history';
import {formatTimeWithSeconds} from '../../utils/funcs';


const renderPauseSVG = () => (
  <svg viewBox="0 0 14 21" width="14" height="21">
    <use xlinkHref="#pause"></use>
  </svg>
);

const renderPlaySVG = () => {
  return (
    <svg viewBox="0 0 19 19" width="19" height="19">
      <use xlinkHref="#play-s"></use>
    </svg>
  );
};

interface VideoPlayerProps {
  title: string;
  isPlaying: boolean;
  progress: number;
  duration: number;
  onPlayButtonToggle: () => void;
  onFullScreenButtonClick: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = (VideoPlayerProps) => {
  const {
    title, children, progress, duration, onPlayButtonToggle, onFullScreenButtonClick, isPlaying
  } = VideoPlayerProps;
  const timeLeft: number = duration - progress;
  const toggler: number = progress * 100 / duration;

  return (
    <div className="player">
      <button
        type="button"
        className="player__exit"
        onClick={() => history.goBack()}>
          Exit
      </button>

      {children}
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value={progress} max={duration}></progress>
            <div className="player__toggler" style={{left: toggler + `%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatTimeWithSeconds(timeLeft)}</div>
        </div>

        <div className="player__controls-row">
          <button
            type="button"
            className="player__play"
            onClick={onPlayButtonToggle}
          >
            {isPlaying ? renderPauseSVG() : renderPlaySVG()}
            <span>{isPlaying ? `Pause` : `Play`}</span>
          </button>

          <div className="player__name">{title}</div>
          <button
            type="button"
            className="player__full-screen"
            onClick={onFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>

        </div>
      </div>
    </div>
  );
};


export default VideoPlayer;
