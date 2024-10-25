import { themoviedbApi } from '../../../adapters/api/themoviedbApi';

// Función para obtener el detalle de la película o serie
export const fetchDetailUseCase = async (id, type = 'Pelicula', params) => {
  try {
    const endpoint = type === 'Pelicula' ? `/movie/${id}` : `/tv/${id}`;
    const response = await themoviedbApi.get(endpoint, {
        params: {
          language: 'es-AR',
          ...params,
        },
      });
    return response.data;
  } catch (error) {
    throw new Error('Error al obtener los detalles');
  }
};