import React from 'react';
import styled from 'styled-components';
import { Tooltip, Checkbox, Button } from 'antd';
import { motion } from 'framer-motion';

import { useModal, useModalToggle } from '../components/ModalBox';

type BookCardProps = {
  bookDetails: BookListProps;
  isDelete: boolean;
  selected: () => void;
};

type BookInfoContainerProps = {
  bookDetails: BookListProps;
};

//Component to display book info in modal box when clicked.
const BookInfoContainer: React.FC<BookInfoContainerProps> = ({ bookDetails }) => {
  const toggleModal = useModalToggle();

  return (
    <BookInfoModal>
      <h3>{bookDetails.title}</h3>
      <div className="d-flex flex-column flex-lg-row justify-content-between">
        <p>{bookDetails.genre}</p>
        <p>ISBN: {bookDetails.isbn}</p>
      </div>
      <h4>Summary</h4>
      <SummaryTextContainer>
        <SummaryText>{bookDetails.summary}</SummaryText>
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

//component to display individual book
const BookCard: React.FC<BookCardProps> = ({ bookDetails, isDelete, selected }) => {
  const modal = useModal();

  const onBookCardSelect = () => {
    if (!isDelete) {
      modal(<BookInfoContainer bookDetails={bookDetails} />);
    }
  };

  //animation for each individual card
  const bookCardAnimation = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };

  return (
    <motion.div variants={bookCardAnimation}>
      <label htmlFor={bookDetails.isbn}>
        <BookContainer className="my-1 m-lg-3" onClick={() => onBookCardSelect()}>
          {isDelete && (
            <SelectCheckbox>
              <Checkbox id={bookDetails.isbn} onChange={selected} />
            </SelectCheckbox>
          )}
          <div className="d-flex flex-row flex-lg-column">
            <BookFrame className="d-flex justify-content-center align-items-center">
              <BookShortform>{bookDetails.title.substring(0, 2)}</BookShortform>
            </BookFrame>
            <BookTextContainer className="py-3 py-lg-0 my-lg-3 ml-3 ml-lg-0">
              <Tooltip title={bookDetails.title} mouseEnterDelay={0.1}>
                <BookTitle className="mb-1">{bookDetails.title}</BookTitle>
              </Tooltip>
              <SmallText>ISBN: {bookDetails.isbn}</SmallText>
            </BookTextContainer>
          </div>
        </BookContainer>
      </label>
    </motion.div>
  );
};

const BookContainer = styled.div`
  width: 14rem;
  cursor: pointer;
  position: relative;
  ${(props) => props.theme.media.mobileTablet} {
    width: 100%;
    background-color: ${(props) => props.theme.White};
  }
`;
const BookFrame = styled.div`
  height: 18rem;
  width: 14rem;
  background-color: ${(props) => props.theme.LightPink};
  border-radius: 8px;
  ${(props) => props.theme.media.mobileTablet} {
    height: 8rem;
    width: 6rem;
  }
`;
const SelectCheckbox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  ${(props) => props.theme.media.mobileTablet} {
    left: 10px;
  }
`;
const BookTextContainer = styled.div`
  ${(props) => props.theme.media.mobileTablet} {
    width: 70%;
  }
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
const SummaryText = styled(GreyBodyText)`
  line-height: 1.5;
`;
const BookInfoModal = styled.div`
  max-width: 50vw;
  ${(props) => props.theme.media.mobileTablet} {
    max-width: 100%;
  }
`;
const SummaryTextContainer = styled.div`
  max-height: 20rem;
  overflow-y: scroll;
  min-width: 30rem;
  ${(props) => props.theme.media.mobileTablet} {
    min-width: 100%;
  }
`;

export default BookCard;
