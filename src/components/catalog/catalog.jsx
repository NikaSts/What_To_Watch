import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {func, arrayOf, string} from 'prop-types';

import CatalogList from '../catalog-list/catalog-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {movieType} from '../../types';
import {Operation as MovieOperation} from '../../store/movies/actions';
import {getMovies, getGenres} from '../../store/movies/selectors';
import {filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES, Page} from '../../utils/consts';

const CatalogListWithShowMoreButton = withShowMoreButton(CatalogList);

const Catalog = (props) => {
  const {
    currentPage, movies, genres, onCatalogCardClick, activeItem, onItemClick,
  } = props;
  const moviesByGenre = filterMovies(movies, activeItem);
  const moviesToShow = [...moviesByGenre].splice(0, MAX_SIMILAR_MOVIES);
  const isMainPage = currentPage === Page.MAIN;

  const catalogClass = cn({
    'catalog': true,
    'catalog--like-this': !isMainPage,
  });
  const catalogTitleClass = cn({
    'catalog__title': true,
    'visually-hidden': isMainPage,
  });

  return (
    <section className={catalogClass}>
      <h2 className={catalogTitleClass}>
        {isMainPage ? `Catalog` : `More like this`}
      </h2>
      {isMainPage && <CatalogFilter
        genres={genres}
        activeGenre={activeItem}
        onGenreClick={onItemClick}
      />}
      {isMainPage
        ? <CatalogListWithShowMoreButton
          movies={moviesByGenre}
          onCatalogCardClick={onCatalogCardClick}
        />
        : <CatalogList
          movies={moviesToShow}
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
  movies: arrayOf(movieType).isRequired,
  genres: arrayOf(string.isRequired).isRequired,
  onCatalogCardClick: func.isRequired,
  activeItem: string,
  onItemClick: func,
};

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genres: getGenres(state),
});

const mapDispatchToProps = (dispatch) => ({
  onCatalogCardClick(movieId) {
    dispatch(MovieOperation.loadReviews(movieId));
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
