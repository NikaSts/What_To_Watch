import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import MovieCardFull from '../movie-card-full/movie-card-full';
import Catalog from '../catalog/catalog';
import {number} from 'prop-types';
import {Page} from '../../utils/consts';


const MoviePage = ({id}) => {
  return (
    <Fragment>
      <MovieCardFull
        currentPage={Page.MOVIE_PAGE}
        id={id}
      />
      <div className="page-content">
        <Catalog
          currentPage={Page.MOVIE_PAGE}
          id={id}
        />
        <PageFooter />
      </div>
    </Fragment>
  );
};

MoviePage.propTypes = {
  id: number.isRequired,
};

export default MoviePage;
