import React, {Component} from 'react';
import {arrayOf, func, string} from 'prop-types';
import MovieListItem from '../movie-list-item/movie-list-item.jsx';
import {cardMovieType} from '../../types.js';
import {getMoviesToShow} from '../../utils/funcs';


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
    const {movies, activeGenre, onMovieTitleClick} = this.props;
    const moviesToShow = getMoviesToShow(movies, activeGenre);

    return (
      <div className="catalog__movies-list">
        {moviesToShow.map((movie) => {
          return (
            <MovieListItem
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
