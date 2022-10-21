import { MovieListProps } from "../interfaces";
import { MovieCard } from "./MovieCard";

export function MovieList({ movies }: MovieListProps) {
  return (
    <main>
      <div className="movies-list">
        {movies.map(movie => (
          <MovieCard 
            key ={ movie.imdbID } 
            title={ movie.Title } 
            poster={ movie.Poster } 
            runtime={ movie.Runtime } 
            rating={ movie.Ratings[0].Value } 
          />
        ))}
      </div>
    </main>
  )
}