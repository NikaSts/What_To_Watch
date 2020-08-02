import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import {number} from 'prop-types';


const MoviePage = ({id}) => {
  return (
    <Fragment>
      <MovieCardFull
        movieId={id}
      />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  id: number.isRequired,
};

export default MoviePage;
