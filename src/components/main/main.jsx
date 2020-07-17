import React, {Fragment, PureComponent} from 'react';
import {func, string, number, arrayOf} from 'prop-types';
import {connect} from 'react-redux';
import {
  changeActiveGenre,
  incrementShownMoviesCount,
  setDefaultShownMoviesCount,
  changeActiveMovie
} from '../../store/actions';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import ShowMoreButton from '../show-more-button/show-more-button.jsx';
import {promoMovieType, movieType} from '../../types';
import {getGenres, filterMovies} from '../../utils/funcs';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      promoMovie,
      movies,
      activeGenre,
      onGenreClick,
      onMovieTitleClick,
      shownMoviesCount,
      onShowMoreButtonClick,
    } = this.props;
    const {title, genre, releaseDate, image} = promoMovie;
    const genres = (getGenres(movies));
    const moviesByGenre = filterMovies(movies, activeGenre);
    const moviesToShow = [...moviesByGenre].splice(0, shownMoviesCount);

    return (
      <Fragment>
        <section className="movie-card">
          <PageHeader
            imagePath={`img/bg-${image}.jpg`}
            title={title}
          />
          <div className="movie-card__wrap">
            <div className="movie-card__info">
              <div className="movie-card__poster">
                <img src={`img/${image}-poster.jpg`} alt={title} width="218" height="327" />
              </div>
              <MovieInfo
                title={title}
                genre={genre}
                releaseDate={releaseDate}
                isLogged={false}
              />
            </div>
          </div>
        </section>

        <PageContent>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreList
              genres={genres}
              activeGenre={activeGenre}
              onGenreClick={onGenreClick}
            />
            <MovieList
              movies={moviesToShow}
              onMovieTitleClick={onMovieTitleClick}
            />
            {(shownMoviesCount < moviesByGenre.length) ? <ShowMoreButton
              onShowMoreButtonClick={onShowMoreButtonClick}
            /> : null}
          </section>
          <PageFooter
            isMain={true}
          />
        </PageContent>
      </Fragment>
    );
  }
}

Main.propTypes = {
  movies: arrayOf(movieType.isRequired).isRequired,
  promoMovie: promoMovieType.isRequired,
  activeGenre: string.isRequired,
  shownMoviesCount: number.isRequired,
  onShowMoreButtonClick: func.isRequired,
  onGenreClick: func.isRequired,
  onMovieTitleClick: func.isRequired,
};

const mapStateToProps = ({
  movies, promoMovie, activeGenre, shownMoviesCount
}) => ({
  movies, promoMovie, activeGenre, shownMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(setDefaultShownMoviesCount());
  },
  onShowMoreButtonClick() {
    dispatch(incrementShownMoviesCount());
  },
  onMovieTitleClick(activeMovie) {
    dispatch(changeActiveMovie(activeMovie));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
