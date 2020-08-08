import * as React from 'react';
import {connect} from 'react-redux';
import {Subtract} from 'utility-types';
import {getMovie} from '../../store/movies/selectors';
import {MovieType} from '../../types';
import ErrorPage from '../../components/error-page/error-page';

interface WrapperProps {
    movie: MovieType;
  }

interface WrapperState {
    isPlaying: boolean;
    progress: number;
    duration: number;
}

interface InjectingProps {
  isPlaying: boolean;
  title: string;
  progress: number;
  duration: number;
  onPlayButtonToggle(): void;
  onFullScreenButtonClick(): void;
}

const withFullScreen = (Component) => {
    type P = React.ComponentProps<typeof Component>;
    type T = Subtract<P, InjectingProps>;

    class Wrapper extends React.PureComponent<T, WrapperState> {

    private videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
      this.state = {
        isPlaying: true,
        progress: 0,
        duration: 0,
      };
      this.handlePlayButtonToggle = this.handlePlayButtonToggle.bind(this);
      this.handleFullScreenButtonClick = this.handleFullScreenButtonClick.bind(this);
    }

    componentDidMount() {
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;
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
      const video = this.videoRef.current;
      if (video) {
        video.src = ``;
        video.onplay = null;
        video.ontimeupdate = null;
        video.onloadedmetadata = null;
      }
    }

    private handlePlayButtonToggle() {
      this.setState((prevState) => ({isPlaying: !prevState.isPlaying}));
    }

    private handleFullScreenButtonClick() {
      const video = this.videoRef.current;
      video.requestFullscreen();
    }

    render() {
      const {isPlaying, progress, duration} = this.state;
      const {movie} = this.props;
      if (!movie) {
        return <ErrorPage />;
      }

      const {title, backgroundImage, src} = movie;

      return (
        <Component
          title={title}
          isPlaying={isPlaying}
          progress={progress}
          duration={duration}
          onPlayButtonToggle={this.handlePlayButtonToggle}
          onFullScreenButtonClick={this.handleFullScreenButtonClick}
        >
          <video
            ref={this.videoRef}
            poster={backgroundImage}
            src={src}
            preload="metadata"
            width="auto"
            height="100%"
          />
        </Component>
      );
    }
    }

    const mapStateToProps = (state, props) => ({
      movie: getMovie(state, props.id),
    });

    return connect(mapStateToProps)(Wrapper);
};

export default withFullScreen;
