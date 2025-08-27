import React, { useState } from 'react';
import UserContext from './UserContext';
import { AUTH_STATUS, ERROR_MESSAGES } from '../constants';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [status, setStatus] = useState(AUTH_STATUS.LOGGED_OUT);

  const register = async (userData) => {
    try {
      setStatus(AUTH_STATUS.LOADING);
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData)
      });
      
      if (!response.ok) throw new Error(ERROR_MESSAGES.REGISTRATION_FAILED);
      
      const data = await response.json();
      setUser(data);
      setStatus(AUTH_STATUS.LOGGED_IN);
      return { success: true, data };
    } catch (error) {
      setStatus(AUTH_STATUS.LOGGED_OUT);
      return { success: false, error: error.message };
    }
  };

  const login = async (username, password) => {
    try {
      setStatus(AUTH_STATUS.LOADING);
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password })
      });
      
      if (!response.ok) throw new Error(ERROR_MESSAGES.LOGIN_FAILED);
      
      const data = await response.json();
      if (data.token) {
        setUser({ username });
        setStatus(AUTH_STATUS.LOGGED_IN);
        return { success: true, data };
      } else {
        throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);
      }
    } catch (error) {
      setStatus(AUTH_STATUS.LOGGED_OUT);
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    setStatus(AUTH_STATUS.LOGGED_OUT);
  };

  return (
    <UserContext.Provider value={{
      user,
      status,
      register,
      login,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;