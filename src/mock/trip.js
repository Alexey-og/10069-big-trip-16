import {
  getRandomArrayElement,
  getRandomObjectValue,
} from '../utils/mocks.js';


export const pointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

export const destination = ['Paris', 'London', 'Rome', 'Moscow', 'Florence', 'Barcelona', 'Amsterdam', 'Santorini'];

export const offers = [
  {
    title: 'Order Uber',
    price: 20
  },
  {
    title: 'Add luggage',
    price: 50
  },
  {
    title: 'Switch to comfort',
    price: 80
  },
  {
    title: 'Rent a car',
    price: 200
  },
  {
    title: 'Add breakfast',
    price: 50
  },
  {
    title: 'Book tickets',
    price: 40
  },
  {
    title: 'Lunch in city',
    price: 30
  },
  {
    title: 'Add meal',
    price: 15
  },
  {
    title: 'Choose seats',
    price: 5
  },
  {
    title: 'Travel by train',
    price: 40
  },
];

export const description = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

export const createTripPoint = () => {
  const tripPoint = {
    destination: getRandomArrayElement(destination),
    pointType: getRandomArrayElement(pointType),
    eventTypeIcon: `img/icons/${getRandomArrayElement(pointType).toLowerCase()}.png`,
    offer: getRandomObjectValue(offers),
  };

  return tripPoint;
};


export const createTripList = (quantity) => (
  new Array(quantity).fill().map(createTripPoint)
);
