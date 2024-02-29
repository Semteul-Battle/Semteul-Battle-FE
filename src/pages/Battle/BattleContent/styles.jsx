import styled, { css } from 'styled-components';

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #9e9e9e;

  &:last-child {
    border-bottom: 1px solid #000;
  }
`;

const fontStyle = css`
  color: #000;
  text-align: center;
  font-family: 'NanumSquare Neo variable';
  font-size: 14px;
  font-weight: 500;
`;

export const Title = styled.div`
  width: 25%;

  > p {
    ${fontStyle}
    text-align: start;
  }
`;

export const ContentRow = styled.div`
  width: ${(props) => props.width};

  > p {
    ${fontStyle};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
`;

export const Button = styled.button`
  width: 60px;
  height: 28px;
  border-radius: 10px;
  background: ${(props) => props.color};
  border: none;
  cursor: pointer;

  ${fontStyle}
  color: #FFF;
`;
