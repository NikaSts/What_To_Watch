import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';


const MoviePage = () => {
  return (
    <Fragment>
      <MovieCardFull />
      <div className="page-content">
        <Catalog />
        <PageFooter />
      </div>
    </Fragment>
  );
};

export default MoviePage;
