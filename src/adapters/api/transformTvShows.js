import { TvShow } from '../../core/entities/TvShow';


export const transformTvShows = (data) => {
  return data.results.map(
    (tvShow) =>
      new TvShow(
        tvShow.id,
        tvShow.name,
        tvShow.backdrop_path,
        tvShow.poster_path,
        tvShow.overview,
        tvShow.popularity,
        tvShow.first_air_date
      )
  );
};