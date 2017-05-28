export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_BOOKS_SUCCESS':
      return action.books;
    case 'CREATE_BOOK_SUCCESS':
      return [
      ...state,
      Object.assign({}, action.book),
    ];
    default:
      return state
  }
}
