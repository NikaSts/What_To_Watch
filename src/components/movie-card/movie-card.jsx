import React from 'react';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import {promoMovieType} from '../../types';
import {func, string, bool, shape, number} from 'prop-types';
import {getPromoMovie} from '../../store/data/selectors';
import {PlayerActionCreator} from '../../store/player/player';
import {UserActionCreator} from '../../store/user/user';
import {AuthorizationStatus} from '../../utils/consts';
import {getAuthorizationStatus} from '../../store/user/selectors';


const MovieCard = ({
  promoMovie, onPlayButtonClick, onSignInButtonClick, authorizationStatus, isMain, userData
}) => {
  const {poster, backgroundImage, title, genre, releaseDate} = promoMovie;
  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader
        onSignInButtonClick={onSignInButtonClick}
        isSignedIn={isSignedIn}
        isMain={isMain}
        userData={userData}
      />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <MovieInfo
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isSignedIn={isSignedIn}
            onPlayButtonClick={onPlayButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  promoMovie: promoMovieType.isRequired,
  onPlayButtonClick: func.isRequired,
  onSignInButtonClick: func.isRequired,
  authorizationStatus: string.isRequired,
  isMain: bool.isRequired,
  userData: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  })
};

const mapStateToProps = (store) => ({
  promoMovie: getPromoMovie(store),
  authorizationStatus: getAuthorizationStatus(store),
  userData: store.USER.userData,
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(PlayerActionCreator.openFullScreenPlayer());
  },
  onSignInButtonClick() {
    dispatch(UserActionCreator.isAuthorizing());
  }
});


export {MovieCard};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
