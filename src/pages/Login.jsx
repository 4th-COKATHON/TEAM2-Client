import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorMessage = styled.div`
  color: red;
`;

const StyledButton = styled.button`
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.5 : 1};
`;

const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [idError, setIdError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleIdInput = (e) => {
    const inputId = e.target.value;
    setId(inputId);

    if (inputId.length < 6 || inputId.length > 30) {
      setIdError("ID는 6자 이상, 30자 이하로 입력하세요.");
    } else {
      setIdError("");
    }
  }

  const handlePasswordInput = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);

    if (inputPassword.length < 8 || inputPassword.length > 30) {
      setPasswordError("비밀번호는 8자 이상, 30자 이하로 입력하세요.");
    } else {
      setPasswordError("");
    }
  }

  const isFormValid = !idError && !passwordError && id && password 

  const handleLogin = async (event) => {
    event.preventDefault();

    // 로그인 처리 로직

    console.log("로그인 버튼 클릭");
    console.log(id);
    console.log(password);
  }

  return (
    <Container>
      <label htmlFor="id">아이디</label>
      <input 
        type="text"
        id="id"
        placeholder="아이디"
        value={id}
        onChange={handleIdInput}
      />
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
      <button onClick={handleLogin} disabled={!isFormValid}>로그인</button>
      <p className="signup-link">
        <Link to="/signup">회원가입하기</Link>        
      </p>
    </Container>
  );
};

export default Login;
