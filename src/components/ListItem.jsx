import React from 'react';
import styled from 'styled-components';
import logo from '../assets/list_item_logo.svg';
import arrow from '../assets/arrow_right.svg';

const ListItem = () => {
  return (
    <Wrapper>
      <InfoDiv>
        <p>이름</p>
        <span>ㅣ2024.12.12</span>
      </InfoDiv>
      <ContentDiv>
        <TitleDiv>
          <img src={logo} alt="logo" />
          <p>제목</p>
        </TitleDiv>
        <RemainDiv>
          <span>D-100</span>
          <img src={arrow} alt="arrow" />
        </RemainDiv>
      </ContentDiv>
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f1efff;
  border-radius: 16px;
  border: none;
  width: 28rem;
  height: 5rem;
  border: 2px solid var(--Linear, #ce98ca);
  box-shadow: 0.751px 3.003px 15.315px 0px rgba(0, 0, 0, 0.1);
  padding-top: -0.5rem;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.2rem;
  height: 1.6rem;
  p,
  span {
    font-size: 0.725rem;
    color: #7261ff;
  }
  p {
    font-weight: 700;
  }
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2rem;
  padding: 0 1.2rem;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  p {
    font-weight: 700;
    font-size: 1.2rem;
    color: #7261ff;
    margin-left: 8px;
  }
`;

const RemainDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    font-weight: 700;
    font-size: 1.2rem;
    color: #7261ff;
    margin-right: 1rem;
    padding-bottom: 2px;
  }
`;
