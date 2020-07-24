import {nanoid} from 'nanoid';

export const promoMovie = {
  id: nanoid(10),
  title: `The Grand Budapest Hotel`,
  runTime: `1h 39m`,
  genre: `Drama`,
  releaseDate: 2014,
  image: `the-grand-budapest-hotel`,
  ratingScore: `8,9`,
  ratingLevel: `Bad`,
  ratingCount: 240,
  paragraphs: [`In the 1930s, the Grand Budapest Hotel is a popular European ski resort,
  presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy,
  becomes Gustave's friend and protege.`, `Gustave prides himself on providing
  first-class service to the hotel's guests, including satisfying the sexual needs
  of the many elderly women who stay there. When one of Gustave's lovers dies
  mysteriously, Gustave finds himself the recipient of a priceless painting and the
  chief suspect in her murder.`],
  director: `Wes Andreson`,
  stars: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  preview: `https://upload.wikimedia.org/wikipedia/commons/9/9e/Gibt_es_einen_Fahrstuhl_in_den_Weltraum_%28CC_BY_4.0%29_-_redub_NL.webm`,
};
