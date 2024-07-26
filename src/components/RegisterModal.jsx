import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../assets/list_item_logo.svg';
import SearchBar from './SearchBar';
import registerBtn from '../assets/register_btn.svg';
import api from '../api/api';

const RegisterModal = () => {
  const [reciever, setReciever] = useState('');
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [content, setContent] = useState('');

  const onChangeYear = (e) => {
    setYear(e.target.value);
  };

  const onChangeMonth = (e) => {
    setMonth(e.target.value);
  };

  const onChangeDay = (e) => {
    setDay(e.target.value);
  };

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    api.post(
      '/api/articles',
      {
        recieverName: reciever,
        title: 'title',
        detail: content,
        expiredAt: `${year}-${month}-${day}`,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      },
    ).then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
      alert('별자리를 보내는데 실패했습니다.');
    });
  };

  return (
    <Wrapper>
      <Header>
        <TitleDiv>
          <Logo src={logo} alt="logo" />
          <SearchBar reciever={reciever} setReciever={setReciever} />
          <p>에게 보내는 별자리</p>
        </TitleDiv>
        <TimeDiv>
          <InputBox id="year" name="year" value={year} onChange={onChangeYear} />
          <span>년</span>
          <InputBox id="month" name="month" value={month} onChange={onChangeMonth} />
          <span>월</span>
          <InputBox id="day" name="day" value={day} onChange={onChangeDay} />
          <span>일</span>
        </TimeDiv>
      </Header>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#9F9F9F' }} />
      <ContentDiv>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={onChangeContent}
          placeholder="내용을 입력하세요."
        />
      </ContentDiv>
      <SumbitDiv onClick={onSubmit}>
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
  width: 60.9375rem;
  height: 30.8125rem;
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
