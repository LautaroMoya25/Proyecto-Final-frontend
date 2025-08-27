import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto"> 
      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Buscar productos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-xl p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
        />
      </div>

      {searchTerm && filteredProducts.length === 0 && (
        <p className="text-center text-gray-500">
          No se encontraron productos que coincidan con "{searchTerm}"
        </p>
      )}

      {/* Grid de Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden transform hover:scale-105">
            <Link to={`/products/${product.id}`}>
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-contain p-4" 
              />
            </Link>
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                Añadir al carrito
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;