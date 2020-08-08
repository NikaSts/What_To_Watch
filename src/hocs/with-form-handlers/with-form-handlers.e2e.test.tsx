import * as React from 'react';
import {mount, configure} from "enzyme";
import * as Adapter from "enzyme-adapter-react-16";
import withFormHandlers from "./with-form-handlers";

configure({
  adapter: new Adapter()
});

interface WrapperProps {
  isValid: boolean;
  onFormSubmit: () => void;
  onCommentChange: () => void;
  onRatingChange: () => void;
}

const MockComponent: React.FC<WrapperProps> = ({
  onCommentChange, onRatingChange, onFormSubmit
}: WrapperProps) => (
  <form
    onSubmit={onFormSubmit}>
    <textarea
      onChange={onCommentChange}
      value=""></textarea>
    <input
      onChange={onRatingChange}
      value="3" />
  </form>
);


const MockComponentWrapped = withFormHandlers(MockComponent);
const id = 1;
const onCommentChange = jest.fn();
const onRatingChange = jest.fn();
const isValid = true;
const noop = () => {
  // Mock function for test props
};

it(`withFormHandlers updates comment correctly`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        id={id}
        onCommentChange={onCommentChange}
        onRatingChange={onRatingChange}
        onFormSubmit={noop}
        isValid={isValid}
      />
  );

  const input = wrapper.find(`textarea`);
  input.simulate(`change`, {
    target: {
      value: `comment`,
    },
  });

  expect(wrapper.state(`comment`)).toEqual(`comment`);
});

it(`withFormHandlers updates rating correctly`, () => {
  const wrapper = mount(
      <MockComponentWrapped
        id={id}
        onCommentChange={onCommentChange}
        onRatingChange={onRatingChange}
        onFormSubmit={noop}
        isValid={isValid}
      />
  );

  const input = wrapper.find(`input`);

  input.simulate(`change`, {
    target: {
      value: `2`,
    },
  });

  expect(wrapper.state().rating).toEqual(`2`);
});
