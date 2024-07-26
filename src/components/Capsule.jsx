import React, { useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/list_item_logo.svg';
import api from '../api/api';

const Capsule = ({ setOpenModal, capsuleId }) => {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');

  const fetchData = async () => {
    await api
      .get(`/api/articles/${capsuleId}`, {
        params: {
          articleId: capsuleId,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.data);
        setName(res.data.data.data.senderName);
        setContent(res.data.data.data.detail);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Wrapper>
      <Header>
        <TitleDiv>
          <Logo src={logo} alt="logo" />
          <TitleText>
            <span>{name}</span>
            <p>이 보내온 별자리</p>
          </TitleText>
        </TitleDiv>
      </Header>
      <div style={{ width: '100%', height: '1px', backgroundColor: '#9F9F9F' }} />
      <ContentDiv>
        <p>{content}</p>
      </ContentDiv>
    </Wrapper>
  );
};

export default Capsule;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 29.95581rem;
  height: 22.8125rem;
  border-radius: 2.04513rem;
  border: 1.636px solid var(--Linear, #ce98ca);
  background: var(--Grays-White, #fff);
  box-shadow: 0px 6.544px 8.181px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem 1.5rem;
  position: relative;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  width: 100%;
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TitleText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    color: #6736c5;
    font-size: 1.2rem;
    font-weight: 700;
  }
  p {
    font-weight: 600;
    color: #7261ff;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.2rem;
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
  width: 3.2rem;
  margin-right: 1rem;
`;

const ContentDiv = styled.div`
  width: 20rem;
  height: 24rem;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  width: 100%;
  color: #5b5b5b;
  input {
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
  }
`;
