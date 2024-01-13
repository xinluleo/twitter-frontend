import { get, post } from '../utils/request';

<<<<<<< Updated upstream
export const loginService = (username, password) => get(`/api/login/${username}/${password}`);

export const registerService = (username, password) => post(`/register/${username}/${password}`);
=======
// eslint-disable-next-line import/prefer-default-export
export const login = (username, password) => get(`/api/login/${username}/${password}`);

export const getUser = (id) => get(`/api/users/${id}`);
>>>>>>> Stashed changes
