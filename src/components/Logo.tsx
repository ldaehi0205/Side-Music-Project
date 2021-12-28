import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Logo = () => {
  return (
    <Wrapper>
      <Link to="/">Music</Link>
    </Wrapper>
  );
};

export default Logo;
const Wrapper = styled.div`
  font-size: 47px;
  font-family: cursive;
  font-weight: 700;
  cursor: pointer;
  a {
    text-decoration: none;
    color: green;
  }
`;
