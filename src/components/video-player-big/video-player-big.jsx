import React, {PureComponent} from 'react';
import {bool, string, func, node, number} from 'prop-types';
import {formatTime} from '../../utils/funcs';

export default class VideoPlayerBig extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderExitButton() {
    const {onExitButtonClick} = this.props;
    return (
      <button
        type="button"
        className="player__exit"
        onClick={onExitButtonClick}>
          Exit
      </button>

    );
  }

  _renderPlayButton() {
    const {isPlaying, onPlayButtonToggle} = this.props;
    return (
      <button
        type="button"
        className="player__play"
        onClick={onPlayButtonToggle}
      >
        {isPlaying ? this._renderPauseSVG() : this._renderPlaySVG()}
        <span>{isPlaying ? `Pause` : `Play`}</span>
      </button>
    );
  }

  _renderFullScreenButton() {
    const {onFullScreenButtonClick} = this.props;
    return (
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
    );
  }

  _renderPauseSVG() {
    return (
      <svg viewBox="0 0 14 21" width="14" height="21">
        <use xlinkHref="#pause"></use>
      </svg>
    );
  }

  _renderPlaySVG() {
    return (
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
    );
  }

  render() {
    const {title, children, progress, duration} = this.props;
    const timeLeft = duration - progress;
    const toggler = progress * 100 / duration;

    return (
      <div className="player">
        {this._renderExitButton()}
        {children}
        <div className="player__controls">
          <div className="player__controls-row">
            <div className="player__time">
              <progress className="player__progress" value={progress} max={duration}></progress>
              <div className="player__toggler" style={{left: toggler + `%`}}>Toggler</div>
            </div>
            <div className="player__time-value">{formatTime(timeLeft)}</div>
          </div>

          <div className="player__controls-row">
            {this._renderPlayButton()}
            <div className="player__name">{title}</div>
            {this._renderFullScreenButton()}
          </div>
        </div>
      </div>
    );
  }
}


VideoPlayerBig.propTypes = {
  title: string.isRequired,
  isPlaying: bool.isRequired,
  progress: number.isRequired,
  duration: number.isRequired,
  onPlayButtonToggle: func.isRequired,
  onFullScreenButtonClick: func.isRequired,
  onExitButtonClick: func.isRequired,
  children: node.isRequired,
};
