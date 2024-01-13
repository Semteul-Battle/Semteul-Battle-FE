import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 72px;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MainLogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 160px;
  margin: 0 48px 0 12px;
`;

const fontStyle = css`
  color: #000;
  text-align: center;
  font-family: NanumSquare Neo variable;
  font-weight: 300;
`;

export const MainLogo = styled(NavLink)`
  text-decoration: none;
  ${fontStyle};
  font-size: 32px;
  font-weight: 700;
`;

export const MenuBar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const MenuItem = styled(NavLink)`
  text-decoration: none;
  box-sizing: content-box;
  ${fontStyle};
  font-size: 24px;
  margin: 0 36px;
`;

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 12px;
`;

export const LoginItem = styled(NavLink)`
  text-decoration: none;
  ${fontStyle}
  font-size: 16px;
  margin-left: 32px;
`;
