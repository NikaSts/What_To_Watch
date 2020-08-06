import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import {configure, mount} from 'enzyme';
import {array, func} from 'prop-types';
import withShowMoreButton from './with-show-more-button';


configure({
  adapter: new Adapter(),
});

const MockListComponent = ({movies}) => <div movies={movies} />;
MockListComponent.propTypes = {
  movies: array.isRequired,
};
const MockButtonComponent = ({onShowMoreButtonClick}) => <button onClick={onShowMoreButtonClick} />;
MockButtonComponent.propTypes = {
  onShowMoreButtonClick: func.isRequired,
};

const movies = [
  {
    id: 1,
    title: `First Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``,
    isFavorite: false,
  },
  {
    id: 2,
    title: `Second Movie`,
    runTime: 1,
    genre: ``,
    releaseDate: 1,
    poster: ``,
    previewImage: ``,
    backgroundImage: ``,
    backgroundColor: ``,
    ratingScore: 1,
    ratingLevel: ``,
    ratingCount: 1,
    description: ``,
    director: ``,
    stars: [``],
    preview: ``,
    video: ``,
    isFavorite: false,
  },
];
const onShowMoreButtonClick = jest.fn();

const WrappedComponent = withShowMoreButton(MockListComponent);

it(`withShowMoreButton should call onShowMoreButtonClick callback on child button click`, () => {

  const wrapper = mount(
      <React.Fragment>
        <WrappedComponent
          movies={movies}
        />
        <MockButtonComponent
          onShowMoreButtonClick={onShowMoreButtonClick}
        />
      </React.Fragment>
  );

  wrapper.find(`button`).simulate(`click`);
  expect(onShowMoreButtonClick).toHaveBeenCalledTimes(1);
});
