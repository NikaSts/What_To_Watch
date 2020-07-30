import React from 'react';
import CatalogCard from '../catalog-card/catalog-card';
import {arrayOf, func} from 'prop-types';
import {cardMovieType} from '../../types';
import withVideo from '../../hocs/with-video/with-video';


const WrappedCatalogCard = withVideo(CatalogCard);

const CatalogList = ({movies, onCatalogCardClick}) => (
  <div className="catalog__movies-list">
    {movies.map((movie) => {
      const {id, title, previewImage, preview} = movie;
      return (
        <WrappedCatalogCard
          key={id}
          title={title}
          src={preview}
          previewImage={previewImage}
          onCatalogCardClick={() => onCatalogCardClick(movie)}
        />
      );
    })}
  </div>
);

CatalogList.propTypes = {
  movies: arrayOf(cardMovieType.isRequired).isRequired,
  onCatalogCardClick: func.isRequired,
};

export default CatalogList;
