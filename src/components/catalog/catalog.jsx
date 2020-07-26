import React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';
import CatalogList from '../catalog-list/catalog-list';
import GenreList from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {func, arrayOf, string, bool} from 'prop-types';
import {movieType} from '../../types';
import {changeActiveMovie} from '../../store/actions';
import {getGenres, filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES} from '../../utils/consts';
import NameSpace from '../../store/reduсers/name-space';

const WrappedCatalogList = withShowMoreButton(CatalogList);

const Catalog = (props) => {
  const {
    isMain, movies, onMovieTitleClick, activeItem, onItemClick,
  } = props;
  const genres = getGenres(movies);
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
      {isMain && <GenreList
        genres={genres}
        activeGenre={activeItem}
        onGenreClick={onItemClick}
      />}
      {isMain
        ? <WrappedCatalogList
          movies={moviesByGenre}
          onMovieTitleClick={onMovieTitleClick}
        />
        : <CatalogList
          movies={moviesToShow}
          onMovieTitleClick={onMovieTitleClick}
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
  movies: arrayOf(movieType.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
  activeItem: string,
  onItemClick: func,
};

const mapStateToProps = (store) => ({
  movies: store[NameSpace.DATA].movies,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieTitleClick(activeMovie) {
    dispatch(changeActiveMovie(activeMovie));
  }
});


export {Catalog};
export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
