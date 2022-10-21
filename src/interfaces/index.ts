export interface GenreResponseProps {
  id: number;
  name: "action" | "comedy" | "documentary" | "drama" | "horror" | "family";
  title: string;
}

export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export interface MovieListProps {
  movies: MovieProps[];
}

export interface SidebarProps {
  genres: GenreResponseProps[];
  setSelectedGenreId: Function;
  selectedGenreId: number;
}

export interface ContentProps {
  movies: MovieProps[];
  selectedGenre: GenreResponseProps;
}
