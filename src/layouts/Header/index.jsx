import React from 'react';
import {
  HeaderWrapper,
  LoginWrapper,
  MainLogo,
  MainLogoWrapper,
  MenuWrapper,
  MenuBar,
  MenuItem,
  LoginItem,
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <MenuWrapper>
        <MainLogoWrapper>
          <MainLogo to='/'>셈틀 배틀</MainLogo>
        </MainLogoWrapper>
        <MenuBar>
          <MenuItem to='/battle'>대회</MenuItem>
          <MenuItem to='/announcement'>공지</MenuItem>
          <MenuItem to='/qa'>질문</MenuItem>
          <MenuItem to='/introduction'>소개</MenuItem>
        </MenuBar>
      </MenuWrapper>
      <LoginWrapper>
        <LoginItem to='/login'>로그인</LoginItem>
        <LoginItem to='/signup'>회원가입</LoginItem>
      </LoginWrapper>
    </HeaderWrapper>
  );
};

export default Header;
