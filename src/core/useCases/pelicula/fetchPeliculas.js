import { themoviedbApi } from '../../../adapters/api/themoviedbApi';
import { peliculasMapper } from '../../../adapters/mappers/peliculasMapper';


export const fetchPeliculasUseCase = async () => {
  const response = await themoviedbApi.get('/discover/movie');
  return peliculasMapper(response.data)
};
