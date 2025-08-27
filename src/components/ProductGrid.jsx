import React, { useState } from 'react';
import "../styles/responsive.css";

const ProductGrid = ({ products }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
  return (
    <div className="product-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && filteredProducts.length === 0 && (
          <p className="no-results">No products found matching "{searchTerm}"</p>
        )}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button>añadir al carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;