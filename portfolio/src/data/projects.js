export const projects = [
  {
    id: 1,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/mon.jpg',
    category: 'Business Cards',
    title: 'Modern Business Card',
    description: 'Современный дизайн визитной карточки для IT-компании',
  },
  {
    id: 2,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
    title: 'E-commerce Platform',
    description: 'Интернет-магазин с адаптивным дизайном',
  },
  {
    id: 3,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
    title: 'Creative Agency',
    description: 'Сайт для креативного агентства с портфолио',
  },
  {
    id: 4,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/codystretch.jpg',
    category: 'Websites',
    title: 'Tech Blog',
    description: 'Блог о технологиях с современным дизайном',
  },
  {
    id: 5,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_003.jpg',
    category: 'Business Cards',
    title: 'Corporate Business Card',
    description: 'Корпоративная визитка для руководителя',
  },
  {
    id: 6,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290.png',
    category: 'Websites',
    title: 'Landing Page',
    description: 'Целевая страница для мобильного приложения',
  },
  {
    id: 7,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/200.jpg',
    category: 'Websites',
    title: 'Portfolio Website',
    description: 'Персональный сайт-портфолио дизайнера',
  },
  {
    id: 8,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
    title: 'Minimalist Card',
    description: 'Минималистичная визитная карточка',
  },
  {
    id: 9,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_1.png',
    category: 'Websites',
    title: 'Restaurant Website',
    description: 'Сайт ресторана с онлайн-меню',
  },
  {
    id: 10,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_2.png',
    category: 'Flayers',
    title: 'Event Flyer',
    description: 'Флаер для музыкального мероприятия',
  },
  {
    id: 11,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/the_ninetys_brand.jpg',
    category: 'Websites',
    title: 'Brand Website',
    description: 'Корпоративный сайт бренда одежды',
  },
  {
    id: 12,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/dia.jpg',
    category: 'Business Cards',
    title: 'Creative Business Card',
    description: 'Креативная визитка для дизайнера',
  },
  {
    id: 13,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197.jpg',
    category: 'Websites',
    title: 'Startup Website',
    description: 'Сайт для стартапа в сфере технологий',
  },
  {
    id: 14,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/emi_haze.jpg',
    category: 'Websites',
    title: 'Photography Portfolio',
    description: 'Сайт-портфолио фотографа',
  },
  {
    id: 15,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/transmission.jpg',
    category: 'Business Cards',
    title: 'Elegant Business Card',
    description: 'Элегантная визитная карточка',
  },
  {
    id: 16,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/Triangle_350x197_1.jpg',
    category: 'Websites',
    title: 'Educational Platform',
    description: 'Платформа для онлайн-обучения',
  },
  {
    id: 17,
    img: 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/filter/img/place200x290_3.png',
    category: 'Flayers',
    title: 'Promotional Flyer',
    description: 'Рекламный флаер для акции',
  },
];

const categories = [
  'All',
  ...new Set(projects.map((project) => project.category)),
];
export const filters = categories;

export const getProjectStats = () => {
  const stats = {
    total: projects.length,
    byCategory: {},
  };

  projects.forEach((project) => {
    stats.byCategory[project.category] =
      (stats.byCategory[project.category] || 0) + 1;
  });

  return stats;
};

console.log(' Данные проектов загружены');
console.log(' Статистика:', getProjectStats());
