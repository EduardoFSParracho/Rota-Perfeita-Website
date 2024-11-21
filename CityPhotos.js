import React, { useState } from 'react';
import './CityPhotos.css';

function CityPhotos({ cities }) {
  const [selectedCity, setSelectedCity] = useState(null);
  const [showAllCities, setShowAllCities] = useState(false);

  const openPopup = (city) => {
    setSelectedCity(city);
  };

  const closePopup = () => {
    setSelectedCity(null);
  };

  const toggleShowAllCities = () => {
    setShowAllCities(!showAllCities);
  };

  const citiesToShow = showAllCities ? cities : cities.slice(0, 5);

  return (
    <div className="city-container">
      <h2>Cidades Disponíveis</h2>
      <div className="city-list">
        {citiesToShow.map((city) => (
          <div key={city.id} className="city-card" onClick={() => openPopup(city)}>
            <h3 className="city-name">{city.name}</h3>
            <p className="city-country">{city.country}</p>
            {city.photo && <img src={city.photo} alt={city.name} className="city-photo" />}
          </div>
        ))}
      </div>
      <button className="view-toggle-button" onClick={toggleShowAllCities}>
        {showAllCities ? 'Ver Menos' : 'Ver Mais'}
      </button>
      {selectedCity && (
        <div className="popup-overlay">
          <div className="popup">
            <span className="popup-close" onClick={closePopup}>&times;</span>
            <h3>{selectedCity.name}</h3>
            <p>{selectedCity.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CityPhotos;
