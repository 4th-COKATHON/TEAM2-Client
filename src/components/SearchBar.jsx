import React from 'react';
import styled from 'styled-components';
import bar from '../assets/search_bar.svg';

const SearchBar = ({reciever, setReciever}) => {

  const onChange = (e) => {
    setReciever(e.target.value);
  }

  return (
    <Wrapper>
      <SearchIcon src={bar} alt="search" />
      <InputBox type="text" id="name" name="name" value={reciever} onChange={onChange}/>
    </Wrapper>
  );
};

export default SearchBar;

const Wrapper = styled.div`
  width: 10rem;
  height: 2.4rem;
  display: flex;
  position: relative;
`;

const SearchIcon = styled.img`
  margin-left: 1rem;
`;

const InputBox = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  font-size: 1rem;
  z-index: 100;
  position: absolute;
  padding-left: 3rem;
  background: var(--Linear, linear-gradient(180deg, #ce98ca 0%, #a375d7 100%));
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
