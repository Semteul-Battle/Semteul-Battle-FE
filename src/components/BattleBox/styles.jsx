import styled, { css } from 'styled-components';

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 820px;
  height: 100px;
  border: 1.5px solid #476fe7;
  border-radius: 10px;
  margin: 16px;
  padding: 16px 28px;
  box-sizing: border-box;
`;

const fontStyle = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-style: normal;
  line-height: normal;
  margin: 0;
`;

export const LeftConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

export const BattleTitle = styled.div`
  display: flex;
  align-items: center;

  > h5 {
    ${fontStyle}
    font-size: 28px;
    font-weight: 700;
  }
`;

export const AutorityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 72px;
  height: 26px;
  border: 1.5px solid #d9d9d9;
  border-radius: 10px;
  margin-left: 8px;

  > p {
    ${fontStyle}
    font-size: 12px;
    font-weight: 300;
  }
`;

export const TimeConatainer = styled.div`
  > p {
    ${fontStyle}
    font-size: 18px;
    font-weight: 500;
  }
`;

export const BattleButton = styled.button`
  width: 132px;
  height: 48px;
  border-radius: 10px;
  background: #476fe7;
  border: none;
  cursor: pointer;

  ${fontStyle};
  color: #fff;
  font-size: 22px;
  font-weight: 500;
`;
