import React, {Fragment, PureComponent} from 'react';
import {func, arrayOf, string, number} from 'prop-types';
import {connect} from 'react-redux';
import {
  changeActiveGenre,
  getMoviesByGenre,
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
import {cardMovieType, promoMovieType} from '../../types';

class Main extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      promoMovie,
      genres,
      activeGenre,
      moviesByGenre,
      onGenreClick,
      onMovieTitleClick,
      shownMoviesCount,
      onShowMoreButtonClick,
    } = this.props;
    const {title, genre, releaseDate, image} = promoMovie;
    const moviesToShow = [...moviesByGenre].splice(0, shownMoviesCount);

    return (
      <Fragment>
        <section className="movie-card">
          <div className="movie-card__bg">
            <img src={`img/bg-${image}.jpg`} alt={title} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader />
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
          <PageFooter />
        </PageContent>
      </Fragment>
    );
  }
}

Main.propTypes = {
  promoMovie: promoMovieType.isRequired,
  genres: arrayOf(string.isRequired).isRequired,
  activeGenre: string.isRequired,
  moviesByGenre: arrayOf(cardMovieType.isRequired).isRequired,
  shownMoviesCount: number.isRequired,
  onShowMoreButtonClick: func.isRequired,
  onGenreClick: func.isRequired,
  onMovieTitleClick: func.isRequired,
};

const mapStateToProps = ({
  movies, genres, promoMovie, activeGenre, moviesByGenre, shownMoviesCount
}) => ({
  movies, genres, promoMovie, activeGenre, moviesByGenre, shownMoviesCount
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(changeActiveGenre(genre));
    dispatch(getMoviesByGenre(genre));
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
