import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCard from '../movie-card/movie-card';
import {withRouter} from 'react-router-dom';
import {AppRoute} from '../../utils/consts';


const CatalogWithActiveItem = withActiveItem(Catalog);

const Main = () => {
  return (
    <Fragment>
      <MovieCard
        isMain={true}
      />

      <div className="page-content">
        <CatalogWithActiveItem
          isMain={true}
          onCatalogCardClick={(movieId) => history.push(`${AppRoute.MOVIE_PAGE}/${movieId}`)}
        />
        <PageFooter
          isMain={true}
          onCatalogCardClick={(movieId) => history.push(`${AppRoute.MOVIE_PAGE}/${movieId}`)}
        />
      </div>
    </Fragment>
  );
};

export default withRouter(Main);
