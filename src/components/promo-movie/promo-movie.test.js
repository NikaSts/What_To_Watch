import React from "react";
import renderer from "react-test-renderer";
import PromoMovie from './promo-movie.jsx';

const promoMovie = {
  id: `one`,
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingCount: 240,
  text: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave's friend and protege.`, `Gustave prides himself on providing first-class service to the hotel's guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave's lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.`],
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
};


it(`MoviesList should render correctly`, () => {
  const tree = renderer
      .create(<PromoMovie
        promoMovie={promoMovie}
      />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
