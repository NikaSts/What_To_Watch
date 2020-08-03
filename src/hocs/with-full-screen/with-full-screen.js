import React, {PureComponent, createRef} from 'react';
import {connect} from 'react-redux';
import {getMovie} from '../../store/movies/selectors';
import {movieType} from '../../types';


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
      const video = this._videoRef.current;
      if (video) {
        video.src = this.props.movie.video;
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
      const {movie} = this.props;
      if (!movie) {
        return <h2>Loading...</h2>;
      }

      const {title, previewImage, src} = movie;

      return (
        <Component
          title={title}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          onPlayButtonToggle={this._handlePlayButtonToggle}
          onFullScreenButtonClick={this._handleFullScreenButtonClick}
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
    movie: movieType,
  };

  const mapStateToProps = (state, props) => ({
    movie: getMovie(state, props.id),
  });

  return connect(mapStateToProps)(Wrapper);
};

export default withFullScreen;
