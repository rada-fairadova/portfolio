import React from 'react';
import './Toolbar.css';

const Toolbar = ({ filters, selected, onSelectFilter }) => {
  console.log('  Toolbar: Рендеринг панели фильтров');
  console.log(' Доступные фильтры:', filters);
  console.log(' Активный фильтр:', selected);

  const handleFilterClick = (filter) => {
    console.group(' Toolbar: Клик по фильтру');
    console.log(' Нажата кнопка:', filter);
    console.log(' Вызывается onSelectFilter с параметром:', filter);
    console.groupEnd();

    onSelectFilter(filter);
  };

  return (
    <div className="toolbar slide-in">
      <div className="toolbar-header">
        <h3 className="toolbar-title">
          <span className="toolbar-icon">🔍</span>
          Фильтры проектов
        </h3>
        <div className="toolbar-counter">
          <span className="counter-label">Категорий:</span>
          <span className="counter-value">{filters.length}</span>
        </div>
      </div>

      <div className="filters-container">
        <div className="filters-scroll">
          {filters.map((filter) => {
            const isActive = filter === selected;
            const projectsCount =
              filter === 'All' ? 'Все' : `(${getProjectsCount(filter)})`;

            return (
              <button
                key={filter}
                className={`filter-btn ${isActive ? 'active' : ''}`}
                onClick={() => handleFilterClick(filter)}
                aria-label={`Показать проекты категории ${filter}`}
                title={`Показать ${filter === 'All' ? 'все проекты' : `проекты категории ${filter}`}`}
              >
                <span className="filter-text">{filter}</span>
                <span className="filter-count">{projectsCount}</span>
                {isActive && (
                  <span className="active-indicator">
                    <span className="check-icon">✓</span>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      <div className="toolbar-hint">
        <span className="hint-icon">💡</span>
        Выберите категорию для фильтрации проектов
      </div>
    </div>
  );
};

const getProjectsCount = (category) => {
  const counts = {
    All: 17,
    Websites: 9,
    'Business Cards': 6,
    Flayers: 2,
  };
  return counts[category] || 0;
};

export default Toolbar;
