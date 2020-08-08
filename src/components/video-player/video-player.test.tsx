import * as React from 'react';
import * as renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const title = ``;
const children = <div></div>;
const progress = 1;
const duration = 2;
const noop = () => {
  // Mock function for test props
};

describe(`VideoPlayer`, () => {
  it(`Should render correctly`, () => {
    const tree = renderer
      .create(
          <VideoPlayer
            title={title}
            progress={progress}
            duration={duration}
            isPlaying={false}
            onPlayButtonToggle={noop}
            onFullScreenButtonClick={noop}>
            {children}
          </VideoPlayer>, {
            createNodeMock: () => {
              return {};
            }
          })
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
