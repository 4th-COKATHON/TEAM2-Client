import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../api/api';
import axios from 'axios';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

// const Logo = styled.img`

// `;

const ErrorMessage = styled.div`
  color: red;
`;

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [idError, setIdError] = useState('');
  const [passwordError, setPasswordError] = useState('');

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

  const handleLogin = async () => {
    // 로그인 처리 로직
    axios
      .post('http://3.36.224.165:8080/api/auth/login', {
        loginId: id,
        password: password,
      })
      .then((res) => {
        localStorage.setItem('token', res.data.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      {/* <Logo src="/logo.png" alt="Logo" /> */}
      <label htmlFor="id">아이디</label>
      <input type="text" id="id" placeholder="아이디" value={id} onChange={handleIdInput} />
      {idError && <ErrorMessage>{idError}</ErrorMessage>}
      <label htmlFor="password">비밀번호</label>
      <input
        type="password"
        id="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordInput}
      />
      {passwordError && <ErrorMessage>{passwordError}</ErrorMessage>}
      <button onClick={handleLogin} disabled={!isFormValid}>
        로그인
      </button>
      <p className="signup-link">
        <Link to="/signup">회원가입하기</Link>
      </p>
    </Container>
  );
};

export default Login;
