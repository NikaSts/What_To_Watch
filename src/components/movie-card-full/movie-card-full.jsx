import React from 'react';
import {func, oneOfType, shape, arrayOf, number, string} from 'prop-types';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {movieType} from '../../types';
import {ActionCreator as PlayerActionCreator} from '../../store/player/actions';
import {ActionCreator as UserActionCreator} from '../../store/user/actions';
import {getMovies, getActiveMovie, getReviews} from '../../store/movies/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../utils/consts';


const TabsWithActiveItem = withActiveItem(Tabs);

const MovieCardFull = ({
  activeMovie, reviews, onPlayButtonClick, onSignInButtonClick, authorizationStatus, userData
}) => {
  const {id, title, genre, releaseDate, poster, backgroundImage, backgroundColor} = activeMovie;
  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;

  return (
    <section
      key={id}
      className="movie-card movie-card--full"
      style={{backgroundColor: `${backgroundColor}`}}>
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={title} />
        </div>
        <h1 className="visually-hidden">WTW</h1>

        <PageHeader
          onSignInButtonClick={onSignInButtonClick}
          isSignedIn={isSignedIn}
          userData={userData}
        />
        <div className="movie-card__wrap">
          <MovieInfo
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isSignedIn={isSignedIn}
            onPlayButtonClick={onPlayButtonClick}
          />
        </div>
      </div>

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <TabsWithActiveItem
            activeMovie={activeMovie}
            reviews={reviews}
          />
        </div>
      </div>
    </section>
  );
};

MovieCardFull.propTypes = {
  activeMovie: movieType,
  onPlayButtonClick: func.isRequired,
  onSignInButtonClick: func.isRequired,
  authorizationStatus: string.isRequired,
  reviews: oneOfType([
    arrayOf(shape({
      id: number.isRequired,
      user: shape({
        id: number.isRequired,
        name: string.isRequired,
      }).isRequired,
      rating: number.isRequired,
      comment: string.isRequired,
      date: string.isRequired,
    })),
  ]),
  userData: shape({
    id: number.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    avatar: string.isRequired,
  })
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  activeMovie: getActiveMovie(state),
  reviews: getReviews(state),
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


export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
