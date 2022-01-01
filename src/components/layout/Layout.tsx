import React from 'react';
import styled from 'styled-components';
import Headers from './Header';
import Nav from './Nav';
import RecentMusic from './RecentMusic';

const Layout = () => {
  return (
    <Wrapper>
      <Headers />
      <Main>
        <Nav />
        <RecentMusic />
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
`;
