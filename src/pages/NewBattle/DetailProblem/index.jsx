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
} from './style';
import { StyleDeleteIcon } from '../style';

const DetailProblem = () => {
  const [inputOutputExamples, setInputOutputExamples] = useState([
    { input: '', output: '' },
  ]);
  const [gradingExamples, setGradingExamples] = useState([
    { input: '', output: '' },
  ]);

  const addInputOutputExample = () => {
    setInputOutputExamples((prevExamples) => [
      ...prevExamples,
      { input: '', output: '' },
    ]);
  };

  const addGradingExample = () => {
    setGradingExamples((prevExamples) => [
      ...prevExamples,
      { input: '', output: '' },
    ]);
  };

  const deleteInputOutputExample = (index) => {
    setInputOutputExamples((prevExamples) =>
      prevExamples.filter((_, i) => i !== index)
    );
  };

  const deleteGradingExample = (index) => {
    setGradingExamples((prevExamples) =>
      prevExamples.filter((_, i) => i !== index)
    );
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
        {inputOutputExamples.map((example, index) => (
          <LineWrapper key={index}>
            <LeftWrapper>
              <SubTitle>입력 예시 {index + 1}</SubTitle>
              <InputBox
                width='400px'
                height='150px'
                placeholder='내용을 입력하세요'
                value={example.input}
                onChange={(e) => {
                  const updatedExamples = [...inputOutputExamples];
                  updatedExamples[index].input = e.target.value;
                  setInputOutputExamples(updatedExamples);
                }}
              />
            </LeftWrapper>
            <RightWrapper>
              <SubTitle>
                출력 예시 {index + 1}{' '}
                <StyleDeleteIcon
                  onClick={() => deleteInputOutputExample(index)}
                />
              </SubTitle>
              <InputBox
                width='400px'
                height='150px'
                placeholder='내용을 입력하세요'
                value={example.output}
                onChange={(e) => {
                  const updatedExamples = [...inputOutputExamples];
                  updatedExamples[index].output = e.target.value;
                  setInputOutputExamples(updatedExamples);
                }}
              />
            </RightWrapper>
          </LineWrapper>
        ))}
      </InoutputWrapper>

      <AdditionButton onClick={addInputOutputExample}>
        입출력 예시 추가
      </AdditionButton>

      <InoutputWrapper style={{ flexDirection: 'column' }}>
        {gradingExamples.map((example, index) => (
          <LineWrapper key={index}>
            <LeftWrapper>
              <SubTitle>채점 입력 {index + 1}</SubTitle>
              <InputBox
                width='400px'
                height='150px'
                placeholder='내용을 입력하세요'
                value={example.input}
                onChange={(e) => {
                  const updatedExamples = [...gradingExamples];
                  updatedExamples[index].input = e.target.value;
                  setGradingExamples(updatedExamples);
                }}
              />
            </LeftWrapper>
            <RightWrapper>
              <SubTitle>
                채점 출력 {index + 1}{' '}
                <StyleDeleteIcon onClick={() => deleteGradingExample(index)} />
              </SubTitle>
              <InputBox
                width='400px'
                height='150px'
                placeholder='내용을 입력하세요'
                value={example.output}
                onChange={(e) => {
                  const updatedExamples = [...gradingExamples];
                  updatedExamples[index].output = e.target.value;
                  setGradingExamples(updatedExamples);
                }}
              />
            </RightWrapper>
          </LineWrapper>
        ))}
      </InoutputWrapper>

      <AdditionButton onClick={addGradingExample}>
        채점 예시 추가
      </AdditionButton>

      <SaveButton>저장</SaveButton>
    </DetailProblemWrapper>
  );
};

export default DetailProblem;
