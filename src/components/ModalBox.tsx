import React, { useContext, useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const ModalContent = React.createContext(null);
const ToggleModalBox = React.createContext(null);

export const useModal = () => {
  return useContext(ModalContent);
};
export const useModalToggle = () => {
  return useContext(ToggleModalBox);
};

const ModalBox: React.FC = ({ children }) => {
  const [isActive, setIsActive] = useState(false);
  const [modalContent, setModalContent] = useState<any>();
  const modalBackgroundArea = useRef(null);

  const toggleDisplay = () => {
    setIsActive(!isActive);
  };

  const clickedBackground = (e: any) => {
    if (!modalBackgroundArea.current.contains(e.target)) {
      toggleDisplay();
    }
  };

  const toggleContent = (component: any) => {
    setModalContent(component);
    toggleDisplay();
  };

  //to toggle modal when click outside modal box
  useEffect(() => {
    if (isActive) {
      document.addEventListener('mousedown', clickedBackground);
    }
    return () => {
      document.removeEventListener('mousedown', clickedBackground);
    };
  });

  //for accesibility standards: prevent background scrolling when modal is activated.
  useEffect(() => {
    isActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'unset');
    document.addEventListener('keydown', onkeydown, false);
    return () => document.removeEventListener('keydown', onkeydown, false);
  }, [isActive]);

  return (
    <ModalContent.Provider value={toggleContent}>
      <ToggleModalBox.Provider value={toggleDisplay}>
        {children}
        {isActive && (
          <ModalBackground>
            <InnerModal ref={modalBackgroundArea}>{modalContent}</InnerModal>
          </ModalBackground>
        )}
      </ToggleModalBox.Provider>
    </ModalContent.Provider>
  );
};

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.4s ease-in-out;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const InnerModal = styled.div`
  max-width: 80%;
  background: ${(props) => props.theme.White};
  border-radius: 15px;
  padding: 2rem;
`;

export default ModalBox;
