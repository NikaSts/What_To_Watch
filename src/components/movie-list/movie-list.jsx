import React, {Component} from 'react';
import {arrayOf, func, string} from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';
import {cardMovieType} from '../../types.js';


export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoveredCard: null,
    };
  }

  _handleMovieCardMouseEnter(hoveredCard) {
    this.setState({hoveredCard});
  }

  _handleMovieCardMouseLeave() {
    this.setState({hoveredCard: null});
  }

  render() {
    const {movies, onMovieTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {movies.map((movie) => {
          return (
            <MovieCard
              key={movie.id}
              movie={movie}
              onMovieTitleClick={() => onMovieTitleClick(movie)}
              onMovieCardMouseEnter={() => this._handleMovieCardMouseEnter(movie)}
              onMovieCardMouseLeave={() => this._handleMovieCardMouseLeave}
            />
          );
        })}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  activeGenre: string.isRequired,
  onMovieTitleClick: func.isRequired,
};
