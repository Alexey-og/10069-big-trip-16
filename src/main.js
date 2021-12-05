import TripInfoView from './view/trip-info.js';
import TripNavigationView from './view/trip-navigation.js';

import TripFiltersView from './view/trip-filters.js';
import TripSortView from './view/trip-sort.js';
import TripListView from './view/trip-list.js';
import TripItemView from './view/trip-item.js';
import EditPointView from './view/edit-point.js';

import { render, RenderPosition } from './utils/render.js';
import { getRandomInteger } from './utils/mocks.js';
import { createTripList } from './mock/trip.js';

const TRIP_POINT_MIN_QUANTITY = 15;
const TRIP_POINT_MAX_QUANTITY = 25;

const tripMainElement = document.querySelector('.trip-main');
const tripNavigationElement = document.querySelector('.trip-controls__navigation');
const tripFiltersElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');

const pointsQuantity = getRandomInteger(TRIP_POINT_MIN_QUANTITY, TRIP_POINT_MAX_QUANTITY);
const pointsList = createTripList(pointsQuantity);

const renderPoint = (pointListElement, point) => {
  const tripItemComponent = new TripItemView(point);
  const editPointComponent = new EditPointView(point);

  const editFormElement = editPointComponent.element.querySelector('form');

  const replacePointToForm = () => {
    pointListElement.replaceChild(editPointComponent.element, tripItemComponent.element);
  };

  const replaceFormToPoint = () => {
    pointListElement.replaceChild(tripItemComponent.element, editPointComponent.element);
  };

  const onEscKeyDown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };

  tripItemComponent.element.querySelector('.event__rollup-btn').addEventListener('click', () => {
    replacePointToForm();
    document.addEventListener('keydown', onEscKeyDown);
  });

  editFormElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  editFormElement.addEventListener('reset', (evt) => {
    evt.preventDefault();
    replaceFormToPoint();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  render(pointListElement, tripItemComponent.element, RenderPosition.BEFOREEND);
};

render(tripMainElement, new TripInfoView().element, RenderPosition.AFTERBEGIN);
render(tripNavigationElement, new TripNavigationView().element, RenderPosition.BEFOREEND);
render(tripFiltersElement, new TripFiltersView().element, RenderPosition.BEFOREEND);
render(tripEventsElement, new TripSortView().element, RenderPosition.AFTERBEGIN);
render(tripEventsElement, new TripListView().element, RenderPosition.BEFOREEND);

const tripListElement = document.querySelector('.trip-events__list');

pointsList.forEach((point) => {
  renderPoint(tripListElement, point);
});
