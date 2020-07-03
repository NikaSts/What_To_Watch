import React, {Fragment, PureComponent} from 'react';
import {func, arrayOf, string} from 'prop-types';
import MovieList from '../movie-list/movie-list.jsx';
import GenreList from '../genre-list/genre-list.jsx';
import MovieCard from '../movie-card/movie-card.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import {cardMovieType, promoMovieType} from '../../types';


const moreButton = <div className="catalog__more">
  <button className="catalog__button" type="button">Show more</button>
</div>;

export default class Main extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeGenre: `All genres`,
    };

    this._handleGenreClick = this._handleGenreClick.bind(this);
  }

  _handleGenreClick(activeGenre) {
    this.setState({activeGenre});
  }

  render() {
    const {promoMovie, movies, genres, onMovieTitleClick} = this.props;
    const {activeGenre} = this.state;
    return (
      <Fragment>
        <MovieCard
          movie={promoMovie}
          isLogged={false}
        />

        <PageContent>
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenreList
              genres={genres}
              activeGenre={activeGenre}
              onGenreClick={this._handleGenreClick}
            />
            <MovieList
              movies={movies}
              activeGenre={activeGenre}
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
