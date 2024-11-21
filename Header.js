import React from 'react';

function Header() {
  return (
    <header className="header">
      <img src="/1.png" alt="Rota Perfeita Logo" className="logo" />
      <nav>
        <ul>
          <li><a href="#city-photos">Cidades</a></li>
          <li><a href="#itineraries">Roteiros</a></li>
          <li><a href="#create-itinerary">Criar Roteiro</a></li>
          <li><a href="#about-us">Sobre Nós</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
