import { themoviedbApi } from '../../../adapters/api/themoviedbApi';

export const fetchMediaWithCache = async (categoria, mapper) => {
  const cachedData = localStorage.getItem(`${categoria}Data`);
  if (cachedData) {
    return JSON.parse(cachedData);
  }

  try {

    const params = { language: 'es-AR' }
    const [populares, tendencias, mejorValoradas] = await Promise.all([
      themoviedbApi.get(`/${categoria}/popular`, { params: params}),
      themoviedbApi.get(`/trending/${categoria}/day`, { params: params}),
      themoviedbApi.get(`/${categoria}/top_rated`, { params: params})
    ]);


    // datos ens diferentes categorías
    const data = {
      populares: mapper(populares.data),
      tendencias: mapper(tendencias.data),
      mejorValoradas: mapper(mejorValoradas.data)
    };


    // Cachea los datos para optimizar futuras solicitudes
    localStorage.setItem(`${categoria}Data`, JSON.stringify(data));

    return data;
  } catch (error) {
    throw error;
  }
};


