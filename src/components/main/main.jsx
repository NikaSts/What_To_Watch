import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCard from '../movie-card/movie-card';
import {Page} from '../../utils/consts';


const CatalogWithActiveItem = withActiveItem(Catalog);

const Main = () => {
  return (
    <Fragment>
      <MovieCard
        currentPage={Page.MAIN}
      />

      <div className="page-content">
        <CatalogWithActiveItem
          currentPage={Page.MAIN}
        />
        <PageFooter />
      </div>
    </Fragment>
  );
};

export default Main;
