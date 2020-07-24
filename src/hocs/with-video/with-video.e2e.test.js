import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video';
import {func} from 'prop-types';

configure({
  adapter: new Adapter(),
});

const MockComponent = ({onMouseEnter, onMouseLeave}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
  </div>
);

MockComponent.propTypes = {
  onMouseEnter: func .isRequired,
  onMouseLeave: func.isRequired,
};


it(`withActiveVideo should start playing video after timer onMouseEnter`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => { }}
        src={``}
        poster={``}
      />);

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);

  expect(wrapper.state(`isPlaying`)).toBe(false);
  expect(setTimeout).toHaveBeenCalledTimes(1);

  jest.runAllTimers();

  expect(wrapper.state(`isPlaying`)).toBe(true);
});

it(`withActiveVideo should clear timer onMouseLeave`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => { }}
        src={``}
        poster={``}
      />);

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);
  wrapper.simulate(`mouseLeave`);

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});

it(`withActiveVideo should clear timer on componentWillUnmount`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={() => {}}
        onMouseLeave={() => { }}
        src={``}
        poster={``}
      />);

  jest.useFakeTimers();

  wrapper.instance().componentWillUnmount();

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});

/*
VideoPlayer tests

import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import VideoPlayer from './video-player';

configure({
  adapter: new Adapter(),
});


it(`VideoPlayer should play`, () => {
  const isPlaying = true;
  const player = mount(
      <VideoPlayer
        src={``}
        poster={``}
        muted={true}
        isPlaying={isPlaying}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  );

  HTMLMediaElement.prototype.play = jest.fn();

  player.instance().componentDidUpdate();

  const isPlay = player.instance().props.isPlaying;
  expect(isPlay).toBe(true);
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
});

it(`VideoPlayer should stop playing and start loading`, () => {
  const isPlaying = false;
  const player = mount(
      <VideoPlayer
        src={``}
        poster={``}
        muted={true}
        isPlaying={isPlaying}
        onMouseEnter={() => {}}
        onMouseLeave={() => {}}
      />
  );

  HTMLMediaElement.prototype.load = jest.fn();

  player.instance().componentDidUpdate();

  const isPlay = player.instance().props.isPlaying;
  expect(isPlay).toBe(false);
  expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
});

*/
