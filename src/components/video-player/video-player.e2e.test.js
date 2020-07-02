import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
  adapter: new Adapter(),
});

it(`SetTimeout is called`, () => {
  jest.useFakeTimers();
  const cb = jest.fn();
  setTimeout(cb, 1000);

  expect(setTimeout).toHaveBeenCalledTimes(1);
  expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});

it(`Timer calls the callback after 1 second`, () => {
  const cb = jest.fn();
  setTimeout(cb, 1000);
  expect(cb).not.toBeCalled();

  jest.runAllTimers();
  expect(cb).toBeCalled();
  expect(cb).toHaveBeenCalledTimes(1);
});
