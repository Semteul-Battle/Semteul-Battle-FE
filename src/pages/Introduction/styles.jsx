import styled, { css } from 'styled-components';
import bg from '@assets/soongsil2.jpg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 400;
`;

export const ImgWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const BackgroundContainer = styled.div`
  justify-content: center;
  width: 100%;
  height: 100%; /* 화면 전체 높이로 설정 */
  background-image: url(${bg});
  background-size: cover; /* 이미지를 화면에 꽉 채우도록 설정 */
  background-position: center; /* 이미지를 가운데 정렬 */
  opacity: 0.4;
`;

export const Text = styled.p`
  display: flex;
  justify-content: center;
  ${fontStyled}
  opacity: 1;
`;

export const Title = styled(Text)`
  font-size: 28px;
`;
