import React, { Component } from 'react';
import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';
import { projects, filters } from '../../data/projects';
import './Portfolio.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    console.group(' Portfolio: Инициализация компонента');
    console.log(' Дата инициализации:', new Date().toLocaleTimeString());

    this.state = {
      selectedFilter: 'All',
      isLoading: false,
      projectStats: {
        total: projects.length,
        byCategory: this.calculateCategoryStats(projects),
      },
    };

    console.log(' Статистика проектов:', this.state.projectStats);
    console.log(' Фильтр по умолчанию:', this.state.selectedFilter);
    console.groupEnd();
  }

  calculateCategoryStats = (projects) => {
    const stats = { All: projects.length };
    projects.forEach((project) => {
      stats[project.category] = (stats[project.category] || 0) + 1;
    });
    return stats;
  };

  handleSelectFilter = (filter) => {
    console.group(' Portfolio: Обработка выбора фильтра');
    console.log(' Пользователь выбрал фильтр:', filter);
    console.log(' Предыдущий фильтр:', this.state.selectedFilter);
    console.log(
      ' Количество проектов в категории:',
      this.state.projectStats.byCategory[filter] || 'Все'
    );

    if (filter !== this.state.selectedFilter) {
      this.setState(
        {
          selectedFilter: filter,
          isLoading: true,
        },
        () => {
          setTimeout(() => {
            this.setState({ isLoading: false });
            console.log(' Фильтр успешно применен:', this.state.selectedFilter);
            console.log(
              ' Отфильтровано проектов:',
              this.getFilteredProjects().length
            );
            console.groupEnd();
          }, 300);
        }
      );
    } else {
      console.log('  Фильтр не изменился');
      console.groupEnd();
    }
  };

  getFilteredProjects = () => {
    const { selectedFilter } = this.state;

    if (selectedFilter === 'All') {
      return projects;
    }

    return projects.filter((project) => project.category === selectedFilter);
  };

  render() {
    console.log(' Portfolio: Начало рендеринга');
    console.log(' Активный фильтр:', this.state.selectedFilter);

    const filteredProjects = this.getFilteredProjects();
    const { isLoading, projectStats, selectedFilter } = this.state;

    return (
      <div className="portfolio fade-in">
        <div className="portfolio-header">
          <h2 className="portfolio-title">📁 Коллекция проектов</h2>
          <div className="portfolio-stats">
            <div className="stat-item">
              <span className="stat-label">Всего проектов:</span>
              <span className="stat-value">{projectStats.total}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Активный фильтр:</span>
              <span className="stat-value filter-badge">{selectedFilter}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Показано:</span>
              <span className="stat-value">{filteredProjects.length}</span>
            </div>
          </div>
        </div>

        <Toolbar
          filters={filters}
          selected={selectedFilter}
          onSelectFilter={this.handleSelectFilter}
        />

        {isLoading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Фильтрация проектов...</p>
          </div>
        ) : (
          <>
            <div className="filter-info">
              <p>
                {selectedFilter === 'All'
                  ? `Показаны все проекты (${filteredProjects.length} шт.)`
                  : `Показаны проекты категории "${selectedFilter}" (${filteredProjects.length} шт.)`}
              </p>
            </div>

            <ProjectList projects={filteredProjects} />

            {filteredProjects.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">📭</div>
                <h3>Проектов не найдено</h3>
                <p>Попробуйте выбрать другую категорию</p>
              </div>
            )}
          </>
        )}

        <div className="portfolio-footer">
          <p className="hint">
            <strong>Подсказка:</strong> Используйте кнопки фильтров для
            сортировки проектов по категориям. Нажмите на проект для просмотра
            деталей (если бы это была реальная функция).
          </p>
        </div>
      </div>
    );
  }
}

export default Portfolio;
