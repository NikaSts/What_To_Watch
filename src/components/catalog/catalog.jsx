import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {func, arrayOf, string} from 'prop-types';

import CatalogList from '../catalog-list/catalog-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {movieType} from '../../types';
import {Operation as MovieOperation} from '../../store/movies/actions';
import {getMovies, getGenres, getMovie} from '../../store/movies/selectors';
import {filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES, Page} from '../../utils/consts';


const CatalogListWithShowMoreButton = withShowMoreButton(CatalogList);

const Catalog = (props) => {
  const {
    currentPage, movies, favouriteMovies, movie, genres,
    onCatalogCardClick, activeItem, onItemClick,
  } = props;
  const isMainPage = currentPage === Page.MAIN;
  const isMoviePage = currentPage === Page.MOVIE_PAGE;
  const isMyListPage = currentPage === Page.MY_LIST;

  const moviesByGenre = isMainPage && filterMovies(movies, activeItem);
  const similarMovies = isMoviePage && filterMovies(movies, movie.genre)
    .splice(0, MAX_SIMILAR_MOVIES);
  const hasFavouriteMovies = favouriteMovies && favouriteMovies.length > 0;

  const catalogClass = cn({
    'catalog': true,
    'catalog--like-this': isMoviePage,
  });
  const catalogTitleClass = cn({
    'catalog__title': true,
    'visually-hidden': isMainPage || isMyListPage,
  });

  return (
    <section className={catalogClass}>
      <h2 className={catalogTitleClass}>
        {isMainPage || isMyListPage ? `Catalog` : `More like this`}
      </h2>

      {isMainPage && <React.Fragment>
        <CatalogFilter
          genres={genres}
          activeGenre={activeItem}
          onGenreClick={onItemClick}
        />
        <CatalogListWithShowMoreButton
          movies={moviesByGenre}
          onCatalogCardClick={onCatalogCardClick}
        />
      </React.Fragment> }

      {isMoviePage && <CatalogList
        movies={similarMovies}
        onCatalogCardClick={onCatalogCardClick}
      />}

      {(isMyListPage && hasFavouriteMovies) && <CatalogList
        movies={favouriteMovies}
        onCatalogCardClick={onCatalogCardClick}
      />}
    </section>
  );
};

Catalog.defaultProps = {
  activeItem: DEFAULT_GENRE,
};

Catalog.propTypes = {
  currentPage: string.isRequired,
  movies: arrayOf(movieType),
  genres: arrayOf(string),
  onCatalogCardClick: func.isRequired,
  movie: movieType,
  activeItem: string,
  onItemClick: func,
  favouriteMovies: arrayOf(movieType),
};

const mapStateToProps = (state, props) => ({
  movies: getMovies(state),
  genres: getGenres(state),
  movie: getMovie(state, props.id),
});

const mapDispatchToProps = (dispatch) => ({
  onCatalogCardClick(movieId) {
    dispatch(MovieOperation.loadReviews(movieId));
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
