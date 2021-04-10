import { combineReducers } from 'redux';

const initialState = {
  BookLists: [
    {
      title: '',
      isbn: '',
      genre: '',
      summary: '',
    },
  ],
};

const BookLists = (state = initialState.BookLists, action: any) => {
  switch (action.type) {
    case 'INIT_BOOK_LIST':
      return action.payload;
    case 'ADD_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOKS':
      return [...state.filter((book: any) => !action.payload.includes(book))];
    default:
      return state;
  }
};

//combines all reducers to be exported as a single function
const allReducers = combineReducers({
  BookLists,
});

export default allReducers;
