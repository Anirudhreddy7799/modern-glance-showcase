import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

console.log('Starting application...');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
  () => {
    console.log('Application rendered successfully.');
  }
);