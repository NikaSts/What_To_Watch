import React, {Fragment} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {movieType} from '../../types';
import Catalog from '../catalog/catalog';
import {PlayerActionCreator} from '../../store/reduсers/player/player';
import {getMovies, changeActiveMovie} from '../../store/reduсers/data/selectors';

const WrappedTabs = withActiveItem(Tabs);

const MoviePage = ({activeMovie, onPlayButtonClick}) => {
  const {id, title, genre, releaseDate, poster, backgroundImage, backgroundColor} = activeMovie;
  return (
    <Fragment>
      <section
        key={id}
        className="movie-card movie-card--full"
        style={{backgroundColor: `${backgroundColor}`}}>
        <div className="movie-card__hero">
          <PageHeader
            title={title}
            backgroundImage={backgroundImage}
          />
          <div className="movie-card__wrap">
            <MovieInfo
              title={title}
              genre={genre}
              releaseDate={releaseDate}
              isLogged={true}
              onPlayButtonClick={onPlayButtonClick}
            />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster} alt={title} width="218" height="327" />
            </div>
            <WrappedTabs
              activeMovie={activeMovie}
            />
          </div>
        </div>
      </section>

      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  activeMovie: movieType,
  onPlayButtonClick: func.isRequired,
};

const mapStateToProps = (store) => ({
  movies: getMovies(store),
  activeMovie: changeActiveMovie(store),
});

const mapDispatchToProps = (dispatch) => ({
  onPlayButtonClick() {
    dispatch(PlayerActionCreator.openFullScreenPlayer());
  }
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
