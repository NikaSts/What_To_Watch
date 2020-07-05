import React, {Fragment, PureComponent} from 'react';
import {func, arrayOf, string} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieInfo from '../movie-info/movie-info.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import {cardMovieType, promoMovieType} from '../../types';
import {getMoviesToShow} from '../../utils/funcs';
import {DEFAULT_GENRE} from '../../utils/consts';

const moreButton = <div className="catalog__more">
  <button className="catalog__button" type="button">Show more</button>
</div>;

export default class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeGenre: DEFAULT_GENRE,
    };

    this._handleGenreClick = this._handleGenreClick.bind(this);
  }

  _handleGenreClick(activeGenre) {
    this.setState({activeGenre});
  }

  render() {
    const {promoMovie, movies, genres, onMovieTitleClick} = this.props;
    const {title, genre, releaseDate, image} = promoMovie;
    const {activeGenre} = this.state;
    const moviesToShow = getMoviesToShow(movies, activeGenre).splice(0, 8);

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
              onGenreClick={this._handleGenreClick}
            />
            <MovieList
              movies={moviesToShow}
              onMovieTitleClick={onMovieTitleClick}
            />
            {moreButton}
          </section>
          <PageFooter />
        </PageContent>
      </Fragment>
    );

  }
}


Main.propTypes = {
  promoMovie: promoMovieType.isRequired,
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  genres: arrayOf(string.isRequired).isRequired,
  onMovieTitleClick: func.isRequired,
};
