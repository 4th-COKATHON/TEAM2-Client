import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FieldDiv>
          <input
            type="text"
            placeholder="이름을 입력해주세요"
            {...register('name', { required: true })}
          />
          {errors.name?.type === 'required' && <span>필수 입력 항목입니다.</span>}
        </FieldDiv>
        <FieldDiv>
          <input
            type="text"
            placeholder="아이디를 입력해주세요"
            {...register('id', {
              required: true,
              pattern: {
                value: /^.{6,30}$/,
                message: '아이디는 6자 이상 30자 이하여야 합니다.',
              },
            })}
          />
          {errors.id?.type === 'required' && <span>필수 입력 항목입니다.</span>}
          {errors.id?.type === 'pattern' && <span>{errors.id?.message}</span>}
        </FieldDiv>
        <FieldDiv>
          <input
            type="password"
            placeholder="비밀번호를 입력해주세요"
            {...register('password', {
              required: true,
              pattern: {
                value: /^.{8,30}$/,
                message: '비밀번호는 8자 이상 30자 이하여야 합니다.',
              },
            })}
          />
          {errors.password?.type === 'required' && <span>필수 입력 항목입니다.</span>}
          {errors.password?.type === 'pattern' && <span>{errors.password?.message}</span>}
        </FieldDiv>
        <button type="submit">가입하기</button>
      </form>
    </Wrapper>
  );
};

export default SignUp;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FieldDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: white;
  border-radius: 20px;
  margin: 10px;
  width: 400px;
  height: 40px;
  color: #ce98ca;
  font-size: 14.9px;
  font-family: Pretendard;
  font-weight: 500;
  word-wrap: break-word;
  box-shadow: 0px 0px 16px #d294ff;
  border: 0.82px #ce98ca solid;
`;
