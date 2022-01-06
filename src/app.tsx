/* eslint-disable import/no-unresolved */
import React from 'react';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Login from '@Pages/login/Login';
import Signup from '@Pages/signup/Signup';
import RecentMusic from '@Components/layout/RecentMusic';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Wrapper>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<RecentMusic />} />
          <Route path="/chart" element={<div />} />
        </Route>
        <Route path="login/" element={<Login />} />
        <Route path="signup/" element={<Signup />} />
      </Routes>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  position: relative;
  /* max-width: 1280px; */
  /* min-width: 800px; */
  min-height: 100%;
  /* margin-right: auto; */
  /* margin-left: auto; */
`;
