import styled, { css } from 'styled-components';

const fontStyle = css`
  color: #000;
  font-family: NanumSquare Neo variable;
`;

export const HeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 68px;

  > h3 {
    ${fontStyle};
    font-size: 30px;
    font-weight: 700;
  }
`;

export const BattleBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`;
