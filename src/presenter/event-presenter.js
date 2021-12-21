import TripItemView from '../view/trip-item.js';
import EditPointView from '../view/edit-point.js';

import {
  render,
  replace,
  remove
} from '../utils/render.js';

export default class EventPresenter {
  #eventsListContainer = null;
  #changeData = null;

  #eventComponent = null;
  #eventEditComponent = null;

  #event = null;

  constructor(eventsListContainer, changeData) {
    this.#eventsListContainer = eventsListContainer;
    this.#changeData = changeData;
  }

  init = (event) => {
    this.#event = event;

    const prevEventComponent = this.#eventComponent;
    const prevEventEditComponent = this.#eventEditComponent;

    this.#eventComponent = new TripItemView(this.#event);
    this.#eventEditComponent = new EditPointView(this.#event);

    this.#eventComponent.setEditClickHandler(this.#handleEditClick);
    this.#eventComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#eventEditComponent.setFormSubmitHandler(this.#handleFormSubmit);
    this.#eventEditComponent.setFormResetHandler(this.#handleFormReset);

    if (prevEventComponent === null || prevEventEditComponent === null) {
      render(this.#eventsListContainer, this.#eventComponent);
      return;
    }

    if (this.#eventsListContainer.element.contains(prevEventComponent.element)) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#eventsListContainer.element.contains(prevEventEditComponent.element)) {
      replace(this.#eventEditComponent, prevEventEditComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditComponent);
  }

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#eventEditComponent);
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

  #handleFavoriteClick = () => {
    this.#changeData({...this.#event, isFavorite: !this.#event.isFavorite});
  }

  #handleFormSubmit = (evt) => {
    this.#changeData(evt);
    this.#replaceEditToView();
  }

  #handleFormReset = () => {
    this.#replaceEditToView();
  }
}
