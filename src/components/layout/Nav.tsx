import React from 'react';
import styled from 'styled-components';

const Nav = () => {
  return (
    <Aside>
      <Menu> 최신 음악</Menu>
      <Menu> 음악 차트</Menu>
      <Menu> 음악 추천</Menu>
      <Menu> FAQ</Menu>
    </Aside>
  );
};

export default Nav;

const Aside = styled.div`
  position: fixed;
  top: 88px;
  background-color: #fff;
  width: 219px;
  height: 100vh;
  border-right: 1px solid #d9d9d9;
  padding: 10px 0px;
`;

const Menu = styled.div`
  position: relative;
  text-align: center;
  width: 170px;
  height: 36px;
  padding: 7px 20px;
  margin: 20px auto;
  color: #38383a;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.4px;
  box-sizing: border-box;
  cursor: pointer;

  :hover {
    color: green;
  }

  :nth-child(4) {
    margin-top: 40px;
    ::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -23px;
      width: 219px;
      height: 2px;
      border-top: 1px solid #d9d9d9;
    }
  }
`;
