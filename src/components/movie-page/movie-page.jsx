import React, {Fragment} from 'react';
import {func} from 'prop-types';
import {connect} from 'react-redux';
import {changeActiveMovie, openFullScreenPlayer} from '../../store/actions';
import MovieInfo from '../movie-info/movie-info';
import PageHeader from '../page-header/page-header';
import PageFooter from '../page-footer/page-footer';
import Tabs from '../tabs/tabs';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {movieType} from '../../types';
import Catalog from '../catalog/catalog';

const WrappedTabs = withActiveItem(Tabs);

const MoviePage = ({activeMovie, onPlayButtonClick}) => {
  const {id, title, genre, releaseDate, image} = activeMovie;
  return (
    <Fragment>
      <section key={id} className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <PageHeader
            imagePath={`img/${image}.jpg`}
            title={title}
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
              <img src={`img/${image}.jpg`} alt={title} width="218" height="327" />
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
  onMovieTitleClick: func.isRequired,
  onPlayButtonClick: func.isRequired,
};

const mapStateToProps = ({movies, activeMovie}) => {
  return {
    movies,
    activeMovie,
    onPlayButtonClick: func.isRequired,
  };
};

const mapDispatchToProps = (dispatch) => ({
  onMovieTitleClick(activeMovie) {
    dispatch(changeActiveMovie(activeMovie));
  },
  onPlayButtonClick() {
    dispatch(openFullScreenPlayer());
  }
});


export {MoviePage};
export default connect(mapStateToProps, mapDispatchToProps)(MoviePage);
