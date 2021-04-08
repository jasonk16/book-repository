import React from 'react';
import styled from 'styled-components';
import Tooltip from 'antd/es/tooltip';

type BookCardProps = {
  bookDetails: {
    title: string;
    isbn: string;
  };
};

const BookCard: React.FC<BookCardProps> = ({ bookDetails }) => {
  return (
    <BookContainer className="mx-3">
      <BookFrame className="d-flex justify-content-center align-items-center">
        <BookShortform>{bookDetails.title.substring(0, 2)}</BookShortform>
      </BookFrame>
      <div className="my-3">
        <Tooltip title={bookDetails.title} mouseEnterDelay={0.1}>
          <BookTitle className="mb-1">{bookDetails.title}</BookTitle>
        </Tooltip>
        <Isbn>ISBN: {bookDetails.isbn}</Isbn>
      </div>
    </BookContainer>
  );
};

const BookContainer = styled.div`
  width: 14rem;
  cursor: pointer;
`;
const BookFrame = styled.div`
  height: 18rem;
  width: 14rem;
  background-color: ${(props) => props.theme.LightPink};
  border-radius: 8px;
`;
const BookShortform = styled.h1`
  color: ${(props) => props.theme.OldRose};
`;
const BookTitle = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
const Isbn = styled.small`
  color: ${(props) => props.theme.TextGrey};
`;

export default BookCard;
