import React, {PureComponent} from 'react';
import {DELAY} from '../../utils/consts';

const withActivePlayer = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };
      this._timerId = null;

      this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
      this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
    }

    componentWillUnmount() {
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
      />;
    }
  }
  return Wrapper;
};

export default withActivePlayer;
