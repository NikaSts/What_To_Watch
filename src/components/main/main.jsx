import React, {Fragment} from 'react';
import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import MovieCardBig from '../movie-card-big/movie-card-big';
import {func, string} from 'prop-types';


const WrappedCatalog = withActiveItem(Catalog);

const Main = ({onSignInButtonClick, authorizationStatus}) => (
  <Fragment>
    <MovieCardBig
      onSignInButtonClick={onSignInButtonClick}
      authorizationStatus={authorizationStatus}
    />

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

Main.propTypes = {
  onSignInButtonClick: func.isRequired,
  authorizationStatus: string.isRequired,
};

export default Main;
