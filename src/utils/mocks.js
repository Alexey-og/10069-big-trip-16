// Функция из интернета по генерации случайного числа из диапазона
// Источник - https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random
export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};


/**
 * Получение случайного числа из диапазона
 * @param {number} min — минимальное значение
 * @param {number} max — максимальное значение
 * @param {number} digitsAfterDecpoint — количество знаков после запятой
 * @return {number} — случайное число
 */


export const getRandomFloatInRange = (min, max, digitsAfterDecpoint = 0) => (
  Number((min + Math.random() * (max - min)).toFixed(digitsAfterDecpoint))
);


/**
 * Перемешивание элементов массива в случайном порядке
 * @param {array} array — исходный массив
 * @return {array} — итоговый массив
 */
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};


/**
 * Получение случайного количества случайных элементов массива
 * @param {array} array — исходный массив
 * @return {array} — итоговый массив
 */
export const getRandomQuantityArrayElements = (array) => (
  shuffleArray(array).slice(0, getRandomInteger(1, array.length))
);

/**
 * Получение случайного элемента массива
 * @param {array} array — исходный массив
 * @return {string|number|object} — значение массива со случайным индексом
 */
export const getRandomArrayElement = (array) => (
  array[Math.floor(Math.random() * array.length)]
);


/**
 * Получение случайного элемента массива
 * @param {number} width — минимальное значение
 * @param {number} height — максимальное значение
 * @return {string|number|object} — значение массива со случайным индексом
 */
export const getRandomImageUrl = (width, height) => (
  `https://picsum.photos/${width}/${height}`
);


/**
 * Получение случайного элемента объекта
 * @param {object} object — исходный объект
 * @return {string|number|object} — значение объекта со случайным ключом
 */
export const getRandomObjectValue = (object) => (
  object[Object.keys(object)[Math.floor(Math.random() * Object.keys(object).length)]]
);


/**
 * Получение случайной даты в промежутке дат
 * @param {date} start — стартовая дата промежутка
 * @param {date} end — конечная дата промежутка (по-умолчанию - текущая дата)
 * @return {date} — итоговая случайная дата
 */
export const getRandomDate = (start, end = new Date()) => (
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()))
);
