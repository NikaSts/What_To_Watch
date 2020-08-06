import React from "react";
import {mount, configure} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {func} from 'prop-types';
import withFormHandlers from "./with-form-handlers";

configure({
  adapter: new Adapter()
});

const MockComponent = ({onCommentChange, onRatingChange, onFormSubmit}) => {
  return (
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
};

MockComponent.propTypes = {
  onCommentChange: func.isRequired,
  onRatingChange: func.isRequired,
  onFormSubmit: func.isRequired,
};

const MockComponentWrapped = withFormHandlers(MockComponent);
const movie = {
  id: 1,
  title: ``,
  posterInfo: ``,
  background: ``,
  backgroundColor: ``
};
const id = 1;
const onCommentChange = jest.fn();
const onRatingChange = jest.fn();
const noop = () => { };

it(`withFormHandlers updates comment correctly`, () => {

  const wrapper = mount(
      <MockComponentWrapped
        id={id}
        movie={movie}
        onCommentChange={onCommentChange}
        onRatingChange={onRatingChange}
        onFormSubmit={noop}
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
        movie={movie}
        onCommentChange={onCommentChange}
        onRatingChange={onRatingChange}
        onFormSubmit={noop}
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
