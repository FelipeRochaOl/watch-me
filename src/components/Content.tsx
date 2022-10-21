import { ContentProps } from '../interfaces';
import { ContentHeader } from './ContentHeader';
import { MovieList } from './MovieList';

import '../styles/content.scss';

export function Content({ movies, selectedGenre }: ContentProps) {
  return (
    <div className="container">
        <ContentHeader title={ selectedGenre.title } />
        <MovieList movies={ movies } />
    </div>
  )
}