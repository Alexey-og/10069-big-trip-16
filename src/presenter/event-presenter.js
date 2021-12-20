import TripItemView from '../view/trip-item.js';
import EditPointView from '../view/edit-point.js';

import {
  render,
  replace
} from '../utils/render.js';

export default class EventPresenter {
  #eventsListContainer = null;

  #eventComponent = null;
  #eventEditComponent = null;

  #event = null;

  constructor(eventsListContainer) {
    this.#eventsListContainer = eventsListContainer;
  }

  init = (event) => {
    this.#event = event;

    this.#eventComponent = new TripItemView(this.#event);
    this.#eventEditComponent = new EditPointView(this.#event);

    this.#eventComponent.setEditClickHandler(this.#handleEditClick);
    this.#eventEditComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#eventEditComponent.setFormResetHandler(this.#handleFormReset);

    render(this.#eventsListContainer, this.#eventComponent);
  }

  #replaceViewToEdit = () => {
    replace(this.#eventEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #replaceEditToView = () => {
    replace(this.#eventComponent, this.#eventEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#replaceEditToView();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #handleEditClick = () => {
    this.#replaceViewToEdit();
  }

  #handleFormSubmit = () => {
    this.#replaceEditToView();
  }

  #handleFormReset = () => {
    this.#replaceEditToView();
  }
}
