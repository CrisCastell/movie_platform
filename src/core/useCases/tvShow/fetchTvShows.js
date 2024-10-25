import { themoviedbApi } from '../../../adapters/api/themoviedbApi';
import { tvShowsMapper } from '../../../adapters/mappers/tvShowsMapper';


export const fetchTvShowsUseCase = async (params) => {

    const endpoint = params.query
          ? `/search/tv?query=${params.query}&page=${params.page}`
          : `discover/tv?page=${params.page}`;
    
    const response = await themoviedbApi.get(endpoint, {
      params: {
        language: 'es-AR',
        ...params,
      },
    });
    
    return {lista: tvShowsMapper(response.data), totalPages: response.data.total_pages}

  };
  