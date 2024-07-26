import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ListItem from '../components/ListItem';
import logo from '../assets/app_logo.svg';
import capsuleDefault from '../assets/capsule_default.svg';
import addBtn from '../assets/add_btn.svg';
import List from '../components/List';
import api from '../api/api';
import RegisterModal from '../components/RegisterModal';
import Capsule from '../components/Capsule';
import { useNavigate } from 'react-router';

const Home = () => {
  const [lockedList, setLockedList] = useState([]);
  const [openedList, setOpenedList] = useState([]);
  const [isSelfLocked, setIsSelfLocked] = useState(true);
  const [isSelfOpened, setIsSelfOpened] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [capsuleId, setCapsuleId] = useState(0);

  const navigate = useNavigate();

  const fetchLockedData = async () => {
    await api
      .get('/api/articles', {
        params: {
          lock: true,
          self: isSelfLocked,
          page: currentPage,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.content);
        setLockedList(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fetchOpenedData = async () => {
    await api
      .get('/api/articles', {
        params: {
          lock: false,
          self: isSelfOpened,
          page: currentPage,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res.data.data.content);
        setOpenedList(res.data.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchLockedData();
    fetchOpenedData();
  }, []);

  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  return (
    <Wrapper>
      <CapsuleSection>
        {openModal ? (
          <Capsule setOpenModal={setOpenModal} capsuleId={capsuleId} />
        ) : (
          <>
            <Logo src={logo} alt="logo" />
            <h3>
              손민재님!
              <br />
              타임캡슐에 추억을 담아보세요
            </h3>
            <CapsuleImg src={capsuleDefault} alt="capsule" />
            <p>
              여러분들이 원하는 그날,
              <br />
              다시 열어볼 수 있게 도와드려요!
            </p>
            <AddBtn
              src={addBtn}
              alt="+"
              onClick={() => {
                setOpenModal(true);
                navigate('/register');
              }}
            />
          </>
        )}
      </CapsuleSection>
      <ListSection>
        <List
          capsuleList={lockedList}
          isSelf={isSelfLocked}
          setIsSelf={setIsSelfLocked}
          setOpenModal={setOpenModal}
          setCapsuleId={setCapsuleId}
          openModal={openModal}
        />
        <List
          capsuleList={openedList}
          isSelf={isSelfOpened}
          setIsSelf={setIsSelfOpened}
          setOpenModal={setOpenModal}
          setCapsuleId={setCapsuleId}
          openModal={openModal}
        />
      </ListSection>
      {/* {openModal && <RegisterModal />} */}
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const CapsuleSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 100%;
  margin-right: 12rem;
  h3 {
    color: #fff;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 600;
    margin: 1rem;
  }
  p {
    text-align: center;
    font-family: Pretendard;
    font-size: 1.2rem;
    font-weight: 600;
    background: var(--Linear, linear-gradient(180deg, #ce98ca 0%, #a375d7 100%));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: -1rem;
    margin-bottom: 0;
  }
`;

const Logo = styled.img`
  width: 12rem;
`;

const CapsuleImg = styled.img`
  width: 20rem;
`;

const AddBtn = styled.img`
  width: 5rem;
  margin-top: 1rem;
`;

const ListSection = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 1rem;
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const FilterDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
