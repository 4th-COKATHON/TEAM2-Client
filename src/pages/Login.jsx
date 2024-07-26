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


const Login = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    // 로그인 처리 로직

    console.log("로그인 버튼 클릭");
  }

  return (
    <Container>
      <label htmlFor="id">아이디</label>
      <input 
        type="text"
        id="id"
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
       />
      <label htmlFor="password">비밀번호</label>
      <input 
        type="password" 
        id="password"
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>로그인</button>
      <p className="signup-link">
        <Link to="/signup">회원가입하기</Link>        
      </p>
    </Container>
  );
};

export default Login;
