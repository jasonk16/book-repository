import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import bookData from '../../assets/books.json';
import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import ControlButtons from '../components/ControlButtons';
import { useModal } from '../components/ModalBox';
import AddBook from '../components/AddBook';
import { initialiseBookList, removeBooks } from '../functions/redux/actions';

const Dashboard: React.FC = () => {
  const [deleteBooks, setDeleteBooks] = useState(false);
  const [selectedBookList, setSelectedBookList] = useState<any>([]);
  const modal = useModal();
  const dispatch = useDispatch();
  const bookLists = useSelector((state: RootStateOrAny) => state.BookLists);

  const sortBooksByGenre = () => {};

  const selectedBooksArray = (book: any) => {
    if (!selectedBookList.includes(book)) {
      setSelectedBookList((selectedBookList: any) => [...selectedBookList, book]);
    } else {
      setSelectedBookList(selectedBookList.filter((bookObject: any) => bookObject !== book));
    }
  };

  const removeBooksFromArray = () => {
    dispatch(removeBooks(selectedBookList));
    setDeleteBooks(false);
    setSelectedBookList([]);
  };

  const controlButtonAction = (action: string) => {
    switch (action) {
      case 'add':
        modal(<AddBook />);
        break;
      case 'delete':
        setDeleteBooks(!deleteBooks);
        break;
      case 'cancel':
        setDeleteBooks(!deleteBooks);
        break;
      case 'confirmDelete':
        removeBooksFromArray();
        break;
    }
  };

  //populate book list to redux store upon mount.
  useEffect(() => {
    dispatch(initialiseBookList(bookData));
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <ControlButtons action={controlButtonAction} deleteMode={deleteBooks} />
        <div className="mt-4 mt-lg-0">
          <h2>Non-fiction</h2>
          <div className="d-flex">
            {bookLists &&
              bookLists.map((book: any) => {
                return (
                  <BookCard
                    key={book.isbn}
                    bookDetails={book}
                    isDelete={deleteBooks}
                    selected={(event) => selectedBooksArray(book)}
                  />
                );
              })}
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

export default Dashboard;
