import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {func, arrayOf, string} from 'prop-types';

import CatalogList from '../catalog-list/catalog-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {movieType} from '../../types';
import {getMovies, getGenres} from '../../store/movies/selectors';
import {filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES, Page} from '../../utils/consts';


const CatalogListWithShowMoreButton = withShowMoreButton(CatalogList);

const Catalog = (props) => {
  const {
    currentPage, movies, favoriteMovies, genres, activeItem, onItemClick,
  } = props;
  const isMainPage = currentPage === Page.MAIN;
  const isMoviePage = currentPage === Page.MOVIE_PAGE;
  const isMyListPage = currentPage === Page.MY_LIST;

  const moviesByGenre = isMainPage && filterMovies(movies, activeItem);
  const similarMovies = isMoviePage && filterMovies(movies, activeItem)
    .splice(0, MAX_SIMILAR_MOVIES);
  const hasFavoriteMovies = favoriteMovies && favoriteMovies.length > 0;

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
        />
      </React.Fragment> }

      {isMoviePage && <CatalogList
        movies={similarMovies}
      />}

      {(isMyListPage && hasFavoriteMovies) && <CatalogList
        movies={favoriteMovies}
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
  activeItem: string,
  onItemClick: func,
  favoriteMovies: arrayOf(movieType),
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genres: getGenres(state),
});


export {Catalog};
export default connect(mapStateToProps)(Catalog);
