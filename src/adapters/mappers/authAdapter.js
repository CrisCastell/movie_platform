
import { themoviedbApi } from '../api/themoviedbApi';

// Obtener el request token
export const getRequestToken = async () => {
  try {
    const response = await themoviedbApi.get('/authentication/token/new');
    return response.data.request_token;
  } catch (error) {
    throw new Error('Error al obtener request_token');
  }
};

// Validar el request token con nombre de usuario y contraseña
export const validateRequestToken = async (username, password, requestToken) => {
  try {
    await themoviedbApi.post('/authentication/token/validate_with_login', {
      username,
      password,
      request_token: requestToken
    });
  } catch (error) {
    throw new Error('Error al validar el request_token');
  }
};

// Obtener el session_id
export const getSessionId = async (requestToken) => {
  try {
    const response = await themoviedbApi.post('/authentication/session/new', {
      request_token: requestToken
    });
    return response.data.session_id;
  } catch (error) {
    throw new Error('Error al obtener session_id');
  }
};

// Obtener el account_id
export const getAccountId = async (sessionId) => {
  try {
    const response = await themoviedbApi.get('/account', {
      params: {
        session_id: sessionId
      }
    });
    return response.data.id;  // Devuelve el account_id
  } catch (error) {
    throw new Error('Error al obtener el account_id');
  }
};
