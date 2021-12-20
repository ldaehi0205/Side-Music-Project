import React from 'react';
import styled from 'styled-components';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Wrapper>
      <Layout />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  position: relative;
  max-width: 1280px;
  min-width: 800px;
  min-height: 100%;
  margin-right: auto;
  margin-left: auto;
  background-color: #fff;
`;
