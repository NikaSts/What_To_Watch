import * as React from 'react';
import {connect} from 'react-redux';
import cn from 'classnames';

import CatalogList from '../catalog-list/catalog-list';
import CatalogFilter from '../catalog-filter/catalog-filter';
import withShowMoreButton from '../../hocs/with-show-more-button/with-show-more-button';
import {MovieType} from '../../types';
import {getMovies, getGenres} from '../../store/movies/selectors';
import {filterMovies} from '../../utils/funcs';
import {DEFAULT_GENRE, MAX_SIMILAR_MOVIES, Page} from '../../utils/consts';

const CatalogListWithShowMoreButton = withShowMoreButton(CatalogList);

interface CatalogProps {
  currentPage: string;
  movies?: Array<MovieType>;
  favoriteMovies?: Array<MovieType>;
  genres?: Array<string>;
  activeItem?: string;
  onItemClick?: () => void;
}

const Catalog: React.FC<CatalogProps> = ({
  currentPage, movies, favoriteMovies, genres, activeItem, onItemClick,
}: CatalogProps) => {
  const isMainPage: boolean = currentPage === Page.MAIN;
  const isMoviePage: boolean = currentPage === Page.MOVIE_PAGE;
  const isMyListPage: boolean = currentPage === Page.MY_LIST;

  const moviesByGenre: Array<MovieType> = isMainPage && filterMovies(movies, activeItem);
  const similarMovies: Array<MovieType> = isMoviePage && filterMovies(movies, activeItem)
    .splice(0, MAX_SIMILAR_MOVIES);
  const hasFavoriteMovies: boolean = isMyListPage && favoriteMovies.length > 0;

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

const mapStateToProps = (state) => ({
  movies: getMovies(state),
  genres: getGenres(state),
});


export {Catalog};
export default connect(mapStateToProps)(Catalog);
