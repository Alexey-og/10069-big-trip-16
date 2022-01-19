export const sortDay = (eventA, eventB) => {
  if (eventA.dateFrom > eventB.dateFrom) {
    return 1;
  }
  if (eventA.dateFrom < eventB.dateFrom) {
    return -1;
  }
  return 0;
};

export const sortTime = (eventA, eventB) => {
  if (eventA.duration > eventB.duration) {
    return 1;
  }
  if (eventA.duration < eventB.duration) {
    return -1;
  }
  return 0;
};

export const sortEvent = (eventA, eventB) => {
  if (eventA.type > eventB.type) {
    return 1;
  }
  if (eventA.type < eventB.type) {
    return -1;
  }
  return 0;
};

export const sortPrice = (eventA, eventB) => {
  if (eventA.basePrice > eventB.basePrice) {
    return 1;
  }
  if (eventA.basePrice < eventB.basePrice) {
    return -1;
  }
  return 0;
};

export const sortOffer = (eventA, eventB) => {
  if (eventA.offers.length > eventB.offers.length) {
    return 1;
  }
  if (eventA.offers.length < eventB.offers.length) {
    return -1;
  }
  return 0;
};

export const capitalizeWord = (word) => {
  if (typeof word !== 'string') {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.slice(1);
};
