import TripItemView from '../view/trip-item.js';
import EditPointView from '../view/edit-point.js';

import {
  render,
  replace,
  remove
} from '../utils/render.js';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class EventPresenter {
  #eventsListContainer = null;
  #changeData = null;
  #changeMode = null;

  #eventComponent = null;
  #eventEditComponent = null;

  #event = null;
  #mode = Mode.DEFAULT;

  constructor(eventsListContainer, changeData, changeMode) {
    this.#eventsListContainer = eventsListContainer;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
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

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#eventComponent, prevEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#eventEditComponent, prevEventEditComponent);
    }

    remove(prevEventComponent);
    remove(prevEventEditComponent);
  }

  destroy = () => {
    remove(this.#eventComponent);
    remove(this.#eventEditComponent);
  }

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#eventEditComponent.reset(this.#event);
      this.#replaceEditToView();
    }
  }

  #replaceViewToEdit = () => {
    replace(this.#eventEditComponent, this.#eventComponent);
    document.addEventListener('keydown', this.#escKeyDownHandler);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  };

  #replaceEditToView = () => {
    replace(this.#eventComponent, this.#eventEditComponent);
    document.removeEventListener('keydown', this.#escKeyDownHandler);
    this.#mode = Mode.DEFAULT;
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.resetView();
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
    this.resetView();
  }
}
