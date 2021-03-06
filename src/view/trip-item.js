import AbstractView from './abstract-view.js';
import {
  showFormattedTime,
  showFormattedDuration
} from '../utils/mocks.js';

const createTripItemTemplate = (point) => {
  const {type, dateFrom, dateTo, duration, destination, basePrice, offers, isFavorite} = point;

  const createOffers = (offersArray) => {
    if (!offersArray.length) {
      return '';
    }
    const offersList = offersArray.map(( {title, price} ) => (
      `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </li>`
    )).join('');

    return `<ul class="event__selected-offers">${offersList}</ul>`;
  };

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${showFormattedTime(dateFrom, 'YYYY-MM-DD')}">${showFormattedTime(dateFrom, 'MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${showFormattedTime(dateFrom, 'YYYY-MM-DD')}T${showFormattedTime(dateFrom, 'HH:mm')}">${showFormattedTime(dateFrom, 'HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${showFormattedTime(dateTo, 'YYYY-MM-DD')}T${showFormattedTime(dateTo, 'HH:mm')}">${showFormattedTime(dateTo, 'HH:mm')}</time>
        </p>
        <p class="event__duration">${showFormattedDuration(duration)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createOffers(offers)}
      <button class="event__favorite-btn ${isFavorite ? 'event__favorite-btn--active' : ''}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class TripItemView extends AbstractView {
  #point = null;

  constructor(point) {
    super();
    this.#point = point;
  }

  get template() {
    return createTripItemTemplate(this.#point);
  }

  setEditClickHandler = (callback) => {
    this._callback.editClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#editClickHandler);
  }

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }

  #editClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editClick();
  }

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }
}
