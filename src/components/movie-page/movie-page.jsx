import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import {withRouter} from 'react-router-dom';


const MoviePage = ({history, match}) => {
  const {id} = match.params;

  return (
    <Fragment>
      <MovieCardFull
        movieId={id}
      />
      <div className="page-content">
        <Catalog
          onCatalogCardClick={(movieId) => history.push(`/films/${movieId}`)}
        />
        <PageFooter />
      </div>
    </Fragment>
  );

};


export default withRouter(MoviePage);
