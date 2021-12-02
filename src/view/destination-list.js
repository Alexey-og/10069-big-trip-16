import { destinationList } from '../mock/trip.js';

export const createDestinationListTemplate = () => {
  let destinations = '';
  destinationList.forEach((destination) => {
    destinations += `<option value='${destination}'></option>`;
  });
  return destinations;
};
