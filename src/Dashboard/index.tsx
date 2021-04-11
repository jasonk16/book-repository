import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import { motion } from 'framer-motion';

import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';
import ControlButtons from '../components/ControlButtons';
import { useModal } from '../components/ModalBox';
import AddBook from '../components/AddBook';
import { removeBooks } from '../functions/redux/actions';
import { sortBooksByGenre } from '../functions';

const Dashboard: React.FC = () => {
  const [deleteBooks, setDeleteBooks] = useState(false);
  const [selectedBookList, setSelectedBookList] = useState<BookListProps[]>([]);
  const [sortedBooksByGenre, setSortedBooksByGenre] = useState([]);
  const modal = useModal();
  const dispatch = useDispatch();
  const bookLists = useSelector((state: RootStateOrAny) => state.BookLists);

  //animation to stagger children book card
  const bookCardContainerAnimation = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  //add selected books to the array of selected books
  const selectedBooksArray = (book: BookListProps) => {
    if (!selectedBookList.includes(book)) {
      setSelectedBookList((selectedBookList: BookListProps[]) => [...selectedBookList, book]);
    } else {
      setSelectedBookList(selectedBookList.filter((bookObject: BookListProps) => bookObject !== book));
    }
  };

  //process callback from control buttons to its corresponding actions.
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
        //remove books stored in redux, and reset state and array
        dispatch(removeBooks(selectedBookList));
        setDeleteBooks(false);
        setSelectedBookList([]);
        break;
    }
  };

  //run sort feature to display genres as groups
  useEffect(() => {
    if (bookLists) {
      setSortedBooksByGenre(sortBooksByGenre(bookLists));
    }
  }, [bookLists]);

  return (
    <>
      <Navbar />
      <Container>
        <ControlButtons action={controlButtonAction} deleteMode={deleteBooks} />
        {Object.keys(sortedBooksByGenre).length !== 0 &&
          Object.keys(sortedBooksByGenre).map((genre) => {
            return (
              <div key={genre} className="mt-5">
                <h2>{genre}</h2>
                <motion.div className="d-lg-flex" variants={bookCardContainerAnimation} initial="hidden" animate="show">
                  {sortedBooksByGenre[genre].map((book: BookListProps) => {
                    return (
                      <BookCard
                        key={book.isbn}
                        bookDetails={book}
                        isDelete={deleteBooks}
                        selected={() => selectedBooksArray(book)}
                      />
                    );
                  })}
                </motion.div>
              </div>
            );
          })}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

export default Dashboard;
