import React, { useState } from 'react';
import styled from 'styled-components';
import Button from 'antd/es/button';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';

import bookData from '../../assets/books.json';

import Navbar from '../components/Navbar';
import BookCard from '../components/BookCard';

const Dashboard: React.FC = () => {
  const [bookList, setBookList] = useState(bookData);

  const sortBooksByGenre = () => {};

  const addBookToArray = () => {};

  const removeBookFromArray = () => {};

  return (
    <>
      <Navbar />
      <Container>
        <div className="d-flex justify-content-end">
          <Button
            type="primary"
            icon={<DeleteOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
            danger
          >
            DELETE
          </Button>
          <Button
            type="primary"
            icon={<PlusOutlined />}
            shape="round"
            size="large"
            className="d-flex align-items-center mx-2"
          >
            ADD BOOK
          </Button>
        </div>
        <div>
          <h2>Non-fiction</h2>
          <div className="d-flex">
            {bookList.map((book) => {
              return <BookCard key={book.isbn} bookDetails={book} />;
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
