import Axios from 'axios';

const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

export const createBookSuccess = (book) => {
  return {
    type: 'CREATE_BOOK_SUCCESS',
    book
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    return Axios.post(apiUrl, book)
    .then((response) => {
      dispatch(createBookSuccess(response.data));
    })
    .catch((error) => {
      throw(error);
    });
  };
};

export const fetchBooksSuccess = (books) => {
  return {
    type: 'FETCH_BOOKS_SUCCESS',
    books
  }
};

export const fetchBooks = () => {
  return (dispatch) => {
    return Axios.get(apiUrl).then((response) => {
      dispatch(fetchBooksSuccess(response.data));
    })
    .catch((error) => {
      throw(error);
    });
  };
};
