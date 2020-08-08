import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withShowMoreButton from './with-show-more-button';
import {MovieType} from '../../types';

configure({
  adapter: new Adapter(),
});

interface MockListComponentProps {
  movies: Array<MovieType>;
}

const MockListComponent = ({movies}: MockListComponentProps) => <div movies={movies} />;

interface MockButtonComponentProps {
  onShowMoreButtonClick: () => void;
}

const MockButtonComponent = ({
  onShowMoreButtonClick
}: MockButtonComponentProps) => <button onClick={onShowMoreButtonClick} />;


const movies: MovieType = [
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
