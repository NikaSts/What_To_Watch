import React from 'react';
import renderer from 'react-test-renderer';
import {Router} from 'react-router-dom';
import history from '../../history';
import CatalogList from './catalog-list';

const movies = [
  {
    id: 1,
    title: `Fantastic Beasts: The Crimes of Grindelwald`,
    previewImage: `fantastic-beasts-the-crimes-of-grindelwald`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: 2,
    title: `Bohemian Rhapsody`,
    previewImage: `bohemian-rhapsody`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: 3,
    title: `Macbeth`,
    previewImage: `macbeth`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: 4,
    title: `Aviator`,
    previewImage: `aviator`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: 5,
    title: `We need to talk about Kevin`,
    previewImage: `we-need-to-talk-about-kevin`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
  {
    id: 6,
    title: `What We Do in the Shadows`,
    previewImage: `what-we-do-in-the-shadows`,
    preview: `https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  },
];
const activeGenre = `All genres`;

it(`CatalogList should render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <CatalogList
            movies={movies}
            activeGenre={activeGenre}
            onCatalogCardClick={() => { }}
            currentPage={`main`}
          />
        </Router>
    )
      .toJSON();

  expect(tree).toMatchSnapshot();
});
