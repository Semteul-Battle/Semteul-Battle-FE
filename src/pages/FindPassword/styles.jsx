import styled, { css } from 'styled-components';
import { ReactComponent as EmailIcon } from '@assets/EmailIcon.svg';
import { ReactComponent as KeyIcon } from '@assets/KeyIcon.svg';
import { ReactComponent as LockIcon } from '@assets/LockIcon.svg';
import { ReactComponent as IDIcon } from '@assets/IDIcon.svg';

const fontStyled = css`
  color: #000;
  font-family: NanumSquare Neo variable;
  font-size: 20px;
  font-weight: 300;
`;

export const FindPasswordWrapper = styled.div`
  display: flex;
  //background-color: pink;
  flex-direction: column;

  width: 320px;
  margin: 0 auto;
`;

export const FindPasswordTitle = styled.div`
  ${fontStyled};
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 40px;
  margin-bottom: 50px;
`;

export const EmailBox = styled.input`
  display: flex;
  justify-content: center;

  margin-left: 4px;
  margin-bottom: 4px;
  border: none;
  width: 200px;
  background: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b0b0b0;
  }
`;

export const EmailWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;
  border-color: ${(props) => props.color};

  margin: 0 auto;
  margin-bottom: 2px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  //background-color: yellow;
`;

export const StyleEmailIcon = styled(EmailIcon)`
  width: 16px;
  height: 16px;
  margin: 12px;

  & path {
    fill: ${(props) => props.color};
  }
`;

export const StyleIdIcon = styled(IDIcon)`
  width: 16px;
  height: 16px;
  margin: 12px;

  & path {
    fill: ${(props) => props.color};
  }
`;

export const StyleKeyIcon = styled(KeyIcon)`
  width: 16px;
  height: 16px;
  margin: 12px;

  & path {
    fill: ${(props) => props.color};
  }
`;

export const StyleLockIcon = styled(LockIcon)`
  width: 16px;
  height: 16px;
  margin: 12px;

  & path {
    fill: ${(props) => props.color};
  }
`;

export const Bar = styled.div`
  width: 0.5px;
  height: 16px;
  background: ${(props) => props.color};
`;

export const SendButton = styled.button`
  ${fontStyled}
  font-size: 15px;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const LineWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  position: relative;
`;

export const KeynumberWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 240px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;
  border-color: ${(props) => props.color};

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const KeynumberBox = styled.input`
  display: flex;
  justify-content: center;
  margin-left: 4px;

  border: none;
  width: 200px;
  background: none;
  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b0b0b0;
  }
`;

export const CheckButton = styled.button`
  ${fontStyled}
  font-size: 15px;
  font-weight: 400;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 70px;
  height: 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const CenterBar = styled.div`
  margin: 44px auto;
  margin-bottom: 60px;

  width: 180px;
  height: 1px;

  background: #000;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
`;

export const NewPasswordWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 312px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;
  border-color: ${(props) => props.color};

  margin: 0 auto;
  margin-bottom: 18px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);

  position: relative;
`;

export const PasswordError = styled.p`
  position: absolute;
  top: 96px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const NewPasswordBox = styled.input`
  display: flex;
  justify-content: center;

  width: 310px;
  margin-left: 4px;
  border: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }
`;

export const RePasswordWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 312px;
  height: 40px;

  border-radius: 3px;
  border: 1px solid #000;
  border-color: ${(props) => props.color};

  margin: 0 auto;
  margin-bottom: 10px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
`;

export const RePasswordBox = styled.input`
  display: flex;
  justify-content: center;

  width: 229px;
  margin-left: 4px;
  border: none;

  ${fontStyled}
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.25px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #726c6c;
  }

  //background-color: yellow;
`;

export const RePasswordButton = styled.button`
  ${fontStyled}
  font-size: 16px;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 180px;
  height: 40px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  margin: 48px auto;

  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
  }
`;

export const EmailError = styled.p`
  position: absolute;
  top: 34px;
  right: 0px;
  color: #f00;
  text-align: center;
  text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  font-size: 10px;
`;

export const KeynumberError = styled(EmailError)`
  top: 34px;
`;
