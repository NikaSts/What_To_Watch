import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCard from '../movie-card/movie-card';


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
        />
        <PageFooter
          isMain={true}
        />
      </div>
    </Fragment>
  );
};

export default Main;
