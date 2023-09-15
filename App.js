import React, { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [displayTexts, setDisplayTexts] = useState([]);
  const [headerText, setHeaderText] = useState('Admin Content Dashboard');
  const [footerText, setFooterText] = useState('© ' + new Date().getFullYear() + ' ' + ' MIANS');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = { name, email, message };
    setDisplayTexts([...displayTexts, formData]);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>
        <h1>{headerText}</h1>
      </header>
      <main className='App-main'>
        <form onSubmit={handleFormSubmit} className="styled-form">
          <div className="form-group">
            <label htmlFor="name">Header</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Paragraph</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={handleMessageChange}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        {displayTexts.length > 0 && (
          <div className='Data'>
            <h2>Form Data you entered:</h2>
            
              {displayTexts.map((formData, index) => (
                  <>
                   <h1> {formData.name}</h1>
                  <p> {formData.message}</p></>
                 
                
              ))}
            
          </div>
        )}
      </main>
      <footer className="App-header">
        <h1>{headerText}</h1>
        <h1>{footerText}</h1>
      </footer>
    </div>
  );
}

export default App;
