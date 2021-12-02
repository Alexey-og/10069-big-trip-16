export const createEventPhotosTemplate = (photos) => {
  let eventPhotos = '';
  photos.forEach((photo) => {
    eventPhotos += `<img class='event__photo' src='${photo.src}' alt='${photo.description}'>`;
  });
  return eventPhotos;
};
