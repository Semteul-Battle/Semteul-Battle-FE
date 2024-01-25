import styled, { css } from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BattleWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
`;

const fontStyle = css`
  color: #000;
  text-align: center;
  font-family: 'NanumSquare Neo variable';
  font-size: 14px;
  font-weight: 500;
  margin: 4px;
`;

export const BattleHeader = styled.div`
  display: flex;
  margin: 48px 0 32px;

  > h5 {
    ${fontStyle}
    font-size: 30px;
    font-weight: 700;
  }
`;

export const BattleListWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const BattleInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const BattleTitle = styled.div`
  width: 25%;
  background: red;

  > p {
    ${fontStyle}
    text-align: start;
  }

  &:last-child {
    background: red;
    border-bottom: 1px soild #000;
  }
`;

export const BattleStartTime = styled.div`
  width: 25%;
  background: blue;

  > p {
    ${fontStyle}
  }
`;

export const BattleDuration = styled.div`
  width: 15%;
  background: green;

  > p {
    ${fontStyle}
  }
`;

export const BattleStatus = styled.div`
  width: 20%;
  background: yellow;

  > p {
    ${fontStyle}
  }
`;

export const BattleButton = styled.div`
  width: 15%;
  background: purple;

  > p {
    ${fontStyle}
  }
`;

export const BattleList = styled.div`
  width: 100%;
`;
