import fetchData from './http';

export default function getLevel(userId) {
  try {
    const response = fetchData(userId);
    
    if (response.status === 'ok') {
      return `Ваш текущий уровень: ${response.level}`;
    } else {
      return 'Информация об уровне временно недоступна';
    }
  } catch {
    return 'Информация об уровне временно недоступна';
  }
}