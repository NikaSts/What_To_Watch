import * as React from 'react';
import {mount, configure} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {func, element} from 'prop-types';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import withFullScreen from './with-full-screen';

configure({
  adapter: new Adapter(),
});
const mockStore = configureStore([]);

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
const id = 1;
const store = mockStore({
  MOVIES: {
    movies,
  },
});

const MockComponent = ({onPlayButtonToggle, onFullScreenButtonClick}) => (
  <div>
    <button
      className="player__play"
      onClick={onPlayButtonToggle} />
    <button
      className="player__full-screen"
      onClick={onFullScreenButtonClick}/>
  </div>
);

MockComponent.propTypes = {
  onPlayButtonToggle: func.isRequired,
  onFullScreenButtonClick: func.isRequired,
  children: element.isRequired,
};

const MockComponentWrapped = withFullScreen(MockComponent);
const onPlayButtonToggle = jest.fn();
const onFullScreenButtonClick = jest.fn();

it(`withFullScreen should start/stop playing video on play button click`, () => {
  const wrapper = mount(
      <Provider store={store}>
        <MockComponentWrapped
          id={id}
          onPlayButtonToggle={onPlayButtonToggle}
          onFullScreenButtonClick={onFullScreenButtonClick}
          src={``}
          backgroundImage={``}
        />
      </Provider>
  );

  const wrappedComponent = wrapper.find(`Wrapper`);
  wrappedComponent.instance().componentDidMount();

  expect(wrappedComponent.state(`isPlaying`)).toBe(true);

  const playButton = wrappedComponent.find(`button.player__play`);
  playButton.simulate(`click`);

  wrappedComponent.instance().componentDidUpdate();

  expect(wrappedComponent.state(`isPlaying`)).toBe(false);
});
