type BookListProps = {
  title: string;
  isbn: string;
  genre: string;
  summary: string;
}[];

export const initialiseBookList = (bookArray: BookListProps) => {
  return {
    type: 'INIT_BOOK_LIST',
    payload: [...bookArray],
  };
};

export const addBookToList = (book: any) => {
  return {
    type: 'ADD_BOOK',
    payload: {
      title: book.bookName,
      isbn: book.isbn,
      genre: book.genre,
      summary: book.summary,
    },
  };
};

export const removeBooks = (bookArray: BookListProps) => {
  return {
    type: 'REMOVE_BOOKS',
    payload: [...bookArray],
  };
};
