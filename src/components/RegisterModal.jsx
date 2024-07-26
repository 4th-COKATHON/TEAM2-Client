import React from 'react';
import styled from 'styled-components';
import logo from '../assets/list_item_logo.svg';
import SearchBar from './SearchBar';
import registerBtn from '../assets/register_btn.svg';

const RegisterModal = () => {
  return (
    <Wrapper>
      <Header>
        <TitleDiv>
          <Logo src={logo} alt="logo" />
          <SearchBar />
          <p>에게 보내는 별자리</p>
        </TitleDiv>
        <TimeDiv>
          <InputBox />
          <span>년</span>
          <InputBox />
          <span>월</span>
          <InputBox />
          <span>일</span>
        </TimeDiv>
      </Header>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#9F9F9F' }} />
      <ContentDiv>
        <input type="text" placeholder="내용을 입력하세요." />
      </ContentDiv>
      <SumbitDiv>
        <SubmitButton src={registerBtn} />
      </SumbitDiv>
    </Wrapper>
  );
};

export default RegisterModal;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70.9375rem;
  height: 39.8125rem;
  border-radius: 2.04513rem;
  border: 1.636px solid var(--Linear, #ce98ca);
  background: var(--Grays-White, #fff);
  box-shadow: 0px 6.544px 8.181px 0px rgba(0, 0, 0, 0.2);
  padding: 3rem;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  p {
    font-weight: 600;
    color: #7261ff;
    width: 15rem;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: var(--Linear, linear-gradient(180deg, #ce98ca 0%, #a375d7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Logo = styled.img`
  width: 5rem;
`;

const TimeDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  span {
    text-align: center;
    font-family: Pretendard;
    font-size: 1.20188rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    background: var(--Linear, linear-gradient(180deg, #ce98ca 0%, #a375d7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const InputBox = styled.input`
  width: 2rem;
  height: 2rem;
  border: none;
  outline: none;
  background-color: #fff;
  font-size: 1rem;
  margin-left: 1rem;
`;

const ContentDiv = styled.div`
  width: 20rem;
  height: 24rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
  }
`;

const SumbitDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;

const SubmitButton = styled.img``;
