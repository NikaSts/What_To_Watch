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
