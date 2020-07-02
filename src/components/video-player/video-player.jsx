import React, {PureComponent, createRef} from 'react';
import {string, bool} from 'prop-types';

export default class VideoPlayer extends PureComponent {
  constructor(props) {
    super(props);
    this._videoRef = createRef();
  }

  componentDidMount() {
    const {src} = this.props;
    const video = this._videoRef.current;
    if (video) {
      video.src = src;
    }
  }

  componentDidUpdate() {
    const video = this._videoRef.current;
    const {isPlaying} = this.props;

    if (video) {
      if (isPlaying) {
        setTimeout(() => {
          video.play();
        }, 1000);
      } else {
        video.load();
      }
    }
  }

  componentWillUnmount() {
    const video = this._videoRef.current;
    if (video) {
      video.src = ``;
      video.onplay = null;
      clearTimeout();
    }
  }


  render() {
    const {src, poster, muted} = this.props;

    return (
      <video
        ref={this._videoRef}
        src={src}
        width="280"
        height="175"
        preload="none"
        poster={poster}
        muted={muted}
      />
    );
  }
}

VideoPlayer.propTypes = {
  src: string.isRequired,
  poster: string.isRequired,
  muted: bool.isRequired,
  isPlaying: bool.isRequired,
};
