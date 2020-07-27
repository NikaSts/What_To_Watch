import React from 'react';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import {promoMovieType} from '../../types';
import {func, string} from 'prop-types';
import {getPromoMovie} from '../../store/reduсers/data/selectors';
import {PlayerActionCreator} from '../../store/reduсers/player/player';
import {UserActionCreator} from '../../store/reduсers/user/user';
import {AuthorizationStatus} from '../../utils/consts';


const MovieCardBig = ({
  promoMovie, onPlayButtonClick, onSignInButtonClick, authorizationStatus
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

MovieCardBig.propTypes = {
  promoMovie: promoMovieType.isRequired,
  onPlayButtonClick: func.isRequired,
  onSignInButtonClick: func.isRequired,
  authorizationStatus: string.isRequired,
};

const mapStateToProps = (store) => ({
  promoMovie: getPromoMovie(store),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(PlayerActionCreator.openFullScreenPlayer());
  },
  onSignInButtonClick() {
    dispatch(UserActionCreator.isAuthorizing());
  }
});


export {MovieCardBig};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardBig);
