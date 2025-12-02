/**
 * Логирование инициализации компонента
 * @param {string} componentName - Название компонента
 * @param {Object} props - Пропсы компонента
 */
export const logComponentInit = (componentName, props = {}) => {
  console.group(`🚀 ${componentName}: Инициализация`);
  console.log('📅 Время:', new Date().toLocaleTimeString());
  console.log('📦 Пропсы:', props);
  console.groupEnd();
};

/**
 * Логирование изменения состояния
 * @param {string} componentName - Название компонента
 * @param {Object} prevState - Предыдущее состояние
 * @param {Object} nextState - Новое состояние
 */
export const logStateChange = (componentName, prevState, nextState) => {
  console.group(` ${componentName}: Изменение состояния`);
  console.log(' Время:', new Date().toLocaleTimeString());
  console.log(' Измененные поля:');

  Object.keys(nextState).forEach((key) => {
    if (prevState[key] !== nextState[key]) {
      console.log(`   ${key}:`, {
        from: prevState[key],
        to: nextState[key],
      });
    }
  });

  console.groupEnd();
};

/**
 * Логирование пользовательских действий
 * @param {string} action - Действие пользователя
 * @param {Object} data - Данные действия
 */
export const logUserAction = (action, data = {}) => {
  const timestamp = new Date().toLocaleTimeString();
  console.log(`👤 [${timestamp}] ${action}:`, data);
};

/**
 * Логирование производительности
 * @param {string} taskName - Название задачи
 * @param {Function} task - Функция для выполнения
 */
export const logPerformance = async (taskName, task) => {
  const startTime = performance.now();
  console.log(`⏱️  Начало выполнения: ${taskName}`);

  const result = await task();

  const endTime = performance.now();
  const duration = endTime - startTime;

  console.log(`  Завершено: ${taskName} за ${duration.toFixed(2)}ms`);

  return result;
};

/**
 * Логирование ошибок
 * @param {string} context - Контекст ошибки
 * @param {Error} error - Объект ошибки
 */
export const logError = (context, error) => {
  console.group(`❌ Ошибка в ${context}`);
  console.error('Сообщение:', error.message);
  console.error('Стек:', error.stack);
  console.error('Время:', new Date().toISOString());
  console.groupEnd();
};

export default {
  logComponentInit,
  logStateChange,
  logUserAction,
  logPerformance,
  logError,
};
