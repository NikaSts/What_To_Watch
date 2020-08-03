import React from 'react';
import {connect} from 'react-redux';
import {func, string, bool, shape, number} from 'prop-types';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import {promoMovieType} from '../../types';
import {ActionCreator as PlayerActionCreator} from '../../store/player/actions';
import {ActionCreator as UserActionCreator} from '../../store/user/actions';
import {getPromoMovie} from '../../store/movies/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../utils/consts';


const MovieCard = ({
  promoMovie, onPlayButtonClick, onSignInButtonClick, authorizationStatus, isMain, userData
}) => {
  const {id, poster, backgroundImage, title, genre, releaseDate} = promoMovie;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <PageHeader
        onSignInButtonClick={onSignInButtonClick}
        isAuth={isAuth}
        isMain={isMain}
        userData={userData}
      />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <MovieInfo
            isMain={isMain}
            id={id}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            onPlayButtonClick={onPlayButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

MovieCard.propTypes = {
  id: number.isRequired,
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

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
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
