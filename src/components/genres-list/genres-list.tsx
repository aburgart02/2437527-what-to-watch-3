import React, {ReactElement} from 'react';
import {FilmPreview} from '../../types/film-type';
import {useDispatch} from 'react-redux';
import {setGenre} from '../../store/action';
import {useAppSelector} from '../../hooks';
import {getAllGenres} from '../../helpers/get-all-genres';

const GenreNames : Record<string, string> = {
  'All genres': 'All genres',
  'Comedy': 'Comedies',
  'Crime': 'Crime',
  'Documentary': 'Documentary',
  'Drama': 'Dramas',
  'Horror': 'Horror',
  'Kids & Family': 'Kids & Family',
  'Romance': 'Romance',
  'Sci-Fi': 'Sci-Fi',
  'Thriller': 'Thrillers'
};

type GenreListProps = {
  filmPreviews: FilmPreview[];
};

function GenresList({filmPreviews} : GenreListProps): ReactElement {
  const dispatch = useDispatch();
  const [selectedGenre, setActiveGenre] = React.useState(useAppSelector((state) => state.genre));
  const genres : string[] = getAllGenres(filmPreviews);

  const onClick = (genre : string) => {
    setActiveGenre(genre);
    dispatch(setGenre({genre : genre}));
  };

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) => (
          <li key = {crypto.randomUUID()}
            className={`catalog__genres-item ${genre === selectedGenre ? 'catalog__genres-item--active' : ''}`}
          >
            <a onClick={() => onClick(genre)}
              className="catalog__genres-link"
            >{GenreNames[genre]}
            </a>
          </li>
        ))
      }
    </ul>
  );
}

export default GenresList;
