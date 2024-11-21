
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Itineraries() {
  const [itineraries, setItineraries] = useState([
    {
      city: '🗼Paris',
      days: [
        {
          day: 1,
          activities: [
            'Visita à Torre Eiffel',
            'Cruzeiro pelo Rio Sena',
            'Jantar no Quartier Latin'
          ]
        },
        {
          day: 2,
          activities: [
            'Museu do Louvre',
            'Passeio pelos Champs-Élysées',
            'Arco do Triunfo'
          ]
        },
        {
          day: 3,
          activities: [
            'Montmartre e Sacré-Cœur',
            'Museu d´Orsay',
            'Passeio pelo Marais'
          ]
        }
      ]
    },
    {
      city: '🇪🇸Madrid',
      days: [
        {
          day: 1,
          activities: [
            'Palácio Real',
            'Plaza Mayor',
            'Tapas na Calle Cava Baja'
          ]
        },
        {
          day: 2,
          activities: [
            'Museu do Prado',
            'Parque del Retiro',
            'Flamenco no Corral de la Morería'
          ]
        },
        {
          day: 3,
          activities: [
            'Puerta del Sol e Gran Vía',
            'Museu Reina Sofia',
            'Passeio por Malasaña'
          ]
        }
      ]
    },
    {
      city: '🏛️Roma',
      days: [
        {
          day: 1,
          activities: [
            'Coliseu',
            'Fórum Romano',
            'Monte Palatino'
          ]
        },
        {
          day: 2,
          activities: [
            'Museus do Vaticano',
            'Praça de São Pedro',
            'Basílica de São Pedro'
          ]
        },
        {
          day: 3,
          activities: [
            'Jardins da Villa Borghese',
            'Panteão',
            'Fontana di Trevi'
          ]
        }
      ]
    },
    {
      city: '🇬🇧Londres',
      days: [
        {
          day: 1,
          activities: [
            'Big Ben, Casas do Parlamento e London Eye',
            'Westminster Abbey e Buckingham Palace',
            'Jantar em Covent Garden',
          ]
        },
        {
          day: 2,
          activities: [
            'Torre de Londres e Tower Bridge',
            'Museu Britânico',
            'Pub crawl no Soho'
          ]
        },
        {
          day: 3,
          activities: [
            'St. Pauls Cathedral',
            'Tate Modern e Shakespeare´s Globe',
            'Jantar em Borough Market'
          ]
        }
      ]
    },
    {
      city: '🏖️Barcelona',
      days: [
        {
          day: 1,
          activities: [
            'Sagrada Família',
            'Passeio por Las Ramblas e La Boqueria',
            'Jantar no Barri Gòtic',
          ]
        },
        {
          day: 2,
          activities: [
            'Park Güell',
            'Casa Batlló e Casa Milà',
            'Espetáculo de luz e som na Font Màgica de Montjuïc'
          ]
        },
        {
          day: 3,
          activities: [
            'Catedral de Barcelona e Basílica de Santa Maria del Mar',
            'Praia da Barceloneta',
            'Tapas no El Born'
          ]
        }
      ]
    }
  ]);

  useEffect(() => {
    axios.get('/api/itineraries/')
      .then(response => setItineraries(response.data.itineraries))
      .catch(error => console.error("Error fetching itineraries:", error));
  }, []);

  return (
    <section className="itineraries">
      <h2>Roteiros Sugeridos</h2>
      <div className="itinerary-grid">
        {itineraries.map((itinerary, index) => (
          <div key={index} className="itinerary-card">
            <h3>{itinerary.city}</h3>
            {itinerary.days.map(day => (
              <div key={day.day}>
                <h4>Dia {day.day}</h4>
                <ul>
                  {day.activities.map((activity, idx) => (
                    <li key={idx}>{activity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Itineraries;
