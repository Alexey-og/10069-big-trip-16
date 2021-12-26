import TripInfoView from './view/trip-info.js';
import TripNavigationView from './view/trip-navigation.js';
import TripFiltersView from './view/trip-filters.js';

import TripPresenter from './presenter/trip-presenter.js';

import {
  render,
  TripEventsMessage,
  RenderPosition
} from './utils/render.js';
import { getRandomInteger } from './utils/mocks.js';
import { createTripList } from './mock/trip.js';

const TRIP_POINT_MIN_QUANTITY = 0;
const TRIP_POINT_MAX_QUANTITY = 5;

const tripMainElement = document.querySelector('.trip-main');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pointsQuantity = getRandomInteger(TRIP_POINT_MIN_QUANTITY, TRIP_POINT_MAX_QUANTITY);
const pointsList = createTripList(pointsQuantity);

const tripPresenter = new TripPresenter(tripEventsElement);

render(tripMainElement, new TripInfoView(), RenderPosition.AFTERBEGIN);
render(tripNavigationElement, new TripNavigationView());
render(tripFiltersElement, new TripFiltersView());

tripPresenter.init(TripEventsMessage, pointsList);
