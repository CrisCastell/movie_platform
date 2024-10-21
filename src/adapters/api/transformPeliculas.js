import { Pelicula } from '../../core/entities/Pelicula';


export const transformPeliculas = (data) => {
  return data.results.map(
    (pelicula) =>
      new Pelicula(
        pelicula.id,
        pelicula.title,
        pelicula.backdrop_path,
        pelicula.poster_path,
        pelicula.overview,
        pelicula.popularity,
        pelicula.release_date
      )
  );
};