import dayjs from 'dayjs';

import {
  showFormattedTime,
  showDuration
} from '../utils/mocks.js';


export const createTripItemTemplate = (point) => {
  const {type, date_from, date_to, destination, base_price, offers, is_favorite} = point;
  
  const createOffers = (offers) => {
    let offersList = ``;
    if (!offers.length) {
      return '';
    };
    offers.forEach(( {title, price} ) => {
      offersList += `<li class="event__offer">
        <span class="event__offer-title">${title}</span>
        &plus;&euro;&nbsp;
        <span class="event__offer-price">${price}</span>
      </li>`
    });
    return `<ul class="event__selected-offers">
      ${offersList}
    </ul>`;
  };

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${showFormattedTime(date_from, 'YYYY-MM-DD')}">${showFormattedTime(date_from, 'MMM DD')}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type.toLowerCase()}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${showFormattedTime(date_from, 'YYYY-MM-DD')}T${showFormattedTime(date_from, 'HH:mm')}">${showFormattedTime(date_from, 'HH:mm')}</time>
          &mdash;
          <time class="event__end-time" datetime="${showFormattedTime(date_to, 'YYYY-MM-DD')}T${showFormattedTime(date_to, 'HH:mm')}">${showFormattedTime(date_to, 'HH:mm')}</time>
        </p>
        <p class="event__duration">${showDuration(date_from, date_to)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${base_price}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      ${createOffers(offers)}
      <button class="event__favorite-btn ${is_favorite ? 'event__favorite-btn--active' : ''}" type="button">
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
