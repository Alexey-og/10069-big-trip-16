import dayjs from 'dayjs';

import {
  getRandomInteger,
  getRandomArrayElement,
  shuffleArray,
  getRandomDate,
  getRandomRoundedNumber,
  getRandomImageUrl,
  gerRandomBoolean
} from '../utils/mocks.js';

const pointType = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant'];

const destination = ['Paris', 'London', 'Rome', 'Moscow', 'Florence', 'Barcelona', 'Amsterdam', 'Santorini'];

const offers = [
  {
    id: 1,
    title: 'Order Uber',
    price: 20
  },
  {
    id: 2,
    title: 'Add luggage',
    price: 50
  },
  {
    id: 3,
    title: 'Switch to comfort',
    price: 80
  },
  {
    id: 4,
    title: 'Rent a car',
    price: 200
  },
  {
    id: 5,
    title: 'Add breakfast',
    price: 50
  },
  {
    id: 6,
    title: 'Book tickets',
    price: 40
  },
  {
    id: 7,
    title: 'Lunch in city',
    price: 30
  },
  {
    id: 8,
    title: 'Add meal',
    price: 15
  },
  {
    id: 9,
    title: 'Choose seats',
    price: 5
  },
  {
    id: 10,
    title: 'Travel by train',
    price: 40
  },
];

const description = [
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

const pictureTitle = [
  'city centre',
  'embankment',  
  'kindergarten',
  'park',
  'central station',
  'zoo'
]

export const createDescription = () => {
  let eventDescription = '';
  for (let i = 0; i < getRandomInteger(1, 5); i++) {
    eventDescription += `${getRandomArrayElement(description)} `;
  }
  return eventDescription.trim();
}

const createOffersArray = () => (
  shuffleArray(offers).slice(0, getRandomInteger(0, 3))
);

const createPicturesArray = (placeName) => {
  let pictures = [];
  for (let i = 0; i < getRandomInteger(0, 6); i++) {
    const pictureItem = {
      src: getRandomImageUrl(),
      description: `${placeName} ${getRandomArrayElement(pictureTitle)}`
    }
    pictures.push(pictureItem);
  }
  return pictures;
};

const createTripPoint = () => {
  const randomDate = getRandomDate(new Date(2022, 12, 30), new Date()).toISOString();
  const destinationName = getRandomArrayElement(destination);

  const tripPoint = {
    id: 0,
    type: getRandomArrayElement(pointType),
    date_from: randomDate,
    date_to: dayjs(randomDate).add(getRandomRoundedNumber(), 'm'),
    destination: {
        name: destinationName,
        description: createDescription(),
        pictures: createPicturesArray()
    },
    base_price: getRandomRoundedNumber(5, 1000, 5),
    is_favorite: gerRandomBoolean(),
    offers: createOffersArray(destinationName),
  }

  return tripPoint;
};

export const createTripList = (quantity) => (
  new Array(quantity).fill().map(createTripPoint)
);
