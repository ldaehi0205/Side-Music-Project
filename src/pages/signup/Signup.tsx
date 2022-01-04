import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '@Components/Logo';
import { ApiCall } from '@Api/api';
import styled from 'styled-components';

const Signup = () => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\D]{8,}$/;
  const navigate = useNavigate();
  const [checkingPw, setCheckingPw] = useState('');
  const [userInfo, setUserInfo] = useState({
    id: '',
    name: '',
    pw: '',
  });
  const isLoginAble =
    regex.test(userInfo.pw) && userInfo.name.length > 1 && userInfo.id.length > 2 && checkingPw === userInfo.pw;

  const changeUserInfo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputVal = e.target.value.replace(/\s/g, '');
      if (e.target.id === 'id') {
        setUserInfo((prev) => ({ ...prev, [e.target.id]: `${inputVal}` }));
      }
      if (e.target.id === 'name') {
        setUserInfo((prev) => ({ ...prev, [e.target.id]: `${inputVal}` }));
      }
      if (e.target.id === 'pw') {
        setUserInfo((prev) => ({ ...prev, [e.target.id]: `${inputVal}` }));
      }
    },
    [userInfo],
  );

  const submitapi = () => {
    isLoginAble &&
      ApiCall.sendUserInfo(userInfo)
        .then((res) => {
          navigate('/');
        })
        .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <Logo />
      <SignupWrapper>
        <InputField>
          <Label>아이디</Label>
          <Input type="text" id="id" placeholder="아이디 입력" onChange={changeUserInfo} />
        </InputField>
        {userInfo.id.length > 0 && userInfo.id.length < 3 && <Alert> 3글자 이상의 아이디를 입력해주세요.</Alert>}
        <InputField>
          <Label>이름</Label>
          <Input type="text" id="name" placeholder="2글자 이상 입력하세요" onChange={changeUserInfo} />
        </InputField>
        {userInfo.name.length === 1 && <Alert>이름을 확인해주세요.</Alert>}
        <InputField>
          <Label>비밀번호</Label>
          <Input type="password" id="pw" placeholder="영문, 숫자 8자 이상 입력하세요" onChange={changeUserInfo} />
        </InputField>
        {userInfo.pw.length > 0 && !regex.test(userInfo.pw) && <Alert>영문, 숫자를 포함하여 8자 이상 입력하세요</Alert>}
        <InputField>
          <Label>비밀번호 확인</Label>
          <Input type="password" onChange={(e) => setCheckingPw(e.target.value)} />
        </InputField>
        {checkingPw.length > 0 && checkingPw !== userInfo.pw && <Alert>비밀번호가 일치하지 않습니다.</Alert>}
      </SignupWrapper>
      <Join isJoin={isLoginAble} onClick={submitapi}>
        가입하기
      </Join>
    </Wrapper>
  );
};

export default Signup;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0 auto;
  padding: 20px 0px;
  width: 800px;
  background-color: #fff;
`;

const SignupWrapper = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 60px 40px;
  transition: all 1.5s ease;
`;

const InputField = styled.div`
  display: flex;
  margin: 0px auto;
  margin-bottom: 10px;
  width: 528px;
  height: 63px;
  border-bottom: 1px solid #d9d9d9;
`;

const Label = styled.div`
  position: relative;
  left: 20px;
  top: 5px;
  width: 130px;
  height: 100%;
  color: #687794;
  font-size: 16px;
  line-height: 63px;
  letter-spacing: -0.42px;
`;

const Input = styled.input`
  position: relative;
  top: 10px;
  width: 383px;
  height: 80%;
  border: none;
  outline: none;
  font-size: 16px;

  ::placeholder {
    color: #8696b5;
  }
`;

const Alert = styled.div`
  margin-left: 130px;
  color: red;
  font-size: 14px;
`;

const Join = styled.button<{ isJoin: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  min-height: 54px;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  background-color: ${(props) => (props.isJoin ? '#4f59ca' : '#8e8f92')};
  border-radius: 6px;
  box-sizing: border-box;
  border: none;
  cursor: pointer;
`;
