
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  GUEST: 'guest'
};

export const AUTH_STATUS = {
  LOGGED_IN: 'logged_in',
  LOGGED_OUT: 'logged_out',
  LOADING: 'loading'
};

export const API_ENDPOINTS = {
  USERS: 'https://fakestoreapi.com/users',
  LOGIN: 'https://fakestoreapi.com/auth/login',
  PRODUCTS: 'https://fakestoreapi.com/products'
};

export const ERROR_MESSAGES = {
  LOGIN_FAILED: 'Error al iniciar sesión. Verifica tus credenciales.',
  NETWORK_ERROR: 'Error de conexión. Intenta nuevamente.',
  INVALID_CREDENTIALS: 'Credenciales inválidas.',
};

export const VALIDATION_RULES = {
  PASSWORD_MIN_LENGTH: 6,
  USERNAME_MIN_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
};

export default {
  USER_ROLES,
  AUTH_STATUS,
  API_ENDPOINTS,
  ERROR_MESSAGES,
  VALIDATION_RULES
};