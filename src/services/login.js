import { get } from '../utils/request';

// eslint-disable-next-line import/prefer-default-export
export const login = (username, password) => get(`/api/login/${username}/${password}`);

export const getUser = (id) => get(`/api/users/${id}`);
