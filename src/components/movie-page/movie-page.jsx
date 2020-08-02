import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import {withRouter} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';
import {number} from 'prop-types';


const MoviePage = ({id}) => {
  return (
    <Fragment>
      <MovieCardFull
        movieId={id}
      />
      <div className="page-content">
        <Catalog
          onCatalogCardClick={(movieId) => history.push(`${AppRoute.MOVIE_PAGE}/${movieId}`)}
        />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  id: number.isRequired,
};

export default withRouter(MoviePage);
