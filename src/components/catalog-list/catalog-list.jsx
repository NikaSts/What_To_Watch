import React from 'react';
import CatalogCard from '../catalog-card/catalog-card';
import {arrayOf, func} from 'prop-types';
import {cardMovieType} from '../../types';
import withVideo from '../../hocs/with-video/with-video';
// import {AppRoute} from '../../utils/consts';


const CatalogCardWithVideo = withVideo(CatalogCard);

const CatalogList = ({movies, onCatalogCardClick}) => {
  return (
    <div className="catalog__movies-list">
      {movies.map((movie) => {
        const {id, title, previewImage, preview} = movie;
        return (
          <CatalogCardWithVideo
            key={id}
            id={id}
            title={title}
            src={preview}
            previewImage={previewImage}
            onCatalogCardClick={onCatalogCardClick}
          />
        );
      })}
    </div>
  );
};

CatalogList.propTypes = {
  movies: arrayOf(cardMovieType).isRequired,
  onCatalogCardClick: func.isRequired,
};

export default CatalogList;
