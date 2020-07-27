import NameSpace from '../name-space';


export const getMovies = (store) => store[NameSpace.DATA].movies;
export const getPromoMovie = (store) => store[NameSpace.DATA].promoMovie;
export const changeActiveMovie = (store) => store[NameSpace.DATA].activeMovie;

