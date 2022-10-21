import { GenreResponseProps } from "../interfaces";

export function ContentHeader({ title }: Pick<GenreResponseProps, 'title'>) {
  return (
    <header>
          <span className="category">
            Categoria:<span>{ title }</span>
          </span>
        </header>
  )
}