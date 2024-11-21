import React, { useState } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section className="contact">
      <h2>Entre em Contato</h2>
      <div className="contact-info">
        <p>Tem alguma dúvida ou sugestão? Entre em contato conosco!</p>
        <p>Email: info@rotaperfeita.com</p>
        <p>Telefone: +351 123 456 789</p>
        <p>Endereço: Rua das Viagens, 123, Lisboa, Portugal</p>
      </div>
      <form onSubmit={handleSubmit} className="contact-form">
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;
