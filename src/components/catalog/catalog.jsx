import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import {func, arrayOf, string, bool} from 'prop-types';

import CatalogList from '../catalog-list/catalog-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {movieType} from '../../types';
import {
  ActionCreator as DataActionCreator,
  Operation as DataOperation
} from '../../store/movies/actions';
import {getMovies, getGenres} from '../../store/movies/selectors';
import {filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES} from '../../utils/consts';

const CatalogListWithShowMoreButton = withShowMoreButton(CatalogList);

const Catalog = (props) => {
  const {
    isMain, movies, genres, onCatalogCardClick, activeItem, onItemClick,
  } = props;
  const moviesByGenre = filterMovies(movies, activeItem);
  const moviesToShow = [...moviesByGenre].splice(0, MAX_SIMILAR_MOVIES);

  const catalogClass = cn({
    'catalog': true,
    'catalog--like-this': !isMain,
  });
  const catalogTitleClass = cn({
    'catalog__title': true,
    'visually-hidden': isMain,
  });

  return (
    <section className={catalogClass}>
      <h2 className={catalogTitleClass}>
        {isMain ? `Catalog` : `More like this`}
      </h2>
      {isMain && <CatalogFilter
        genres={genres}
        activeGenre={activeItem}
        onGenreClick={onItemClick}
      />}
      {isMain
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
  isMain: false,
  activeItem: DEFAULT_GENRE,
};

Catalog.propTypes = {
  isMain: bool.isRequired,
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
  onCatalogCardClick(activeMovie) {
    dispatch(DataActionCreator.changeActiveMovie(activeMovie));
    dispatch(DataOperation.loadReviews(activeMovie.id));
  }
});

export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
