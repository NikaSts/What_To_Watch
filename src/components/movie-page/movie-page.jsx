import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {number} from 'prop-types';

import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import {getMovie} from '../../store/movies/selectors';
import {movieType} from '../../types';
import {Page} from '../../utils/consts';


const MoviePage = ({id, activeMovie}) => {
  return (
    <Fragment>
      <MovieCardFull
        currentPage={Page.MOVIE_PAGE}
        id={id}
        activeMovie={activeMovie}
      />
      <div className="page-content">
        <Catalog
          currentPage={Page.MOVIE_PAGE}
          id={id}
          activeItem={activeMovie.genre}
        />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  id: number.isRequired,
  activeMovie: movieType.isRequired,
};

const mapStateToProps = (state, props) => ({
  activeMovie: getMovie(state, props.id),
});


export {MoviePage};
export default connect(mapStateToProps)(MoviePage);
