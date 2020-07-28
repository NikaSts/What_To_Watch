import NameSpace from '../name-space';
import {getGenresFromMovies} from '../../utils/funcs';


export const getMovies = (store) => store[NameSpace.DATA].movies;
export const getPromoMovie = (store) => store[NameSpace.DATA].promoMovie;
export const getActiveMovie = (store) => store[NameSpace.DATA].activeMovie;
export const getReviews = (store) => store[NameSpace.DATA].reviews;

export const getGenres = (store) => getGenresFromMovies(getMovies(store));
