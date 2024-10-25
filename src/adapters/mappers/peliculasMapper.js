import { imageSetter } from "../../utils/imageHelper";


export const peliculasMapper = (data) => {
  console.log("Entrando a pelicuals")
  return data.results.map((pelicula) => ({
      id: pelicula.id,
      title: pelicula.title,
      backdropPath: imageSetter(pelicula.backdrop_path),
      posterPath: imageSetter(pelicula.poster_path),
      overview: pelicula.overview,
      popularity: pelicula.popularity,
      releaseDate: pelicula.release_date,
      voteAverage: pelicula.vote_average,
      mediaType: "Pelicula"
  }));
};