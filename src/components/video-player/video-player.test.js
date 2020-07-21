import React from 'react';
import renderer from 'react-test-renderer';
import VideoPlayer from './video-player';

const src = `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`;
const poster = `img/the-grand-budapest-hotel.jpg`;

it(`VideoPlayer should render correctly`, () => {
  const tree = renderer
      .create(
          <VideoPlayer
            src={src}
            poster={poster}
            muted={true}
            isPlaying={false}
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />, {
            createNodeMock: () => {
              return {};
            }
          }).toJSON();

  expect(tree).toMatchSnapshot();
});
