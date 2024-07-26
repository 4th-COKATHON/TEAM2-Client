import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api/api';
import axios from 'axios';
import InputForm from '../components/InputForm';
import capsuleDefault from '../assets/capsule_default.svg';
import lockIcon from '../assets/lock.svg';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const CapsuleImg = styled.img`
  width: 180px;
  height: 180px;
`;

const ErrorMessage = styled.div`
  color: white;
`;

const Button = styled.button`
  background-color: white;
  color: #ce98ca;
  border: 0.82px solid #ce98ca;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 14.9px;
  font-family: Pretendard;
  font-weight: 500;
  cursor: pointer;
  margin-top: 20px;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();

  const handleIdInput = (e) => {
    const inputId = e.target.value;
    setId(inputId);

    if (inputId.length < 6 || inputId.length > 30) {
      setIdError('ID는 6자 이상, 30자 이하로 입력하세요.');
    } else {
      setIdError('');
    }
  };

  const handlePasswordInput = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 8 || inputPassword.length > 30) {
      setPasswordError('비밀번호는 8자 이상, 30자 이하로 입력하세요.');
    } else {
      setPasswordError('');
    }
  };

  const isFormValid = !idError && !passwordError && id && password;

  // const handleLogin = async () => {
  //   // 로그인 처리 로직
  //   api
  //     .post('/api/auth/login', {
  //       loginId: id,
  //       password: password,
  //     })
  //     .then((res) => {
  //       localStorage.setItem('token', res.data.data.accessToken);
  //       console.log(id);
  //       console.log(password);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };
  const handleLogin = async () => {
    // 로그인 처리 로직
    axios
      .post('http://3.36.224.165:8080/api/auth/login', {
        loginId: id,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.data.accessToken);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <CapsuleImg src={capsuleDefault} alt="capsule" />
      <label htmlFor="id">아이디</label>
      <InputForm
        id="id"
        type="text"
        icon={lockIcon}
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={handleIdInput}
      />
      {/* <input type="text" id="id" placeholder="아이디" value={id} onChange={handleIdInput} /> */}
      {idError && <ErrorMessage>{idError}</ErrorMessage>}
      <label htmlFor="password">비밀번호</label>
      <InputForm
        id="password"
        type="password"
        icon={lockIcon}
        placeholder="비밀번호를 입력하세요"
        value={password}
        onChange={handlePasswordInput}
      />
      {/* <input
        type="password"
        id="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordInput}
      /> */}
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      <Button onClick={handleLogin} disabled={!isFormValid}>
        로그인
      </Button>
      <p className="signup-link">
        <Link to="/signup">회원가입하기</Link>
      </p>
    </Container>
  );
};

export default Login;
