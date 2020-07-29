import React, {Fragment} from 'react';
import {func, oneOfType, shape, arrayOf, number, string} from 'prop-types';
import {connect} from 'react-redux';
import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {movieType} from '../../types';
import Catalog from '../catalog/catalog';
import {PlayerActionCreator} from '../../store/player/player';
import {getMovies, getActiveMovie, getReviews} from '../../store/data/selectors';
import {UserActionCreator} from '../../store/user/user';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AuthorizationStatus} from '../../utils/consts';

const TabsWithActiveItem = withActiveItem(Tabs);

const MoviePage = ({
  activeMovie, reviews, onPlayButtonClick, onSignInButtonClick, authorizationStatus
}) => {
  const {id, title, genre, releaseDate, poster, backgroundImage, backgroundColor} = activeMovie;
  const isSignedIn = authorizationStatus === AuthorizationStatus.AUTH;
  return (
    <Fragment>
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

      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
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
  ])
};

const mapStateToProps = (store) => ({
  movies: getMovies(store),
  activeMovie: getActiveMovie(store),
  reviews: getReviews(store),
  authorizationStatus: getAuthorizationStatus(store),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(PlayerActionCreator.openFullScreenPlayer());
  },
  onSignInButtonClick() {
    dispatch(UserActionCreator.isAuthorizing());
  }
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
