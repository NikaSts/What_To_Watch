import * as React from 'react';
import {Subtract} from 'utility-types';
import {DELAY} from '../../utils/consts';

interface WrapperState {
  isPlaying: boolean;
}

interface WrapperProps {
  src: string;
  previewImage: string;
}

interface InjectingProps {
  children: React.ReactNode;
}


const withVideo = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = WrapperProps & Subtract<P, InjectingProps>;

  class Wrapper extends React.PureComponent<T, WrapperState> {
    private videoRef: React.RefObject<HTMLVideoElement>;
    private timerId: ReturnType<typeof setTimeout> = setTimeout(() => ``, DELAY);

    constructor(props) {
      super(props);
      this.videoRef = React.createRef();
      this.state = {
        isPlaying: false,
      };
      this.timerId = null;

      this.handleMovieCardMouseEnter = this.handleMovieCardMouseEnter.bind(this);
      this.handleMovieCardMouseLeave = this.handleMovieCardMouseLeave.bind(this);
    }

    componentDidMount() {
      const {src, previewImage} = this.props;
      const video = this.videoRef.current;
      if (video) {
        video.src = src;
        video.poster = previewImage;
        video.muted = true;
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
        video.load();
      }
    }

    componentWillUnmount() {
      const video = this.videoRef.current;
      if (video) {
        video.src = ``;
        video.poster = null;
        video.muted = null;
        video.onplay = null;
      }
      clearTimeout(this.timerId);
    }

    private handleMovieCardMouseEnter() {
      const playVideo = () => (this.setState({isPlaying: true}));
      this.timerId = setTimeout(playVideo, DELAY);
    }

    private handleMovieCardMouseLeave() {
      clearTimeout(this.timerId);
      this.setState({isPlaying: false});
    }

    render() {
      const {isPlaying} = this.state;
      return <Component
        {...this.props}
        isPlaying={isPlaying}
        onMouseEnter={this.handleMovieCardMouseEnter}
        onMouseLeave={this.handleMovieCardMouseLeave}
      >
        <video
          ref={this.videoRef}
          width="280"
          height="175"
          preload="none"
        />
      </Component>;
    }
  }

  return Wrapper;
};

export default withVideo;
