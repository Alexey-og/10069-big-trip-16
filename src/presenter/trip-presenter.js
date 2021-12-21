import TripSortView from '../view/trip-sort.js';
import TripListView from '../view/trip-list.js';
import EmptyListView from '../view/empty-list.js';

import EventPresenter from './event-presenter.js';

import {
  render,
  TripEventsMessage,
  RenderPosition,
  updateItem
} from '../utils/render.js';
import {
  sortDay,
  sortEvent,
  sortTime,
  sortPrice,
  sortOffer
} from '../utils/event.js';
import { SortType } from '../utils/const.js';

export default class TripPresenter {
  #tripContainer = null;
  #tripEventsMessage = null;

  #sortComponent = new TripSortView();
  #eventsContainerComponent = new TripListView();
  #noEventsComponent = new EmptyListView(TripEventsMessage);

  #tripEvents = [];
  #eventPresenter = new Map();
  #currentSortType = SortType.DAY;
  #sourcedTripEvents = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (tripEventsMessage, tripEvents) => {
    this.#tripEventsMessage = tripEventsMessage;
    this.#tripEvents = [...tripEvents];
    this.#sourcedTripEvents = [...tripEvents];

    this.#renderEventsList(this.#tripEventsMessage, this.#tripEvents);
  }

  #handleModeChange = () => {
    this.#eventPresenter.forEach((presenter) => presenter.resetView());
  }

  #handleEventChange = (updatedEvent) => {
    this.#tripEvents = updateItem(this.#tripEvents, updatedEvent);
    this.#sourcedTripEvents = updateItem(this.#sourcedTripEvents, updatedEvent);
    this.#eventPresenter.get(updatedEvent.id).init(updatedEvent);
  }

  #sortEvents = (sortType) => {
    switch (sortType) {
      case SortType.DAY:
        this.#tripEvents.sort(sortDay);
        break;
      case SortType.EVENT:
        this.#tripEvents.sort(sortEvent);
        break;
      case SortType.TIME:
        this.#tripEvents.sort(sortTime);
        break;
      case SortType.PRICE:
        this.#tripEvents.sort(sortPrice);
        break;
      case SortType.OFFER:
        this.#tripEvents.sort(sortOffer);
        break;
      default:
        this.#tripEvents = [...this.#sourcedTripEvents];
    }

    this.#currentSortType = sortType;
  }

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }

    this.#sortEvents(sortType);
    this.#clearEventsList();
    this.#renderEventsList(this.#tripEventsMessage, this.#tripEvents);
  }

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
    this.#sortComponent.setSortTypeChangeHandler(this.#handleSortTypeChange);
  }

  #renderEventsContainer = () => {
    render(this.#tripContainer, this.#eventsContainerComponent);
  }

  #renderNoEvents = () => {
    render(this.#tripContainer, this.#noEventsComponent);
  }

  #clearEventsList = () => {
    this.#eventPresenter.forEach((presenter) => presenter.destroy());
    this.#eventPresenter.clear();
  }

  #renderEvent = (event) => {
    const eventPresenter = new EventPresenter(this.#eventsContainerComponent, this.#handleEventChange, this.#handleModeChange);
    eventPresenter.init(event);
    this.#eventPresenter.set(event.id, eventPresenter);
  };

  #renderEventsList = (tripEventsMessage, tripPoints) => {
    if (!tripPoints.length) {
      this.#renderNoEvents(tripEventsMessage);
    } else {
      this.#renderSort();
      this.#renderEventsContainer();
      tripPoints.forEach((event) => {
        this.#renderEvent(event);
      });
    }
  }
}
