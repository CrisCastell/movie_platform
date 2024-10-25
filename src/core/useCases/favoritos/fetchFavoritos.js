import { addToFavoritos, getFavoritos, removeFromFavoritos } from "../../../adapters/mappers/favoritosAdapter";

export const addToFavoritesUseCase = async (movieId, type = "Pelicula") => {
  const sessionId = localStorage.getItem('authToken');
  const accountId = localStorage.getItem('accountId'); 

  try {
    if (sessionId && accountId) {

      return await addToFavoritos(type, accountId, movieId, sessionId);
    } else {
      throw new Error('No hay sesión activa para agregar a favoritos');
    }
  } catch (error) {
    throw new Error(error.message || 'Error al agregar a favoritos');
  }
};

export const removeFromFavoritosUseCase = async ({ type, accountId, sessionId, mediaId}) => {
  try {
    return await removeFromFavoritos(type, accountId, sessionId, mediaId);
  } catch (error) {
    throw new Error('Error al eliminar el elemento de favoritos.');
  }
};


// Obtener las películas o series favoritas del usuario
export const getFavoritosUseCase = async (type, accountId, sessionId) => {
    
  try {
    
    return await getFavoritos(type, accountId, sessionId);

  } catch (error) {
    throw new Error(error.message || 'Error al obtener favoritos');
  }
};

