import React, {Fragment} from 'react';
import {func, arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {changeActiveMovie} from '../../store/actions';
import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {movieType, cardMovieType} from '../../types';
import {MAX_SIMILAR_MOVIES} from '../../utils/consts';
import {filterMovies} from '../../utils/funcs';
import Catalog from '../catalog/catalog';

const WrappedTabs = withActiveItem(Tabs);

const MoviePage = ({activeMovie}) => {
  const {id, title, genre, releaseDate, image} = activeMovie;
  return (
    <Fragment>
      <section key={id} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <PageHeader
            imagePath={`img/${image}.jpg`}
            title={title}
          />
          <div className="movie-card__wrap">
            <MovieInfo
              title={title}
              genre={genre}
              releaseDate={releaseDate}
              isLogged={true}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
            </div>
            <WrappedTabs
              activeMovie={activeMovie}
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
  moviesToShow: arrayOf(cardMovieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
};

const mapStateToProps = ({movies, activeMovie}) => {
  return {
    movies,
    activeMovie,
    moviesToShow: filterMovies(movies, activeMovie.genre, activeMovie.title)
      .splice(0, MAX_SIMILAR_MOVIES),
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMovieTitleClick(activeMovie) {
    dispatch(changeActiveMovie(activeMovie));
  }
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
