import * as React from 'react';
import CatalogCard from '../catalog-card/catalog-card';
import withVideo from '../../hocs/with-video/with-video';
import {MovieType} from '../../types';

const CatalogCardWithVideo = withVideo(CatalogCard);

interface CatalogListProps {
  movies: Array<MovieType>;
}

const CatalogList: React.FC<CatalogListProps> = ({movies}: CatalogListProps) => {
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
          />
        );
      })}
    </div>
  );
};


export default CatalogList;
