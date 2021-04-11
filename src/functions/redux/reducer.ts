import { combineReducers } from 'redux';

import bookData from '../../../assets/books.json';

//adds initial state to store on application initialisation
const initialState = {
  BookLists: bookData,
};

const BookLists = (state = initialState.BookLists, action: ReducerProps) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOKS':
      return [...state.filter((book: BookListProps) => !action.payload.includes(book))];
    default:
      return state;
  }
};

//combines all reducers to be exported as a single function
const allReducers = combineReducers({
  BookLists,
});

export default allReducers;
