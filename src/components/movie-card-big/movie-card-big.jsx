import React from 'react';
import {connect} from 'react-redux';

import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import {promoMovieType} from '../../types';
import {func} from 'prop-types';
import {getPromoMovie} from '../../store/reduсers/data/selectors';
import {PlayerActionCreator} from '../../store/reduсers/player/player';


const MovieCardBig = ({promoMovie, onPlayButtonClick}) => {
  const {poster, backgroundImage, title, genre, releaseDate} = promoMovie;
  return (
    <section className="movie-card">
      <PageHeader
        title={title}
        backgroundImage={backgroundImage}
      />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={poster} alt={title} width="218" height="327" />
          </div>
          <MovieInfo
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isLogged={false}
            onPlayButtonClick={onPlayButtonClick}
          />
        </div>
      </div>
    </section>
  );
};

MovieCardBig.propTypes = {
  promoMovie: promoMovieType.isRequired,
  onPlayButtonClick: func.isRequired,
};

const mapStateToProps = (store) => ({
  promoMovie: getPromoMovie(store),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(PlayerActionCreator.openFullScreenPlayer());
  }
});


export {MovieCardBig};
export default connect(mapStateToProps, mapDispatchToProps)(MovieCardBig);
