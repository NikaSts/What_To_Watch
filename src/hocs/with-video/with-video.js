import React, {PureComponent, createRef} from 'react';
import {string} from 'prop-types';
import {DELAY} from '../../utils/consts';

const withVideo = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        isPlaying: false,
      };
      this._timerId = null;

      this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
      this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
    }

    componentDidMount() {
      const {src, previewImage} = this.props;
      const video = this._videoRef.current;
      if (video) {
        video.src = src;
        video.poster = previewImage;
        video.muted = true;
      }
    }

    componentDidUpdate() {
      const video = this._videoRef.current;
      const {isPlaying} = this.state;
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
      clearTimeout(this._timerId);
    }

    _handleMovieCardMouseEnter() {
      const playVideo = () => (this.setState({isPlaying: true}));
      this._timerId = setTimeout(playVideo, DELAY);
    }

    _handleMovieCardMouseLeave() {
      clearTimeout(this._timerId);
      this.setState({isPlaying: false});
    }

    render() {
      const {isPlaying} = this.state;
      return <Component
        {...this.props}
        isPlaying={isPlaying}
        onMouseEnter={this._handleMovieCardMouseEnter}
        onMouseLeave={this._handleMovieCardMouseLeave}
      >
        <video
          ref={this._videoRef}
          width="280"
          height="175"
          preload="none"
        />
      </Component>;
    }
  }
  Wrapper.propTypes = {
    src: string.isRequired,
    previewImage: string.isRequired,
  };

  return Wrapper;
};

export default withVideo;
