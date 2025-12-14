export const getToken = () => {
  return localStorage.getItem('token');
};

export const setToken = (token) => {
  localStorage.setItem('token', token);
};

export const removeToken = () => {
  localStorage.removeItem('token');
};

export const getUsername = () => {
  return localStorage.getItem('username');
};

export const setUsername = (username) => {
  localStorage.setItem('username', username);
};

export const getRole = () => {
  return localStorage.getItem('role');
};

export const setRole = (role) => {
  localStorage.setItem('role', role);
};

export const clearAuth = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('username');
  localStorage.removeItem('role');
};

export const isAuthenticated = () => {
  return !!getToken();
};

export const isAdmin = () => {
  return getRole() === 'ADMIN';
};


