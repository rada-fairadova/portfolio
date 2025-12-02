import React from 'react';
import Portfolio from './components/Portfolio';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1> Портфолио проектов</h1>
          <p className="subtitle">
            Используйте фильтры для отображения проектов по категориям
          </p>
          <div className="project-info">
            <span className="info-badge">React 18</span>
            <span className="info-badge">State Management</span>
            <span className="info-badge">Component Architecture</span>
          </div>
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <Portfolio />
        </div>
      </main>

      <footer className="app-footer">
        <div className="footer-content">
          <p>
            © {new Date().getFullYear()} Портфолио с фильтрами. Учебный проект.
          </p>
          <p className="footer-note">
            Демонстрация управления состоянием и взаимодействия компонентов в
            React
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
