export interface MovieType {
  id: number;
  title: string;
  runTime: number;
  genre: string;
  releaseDate: number;
  poster: string;
  previewImage: string;
  backgroundImage: string;
  backgroundColor: string;
  ratingScore: number;
  ratingLevel?: string;
  ratingCount: number;
  description: string;
  director: string;
  stars: Array<string>;
  preview: string;
  video: string;
  isFavorite: boolean;
}

export interface UserDataType {
  id: number;
  name: string;
  email: string;
  avatar: string;
}

export interface ReviewType {
  id: number;
  user: {
    id: number;
    name: string;
  };
  rating: number;
  comment: string;
  date: string;
}
