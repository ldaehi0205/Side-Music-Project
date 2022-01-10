import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import styled from 'styled-components';
import Logo from '../Logo';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['connected']);
  const [menu, setMenu] = useState('recent');

  return (
    <Wrapper>
      <HeaderContain>
        <LeftSection>
          <Logo />
          {/* <Search /> */}
          <Menu isClicked={menu === 'recent'}>
            <Link to="/" onClickCapture={() => setMenu('recent')}>
              최신 음악
            </Link>
          </Menu>
          <Menu isClicked={menu === 'chart'}>
            <Link to="/chart" onClickCapture={() => setMenu('chart')}>
              음악 차트
            </Link>
          </Menu>
          <Menu isClicked={menu === 'recommend'}>
            <Link to="/recommend" onClickCapture={() => setMenu('recommend')}>
              음악 추천
            </Link>
          </Menu>
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
      </HeaderContain>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  z-index: 10;
`;

const HeaderContain = styled.div`
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1340px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 400px;
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

const Menu = styled.div<{ isClicked: boolean }>`
  position: relative;
  text-align: center;
  width: 80px;
  padding: 0px;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.4px;
  box-sizing: border-box;
  cursor: pointer;

  a {
    text-decoration: none !important;
    color: ${(props) => (props.isClicked ? 'rgb(0,0,0)' : 'rgb(126, 126, 126)')};
  }
`;
