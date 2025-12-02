import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

console.log(' Приложение "Портфолио с фильтрами" запускается...');
console.log(' Дата запуска:', new Date().toLocaleString());
console.log(' Режим:', process.env.NODE_ENV);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
