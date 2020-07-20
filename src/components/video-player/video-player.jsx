import React, {PureComponent, createRef} from 'react';
import {string, bool, func} from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src, poster, muted} = this.props;
    const video = this._videoRef.current;
    if (video) {
      video.src = src;
      video.poster = poster;
      video.muted = muted;
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;
    if (!video) {
      return;
    }
    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    if (video) {
      video.src = ``;
      video.poster = null;
      video.muted = null;
      video.onplay = null;
    }
  }

  render() {
    const {onMouseEnter, onMouseLeave} = this.props;

    return (
      <video
        ref={this._videoRef}
        width="280"
        height="175"
        preload="none"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: string.isRequired,
  poster: string.isRequired,
  muted: bool.isRequired,
  isPlaying: bool.isRequired,
  onMouseEnter: func.isRequired,
  onMouseLeave: func.isRequired,
};
