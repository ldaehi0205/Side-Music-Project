/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Login from '@Pages/login/Login';
import Signup from '@Pages/signup/Signup';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
      </Switch>
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
`;
