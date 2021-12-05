import { createElement } from '../utils/render.js';

const createTripListTemplate = () => (
  '<ul class="trip-events__list"></ul>'
);

export default class TripNavigationView {
  #element = null;

  get element() {
    if (!this.#element) {
      this.#element = createElement(this.template);
    }

    return this.#element;
  }

  get template() {
    return createTripListTemplate();
  }

  removeElement() {
    this.#element = null;
  }
}
