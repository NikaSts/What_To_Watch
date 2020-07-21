import React, {Fragment} from 'react';
import MovieInfo from '../movie-info/movie-info.jsx';
import PageHeader from '../page-header/page-header.jsx';
import PageContent from '../page-content/page-content.jsx';
import PageFooter from '../page-footer/page-footer.jsx';
import Catalog from '../catalog/catalog.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import {promoMovieType} from '../../types';


const WrappedCatalog = withActiveItem(Catalog);

const Main = ({promoMovie: {title, genre, releaseDate, image}}) => (
  <Fragment>
    <section className="movie-card">
      <PageHeader
        imagePath={`img/bg-${image}.jpg`}
        title={title}
      />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={`img/${image}-poster.jpg`} alt={title} width="218" height="327" />
          </div>
          <MovieInfo
            title={title}
            genre={genre}
            releaseDate={releaseDate}
            isLogged={false}
          />
        </div>
      </div>
    </section>

    <PageContent>
      <WrappedCatalog
        isMain={true}
      />
      <PageFooter
        isMain={true}
      />
    </PageContent>
  </Fragment>
);

Main.propTypes = {
  promoMovie: promoMovieType.isRequired,
};

export default Main;
