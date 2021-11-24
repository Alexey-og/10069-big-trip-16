import { createTripInfoTemplate } from './view/trip-info.js';
import { createTripNavigationTemplate } from './view/trip-navigation.js';
import { createTripFiltersTemplate } from './view/trip-filters.js';
import { createTripSortTemplate } from './view/trip-sort.js';
import { createTripListTemplate } from './view/trip-list.js';
import { createTripItemTemplate } from './view/trip-item.js';
import { createEditPointTemplate } from './view/edit-point.js';

const TRIP_POINTS_COUNT = 3;

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

renderTemplate(tripListElement, createEditPointTemplate());

for (let i = 0; i < TRIP_POINTS_COUNT; i++) {
  renderTemplate(tripListElement, createTripItemTemplate());
}
