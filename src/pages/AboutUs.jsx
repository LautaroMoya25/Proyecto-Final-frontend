import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="about-container">
      <h1>Acerca de Nosotros</h1>
      
      <section className="about-section">
        <h2>Projecto</h2>
        <p>
          Esta es una plataforma de comercio electrónico diseñada para brindar a los usuarios una experiencia de compra fluida.
          Nuestro proyecto se centra en ofrecer productos de alta calidad con una interfaz de usuario intuitiva.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Audiencia dirigida</h2>
        <p>
          Nuestra plataforma está diseñada para todos los usuarios que buscan productos de calidad con una interfaz intuitiva. 
          Tanto si eres un comprador experto en tecnología como si estás empezando a comprar online, nuestra plataforma es para todos.
        </p>
      </section>
      
      <section className="about-section">
        <h2>Technologias utilizadas</h2>
        <ul>
          <li>React - Para la interfaz</li>
          <li>React Router - Para la Navegacion entre paginas</li>
          <li>CSS - Para estilos adaptables</li>
        </ul>
      </section>
      
      <Link to="/" className="back-link">← Vuelta al Menu</Link>
    </div>
  );
};

export default AboutUs;