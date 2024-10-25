import { imageSetter } from "../../utils/imageHelper";

export const detailAdapter = (data, type = 'Pelicula') => {

    const backdropPath =  imageSetter(data.backdrop_path)
    const posterPath =  imageSetter(data.poster_path)

    if (type === 'Pelicula') {
      return {
        id: data.id,
        title: type = data.title,
        backdropPath:backdropPath,
        posterPath: posterPath,
        overview: data.overview,
        releaseDate: data.release_date,
        popularity: data.popularity,
        mediaType: "Pelicula",
        voteAverage: data.vote_average,
        genres: data.genres.map(genre => genre.name), // Extraer nombres de géneros
      };
    } else if (type === 'Tv Show') {
      return {
        id: data.id,
        title: data.name,
        backdropPath: backdropPath,
        posterPath: posterPath,
        overview: data.overview,
        releaseDate: data.first_air_date,
        popularity: data.popularity,
        mediaType: "Tv Show",
        voteAverage: data.vote_average,
        genres: data.genres.map(genre => genre.name),
      };
    }
  };