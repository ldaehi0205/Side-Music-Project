/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useCookies } from 'react-cookie';
import Logo from '../Logo';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['connected']);

  return (
    <Wrapper>
      <LeftSection>
        <Logo />
        <Search />
      </LeftSection>
      <Admin>
        {cookies.connected ? (
          <div onClick={() => removeCookie('connected')}>로그아웃</div>
        ) : (
          <Link to="/login">로그인</Link>
        )}
        <div>/</div>
        {cookies.connected ? <div>{cookies.connected.name}님</div> : <Link to="/signup">회원가입</Link>}
      </Admin>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 936px;
  height: 87px;
  padding: 0 62px;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 10;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
`;

const Search = styled.input`
  position: relative;
  height: 34px;
  width: 374px;
  border: 2px solid green;
  border-radius: 20px;
  padding-left: 20px;
  outline: none;
`;

const Admin = styled.div`
  display: flex;
  justify-content: space-between;
  height: 20px;
  width: 112px;
  font-size: 14px;

  a,
  div {
    cursor: pointer;
    text-decoration: none;
    color: black;
    :hover {
      text-decoration: underline;
    }
  }
`;
