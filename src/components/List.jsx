import React, { useEffect } from 'react';
import styled from 'styled-components';
import ListItem from './ListItem';
import bottomGradient from '../assets/list_container_bottom_gradient.svg';
import point from '../assets/tab_selected_point.svg';

const List = ({ capsuleList, isSelf, setIsSelf, setOpenModal, setCapsuleId, openModal }) => {
  useEffect(() => {
    console.log(openModal);
  }, [openModal]);

  return (
    <Wrapper>
      <TabDiv>
        {isSelf ? (
          <>
            <TabButton onClick={() => setIsSelf(true)}>
              <img src={point} />
              <span style={{ color: '#FFBEFA' }}>내 별</span>
            </TabButton>
            <TabButton onClick={() => setIsSelf(false)}>
              <img src={point} />
              <span>받은 별</span>
            </TabButton>
          </>
        ) : (
          <>
            <TabButton onClick={() => setIsSelf(true)}>
              <span>내 별</span>
            </TabButton>
            <TabButton onClick={() => setIsSelf(false)}>
              <img src={point} />
              <span style={{ color: '#FFBEFA' }}>받은 별</span>
            </TabButton>
          </>
        )}
      </TabDiv>
      <ListDiv>
        {capsuleList.map((capsule) => (
          <ListItem
            key={capsule.articleId}
            name={capsule.name}
            title={capsule.title}
            date={capsule.date}
            dday={capsule.dday}
            onClick={() => {
              setOpenModal(true);
              setCapsuleId(capsule.articleId);
              console.log('뫌', openModal);
              console.log(capsule.articleId);
            }}
          />
        ))}
      </ListDiv>
      <BottomGradient img={bottomGradient} />
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 18rem;
  border-radius: 0.56719rem;
  border: 1px solid var(--Linear, #ce98ca);
  background: linear-gradient(180deg, rgba(206, 152, 202, 0.5) 0%, rgba(163, 117, 215, 0.5) 100%);
  box-shadow: 0px 0px 20px 0px #ce98ca;
  position: relative;
`;

const TabDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

const TabButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: transparent;
  border: none;
  img {
    width: 8px;
  }
  span {
    font-size: 0.8rem;
    width: 4rem;
    color: white;
  }
`;

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const BottomGradient = styled.div`
  width: 100%;
  height: 5rem;
  z-index: 10;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  bottom: 0;
`;
