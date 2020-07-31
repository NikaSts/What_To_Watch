import React, {PureComponent, createRef} from 'react';
import {string, func} from 'prop-types';


const withFullScreen = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this._videoRef = createRef();
      this.state = {
        isPlaying: true,
        progress: 0,
        duration: 0,
      };

      this._handlePlayButtonToggle = this._handlePlayButtonToggle.bind(this);
      this._handleFullScreenButtonClick = this._handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      const {src} = this.props;
      const video = this._videoRef.current;
      if (video) {
        video.src = src;
        video.play();
        video.ontimeupdate = () => this.setState({
          progress: Math.floor(video.currentTime),
        });
        video.onloadedmetadata = () => this.setState({
          duration: Math.ceil(video.duration),
        });
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
        video.pause();
      }
    }

    componentWillUnmount() {
      const video = this._videoRef.current;
      if (video) {
        video.src = ``;
        video.onplay = null;
        video.ontimeupdate = null;
        video.onloadedmetadata = null;
      }
    }

    _handlePlayButtonToggle() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    _handleFullScreenButtonClick() {
      const video = this._videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {isPlaying, progress, duration} = this.state;
      const {title, previewImage, src, onExitButtonClick} = this.props;

      return (
        <Component
          title={title}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          onPlayButtonToggle={this._handlePlayButtonToggle}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
          onExitButtonClick={onExitButtonClick}
        >
          <video
            ref={this._videoRef}
            poster={previewImage}
            src={src}
            preload="metadata"
            width="auto"
            height="100%"
          />
        </Component>
      );
    }
  }

  Wrapper.propTypes = {
    title: string.isRequired,
    src: string.isRequired,
    previewImage: string.isRequired,
    onExitButtonClick: func.isRequired,
  };

  return Wrapper;
};


export default withFullScreen;
