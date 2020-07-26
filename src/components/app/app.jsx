import React, {PureComponent} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from '../main/main';
import MoviePage from '../movie-page/movie-page';
import {connect} from 'react-redux';
import {movieType} from '../../types';
import {bool, func} from 'prop-types';
import withFullScreen from '../../hocs/with-full-screen/with-full-screen';
import VideoPlayer from '../video-player/video-player';
import {closeFullScreenPlayer} from '../../store/actions';
import NameSpace from '../../store/reduсers/name-space';


const WrappedPlayer = withFullScreen(VideoPlayer);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  _renderApp() {
    const {activeMovie, isVideoPlayer} = this.props;
    if (isVideoPlayer) {
      return this._renderVideoPlayer();
    }
    if (activeMovie) {
      return this._renderMoviePage();
    }
    return this._renderMainPage();
  }

  _renderMainPage() {
    return <Main />;
  }

  _renderMoviePage() {
    return <MoviePage />;
  }

  _renderVideoPlayer() {
    const {activeMovie, promoMovie, onExitButtonClick} = this.props;
    if (activeMovie) {
      return <WrappedPlayer
        title={activeMovie.title}
        src={activeMovie.video}
        poster={activeMovie.poster}
        onExitButtonClick={onExitButtonClick}
      />;
    }
    return <WrappedPlayer
      title={promoMovie.title}
      src={promoMovie.video}
      poster={promoMovie.poster}
      onExitButtonClick={onExitButtonClick}
    />;
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route exact path="/movie">
            {this._renderMoviePage()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  activeMovie: movieType,
  promoMovie: movieType.isRequired,
  isVideoPlayer: bool.isRequired,
  onExitButtonClick: func.isRequired,
};

const mapStateToProps = (store) => ({
  activeMovie: store[NameSpace.DATA].activeMovie,
  promoMovie: store[NameSpace.DATA].promoMovie,
  isVideoPlayer: store[NameSpace.PLAYER].isVideoPlayer,
});

const mapDispatchToProps = (dispatch) => ({
  onExitButtonClick(activeMovie) {
    dispatch(closeFullScreenPlayer(activeMovie));
  }
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
