import React, { useState } from 'react';
import {
  Title,
  DetailProblemWrapper,
  InputBox,
  LineWrapper,
  Text,
  SubTitle,
  InoutputWrapper,
  LeftWrapper,
  SaveButton,
  AdditionButton,
  RightWrapper,
  AddGradeFile,
  StyleAddIcon,
  StyleCircleIcon,
} from './style';

const DetailProblem = () => {
  const [exampleCount, setExampleCount] = useState(1); // 예시 개수를 관리하는 상태

  const addExample = () => {
    setExampleCount((prevCount) => prevCount + 1); // 예시 개수를 1 증가시킴
  };

  return (
    <DetailProblemWrapper>
      <Title>1번</Title>
      <LineWrapper>
        <InputBox width='180px' height='26px' placeholder='문제 제목' />
        <Text margin='4px 8px 4px 50px'>제한 시간:</Text>
        <InputBox width='54px' height='24px' />
        <Text>초</Text>
        <Text margin='4px 8px 4px 20px'>제한 메모리:</Text>
        <InputBox width='54px' height='24px' />
        <Text>MB</Text>
        <Text margin='4px 8px 4px 90px'>점수:</Text>
        <InputBox width='54px' height='24px' />
        <Text>점</Text>
      </LineWrapper>

      <SubTitle>문제</SubTitle>
      <InputBox width='100%' height='150px' placeholder='내용을 입력하세요' />

      <SubTitle>입력</SubTitle>
      <InputBox width='100%' height='150px' placeholder='내용을 입력하세요' />

      <SubTitle>출력</SubTitle>
      <InputBox width='100%' height='76px' placeholder='내용을 입력하세요' />

      <InoutputWrapper style={{ flexDirection: 'column' }}>
        {[...Array(exampleCount)].map(
          (
            _,
            index // 예시 개수만큼 반복해서 렌더링
          ) => (
            <LineWrapper key={index}>
              <LeftWrapper>
                <SubTitle>입력 예시 {index + 1}</SubTitle>
                <InputBox
                  width='400px'
                  height='150px'
                  placeholder='내용을 입력하세요'
                />
              </LeftWrapper>
              <RightWrapper>
                <SubTitle>출력 예시 {index + 1}</SubTitle>
                <InputBox
                  width='400px'
                  height='150px'
                  placeholder='내용을 입력하세요'
                />
              </RightWrapper>
            </LineWrapper>
          )
        )}
      </InoutputWrapper>

      <AdditionButton onClick={addExample}>입출력 예시 추가</AdditionButton>

      <AddGradeFile>
        채점 파일 input <StyleAddIcon /> <StyleCircleIcon />
      </AddGradeFile>
      <AddGradeFile>
        채점 파일 output <StyleAddIcon /> <StyleCircleIcon />
      </AddGradeFile>

      <SaveButton>저장</SaveButton>
    </DetailProblemWrapper>
  );
};

export default DetailProblem;
