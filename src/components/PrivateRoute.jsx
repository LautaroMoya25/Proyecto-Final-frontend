import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useUser';
import { AUTH_STATUS } from '../constants';

const PrivateRoute = ({ children }) => {
  const { user, status } = useAuth();

  if (status === AUTH_STATUS.LOADING) {
    return <div className="text-center text-xl mt-8">Cargando...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default PrivateRoute;
