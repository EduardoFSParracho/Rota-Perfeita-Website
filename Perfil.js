import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../Perfil.css';


function Header() {
  return (
    <header className="header">
      <img src="/1.png" alt="Rota Perfeita Logo" className="logo" />
    </header>
  );
}


function Introduction() {
  return (
    <h1>Aqui podes criar o teu próprio roteiro!</h1>
  );
}


function Roteiro() {
  const [cidades, setCidades] = useState([]);
  const [cidade, setCidade] = useState('');
  const [roteiro, setRoteiro] = useState('');
  const [duracao, setDuracao] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCidades = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/cities/');
        setCidades(response.data);
      } catch (error) {
        console.error('Erro ao buscar as cidades:', error);
      }
    };

    fetchCidades();
  }, []);

  const guardarRoteiro = async () => {
    if (cidade === '' || roteiro.trim() === '') {
      alert('Por favor, preencha a cidade e o roteiro antes de guardar.');
      return;
    }

    const cidadeObj = cidades.find(c => c.id === parseInt(cidade));
    if (!cidadeObj) {
      alert('Cidade inválida.');
      return;
    }

    setLoading(true);
    try {
      await axios.post(`http://127.0.0.1:8000/api/cities/${cidadeObj.id}/itineraries/`, {
        city: cidadeObj.id,
        title: `Roteiro para ${cidadeObj.name}`,
        duration: duracao,
        description: roteiro,
      });

      alert('Roteiro guardado com sucesso!');
      setCidade('');
      setRoteiro('');
      setDuracao(1);
    } catch (error) {
      console.error('Erro ao guardar o roteiro:', error);
      alert('Erro ao guardar o roteiro.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="roteiro-container">
      <h2>Crie seu Roteiro</h2>
      <div className="cidade-input">
        <label htmlFor="cidade">Escolha a Cidade:</label>
        <select id="cidade" value={cidade} onChange={(e) => setCidade(e.target.value)}>
          <option value="">Selecione uma cidade</option>
          {cidades.map((cidadeObj) => (
            <option key={cidadeObj.id} value={cidadeObj.id}>
              {cidadeObj.name}
            </option>
          ))}
        </select>
      </div>
      <div className="roteiro-input">
        <label htmlFor="roteiro">Roteiro:</label>
        <textarea
          id="roteiro"
          value={roteiro}
          onChange={(e) => setRoteiro(e.target.value)}
          rows="10"
          placeholder="Descreva seu roteiro aqui"
        />
      </div>
      <div className="duracao-input">
        <label htmlFor="duracao">Duração (dias):</label>
        <input
          type="number"
          id="duracao"
          value={duracao}
          onChange={(e) => setDuracao(Math.max(1, parseInt(e.target.value)))}
          min="1"
        />
      </div>
      <button className="salvar-roteiro" onClick={guardarRoteiro} disabled={loading}>
        {loading ? 'Guardando...' : 'Guardar'}
      </button>
    </div>
  );
}


function Perfil() {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };

  return (
    <div className="Perfil">
      <Header />
      <main>
        <Introduction />
        <Roteiro />
        <button onClick={voltar}>Voltar</button>
      </main>
      <footer>
        <p>&copy; 2024 Rota Perfeita. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default Perfil;
