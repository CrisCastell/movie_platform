import { themoviedbApi } from '../../../adapters/api/themoviedbApi';
import { peliculasMapper } from '../../../adapters/mappers/peliculasMapper';


export const fetchPeliculasUseCase = async (params) => {

  const endpoint = params.query
        ? `/search/movie?query=${params.query}&page=${params.page}`
        : `discover/movie?page=${params.page}`;
  
  const response = await themoviedbApi.get(endpoint, {
    params: {
      language: 'es-AR',
      ...params,
    },
  });
  return {lista: peliculasMapper(response.data), totalPages: response.data.total_pages}
};
