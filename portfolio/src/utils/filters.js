/**
 * Фильтрует массив проектов по выбранной категории
 * @param {Array} projects - Массив проектов
 * @param {string} filter - Выбранный фильтр
 * @returns {Array} Отфильтрованный массив проектов
 */
export const filterProjects = (projects, filter) => {
  console.log(` Фильтрация проектов по категории: "${filter}"`);

  if (filter === 'All') {
    console.log(` Возвращаем все ${projects.length} проектов`);
    return projects;
  }

  const filtered = projects.filter((project) => project.category === filter);
  console.log(`📊 Найдено ${filtered.length} проектов в категории "${filter}"`);
  return filtered;
};

/**
 * Возвращает статистику по проектам
 * @param {Array} projects - Массив проектов
 * @returns {Object} Статистика
 */
export const getProjectsStatistics = (projects) => {
  const stats = {
    total: projects.length,
    byCategory: {},
    categories: [],
  };

  projects.forEach((project) => {
    if (!stats.byCategory[project.category]) {
      stats.byCategory[project.category] = 0;
      stats.categories.push(project.category);
    }
    stats.byCategory[project.category]++;
  });

  return stats;
};

/**
 * Проверяет, является ли фильтр активным
 * @param {string} currentFilter - Текущий фильтр
 * @param {string} filter - Проверяемый фильтр
 * @returns {boolean}
 */
export const isFilterActive = (currentFilter, filter) => {
  return currentFilter === filter;
};

/**
 * Возвращает список уникальных категорий из проектов
 * @param {Array} projects - Массив проектов
 * @returns {Array} Массив уникальных категорий
 */
export const getUniqueCategories = (projects) => {
  const categories = ['All'];
  const seen = new Set();

  projects.forEach((project) => {
    if (!seen.has(project.category)) {
      seen.add(project.category);
      categories.push(project.category);
    }
  });

  return categories;
};

/**
 * Логирование действий с фильтрами
 * @param {string} action - Действие
 * @param {string} filter - Фильтр
 * @param {number} count - Количество проектов
 */
export const logFilterAction = (action, filter, count = null) => {
  const timestamp = new Date().toLocaleTimeString();
  const countInfo = count !== null ? ` (${count} проектов)` : '';

  console.log(`[${timestamp}] ${action}: "${filter}"${countInfo}`);
};

export default {
  filterProjects,
  getProjectsStatistics,
  isFilterActive,
  getUniqueCategories,
  logFilterAction,
};
