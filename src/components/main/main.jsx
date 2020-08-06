import React, {Fragment} from 'react';
import {connect} from 'react-redux';

import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import MovieCard from '../movie-card/movie-card';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getPromoMovie} from '../../store/movies/selectors';
import {Page} from '../../utils/consts';
import {promoMovieType} from '../../types';


const CatalogWithActiveItem = withActiveItem(Catalog);

const Main = ({promoMovie}) => (
  <Fragment>
    <MovieCard
      currentPage={Page.MAIN}
      promoMovie={promoMovie}
    />

    <div className="page-content">
      <CatalogWithActiveItem
        currentPage={Page.MAIN}
      />
      <PageFooter />
    </div>
  </Fragment>
);

Main.propTypes = {
  promoMovie: promoMovieType.isRequired,
};

const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});


export {Main};
export default connect(mapStateToProps)(Main);
