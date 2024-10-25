import { themoviedbApi } from "../api/themoviedbApi";
import { peliculasMapper } from "./peliculasMapper";
import {tvShowsMapper} from "./tvShowsMapper";

export const addToFavoritos = async (type = 'Peliculas', accountId, movieId, sessionId) => {
  const mediaType = type === 'Peliculas'  ? 'movie' : 'tv';
  try {
    const response = await themoviedbApi.post(`/account/${accountId}/favorite`, {
      media_type: mediaType,
      media_id: movieId,
      favorite: true,
    }, {
      params: {
        session_id: sessionId,  // El session_id del usuario
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al agregar a favoritos');
  }
};


export const getFavoritos = async (type = 'Peliculas', accountId, sessionId) => {
    const mediaType = type === 'Peliculas'  ? 'movies' : 'tv';


    try {
      const response = await themoviedbApi.get(`/account/${accountId}/favorite/${mediaType}`, {
        params: {
          session_id: sessionId,
          language: "es-AR"
        },
      });

      const lista = type === "Peliculas" ? peliculasMapper(response.data) : tvShowsMapper(response.data) 
      return {lista: lista, totalPages: response.data.total_pages};  
    } catch (error) {
      throw new Error('Error al obtener las elementos favoritos');
    }
};


export const removeFromFavoritos = async (type = 'Pelicula', accountId, sessionId, mediaId) =>{

  const mediaType = type === 'Pelicula'  ? 'movie' : 'tv';

  try {
    const response = await themoviedbApi.post(`/account/${accountId}/favorite`, {
      media_type: mediaType,
      media_id: mediaId,
      favorite: false,
    }, {
      params: {
        session_id: sessionId,
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Error al agregar a favoritos');
  }

  return 

}