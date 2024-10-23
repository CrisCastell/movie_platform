import { themoviedbApi } from '../../../adapters/api/themoviedbApi';
import { tvShowsMapper } from '../../../adapters/mappers/tvShowsMapper';


export const fetchTvShowsUseCase = async () => {
    const response = await themoviedbApi.get('/discover/tv');
    return tvShowsMapper(response.data)
};
