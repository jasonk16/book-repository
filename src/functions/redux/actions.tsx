export const addBookToList = (book: BookListProps) => {
  return {
    type: 'ADD_BOOK',
    payload: {
      title: book.title,
      isbn: book.isbn,
      genre: book.genre,
      summary: book.summary,
    },
  };
};

export const removeBooks = (bookArray: BookListProps[]) => {
  return {
    type: 'REMOVE_BOOKS',
    payload: [...bookArray],
  };
};
