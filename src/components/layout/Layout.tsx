import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Headers from './Header';

const Layout = () => {
  return (
    <Wrapper>
      <Headers />
      <Main>
        <Outlet />
      </Main>
    </Wrapper>
  );
};

export default Layout;

const Wrapper = styled.div`
  position: relative;
  min-height: 100%;
`;
const Main = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
`;
