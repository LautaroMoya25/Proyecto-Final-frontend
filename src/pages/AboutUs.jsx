import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className="bg-gray-700 p-8 rounded-lg shadow-xl max-w-3xl w-full">
        <h1 className="text-3xl font-bold text-center text-white mb-6">Acerca de Nosotros</h1>
        
        <section className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Proyecto</h2>
          <p className="text-gray-300 leading-relaxed">
            Esta es una plataforma de comercio electrónico diseñada para brindar a los usuarios una experiencia de compra fluida.
            Nuestro proyecto se centra en ofrecer productos de alta calidad con una interfaz de usuario intuitiva.
          </p>
        </section>
        
        <section className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Audiencia Dirigida</h2>
          <p className="text-gray-300 leading-relaxed">
            Nuestra plataforma está diseñada para todos los usuarios que buscan productos de calidad con una interfaz intuitiva. 
            Tanto si eres un comprador experto en tecnología como si estás empezando a comprar online, nuestra plataforma es para todos.
          </p>
        </section>
        
        <section className="bg-gray-800 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Tecnologías Utilizadas</h2>
          <ul className="list-disc list-inside text-gray-300">
            <li>React - Para la interfaz</li>
            <li>React Router - Para la Navegación entre páginas</li>
            <li>Tailwind CSS - Para estilos adaptables</li>
          </ul>
        </section>
        
        <div className="text-center mt-6">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Volver al Inicio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
