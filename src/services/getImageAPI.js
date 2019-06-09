import axios from 'axios';

/* eslint-disable-next-line */
export const getImageByQuery = (query, page = 1) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${query}&page=${page}&per_page=12&key=12715341-4a1a75add0c0b95007e6d71a8`,
  );
};

// pixabay key 12715341-4a1a75add0c0b95007e6d71a8
