import { imageSetter } from '../../utils/imageHelper';

export const tvShowsMapper = (data) => {
  return data.results.map((tvShow) => ({
      id: tvShow.id,
      title: tvShow.name,
      backdropPath: imageSetter(tvShow.backdrop_path),
      posterPath: imageSetter(tvShow.poster_path),
      overview: tvShow.overview,
      popularity: tvShow.popularity,
      releaseDate: tvShow.first_air_date,
      voteAverage: tvShow.vote_average,
      mediaType: "Tv Show"
    })
  );
};