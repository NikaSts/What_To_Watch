import * as React from 'react';
import {connect} from 'react-redux';

import PageFooter from '../page-footer/page-footer';
import Catalog from '../catalog/catalog';
import MovieCard from '../movie-card/movie-card';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {getPromoMovie} from '../../store/movies/selectors';
import {Page} from '../../utils/consts';
import {MovieType} from '../../types';

const CatalogWithActiveItem = withActiveItem(Catalog);

interface MainProps {
  promoMovie: MovieType;
}

const Main: React.FC<MainProps> = ({promoMovie}: MainProps) => (
  <React.Fragment>
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
  </React.Fragment>
);


const mapStateToProps = (state) => ({
  promoMovie: getPromoMovie(state),
});


export {Main};
export default connect(mapStateToProps)(Main);
