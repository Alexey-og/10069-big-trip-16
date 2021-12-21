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

export default class TripPresenter {
  #tripContainer = null;
  #tripEventsMessage = null;

  #sortComponent = new TripSortView();
  #eventsContainerComponent = new TripListView();
  #noEventsComponent = new EmptyListView(TripEventsMessage);

  #tripEvents = [];
  #eventPresenter = new Map();

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (tripEventsMessage, tripEvents) => {
    this.#tripEventsMessage = tripEventsMessage;
    this.#tripEvents = [...tripEvents];
    this.#renderEventsList(this.#tripEventsMessage, this.#tripEvents);
  }

  #handleModeChange = () => {
    this.#eventPresenter.forEach((presenter) => presenter.resetView());
  }

  #handleEventChange = (updatedEvent) => {
    this.#tripEvents = updateItem(this.#tripEvents, updatedEvent);
    this.#eventPresenter.get(updatedEvent.id).init(updatedEvent);
  }

  #renderSort = () => {
    render(this.#tripContainer, this.#sortComponent, RenderPosition.AFTERBEGIN);
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

  #renderEventsList = (tripEventsMessage, tripEvents) => {
    if (!tripEvents.length) {
      this.#renderNoEvents(tripEventsMessage);
    } else {
      this.#renderSort();
      this.#renderEventsContainer();
      this.#tripEvents.forEach((event) => {
        this.#renderEvent(event);
      });
    }
  }
}
