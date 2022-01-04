/* eslint-disable no-alert */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from '@Components/Logo';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { ApiCall } from '@Api/api';

axios.defaults.withCredentials = true;

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(['connected']);
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    pw: '',
  });

  const changeLoginInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value.replace(/\s/g, '');
    if (e.target.id === 'id') {
      setLoginInfo((prev) => ({ ...prev, [e.target.id]: `${inputVal}` }));
    }
    if (e.target.id === 'pw') {
      setLoginInfo((prev) => ({ ...prev, [e.target.id]: `${inputVal}` }));
    }
  };

  const submitLogin = () => {
    loginInfo.id &&
      loginInfo.pw &&
      ApiCall.sendLoginInfo(loginInfo)
        .then((res) => {
          setCookie('connected', res.data);
        })
        .then(() => {
          navigate('/');
        })
        .catch((err) => {
          alert('아이디 패스워드를 확인해주세요');
          // console.log(err);
        });
  };

  return (
    <Wrapper>
      <Logo />
      <Id id="id" type="text" onChange={changeLoginInfo} placeholder="아이디" />
      <Pw id="pw" type="password" onChange={changeLoginInfo} placeholder="비밀번호" />
      <AlertMsg />
      <LoginBtn isLogin={loginInfo.id && loginInfo.pw} onClick={submitLogin}>
        로그인
      </LoginBtn>
      <Join
        onClick={() => {
          navigate('/signup');
        }}
      >
        회원가입
      </Join>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 395px;
  height: 100%;
  margin: auto;
  padding: 190px 0 210px;
  box-sizing: border-box;
`;

const LoginBtn = styled.button<{ isLogin: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 54px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => (props.isLogin ? '#4f59ca' : '#8e8f92')};
  border-radius: 6px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;

const Id = styled.input`
  display: block;
  width: 100%;
  height: 54px;
  margin: 0;
  padding: 0 15px;
  border: 0;
  outline: 0;
  background-color: #fff;
  color: #121213;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  box-sizing: border-box;
  outline: none;
  margin-top: 30px;
  border: 1px solid #c0c0c1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  ::placeholder {
    color: #c0c0c1;
    margin-top: 3px;
  }
`;

const Pw = styled.input`
  display: block;
  width: 100%;
  height: 54px;
  margin: 0;
  padding: 0 15px;
  border: 0;
  outline: 0;
  background-color: #fff;
  color: #121213;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  box-sizing: border-box;
  border: 1px solid #c0c0c1;
  border-top: none;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  ::placeholder {
    color: #c0c0c1;
    margin-top: 3px;
  }
`;

const AlertMsg = styled.div`
  height: 20px;
  margin: 18px;
`;

const Join = styled.div`
  display: flex;
  flex-basis: 100%;
  align-items: center;
  padding: 5px;
  color: #6f6f72;
  font-size: 15px;
  letter-spacing: -0.42px;
  margin-top: 20px;
  width: 100%;
  cursor: pointer;

  :before {
    content: '';
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    width: 120px;
  }

  :after {
    content: '';
    flex-grow: 1;
    margin: 0px 16px;
    background: rgba(0, 0, 0, 0.35);
    height: 1px;
    font-size: 0px;
    line-height: 0px;
    width: 120px;
  }
`;
