import React, {PureComponent} from 'react';

const withActivePlayer = (Component) => {
  class Wrapper extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        isPlaying: false,
      };

      this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
      this._handleMovieCardMouseLeave = this._handleMovieCardMouseLeave.bind(this);
    }

    _handleMovieCardMouseEnter() {
      this.setState({isPlaying: true});
    }

    _handleMovieCardMouseLeave() {
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
