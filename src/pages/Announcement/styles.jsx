import styled, { css } from 'styled-components';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
`;

export const AnnouncementWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 80px 360px 0;
  padding-bottom: 4px;
  border-bottom: solid 1.5px;
  //background-color: yellow;
`;

export const HeaderTitle = styled.div`
  //background-color: aqua;
  margin-left: 20px;
  display: flex;
  align-items: center;
  ${fontStyled};
`;

export const HeaderWriter = styled.div`
  margin: 0 12px;
  ${fontStyled};
`;

export const HeaderDate = styled.div`
  ${fontStyled};
`;

export const AnnouncementBody = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 360px;
`;

export const AnnouncementBlock = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px;
  border-bottom: solid 1.5px;
`;

export const AnnouncementTitle = styled.div`
  //background-color: yellow;
  display: flex;
  ${fontStyled};
  font-size: 16px;
`;

export const AnnouncementWriter = styled.div`
  display: flex;
  //background-color: aliceblue;
  ${fontStyled};
  font-size: 16px;
`;

export const AnnouncementDate = styled.div`
  display: flex;
  //background-color: aqua;
  ${fontStyled};
  font-size: 16px;
`;

export const RightBox = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
`;

export const RightHeaderBox = styled.div`
  display: flex;
  width: 160px;
  justify-content: space-between;
  padding: 0 24px;
`;

export const PageMenu = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 60px;
  //background-color: yellow;
`;

export const Styledbutton = styled.button`
  margin: 4px;
  border: none;
  background: transparent;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;
