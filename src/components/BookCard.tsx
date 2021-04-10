import React from 'react';
import styled from 'styled-components';
import { Tooltip, Checkbox, Button } from 'antd';

import { useModal, useModalToggle } from '../components/ModalBox';

type BookCardProps = {
  bookDetails: BookDetailsProps;
  isDelete: boolean;
  selected: (event: any) => void;
};

type BookDetailsProps = {
  title: string;
  isbn: string;
  genre: string;
  summary: string;
};

type BookInfoContainerProps = {
  bookDetails: BookDetailsProps;
};

const BookInfoContainer: React.FC<BookInfoContainerProps> = ({ bookDetails }) => {
  const toggleModal = useModalToggle();

  return (
    <BookInfoModal>
      <h3>{bookDetails.title}</h3>
      <div className="d-flex justify-content-between">
        <p>{bookDetails.genre}</p>
        <p>ISBN: {bookDetails.isbn}</p>
      </div>
      <h4>Summary</h4>
      <SummaryTextContainer>
        <GreyBodyText>{bookDetails.summary}</GreyBodyText>
      </SummaryTextContainer>
      <div className="d-flex justify-content-end">
        <Button
          type="primary"
          shape="round"
          size="large"
          className="d-flex align-items-center mt-3"
          onClick={() => toggleModal()}
        >
          CLOSE
        </Button>
      </div>
    </BookInfoModal>
  );
};

const BookCard: React.FC<BookCardProps> = ({ bookDetails, isDelete, selected }) => {
  const modal = useModal();
  const onBookCardSelect = () => {
    if (!isDelete) {
      modal(<BookInfoContainer bookDetails={bookDetails} />);
    }
  };

  return (
    <>
      <BookContainer className="mx-3" onClick={() => onBookCardSelect()}>
        {isDelete && (
          <SelectCheckbox>
            <Checkbox onChange={selected} />
          </SelectCheckbox>
        )}
        <BookFrame className="d-flex justify-content-center align-items-center">
          <BookShortform>{bookDetails.title.substring(0, 2)}</BookShortform>
        </BookFrame>
        <div className="my-3">
          <Tooltip title={bookDetails.title} mouseEnterDelay={0.1}>
            <BookTitle className="mb-1">{bookDetails.title}</BookTitle>
          </Tooltip>
          <SmallText>ISBN: {bookDetails.isbn}</SmallText>
        </div>
      </BookContainer>
    </>
  );
};

const BookContainer = styled.div`
  width: 14rem;
  cursor: pointer;
  position: relative;
`;
const BookFrame = styled.div`
  height: 18rem;
  width: 14rem;
  background-color: ${(props) => props.theme.LightPink};
  border-radius: 8px;
`;
const SelectCheckbox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
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
const SmallText = styled.small`
  color: ${(props) => props.theme.TextGrey};
`;
const GreyBodyText = styled.p`
  color: ${(props) => props.theme.TextGrey};
`;
const BookInfoModal = styled.div`
  max-width: 50vw;
`;
const SummaryTextContainer = styled.div`
  max-height: 20rem;
  overflow-y: scroll;
  min-width: 30rem;
`;

export default BookCard;
