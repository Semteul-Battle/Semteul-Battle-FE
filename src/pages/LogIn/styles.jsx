import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IDIcon } from '@assets/IDIcon.svg';
import { ReactComponent as PasswordIcon } from '@assets/PasswordIcon.svg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 300;
`;

export const LogInWrapper = styled.div`
  display: flex;
  justify-content: center;
  //background-color: pink;
  flex-direction: column;

  width: 40%;
  margin: 0 auto;
`;

export const LogInTitle = styled.div`
  ${fontStyled};
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 100px;
  margin-bottom: 80px;
  //background-color: yellow;
`;

export const LogInId = styled.div`
  display: flex;
  align-items: center;
  width: 310px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const StyleIDIcon = styled(IDIcon)`
  margin: 12px;
`;

export const Bar = styled.div`
  width: 1px;
  height: 16px;
  background: #000;
`;

export const LoginInput = styled.input`
  margin-left: 12px;
  border: none;
  width: 240px;
  background: none;
  ${fontStyled}
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }
`;

export const LogInpassword = styled.div`
  display: flex;

  align-items: center;
  width: 310px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const StylePasswordIcon = styled(PasswordIcon)`
  margin: 12px;
`;

export const OptionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 310px;
  height: 20px;
  margin: 0 auto;

  //background-color: yellow;
  position: relative;
`;

export const SaveId = styled.div`
  ${fontStyled}
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
`;

export const SaveIdCheck = styled.input`
  width: 13px;
  height: 13px;
  margin-left: 4px;

  border: 1px solid #000;
  border-radius: 3px;
  background-color: #fff;
`;

export const RightWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Membership = styled(NavLink)`
  ${fontStyled}
  text-align: center;
  font-size: 12px;
  font-weight: 400;

  background-color: #fff;
  border: none;
  padding: 4px;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const FindPassword = styled(NavLink)`
  ${fontStyled}
  text-align: center;
  font-size: 12px;
  font-weight: 400;

  background-color: #fff;
  border: none;

  padding: 0;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  border: none;
  margin: 60px auto;

  ${fontStyled}
  font-size: 18px;
  color: #fff;

  width: 200px;
  height: 40px;
  flex-shrink: 0;

  background-color: #404040;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  &:hover {
    cursor: pointer;
  }
`;

export const IdPasswordError = styled.p`
  position: absolute;
  top: 12px;
  right: 0px;
  color: #f00;
  text-align: center;
  font-family: 'NanumSquare Neo variable';
  font-size: 10px;
`;
