import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripNavigationTemplate } from './view/trip-navigation.js';
import { createTripFiltersTemplate } from './view/trip-filters.js';
import { createTripSortTemplate } from './view/trip-sort.js';
import { createTripListTemplate } from './view/trip-list.js';
import { createTripItemTemplate } from './view/trip-item.js';
import { createAddNewPointTemplate } from './view/add-new-point.js';

import { getRandomInteger } from './utils/mocks.js';
import { createTripList } from './mock/trip.js';


const TRIP_POINT_MIN_QUANTITY = 15;
const TRIP_POINT_MAX_QUANTITY = 25;
const pointsQuantity = getRandomInteger(TRIP_POINT_MIN_QUANTITY, TRIP_POINT_MAX_QUANTITY);

const pointsList = createTripList(pointsQuantity);

const renderTemplate = (container, template, place = 'beforeend') => {
  container.insertAdjacentHTML(place, template);
};

const tripMainElement = document.querySelector('.trip-main');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

renderTemplate(tripMainElement, createTripInfoTemplate(), 'afterbegin');
renderTemplate(tripNavigationElement, createTripNavigationTemplate());
renderTemplate(tripFiltersElement, createTripFiltersTemplate());
renderTemplate(tripEventsElement, createTripSortTemplate(), 'afterbegin');
renderTemplate(tripEventsElement, createTripListTemplate());

const tripListElement = document.querySelector('.trip-events__list');

renderTemplate(tripListElement, createAddNewPointTemplate(pointsList[0]));

pointsList.forEach((point) => {
  renderTemplate(tripListElement, createTripItemTemplate(point));
});
