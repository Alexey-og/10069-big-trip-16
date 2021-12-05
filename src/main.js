import TripInfoView from './view/trip-info.js';
import TripNavigationView from './view/trip-navigation.js';

import TripFiltersView from './view/trip-filters.js';
import TripSortView from './view/trip-sort.js';
import TripListView from './view/trip-list.js';
import TripItemView from './view/trip-item.js';
import EditPointView from './view/edit-point.js';

import { renderElement, RenderPosition } from './utils/render.js';
import { getRandomInteger } from './utils/mocks.js';
import { createTripList } from './mock/trip.js';

const TRIP_POINT_MIN_QUANTITY = 15;
const TRIP_POINT_MAX_QUANTITY = 25;
const pointsQuantity = getRandomInteger(TRIP_POINT_MIN_QUANTITY, TRIP_POINT_MAX_QUANTITY);

const pointsList = createTripList(pointsQuantity);

const tripMainElement = document.querySelector('.trip-main');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

renderElement(tripMainElement, new TripInfoView().element, RenderPosition.AFTERBEGIN);
renderElement(tripNavigationElement, new TripNavigationView().element, RenderPosition.BEFOREEND);
renderElement(tripFiltersElement, new TripFiltersView().element, RenderPosition.BEFOREEND);
renderElement(tripEventsElement, new TripSortView().element, RenderPosition.AFTERBEGIN);
renderElement(tripEventsElement, new TripListView().element, RenderPosition.BEFOREEND);

const tripListElement = document.querySelector('.trip-events__list');

renderElement(tripListElement, new EditPointView(pointsList[0]).element, RenderPosition.BEFOREEND);

pointsList.forEach((point) => {
  renderElement(tripListElement, new TripItemView(point).element, RenderPosition.BEFOREEND);
});
