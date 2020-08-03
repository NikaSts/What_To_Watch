import React from 'react';
import {oneOfType, shape, arrayOf, number, string, func} from 'prop-types';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getReviews} from '../../store/movies/selectors';
import {getAuthorizationStatus, getUserData} from '../../store/user/selectors';
import {Operation as MoviesOperation} from '../../store/movies/actions';
import {movieType} from '../../types';
import {AuthorizationStatus} from '../../utils/consts';


const TabsWithActiveItem = withActiveItem(Tabs);

const MovieCardFull = ({
  currentPage, id, activeMovie, reviews, authorizationStatus, userData, onIsFavoriteButtonClick
}) => {
  const {
    title, genre, releaseDate, poster, backgroundImage, backgroundColor, isFavorite
  } = activeMovie;
  const isAuth = authorizationStatus === AuthorizationStatus.AUTH;

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
          isAuth={isAuth}
          currentPage={currentPage}
          userData={userData}
        />
        <div className="movie-card__wrap">
          <MovieInfo
            currentPage={currentPage}
            id={id}
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isFavorite={isFavorite}
            onIsFavoriteButtonClick={onIsFavoriteButtonClick}
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
  currentPage: string.isRequired,
  id: number.isRequired,
  activeMovie: movieType.isRequired,
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
  }),
  onIsFavoriteButtonClick: func.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: getReviews(state),
  authorizationStatus: getAuthorizationStatus(state),
  userData: getUserData(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  onIsFavoriteButtonClick() {
    const {id, isFavorite} = props.activeMovie;
    dispatch(MoviesOperation.sendFavoriteMovie(id, isFavorite));
  },
});


export {MovieCardFull};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardFull);
