import TripSortView from '../view/trip-sort.js';
import TripListView from '../view/trip-list.js';
import EmptyListView from '../view/empty-list.js';

import EventPresenter from './event-presenter.js';

import {
  render,
  TripEventsMessage,
  RenderPosition
} from '../utils/render.js';

export default class TripPresenter {
  #tripContainer = null;
  #tripEventsMessage = null;

  #sortComponent = new TripSortView();
  #eventsContainerComponent = new TripListView();
  #noEventsComponent = new EmptyListView(TripEventsMessage);

  #tripEvents = [];

  constructor(tripContainer) {
    this.#tripContainer = tripContainer;
  }

  init = (tripEventsMessage, tripEvents) => {
    this.#tripEventsMessage = tripEventsMessage;
    this.#tripEvents = [...tripEvents];
    this.#renderEventsList(this.#tripEventsMessage, this.#tripEvents);
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

  #renderEvent = (eventsContainer, event) => {
    const eventPresenter = new EventPresenter(eventsContainer);
    eventPresenter.init(event);
  };

  #renderEventsList = (tripEventsMessage, tripEvents) => {
    if (!tripEvents.length) {
      this.#renderNoEvents(tripEventsMessage);
    } else {
      this.#renderSort();
      this.#renderEventsContainer();
      this.#tripEvents.forEach((event) => {
        this.#renderEvent(this.#eventsContainerComponent, event);
      });
    }
  }
}
