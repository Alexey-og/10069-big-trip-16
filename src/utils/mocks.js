import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

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
export const shuffleArray = (array) => {
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


/**
 * Показ отформатированной даты
 * @param {date} time — дата в универсальном формате
 * @param {string} format — формат для отображения даты
 * @return {date} — итоговая отформатированная дата
 */
export const showFormattedTime = (time, format) => (
  dayjs(time).format(format)
);


/**
 * Получение длительности между двумя датами
 * @param {date} startTime — дата начала
 * @param {date} endTime — дата окончания
 * @return {date} — итоговая длительность в микросекундах
 */
export const getDuration = (startTime, endTime) => (
  dayjs(endTime).diff(dayjs(startTime))
);


/**
 * Показ отформатированной продолжительности события
 * @param {integer} time — продолжительность в микросекундах
 * @return {string} — строка с продолжительностью события
 */
export const showFormattedDuration = (time) => {
  const days = dayjs.duration(time).days();
  const hours = dayjs.duration(time).hours();
  const minutes = dayjs.duration(time).minutes();
  const seconds = dayjs.duration(time).seconds();

  let daysString = '';
  let hoursString = '';
  let minutesString = '';
  let secondsString = '';

  if (days > 9) {daysString = `${days}D`;}
  else if (days > 0 && days <= 9) {daysString = `0${days}D`;}

  if (hours > 9) {hoursString = ` ${hours}H`;}
  else if (hours > 0 && hours <= 9) {hoursString = ` 0${hours}H`;}

  if (minutes > 9) {minutesString = ` ${minutes}M`;}
  else if (minutes > 0 && minutes <= 9) {minutesString = ` 0${minutes}M`;}

  if (seconds > 9) {secondsString = ` ${seconds}S`;}
  else if (seconds > 0 && seconds <= 9) {secondsString = ` 0${seconds}S`;}

  return `${daysString}${hoursString}${minutesString}${secondsString}`;
};


/**
 * Генерация случайного числа из диапазона с учетом шага (округлением). Число становится кратно значению шага в меньшую сторону. Например, при шаге "5" вместо "33" будет "30".
 * @param {number} min — нижняя граница диапазона
 * @param {number} max — верхняя граница диапазона
 * @param {number} step — шаг округления
 * @return {number} — итоговое округленное число
 */
export const getRandomRoundedNumber = (min = 5, max = 123, step = 5) => (
  (Math.floor(getRandomInteger(min, max) / step)) * step
);


/**
 * Получение случайного изображения из сервиса "Lorem Picsum".
 * @param {number} width — ширина изображения, в пикселях
 * @param {number} height — высота изображения, в пикселях
 * @return {string} — значение URL со случайным изображением заданного размера
 */
export const getRandomImageUrl = (width = 300, height = 200) => (
  `https://picsum.photos/${width}/${height}?r=${Math.random()}`
);


/**
 * Получение случайного логического "true" или "false".
 * @return {Boolean} — случайное логическое значение
 */
export const gerRandomBoolean = () => (
  Math.random() >= 0.5
);
