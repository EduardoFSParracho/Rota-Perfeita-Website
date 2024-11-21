import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Header from './pages/Header';
import CityPhotos from './pages/CityPhotos';
import Itineraries from './pages/Itineraries';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';

function App() {
  const navigate = useNavigate();

  const [cities, setCities] = useState([]); // armazenar as cidades
  const [isLoading, setIsLoading] = useState(true);
  const goToProfile = () => {
    navigate('/perfil');
  };

  useEffect(() => {
    const fetchCities = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cities/');
        setCities(response.data);
      } catch (error) {
        console.error("Erro ao buscar cidades:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCities();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <h1>Bem-vindo à Rota Perfeita</h1>
        <p>Descubra o teu próximo destino com a Rota Perfeita – descobre e crio o roteiro dos seus sonhos!</p>

        <section id="city-photos">

          {isLoading ? (
            <p>Carregando cidades...</p>
          ) : (
            <CityPhotos cities={cities} />
          )}
        </section>

        <section id="itineraries">
          <Itineraries />
        </section>


        <div className="cta-container" id="create-itinerary">
          <h1>Agora já podes criar o teu próprio roteiro!</h1>
          <button className="cta-button" onClick={goToProfile}>
            Cria o teu próprio roteiro
          </button>
        </div>

        <section id="about-us">
          <AboutUs />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Rota Perfeita. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
