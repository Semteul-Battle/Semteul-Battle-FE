import styled, { css } from 'styled-components';
import { ReactComponent as AddIcon } from '@assets/AddIcon.svg';
import { ReactComponent as CircleIcon } from '@assets/CircleIcon.svg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 400;
`;

export const Title = styled.p`
  ${fontStyled}
  font-weight: 600;

  width: 100%;
`;

export const SubTitle = styled.p`
  ${fontStyled}
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 4px;

  width: 100%;
`;

export const Text = styled.p`
  ${fontStyled}
  font-size: 16px;

  margin: ${(props) => props.margin || '4px 12px 4px 0px'};
`;

export const DetailProblemWrapper = styled.div`
  display: block;
  justify-content: center;
  margin: 0 auto;
  margin-top: 80px;

  width: 840px;
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: start;

  width: 100%;
  //background-color: aqua;
`;

export const InputBox = styled.textarea`
  width: ${(props) => props.width || '220px'};
  height: ${(props) => props.height || '36px'};

  font-size: 20px;
  resize: none;
`;

export const InoutputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LeftWrapper = styled.div`
  display: block;
`;

export const RightWrapper = styled.div`
  display: block;
  margin-left: 36px;
`;

export const SaveButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 210px;
  height: 40px;
  margin: 24px 0px 24px 314px;

  border: none;
  border-radius: 12px;
  background-color: #106d1f;

  ${fontStyled};
  font-size: 16px;
  font-weight: 500;
  color: white;

  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }
`;

export const AdditionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 840px;
  height: 50px;

  border: 0.5px gray solid;
  margin-top: 24px;

  ${fontStyled};
  font-size: 20px;
  font-weight: 500;
  color: gray;

  &:hover {
    cursor: pointer;
  }
`;
