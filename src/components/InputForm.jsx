import React from 'react';
import styled from 'styled-components';

const InputForm = ({ icon, placeholder }) => {
  return (
    <Container>
      <IconDiv>
        <img src={icon} alt="icon" />
      </IconDiv>
      <InputContainer>
        <Input placeholder={placeholder} />
      </InputContainer>
    </Container>
  );
};

// const LoginForm = () => {
//   return (
//     <FormContainer>
//       <InputField icon={logo} placeholder="아이디를 입력하세요" />
//       <InputField icon={arrow} placeholder="비밀번호를 입력하세요" type="password" />
//     </FormContainer>
//   );
// };

export default InputForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  width: 400px;
  height: 40px;
  color: #CE98CA;
  font-size: 14.90px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
  box-shadow: 0px 0px 16px #D294FF;
  border: 0.82px #CE98CA solid;
`;

const IconDiv = styled.div`
  margin-left: 10px;
`;

const InputContainer = styled.div`
  flex: 1;
  display: flex;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  flex: 1;
  margin-left: 10px;
  outline: none;
  font-size: 14.90px;
  font-family: Pretendard;
  font-weight: 500;
  background-color: white;
  color: #CE98CA;
  box-sizing: border-box;
  border-radius: 20px;


  &::placeholder {
    color: #CE98CA;
  }
`;