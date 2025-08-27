import React from 'react';

const ValidatedForm = ({ formData, errors, handleChange, handleSubmit, submitText, disabled }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
          Nombre de Usuario
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.username ? 'border-red-500' : ''}`}
          id="username"
          type="text"
          placeholder="Nombre de usuario"
          name="username"
          value={formData.username || ''}
          onChange={handleChange}
        />
        {errors.username && <p className="text-red-500 text-xs italic mt-1">{errors.username}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.email ? 'border-red-500' : ''}`}
          id="email"
          type="email"
          placeholder="email@ejemplo.com"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
        />
        {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline ${errors.password ? 'border-red-500' : ''}`}
          id="password"
          type="password"
          placeholder="************"
          name="password"
          value={formData.password || ''}
          onChange={handleChange}
        />
        {errors.password && <p className="text-red-500 text-xs italic mt-1">{errors.password}</p>}
      </div>

      <div className="flex items-center justify-center">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
          type="submit"
          disabled={disabled}
        >
          {submitText}
        </button>
      </div>
    </form>
  );
};

export default ValidatedForm;