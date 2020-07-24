import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCardBig from '../movie-card-big/movie-card-big';


const WrappedCatalog = withActiveItem(Catalog);

const Main = () => (
  <Fragment>
    <MovieCardBig />

    <div className="page-content">
      <WrappedCatalog
        isMain={true}
      />
      <PageFooter
        isMain={true}
      />
    </div>
  </Fragment>
);

export default Main;
