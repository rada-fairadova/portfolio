import React, { useState } from 'react';
import './ProjectList.css';

const ProjectList = ({ projects }) => {
  console.group(' ProjectList: Рендеринг списка проектов');
  console.log(' Получено проектов:', projects.length);
  console.log(' Пример первого проекта:', projects[0]);
  console.groupEnd();

  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project, index) => {
    console.log('  Клик по проекту:', project.category, `(индекс: ${index})`);
    console.log(' Изображение:', project.img);

    setSelectedProject(project);

    console.log('  Выбран проект для детального просмотра');
  };

  const handleImageError = (e, index) => {
    console.warn(`  Ошибка загрузки изображения для проекта ${index + 1}`);
    e.target.src =
      'https://via.placeholder.com/300x200/667eea/ffffff?text=No+Image';
    e.target.alt = 'Изображение не загружено';
  };

  if (projects.length === 0) {
    return null;
  }

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <h3 className="project-list-title">
          <span className="project-icon">📂</span>
          Список проектов
          <span className="project-count">{projects.length}</span>
        </h3>
        <div className="view-controls">
          <span className="view-label">Вид:</span>
          <button className="view-btn active" title="Сетка">
            ⏹️
          </button>
          <button className="view-btn" title="Список">
            📄
          </button>
        </div>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            key={`${project.category}-${index}`}
            className={`project-card ${selectedProject === project ? 'selected' : ''}`}
            onClick={() => handleProjectClick(project, index)}
            role="button"
            tabIndex={0}
            onKeyPress={(e) =>
              e.key === 'Enter' && handleProjectClick(project, index)
            }
            aria-label={`Проект ${index + 1}: ${project.category}`}
          >
            <div className="card-image-container">
              <img
                src={project.img}
                alt={`Проект ${index + 1} - ${project.category}`}
                className="project-image"
                loading="lazy"
                onError={(e) => handleImageError(e, index)}
              />
              <div className="image-overlay">
                <span className="overlay-text">👁️ Просмотр</span>
              </div>
              <div className="card-badge">{index + 1}</div>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h4 className="project-name">Проект #{index + 1}</h4>
                <span className="project-category-tag">{project.category}</span>
              </div>

              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Категория:</span>
                  <span className="meta-value">{project.category}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">ID:</span>
                  <span className="meta-value">
                    PROJ-{String(index + 1).padStart(3, '0')}
                  </span>
                </div>
              </div>

              <div className="card-actions">
                <button
                  className="action-btn preview-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(' Предпросмотр проекта', index + 1);
                  }}
                  title="Предпросмотр"
                >
                  👁️
                </button>
                <button
                  className="action-btn like-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log('  Лайк проекту', index + 1);
                  }}
                  title="Добавить в избранное"
                >
                  ❤️
                </button>
                <button
                  className="action-btn share-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(' Поделиться проектом', index + 1);
                  }}
                  title="Поделиться"
                >
                  📤
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="selected-info">
          <p>
            <strong>Выбран проект:</strong> {selectedProject.category}
            (нажмите на другой проект для выбора)
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
