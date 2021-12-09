import AbstractView from './abstract-view.js';

const createEmptyListTemplate = (messageList) => {
  const tripFiltersElement = document.querySelector('.trip-filters');
  const tripFilterInputValue = tripFiltersElement.querySelector('input[name="trip-filter"]:checked').value.toUpperCase();

  return `<p class="trip-events__msg">${messageList[tripFilterInputValue]}</p>`;
};

export default class EmptyListView extends AbstractView {
  #messageList = null;

  constructor(messageList) {
    super();
    this.#messageList = messageList;
  }

  get template() {
    return createEmptyListTemplate(this.#messageList);
  }
}
