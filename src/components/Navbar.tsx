import React from 'react';
import styled from 'styled-components';

const Navbar: React.FC = () => {
  return (
    <NavbarContainer>
      <div>
        <h3 className="mb-0">Book Repository</h3>
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  background-color: ${(props) => props.theme.White};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  z-index: 999;
`;

export default Navbar;
