import { getRequestToken, validateRequestToken, getSessionId, getAccountId } from '../../../adapters/mappers/authAdapter'


export const login = async (username, password) => {
  try {
    // Paso 1: Obtener el request_token
    const requestToken = await getRequestToken();

    // Paso 2: Validar el request_token con las credenciales del usuario
    await validateRequestToken(username, password, requestToken);

    // Paso 3: Obtener el session_id
    const sessionId = await getSessionId(requestToken);
    localStorage.setItem('authToken', sessionId);  // Guarda el session_id en localStorage

    // Paso 4: Obtener el account_id
    const accountId = await getAccountId(sessionId);
    localStorage.setItem('accountId', accountId);  // Guarda el account_id en localStorage

    return { sessionId, accountId };
  } catch (error) {
    throw new Error('Error durante el inicio de sesión');
  }
};
