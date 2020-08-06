import React from 'react';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withVideo from './with-video';
import {func, element} from 'prop-types';

configure({
  adapter: new Adapter(),
});

const MockComponent = ({onMouseEnter, onMouseLeave, children}) => (
  <div
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}>
    {children}
  </div>
);

MockComponent.propTypes = {
  onMouseEnter: func .isRequired,
  onMouseLeave: func.isRequired,
  children: element.isRequired,
};
const noop = () => { };


it(`withActiveVideo should start playing video after timer onMouseEnter`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={noop}
        onMouseLeave={noop}
        src={``}
        previewImage={``}
      />
  );
  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.load = jest.fn();

  wrapper.instance().componentDidUpdate();

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);

  expect(wrapper.state(`isPlaying`)).toBe(false);
  expect(setTimeout).toHaveBeenCalledTimes(1);

  jest.runAllTimers();

  expect(wrapper.state(`isPlaying`)).toBe(true);
  expect(HTMLMediaElement.prototype.play).toHaveBeenCalledTimes(1);
});

it(`withActiveVideo should stop playing video on onMouseLeave`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={noop}
        onMouseLeave={noop}
        src={``}
        previewImage={``}
      />
  );

  HTMLMediaElement.prototype.load = jest.fn();
  wrapper.instance().componentDidUpdate();

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);
  wrapper.simulate(`mouseLeave`);

  expect(wrapper.state(`isPlaying`)).toBe(false);
  expect(HTMLMediaElement.prototype.load).toHaveBeenCalledTimes(1);
});

it(`withActiveVideo should clear timer onMouseLeave`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={noop}
        onMouseLeave={noop}
        src={``}
        previewImage={``}
      />
  );
  HTMLMediaElement.prototype.load = jest.fn();

  jest.useFakeTimers();

  wrapper.simulate(`mouseEnter`);
  wrapper.simulate(`mouseLeave`);

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});

it(`withActiveVideo should clear timer on componentWillUnmount`, () => {
  const MockComponentWrapped = withVideo(MockComponent);
  const wrapper = mount(
      <MockComponentWrapped
        onMouseEnter={noop}
        onMouseLeave={noop}
        src={``}
        previewImage={``}
      />
  );

  jest.useFakeTimers();

  wrapper.instance().componentWillUnmount();

  expect(clearTimeout).toHaveBeenCalledTimes(1);
});
