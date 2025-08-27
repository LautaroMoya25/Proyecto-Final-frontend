import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useUser";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };

  return (
    <header className="bg-gray-900 text-white p-4 shadow-lg fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png" 
            alt="Logo de la tienda" 
            className="h-8 w-8 rounded-full"
          />
          <h1 className="text-xl font-bold">Mi Tienda</h1>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            {user ? (
              <>
                <li>
                  <Link to="/" className="hover:text-gray-300 transition-colors">Inicio</Link>
                </li>
                <li>
                  <Link to="/dashboard" className="hover:text-gray-300 transition-colors">Dashboard</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-300 transition-colors">Acerca de</Link>
                </li>
                <li>
                  <button 
                    onClick={handleLogout} 
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                  >
                    Cerrar sesión
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="hover:text-gray-300 transition-colors">Login</Link>
                </li>
                <li>
                  <Link to="/registrate" className="hover:text-gray-300 transition-colors">Registrate</Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-gray-300 transition-colors">Acerca de</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
