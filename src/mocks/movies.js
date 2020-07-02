import {nanoid} from 'nanoid';
import {
  getRandomNumber, getRandomItem, getUrlFromTitle, getRandomItems, getRatingLevel, suffleItems
} from '../utils/funcs';


const titles = [`Fantastic Beasts The Crimes of Grindelwald`, `Bohemian Rhapsody`, `Macbeth`,
  `Aviator`, `We need to talk about Kevin`, `What We Do in the Shadows`, `Revenant`, `Johnny
  English`, `Shutter Island`, `Pulp Fiction`, `No Country for Old Men`, `Snatch`, `Moonrise
  Kingdom`, `Seven Years in Tibet`, `Midnight Special`, `War of the Worlds`, `Dardjeeling
  Limited`, `Orlando`, `Mindhunter`, `Midnight Special`];
const genres = [`Comedia`, `Crime`, `Documentary`, `Drama`, `Horror`, `Kids & Family`,
  `Romance`, `Sci-Fi`, `Thrillers`];
const directors = [`Wes Andreson`, `Steven Spielberg`, `Ridley Scott`, `Tim Burton`,
  `Christopher Nolan`, `Robert Zemeckis`, `James Cameron`];
const actors = [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Johnny Depp`,
  `Al Pacino`, `Charlize Theron`, `Robert De Niro`, `Brad Pitt`, `Angelina Jolie`, `Leonardo
DiCaprio`, `Tom Cruise`, `Kate Winslet`];
const previews = [`https://upload.wikimedia.org/wikipedia/commons/b/bb/2020-06-19_%E2%80%94_Fechner_monument%2C_Diepenheim.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/5/56/2020-06-19_%E2%80%94_herman_de_vries%2C_de_waterlelies_%28Fechner-monument%2C_Diepenheim%29.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/a/aa/2020-06_Autostrada_A4_%2804%29_-_MOP_M%C5%82y%C5%84ski_Staw.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/9/9e/Gibt_es_einen_Fahrstuhl_in_den_Weltraum_%28CC_BY_4.0%29_-_redub_NL.webm`,
  `https://upload.wikimedia.org/wikipedia/commons/f/f4/Fly-through_tunnelbuis_RijnlandRoute.webm`];


export const movies = titles.map((title) => {
  const score = getRandomNumber(10, 100);

  return ({
    id: nanoid(10),
    title,
    genre: getRandomItem(genres),
    releaseDate: getRandomNumber(2000, 2021),
    image: getUrlFromTitle(title),
    ratingScore: score.toString().split(``).join(`,`),
    ratingLevel: getRatingLevel(score),
    ratingCount: getRandomNumber(1, 500),
    text: [`Ясность нашей позиции очевидна: высококачественный прототип будущего проекта
    в значительной степени обусловливает важность глубокомысленных рассуждений. Экономическая
    повестка сегодняшнего дня однозначно определяет каждого участника как способного принимать
    собственные решения касаемо форм воздействия.`, `С учётом сложившейся международной
    обстановки, синтетическое тестирование говорит о возможностях распределения внутренних
    резервов и ресурсов. Лишь независимые государства, инициированные исключительно синтетически,
    подвергнуты целой серии независимых исследований. В своём стремлении повысить качество жизни,
    они забывают, что граница обучения кадров способствует повышению качества первоочередных
    требований.`,
    `В целом, конечно, укрепление и развитие внутренней структуры не даёт нам иного выбора,
    кроме определения существующих финансовых и административных условий.`],
    director: getRandomItem(directors),
    starring: getRandomItems(suffleItems(actors)),
    preview: getRandomItem(previews),
  });
});
