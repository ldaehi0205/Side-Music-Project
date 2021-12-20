import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <Wrapper>
      <LeftSection>
        <Logo>Music</Logo>
        <Search />
      </LeftSection>
      <Admin>
        <div>로그인</div>
        <div>/</div>
        <div>회원가입</div>
      </Admin>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 87px;
  padding: 0 62px;
  border-bottom: #f5f6f8;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 600px;
`;

const Logo = styled.div`
  font-size: 47px;
  font-family: cursive;
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
  width: 102px;
  font-size: 14px;

  div:not(:nth-child(2)) {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }
`;
