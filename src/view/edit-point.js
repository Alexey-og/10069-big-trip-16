import SmartView from './smart-view.js';
import { showFormattedTime} from '../utils/mocks.js';
import {
  pointTypesList,
  destinationList,
  createOffersArray,
  createPointInfo
} from '../mock/trip.js';
import { capitalizeWord } from '../utils/event.js';
import flatpickr from 'flatpickr';

import '../../node_modules/flatpickr/dist/flatpickr.min.css';

const BLANK_POINT = {
  id: '',
  type: '',
  pointName: '',
  dateFrom: '',
  dateTo: '',
  duration: '',
  destination: {
    name: '',
    description: '',
    pictures: []
  },
  basePrice: '',
  offers: []
};

const createEventTypesTemplate = () => (
  pointTypesList.map((type) => (
    `<div class="event__type-item">
      <input id="event-type-${type}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${type}">
      <label class="event__type-label  event__type-label--${type}" for="event-type-${type}-1">${capitalizeWord(type)}</label>
    </div>`
  )).join('')
);

const createDestinationListTemplate = () => (
  destinationList.map((destination) => (
    `<option value='${destination}'></option>`
  )).join('')
);

const createEventOffersTemplate = (type) => {
  const offersArray = createOffersArray(type);
  if (!offersArray.length) {
    return '';
  }
  const offersList = offersArray.map((offer) => (
    `<div class="event__offer-selector">
      <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offer.id}-1" type="checkbox" name="event-offer-${offer.id}">
      <label class="event__offer-label" for="event-offer-${offer.id}-1">
        <span class="event__offer-title">${offer.title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${offer.price}</span>
      </label>
    </div>`
  )).join('');
  return `<section class="event__section  event__section--offers">
    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
    <div class="event__available-offers">${offersList}</div>
  </section>`;
};

const createEventPhotosTemplate = (photos) => {
  if (!photos.length) {
    return '';
  }
  const photoList = photos.map((photo) => (`<img class='event__photo' src='${photo.src}' alt='${photo.description}'>`)).join('');
  return `<div class="event__photos-container">
    <div class="event__photos-tape">
      ${photoList}
    </div>
  </div>`;
};

const createPointInfoTemplate = (pointName) => {
  const pointInfo = createPointInfo(pointName);
  if (!pointInfo.description.length && !pointInfo.pictures.length) {
    return '';
  }
  return `<section class="event__section  event__section--destination">
  <h3 class="event__section-title  event__section-title--destination">Destination</h3>
  ${pointInfo.description.length ? `<p class="event__destination-description">${pointInfo.description}</p>` : ''}
  ${createEventPhotosTemplate(pointInfo.pictures)}
  </section>`;
};

const createEditPointTemplate = (data) => {
  const {type, pointName, dateFrom, dateTo} = data;

  return `<li class="trip-events__item">
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="img/icons/${capitalizeWord(type)}.png" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createEventTypesTemplate()}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">${type}</label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${pointName}" list="destination-list-1">
          <datalist id="destination-list-1">
            ${createDestinationListTemplate()}
          </datalist>
        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${showFormattedTime(dateFrom, 'DD/MM/YY HH:mm')}">
          &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${showFormattedTime(dateTo, 'DD/MM/YY HH:mm')}">
        </div>

        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
            &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">
        </div>

        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Cancel</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Close event</span>
        </button>

      </header>
      <section class="event__details">
        ${createEventOffersTemplate(type)}
        ${createPointInfoTemplate(pointName)}
      </section>
    </form>
  </li>`;
};

export default class EditPointView extends SmartView {
  #datepickerDateFrom = null;
  #datepickerDateTo = null;

  constructor(event = BLANK_POINT) {
    super();
    this._data = EditPointView.parsePointToData(event);
    this.#setInnerHandlers();
    this.#setDatepickerDateFrom();
    this.#setDatepickerDateTo();
  }

  get template() {
    return createEditPointTemplate(this._data);
  }

  removeElement = () => {
    super.removeElement();

    if (this.#datepickerDateFrom) {
      this.#datepickerDateFrom.destroy();
      this.#datepickerDateFrom = null;
    }

    if (this.#datepickerDateTo) {
      this.#datepickerDateTo.destroy();
      this.#datepickerDateTo = null;
    }
  }

  static parsePointToData = (point) => ({...point});
  static parseDataToPoint = (data) => ({...data});

  reset = (point) => {
    this.updateData(EditPointView.parsePointToData(point),);
  }

  restoreHandlers = () => {
    this.#setInnerHandlers();
    this.#setDatepickerDateFrom();
    this.#setDatepickerDateTo();
    this.setFormSubmitHandler(this._callback.formSubmit);
    this.setFormResetHandler(this._callback.formReset);
  }

  #setDatepickerDateFrom = () => {
    this.#datepickerDateFrom = flatpickr(
      this.element.querySelector('#event-start-time-1'),
      {
        dateFormat: 'd/m/y H:i',
        enableTime: true,
        defaultDate: this._data.dateFrom,
        onChange: this.#dateFromChangeHandler,
      },
    );
  }

  #setDatepickerDateTo = () => {
    this.#datepickerDateTo = flatpickr(
      this.element.querySelector('#event-end-time-1'),
      {
        dateFormat: 'd/m/y H:i',
        enableTime: true,
        defaultDate: this._data.dateTo,
        onChange: this.#dateToChangeHandler,
      },
    );
  }

  #dateFromChangeHandler = ([userDateFrom]) => {
    this.updateData({
      dateFrom: userDateFrom,
    });
  }

  #dateToChangeHandler = ([userDateTo]) => {
    this.updateData({
      dateTo: userDateTo,
    });
  }

  #setInnerHandlers = () => {
    this.element.querySelector('.event__type-list').addEventListener('change', this.#typeChangeHandler);
    this.element.querySelector('.event__input--destination').addEventListener('change', this.#pointChangeHandler);
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#formResetHandler);
  }

  #typeChangeHandler = (evt) => {
    this.updateData( {type: evt.target.value} );
  }

  #pointChangeHandler = (evt) => {
    this.updateData( {pointName: evt.target.value} );
  }

  #formSubmitHandler = (evt) => {
    evt.preventDefault();
    this._callback.formSubmit(EditPointView.parseDataToPoint(this._data));
  }

  #formResetHandler = (evt) => {
    evt.preventDefault();
    this._callback.formReset();
  }

  setFormSubmitHandler = (callback) => {
    this._callback.formSubmit = callback;
    this.element.querySelector('form').addEventListener('submit', this.#formSubmitHandler);
  }

  setFormResetHandler = (callback) => {
    this._callback.formReset = callback;
    this.element.querySelector('form').addEventListener('reset', this.#formResetHandler);
  }

}
